import chalk from "chalk";
import clear from "clear";

export default function helpCommands() {
  clear();
  // eslint-disable-next-line
  console.log(`
-------------------------------------------------------
Flags:
--help       print out flags and commands
-h
--yes        skip prompts and use default values
-y
-------------------------------------------------------

${chalk.blue(
  `To print out a random order of the whole group run with the --yes or -y flag.`
)} \n
${chalk.green(
  `If selecting by the propmpt:\n \nPress <space> to select an choice that is highlighted`
)} \n
${chalk.green(`Press <a> to toggle all`)} \n
${chalk.green(
  `Press <i> to invert selection (IE only Adam is out, use the space bar to select Adam then press <i> to check all but Adam.)`
)}
`);
}
