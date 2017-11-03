# markdown-preview

Renders a preview of a markdown text in your browser. It uses styling similar to
GitHub.

## Usage

```sh
$ markdown-preview ./readme.md
```

![Preview](./screenshot.png)

## Installation

Install globally with `yarn global add @pixelastic/markdown-preview`

## Limitations

- Uses a hard-coded `/tmp/` to store the HTML file
- Uses a hard-coded `google-chrome` to open the file
- Does not handle local images

