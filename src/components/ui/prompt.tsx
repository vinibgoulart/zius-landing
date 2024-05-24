import { useClipboard } from "@/hooks/use-clipboard";
import { ClipboardCopy } from "lucide-react";

export interface PromptProps {
  children: React.ReactNode;
  copyMessage: string;
}

const Prompt = ({ children, copyMessage }: PromptProps) => {
  const { copyToClipboard } = useClipboard();

  return (
    <code className="text-sm sm:text-base inline-flex text-left items-center space-x-4 rounded-lg p-4 pl-6 border border-input w-full justify-between">
      <span className="flex gap-4">
        <span className="shrink-0 text-muted-foreground">$</span>
        <span className="flex-1">{children}</span>
      </span>
      <ClipboardCopy
        className="h-4 w-4"
        color="#a8a29f"
        style={{ cursor: "pointer" }}
        onClick={async () => await copyToClipboard(copyMessage)}
      />
    </code>
  );
};

Prompt.displayName = "Prompt";

export { Prompt };
