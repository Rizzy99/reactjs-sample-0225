"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import TaskList from "./TaskList";
import ProfileIcon from "./ProfileIcon";

export default function Dashboard() {
    const router = useRouter();
    
    // Define user type explicitly as string or null
    const [user, setUser] = useState<string | null>(null);

    useEffect(() => {
        const loggedInUser = localStorage.getItem("loggedInUser");
        
        // If there's no loggedInUser in localStorage, push to login
        if (!loggedInUser) {
            router.push("/auth/login");
        } else {
            // Set user as the logged in user if found
            setUser(loggedInUser);
        }
    }, [router]);

    return (
        <div className="p-4">
            <div className="flex justify-between items-center bg-blue-900 p-4 rounded-lg text-white">
                <h2 className="text-xl font-bold">TasksBoard</h2>
                <ProfileIcon />
            </div>
            {user ? (
                <div className="mt-4 text-white">
                    <h3>Welcome back, {user}</h3>
                </div>
            ) : null}
            <TaskList />
        </div>
    );
}

