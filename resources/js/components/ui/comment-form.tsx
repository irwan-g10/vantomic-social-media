import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./card";
import { Form } from "@inertiajs/react";
import { Input } from "./input";
import { Textarea } from "./textarea";
import InputError from "../input-error";
import { Button } from "./button";

interface ComentFormProps {
    postId: number;
}

export default function CommentForm({ postId }: ComentFormProps) {
    return (
        <Card className="rounded-none">
            <CardHeader>
                <CardTitle> Add Comment</CardTitle>
                <CardDescription>
                    Share your thoughts about this post
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form action="/comments" method="post" className="space-y-4">
                    {({ errors }) => (
                        <>
                            <Input
                                type="hidden"
                                name="post_id"
                                value={postId}
                            />
                            <div className="space-y-1">
                                <Textarea
                                    id="body"
                                    name="body"
                                    placeholder="Write your comment here..."
                                    aria-invalid={!!errors.body}
                                />
                                <InputError message={errors.body} />
                            </div>
                            <Button type="submit">Add Comment</Button>
                        </>
                    )}
                </Form>
            </CardContent>
        </Card>
    );
}
