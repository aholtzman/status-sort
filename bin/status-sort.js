#!/usr/bin/env node

// eslint-disable-next-line
require = require("esm")(module /*, options*/);
require("../src/cli").cli(process.argv);
