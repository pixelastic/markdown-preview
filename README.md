# markdown-preview

Renders a preview of a markdown text in your browser.

## Usage

```sh
$ markdown-preview ./readme.md
```

![Preview](./screenshot.png)

## Installation

Install globally with `yarn global add @pixelastic/markdown-preview`

## Integration with vim

I've added the following mapping to my `after/ftplugin/markdown.vim` to see
a preview when I press `F5`.

```vim
nnoremap <silent> <buffer> <F5> :call MarkdownPreview()<CR>
function! MarkdownPreview()
  silent execute ':!nohup markdown-preview % &>/dev/null &'
  redraw!
endfunction
```

## Limitations

- Uses a hard-coded `/tmp/` to store the HTML file
- Uses a hard-coded `google-chrome` to open the file
- Does not handle local images

