import { Comment } from "@/types";
import React from "react";
import CommentCard from "./ui/comment-card";
import LoadingCard from "./loading-card";
interface CommentListProps {
    comments: Comment[];
}
export default function CommentList({ comments }: CommentListProps) {
    if (!comments || comments.length === 0) {
        return <LoadingCard message="Loading comments ..." />;
    }

    return (
        <div className="space-y-6">
            {comments.map((comment) => (
                <CommentCard key={comment.id} comment={comment} />
            ))}
        </div>
    );
}
