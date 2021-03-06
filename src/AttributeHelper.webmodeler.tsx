import { Component, ReactNode, createElement } from "react";
import { AttributeHelperPreviewProps } from "../typings/AttributeHelperProps";

declare function require(name: string): string;

export class preview extends Component<AttributeHelperPreviewProps> {
    render(): ReactNode {
        return <div>No preview available</div>;
    }
}

export function getPreviewCss(): string {
    return require("./ui/AttributeHelper.css");
}
