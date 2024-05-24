"use client";

import { useToast } from "@/components/ui/use-toast";

const useClipboard = () => {
  const { toast } = useToast();

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied to clipboard!",
      });
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return { copyToClipboard };
};

export { useClipboard };
