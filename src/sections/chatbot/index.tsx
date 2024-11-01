"use client";

import { ArcwareInit } from "@arcware-cloud/pixelstreaming-websdk";

import React, { useState, useRef, useEffect } from "react";

export default function ChatbotView() {
    const videoContainerRef = useRef(null);
    const [arcwareApplication, setArcwareApplication] = useState(null);
    const [applicationResponse, setApplicationResponse] = useState("");

    const handleSendCommand = (descriptor) => {
        arcwareApplication?.emitUIInteraction(descriptor);
    };

    useEffect(() => {
        const { Config, PixelStreaming, Application } = ArcwareInit(
            {
                shareId: "share-5b34bbc5-6211-45cd-b0d8-f7b0c32a7a9d"
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