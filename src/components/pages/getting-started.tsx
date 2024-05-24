import { CodeSnippet } from "../ui/code-snippet";
import { Prompt } from "../ui/prompt";

const GettingStarted = () => {
  return (
    <>
      <h2 className="text-5xl font-bold gradient-primary-to-tertiary">
        Getting Started
      </h2>
      <div className="flex flex-col gap-4 w-full">
        <p className="text-base">
          Install <span className="gradient-primary-to-tertiary">zius</span>{" "}
          using Go Modules:
        </p>
        <Prompt copyMessage="go get github.com/vinibgoulart/zius">
          <span>go get</span>{" "}
          <span className="gradient-primary-to-tertiary">
            github.com/vinibgoulart/zius
          </span>
        </Prompt>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <p className="text-base">
          Import the <span className="gradient-primary-to-tertiary">zius</span>{" "}
          in your project:
        </p>
        <CodeSnippet>
          <div>
            <span className="snippet-declaration">import</span>{" "}
            <span className="snippet-brackets">(</span>
          </div>
          <div>
            &nbsp;zius{" "}
            <span className="snippet-string">
              &quot;github.com/vinibgoulart/zius&quot;
            </span>
          </div>
          <div>
            <span className="snippet-brackets">)</span>
          </div>
        </CodeSnippet>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <p className="text-base">
          Define <span className="gradient-primary-to-tertiary">zius</span> in
          your Struct:
        </p>
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
            <span className="snippet-brackets">{"}"}</span>
          </div>
        </CodeSnippet>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <p className="text-base">Start to validate your structs:</p>
        <CodeSnippet>
          <div>
            <span className="snippet-declaration">func</span>{" "}
            <span className="snippet-function">main</span>
            <span className="snippet-brackets">()</span>{" "}
            <span className="snippet-brackets">{"{"}</span>
          </div>
          <div>
            &nbsp;_, err := zius.
            <span className="snippet-function">Validate</span>
            <span className="snippet-brackets">(</span>
            <span>Simple</span>
            <span className="snippet-brackets">{"{"}</span>{" "}
            <span>Name: &quot;Vinicius&quot;</span>{" "}
            <span className="snippet-brackets">{"}"}</span>
            <span className="snippet-brackets">)</span>
          </div>
          <div>
            <span className="snippet-brackets">{"}"}</span>
          </div>
        </CodeSnippet>
      </div>
    </>
  );
};

export { GettingStarted };
