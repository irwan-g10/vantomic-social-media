import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import CommentCard from "@/components/ui/comment-card";
import CommentForm from "@/components/ui/comment-form";
import AppLayout from "@/layouts/app-layout";
import { Comment, Post } from "@/types";
import { Deferred, Link } from "@inertiajs/react";
import React from "react";

interface PostsShowProps {
    post: Post;
    comments: Comment[];
}

export default function PostShow({ post, comments }: PostsShowProps) {
    return (
        <AppLayout>
            <div className="space-y-6">
                <Card className="rounded-none">
                    <CardHeader>
                        <CardTitle className="tet-2xl">{post.title}</CardTitle>
                        <CardDescription>
                            By {post.user.name} on{" "}
                            {new Date(post.created_at).toLocaleDateString()}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-700 whitespace-pre-wrap">
                            {post.body}
                        </p>
                    </CardContent>
                </Card>
                <CommentForm postId={post.id} />
                <Deferred
                    data="comments"
                    fallback={
                        <div className="text-center py-8">
                            <p className="text-gray-500">
                                Loading comments ...
                            </p>
                        </div>
                    }
                >
                    {comments && comments.length > 0 ? (
                        <div>
                            {comments.map((comment) => (
                                <CommentCard
                                    key={comment.id}
                                    comment={comment}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-8">
                            <p className="text-gray-500">No comments yet.</p>
                        </div>
                    )}
                </Deferred>
            </div>
        </AppLayout>
    );
}
