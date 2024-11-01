"use client";

import React, { useRef, useEffect, useState } from 'react';
import { WebRTCClient } from '@arcware/webrtc-plugin';

export default function Chatbot2() {
    const sizeContainerRef = useRef(null);
    const videoContainerRef = useRef(null);
    const videoRef = useRef(null);
    const audioRef = useRef(null);
    const [webRTCclient, setWebRTCclient] = useState(null);
    const [unrealApplicationResponse, setUnrealApplicationResponse] = useState<string>("");


    useEffect(() => {
        const newWebRTC = new WebRTCClient({
            address: 'wss://signalling-client.ragnarok.arcware.cloud/',
            shareId: 'share-79f09605-3edc-4fa8-b5b9-49a7a3a5f25b',
            settings: { /* object with settings */ },
            playOverlay: false,
            loader: (val) => { /* handle loader */ },
            applicationResponse: (response) => {
                setUnrealApplicationResponse(response);
            },
            sizeContainer: sizeContainerRef.current,
            container: videoContainerRef.current,
            videoRef: videoRef.current,
            audioRef: audioRef.current
        });
        setWebRTCclient(newWebRTC);
    }, []);

    console.log('unrealApplicationResponse', unrealApplicationResponse);

    return (
        <div ref={sizeContainerRef}>
            <div ref={videoContainerRef}>
                <video ref={videoRef} />
                <audio ref={audioRef} />
            </div>
        </div>
    );
};