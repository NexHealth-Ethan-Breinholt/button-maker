"use client";

import { useButtonContext } from "./button-context";

export default function ButtonVisual() {
    const { buttonData } = useButtonContext();

    const label = buttonData["label"] ?? "";
    const color = buttonData["color"] ?? "#000000";
    const fontWeight = buttonData["bold"] ? "bold" : "normal";
    const fontStyle = buttonData["italic"] ? "italic" : "normal";
    const fontSize = buttonData["use-font-size"] ? buttonData["font-size"] ?? "16px" : "";
    const backgroundColor = buttonData["use-bg-color"] ? buttonData["bg-color"] ?? "transparent" : "transparent";
    const paddingInline = buttonData["x-padding"] ?? 0;
    const paddingBlock = buttonData["y-padding"] ?? 0;
    const borderRadius = buttonData["border-radius"] ?? 0;
    const borderValues = [
        "solid",
        buttonData["border-color"],
        buttonData["border-thickness"],
    ]
    const border = buttonData["use-border"] ? borderValues.join(" ") : "none";

    return (
        <button className="font-bold cursor-pointer" style={{
            color,
            fontWeight,
            fontStyle,
            fontSize,
            backgroundColor,
            border,
            paddingInline,
            paddingBlock,
            borderRadius,
        }}>{label}</button>
    )
}