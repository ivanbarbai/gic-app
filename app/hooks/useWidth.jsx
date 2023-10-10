'use cient';
import React, { useState, useEffect } from "react";

export const useWidth = () => {
    const [width, setWidth] = useState(typeof window !== "undefined" && window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    })
    return width;

};
