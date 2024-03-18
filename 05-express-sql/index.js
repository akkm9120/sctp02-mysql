const express = require("express");
const hbs = require("hbs");
const wax = require("wax-on");
require("dotend").config();

const app =express();

app.use(expressstatic("public"));

wax.on(hbs.handlebars)