"use client";

import { ArcwareInit } from "@arcware-cloud/pixelstreaming-websdk";
import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";

export default function ChatbotView() {
    const videoContainerRef = useRef(null);
    const [arcwareApplication, setArcwareApplication] = useState(null);
    const [applicationResponse, setApplicationResponse] = useState("");

    const router = useRouter();

    const handleSendCommand = (descriptor) => {
        arcwareApplication?.emitUIInteraction(descriptor);
    };

    useEffect(() => {
        const { Config, PixelStreaming, Application } = ArcwareInit(
            {
                shareId: "share-79f09605-3edc-4fa8-b5b9-49a7a3a5f25b"
            },
            {
                initialSettings: {
                    StartVideoMuted: false,
                    AutoConnect: true,
                    AutoPlayVideo: true
                },
                settings: {
                    infoButton: true,
                    micButton: true,
                    audioButton: true,
                    fullscreenButton: true,
                    settingsButton: true,
                    connectionStrengthIcon: true
                },
            }
        );

        setArcwareApplication(Application);
        Application.getApplicationResponse((response) => {
            console.log("response", response);
            setApplicationResponse(response);
        });

        // Append the application's root element to the video container ref
        if (videoContainerRef?.current) {
            console.log("appendChild");
            videoContainerRef.current.appendChild(Application.rootElement);
        }
    }, []);

    const handleSendMessage = () => {
        handleSendCommand({ cameraswitch: "head" })
        handleSendCommand({ usermessege: "hi, how are you?" });
    };

    // console.log("applicationResponse", applicationResponse);

    return (
        <div>
            <div
                ref={videoContainerRef}
                style={{ width: "100vw", height: "100vh" }}
            />
            <button
                className="bg-blue-500 text-white p-2 rounded-md"
                onClick={() => router.push("/")}
            >
                Back
            </button>
            <button
                style={{
                    position: "absolute",
                    right: "100px",
                    bottom: 20,
                    margin: "auto",
                    zIndex: 9,
                    width: "200px",
                }}
                onClick={handleSendMessage}
            >
                Emit command to Unreal
            </button>
        </div>
    );
}