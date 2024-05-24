export interface CodeSnippetProps {
  children: React.ReactNode;
}

const CodeSnippet = ({ children }: CodeSnippetProps) => {
  return (
    <code className="text-sm sm:text-sm inline-flex text-left items-center space-x-4 rounded-lg p-4 pl-6 border border-input w-full justify-between">
      <span className="flex gap-4">
        <span className="flex-1">{children}</span>
      </span>
    </code>
  );
};

CodeSnippet.displayName = "CodeSnippet";

export { CodeSnippet };
