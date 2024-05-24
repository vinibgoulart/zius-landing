import { CodeSnippet } from "../ui/code-snippet";

const ErrorsMessage = () => {
  return (
    <>
      <div className="space-y-3 z-10">
        <h2 className="text-7xl font-bold">
          <span className="gradient-primary-to-tertiary">Custom Messages</span>
        </h2>
        <p className="text-base text-muted-foreground">
          Define custom messages for each field in your struct
        </p>
      </div>
      <div className="h-full content-center">
        <CodeSnippet>
          <div>
            <span className="snippet-declaration">type</span>{" "}
            <span>Simple</span>{" "}
            <span className="snippet-declaration">struct</span>{" "}
            <span className="snippet-brackets">{"{"}</span>
          </div>
          <div>
            &nbsp;Name <span className="snippet-declaration">string</span>{" "}
            <span className="snippet-string">
              `zius:&quot;required:Name is required,string&quot;`
            </span>
          </div>
          <div>
            &nbsp;Age <span className="snippet-declaration">string</span>{" "}
            <span className="snippet-string">
              `zius:&quot;required:Age is required,int&quot;`
            </span>
          </div>
          <div>
            <span className="snippet-brackets">{"}"}</span>
          </div>
        </CodeSnippet>
      </div>
    </>
  );
};

export { ErrorsMessage };
