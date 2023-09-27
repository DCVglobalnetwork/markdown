// defaultMarkdown contains vaild markdown that represents at least one of the following elements: a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text 
export const defaultMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading... 
### And here some other cool stuff:

Here is some code, \`<div></div>\`, between 2 backticks.

// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == 'vite' && lastLine == 'vite') {
    return multiLineCode;
  }
}
You can also make text **bold**... whoa!
Or _italic_.
Or... **_both!_**

There is also [links](https://www.freecodecamp.com), and 
> Block Quates!

![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207)

-And of course there are lists.
  - Some are blleted.
   - With different indentation levels.
    - That look like this.
`;
