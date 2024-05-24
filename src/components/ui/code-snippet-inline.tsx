export interface CodeSnippetProps {
  children: React.ReactNode;
}

const CodeSnippetInline = ({ children }: CodeSnippetProps) => {
  return (
    <code className="bg-secondary p-1.5 rounded-lg">
      <span className="text-white text-xs">{children}</span>
    </code>
  );
};

CodeSnippetInline.displayName = "CodeSnippetInline";

export { CodeSnippetInline };
