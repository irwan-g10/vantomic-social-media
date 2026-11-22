import { cn } from "@/lib/utils";
import React from "react";
interface InputErrorProps extends React.HTMLAttributes<HTMLParagraphElement> {
    message?: string;
}

export default function InputError({
    message,
    className,
    ...props
}: InputErrorProps) {
    if (!message) return null;
    return (
        <p className={cn("text-red-500 text-sm mt-1")} {...props}>
            {message}
        </p>
    );
}
