import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/ProfileIcon.module.css";

const ProfileIcon = () => {
    const [profilePic, setProfilePic] = useState("");

    useEffect(() => {
        const randomId = Math.floor(Math.random() * 999);
        setProfilePic(`https://picsum.photos/id/${randomId}/100`);
    }, []);

    return (
        <Image
            className={styles.profileIcon}
            src={profilePic}
            alt="Profile"
            width={40}
            height={40}
            priority
        />
    );
};

export default ProfileIcon;

