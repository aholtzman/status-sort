# Status Sort

Works from the command line to print out a random order of when each person should present their status update.

## to install

clone this repo, `cd` into the directory then run `yarn` to install dependancies

## to use

run `yarn order` to show a checklist of staff who are present, make your selections then press `return` a randomized list of the selected participants will be printed to the console.

If everyone is present, the checklist can be skipped with the `--yes` or `-y` flags in the command such as `yarn order -y`

`yarn order --help` or `yarn order -h` will print helpful hints to the console.

## keeping up to date

If you need to add, delete or change the options for selection simply change the array in the `lib/list.js` file.
