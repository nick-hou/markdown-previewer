const defaultInput =
`
# This is my markdown previewer, built in React.

## Type some markdown text in the editor, and watch it get stylized in the previewer in real time.

### For tips on what you can do in markdown, check out [this cheatsheet](https://www.markdownguide.org/cheat-sheet/)

\`function sayHi() {console.log('Hi')}\`

\`\`\`
//Here's some longer code
function sayHello = () => {
   const hello = 'Hello';
   console.log(hello);
}
\`\`\`

- One potato
- Two potato!

> Here's a block quote

This site uses [marked](https://www.npmjs.com/package/marked) to format markdown text, and [HTML react parser](https://www.npmjs.com/package/html-react-parser) to parse that into React elements.

[Built by **Nick Hou**](http://www.nicholashou.com)

![real picture of author](https://i.kym-cdn.com/photos/images/newsfeed/001/505/718/136.jpg)
`

export default defaultInput
