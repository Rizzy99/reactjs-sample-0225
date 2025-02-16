"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSignup = () => {
        localStorage.setItem(email, JSON.stringify({ username, email, password }));
        alert("Account created! You can now log in.");
        router.push("/auth/login");
    };

    return (
        <div>
            <h2>Sign up</h2>
            <input placeholder="Enter Name" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input placeholder="Email Address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="Enter Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSignup}>Sign up</button>
        </div>
    );
}


