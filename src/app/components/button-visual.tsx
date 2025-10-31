"use client";

import { useButtonContext } from "./button-context";

export default function ButtonVisual() {
    const { buttonData } = useButtonContext();

    const backgroundColor = buttonData["bg-color"] ?? "transparent";

    return (
        <button className="px-8 py-4 rounded-full font-bold cursor-pointer" style={{
            backgroundColor,
        }}>Book Online</button>
    )
}