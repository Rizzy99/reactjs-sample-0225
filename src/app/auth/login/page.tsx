"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = () => {
        const user = JSON.parse(localStorage.getItem(email) || "{}");
        if (user.password === password) {
            localStorage.setItem("loggedInUser", email);
            router.push("/dashboard");
        } else {
            alert("Invalid credentials!");
        }
    };

    return (
        <div>
            <h2>Log in</h2>
            <input placeholder="Email Address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Log in</button>
        </div>
    );
}


