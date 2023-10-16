const marked = require("marked");

const mdContent = `
# Hello Markdown

This is a test of the **marked** library.
`;

console.log(marked(mdContent));
