import { CodeSnippet } from "../ui/code-snippet";
import { Progress } from "../ui/progress";

const Benchmarks = () => {
  return (
    <>
      <h2 className="text-5xl font-bold gradient-primary-to-tertiary">
        Benchmarks
      </h2>
      <div className="flex flex-col gap-4 w-full">
        <p className="text-base">
          This benchmark was made validating a struct with 3 fields, check the
          example in zius:
        </p>
        <CodeSnippet>
          <div>
            <span className="snippet-declaration">type</span>{" "}
            <span>Person</span>{" "}
            <span className="snippet-declaration">struct</span>{" "}
            <span className="snippet-brackets">{"{"}</span>
          </div>
          <div>
            &nbsp;Name <span className="snippet-declaration">string</span>{" "}
            <span className="snippet-string">
              `zius:&quot;required:Name is required&quot;`
            </span>
          </div>
          <div>
            &nbsp;Age <span className="snippet-declaration">int</span>{" "}
            <span className="snippet-string">
              `zius:&quot;required:Age is required&quot;`
            </span>
          </div>
          <div>
            &nbsp;Email <span className="snippet-declaration">string</span>{" "}
            <span className="snippet-string">
              `zius:&quot;required:Email is required,email&quot;`
            </span>
          </div>
          <div>
            <span className="snippet-brackets">{"}"}</span>
          </div>
        </CodeSnippet>
        <p className="gradient-primary-to-tertiary">Zius</p>
        <Progress value={80} className="w-full" />
      </div>
    </>
  );
};

export { Benchmarks };
