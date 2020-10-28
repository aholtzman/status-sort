import clear from "clear";
import parseArgumentsIntoOptions from "../lib/options";
import promptForMissingOptions from "../lib/questions";
import helpCommands from "../lib/help_commands";
import shuffle from "../lib/shuffle";

// eslint-disable-next-line
export async function cli(args) {
  let options = parseArgumentsIntoOptions(args);

  if (options.help) {
    helpCommands();
    process.exit();
  }

  options = await promptForMissingOptions(options);
  clear();
  // eslint-disable-next-line
  console.table(shuffle(options.people));
}
