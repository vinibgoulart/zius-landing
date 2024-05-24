import { CodeSnippet } from "../ui/code-snippet";

const HandleErrors = () => {
  return (
    <>
      <h2 className="text-5xl font-bold gradient-primary-to-tertiary">
        Handling Errors
      </h2>
      <div className="flex flex-col gap-4 w-full">
        <p className="text-base">
          You can handle the errors returned by the validation function, you can
          handle all errors at once or each one individually.
        </p>
        <CodeSnippet>
          <div>
            <span className="snippet-declaration">func</span>{" "}
            <span className="snippet-function">main</span>
            <span className="snippet-brackets">()</span>{" "}
            <span className="snippet-brackets">{"{"}</span>
          </div>
          <div>
            &nbsp;errors, err := zius.
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
        <p>
          The <span className="gradient-primary-to-tertiary">Validate</span>{" "}
          function returns an array of errors and an error, you can check if the
          error is not nil and handle it.
        </p>
        <p>The error contains the following fields:</p>
        <CodeSnippet>
          <div>
            <span className="snippet-declaration">type</span> <span>Error</span>{" "}
            <span className="snippet-declaration">struct</span>{" "}
            <span className="snippet-brackets">{"{"}</span>
          </div>
          <div>
            &nbsp;Struct <span className="snippet-declaration">string</span>
          </div>
          <div>
            &nbsp;Field <span className="snippet-declaration">string</span>
          </div>
          <div>
            &nbsp;Error <span className="snippet-declaration">error</span>
          </div>
          <div>
            <span className="snippet-brackets">{"}"}</span>
          </div>
        </CodeSnippet>
      </div>
    </>
  );
};

export { HandleErrors };
