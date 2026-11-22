import AppLayout from "@/layouts/app-layout";
import { Post } from "@/types";
import { Link } from "@inertiajs/react";
import React from "react";

interface PostsShowProps {
    post: Post;
}

export default function PostShow({ post }: PostsShowProps) {
    return (
        <AppLayout>
            <h1 className="text-xl font-semibold mb-2">{post.title}</h1>
            <p className="text-sm text-gray-500 mb-2">By {post.user.name}</p>
            <p className="text-gray-600">{post.body}</p>
        </AppLayout>
    );
}
