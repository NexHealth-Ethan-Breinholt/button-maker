"use client";

import { useButtonContext } from "./button-context";

export default function ButtonVisual() {
    const { buttonData } = useButtonContext();

    const label = buttonData["label"] ?? "";
    const color = buttonData["color"] ?? "#000000";
    const backgroundColor = buttonData["use-bg-color"] ? buttonData["bg-color"] ?? "transparent" : "transparent";
    const borderValues = [
        "solid",
        buttonData["border-color"],
        buttonData["border-thickness"],
    ]
    const border = buttonData["use-border"] ? borderValues.join(" ") : "none";

    return (
        <button className="px-8 py-4 rounded-full font-bold cursor-pointer" style={{
            color,
            backgroundColor,
            border,
        }}>{label}</button>
    )
}