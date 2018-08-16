#!/usr/bin/env node

var LeeKloudPlay = require("./LeeModule/main.js");

LeeKloudPlay.dirname = "LeeKloudData";

LeeKloudPlay.folders.__dirname = process.cwd();

LeeKloudPlay.domain();
