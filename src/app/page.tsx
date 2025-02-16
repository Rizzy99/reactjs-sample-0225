import Link from "next/link";

export default function Home() {
    return (
        <main>
            <h1>Task Board App</h1>
            <p>Your sustainable fashion rental platform.</p>
            
            {/* Add Login and Signup Buttons */}
            <div style={{ marginTop: "20px" }}>
                <Link href="/auth/login">
                    <button>Log in</button>
                </Link>
                <Link href="/auth/signup">
                    <button>Sign up</button>
                </Link>
            </div>
        </main>
    );
}

