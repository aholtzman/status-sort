import arg from "arg";

export default function parseArgumentsIntoOptions(rawArgs) {
  const args = arg(
    {
      "--yes": Boolean,
      "--help": Boolean,
      "-y": "--yes",
      "-h": "--help",
    },
    {
      argv: rawArgs.slice(2),
    }
  );

  return {
    skipPrompts: args["--yes"] || false,
    help: args["--help"] || false,
  };
}
