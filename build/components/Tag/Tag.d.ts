/// <reference types="react" />
import { RemovableTagProps } from "@atlaskit/tag/dist/types/tag/internal/removable";
import "./index.scss";
export interface TagsProps extends Omit<RemovableTagProps, "color"> {
    dataQa: string | null;
}
export declare const Tag: ({ ...props }: TagsProps) => JSX.Element;
