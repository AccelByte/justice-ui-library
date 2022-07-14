/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 *
 */

import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import postcssurl from "postcss-url";
import { terser } from "rollup-plugin-terser";
import multiInput from "rollup-plugin-multi-input";
import replace from "@rollup/plugin-replace";
import fs from "fs";
import path from "path";

function findFilesInDirectory(startPath, fileExtensionFilters, forbiddenExtensions) {
  let results = [];
  if (!fs.existsSync(startPath)) {
    return;
  }

  const files = fs.readdirSync(startPath);
  for (const file of files) {
    const filename = path.join(startPath, file);
    const stat = fs.lstatSync(filename);
    if (stat.isDirectory()) {
      results = results.concat(findFilesInDirectory(filename, fileExtensionFilters, forbiddenExtensions));
    } else {
      const isFilterMatched = fileExtensionFilters.some((filter) => filename.endsWith(filter));
      const isForbiddenFile = forbiddenExtensions.some((extension) => filename.endsWith(extension));

      if (!isFilterMatched || isForbiddenFile) continue;
      results.push(filename);
    }
  }
  return results;
}

export default {
  input: findFilesInDirectory("./src", [".ts", ".tsx"], [".d.ts", ".stories.tsx"]),
  output: [
    {
      dir: "build",
      format: "esm",
      assetFileNames: "[name]-[hash][extname]",
    },
  ],
  plugins: [
    peerDepsExternal(),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    resolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json", exclude: "**/*.stories.tsx" }),
    multiInput(),
    postcss({
      extract: false,
      modules: { generateScopedName: "[local]___[hash:base64:5]" },
      use: ["sass"],
      plugins: [
        postcssurl({
          url: "inline",
        }),
      ],
      minimize: {
        preset: [
          "default",
          {
            discardComments: {
              removeAll: true,
            },
          },
        ],
      },
    }),
    json({
      compact: true,
    }),
    terser({ format: { comments: false } }),
  ],
};
