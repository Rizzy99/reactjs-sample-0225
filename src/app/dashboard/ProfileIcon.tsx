"use client";

import { useEffect, useState } from "react";
import Image from 'next/image'; // Importing the Image component from next/image

export default function ProfileIcon() {
    const [profilePic, setProfilePic] = useState<string | null>(null);

    useEffect(() => {
        const randomId = Math.floor(Math.random() * 1000);
        setProfilePic(`https://picsum.photos/id/${randomId}/50`);
    }, []);

    return (
        <>
            {profilePic && (
                <Image
                    src={profilePic}
                    alt="Profile"
                    className="rounded-full"
                    width={50}  // Defining width and height
                    height={50}
                />
            )}
        </>
    );
}

