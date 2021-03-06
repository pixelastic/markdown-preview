#!/usr/bin/env node
/* eslint-disable import/no-commonjs */
const path = require('path');
const fs = require('fs');
const Markdown = require('markdown-it');
const childProcess = require('child_process');

const inputFile = path.resolve(process.argv[2]);
const templateFile = path.join(__dirname, '../template.html');
const template = fs.readFileSync(templateFile, 'utf-8');
const input = fs.readFileSync(inputFile, 'utf-8');

const html = new Markdown().render(input);

const output = template.replace('{{MARKDOWN_CONTENT}}', html);

fs.writeFileSync('/tmp/markdown-preview.html', output);

childProcess.exec('google-chrome /tmp/markdown-preview.html');
/* eslint-disable import/no-commonjs */
