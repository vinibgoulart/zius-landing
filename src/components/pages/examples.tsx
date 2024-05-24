import Link from "next/link";

const Examples = () => {
  return (
    <>
      <h2 className="text-5xl font-bold gradient-primary-to-tertiary">
        Examples
      </h2>
      <div className="flex flex-col gap-4 w-full">
        <p>
          Check out some examples of how to use Zius our the repository.{" "}
          <Link
            href="https://github.com/vinibgoulart/zius"
            target="_blank"
            className="gradient-primary-to-tertiary"
          >
            Zius Repository
          </Link>.
        </p>
        <p>
          Feel free to contribute to the repository, suggest new features, or
          ask for help in the{" "}
          <Link
            href="https://github.com/vinibgoulart/zius/issues"
            target="_blank"
            className="gradient-primary-to-tertiary"
          >
            repository issues
          </Link>.
        </p>
      </div>
    </>
  );
};

export { Examples };
