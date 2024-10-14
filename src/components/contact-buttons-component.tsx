"use client";

import React from "react";
import { Button } from "@/components/ui/button"; // Assuming you're using ShadCN Button
import { CopyIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast"


export const ContactButtonsComponent = ({ email }: { email: string }) => {
    const { toast } = useToast(); // Use the toast hook

    // Function to copy email to clipboard
    const copyToClipboard = () => {
        navigator.clipboard.writeText(email).then(() => {
            // Trigger the toast notification after copying
            toast({
                description: "Email copied to clipboard!",
            });
        });
    };

    return (
        <div className="flex gap-4">
            {/* Hire Me button opens mail client */}
            <Button
                className="text-lg"
                onClick={() => (window.location.href = `mailto:${email}`)}
            >
                Hire Me
            </Button>

            {/* Copy Email button copies email to clipboard */}
            <Button
                variant="outline"
                className="flex gap-2 text-xs"
                onClick={copyToClipboard}
            >
                Copy Email <CopyIcon className="h-4 w-4" />
            </Button>
        </div>
    );
};

export default ContactButtonsComponent;
