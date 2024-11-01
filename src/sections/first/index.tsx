"use client";

import { ArcwareInit } from "@arcware-cloud/pixelstreaming-websdk";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function FirstView() {

    const router = useRouter();


    return (
        <div>
            <button className="bg-blue-500 text-white p-2 rounded-md" onClick={() => router.push("/avatar")}>
                Go to avatar page
            </button>
            <button className="bg-blue-500 text-white p-2 rounded-md" onClick={() => router.push("/avatar2")}>
                Go to avatar2 page
            </button>
        </div>
    );
}