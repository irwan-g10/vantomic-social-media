import AppLayout from "@/layouts/app-layout";
import { Link } from "@inertiajs/react";
import React from "react";

export default function About() {
    return (
        <AppLayout>
            <h1>About</h1>
            <p>Welcome to About Page</p>
            <Link href="/">Home</Link>
        </AppLayout>
    );
}
