import inquirer from "inquirer";
import list from "./list";

export default async function promptForMissingOptions(options) {
  if (options.skipPrompts) {
    return { people: list };
  }

  const questions = [
    {
      type: "checkbox",
      name: "people",
      message: "Who is here today?",
      choices: list,
    },
  ];

  const answers = await inquirer.prompt(questions);

  return {
    ...options,
    people: answers.people,
  };
}
