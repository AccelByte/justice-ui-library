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

import packageJson from "./package.json";

export default {
  input: "./src/index.ts",
  output: [
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
      assetFileNames: "[name]-[hash][extname]",
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json", exclude: "**/*.stories.tsx" }),
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
  ],
};
