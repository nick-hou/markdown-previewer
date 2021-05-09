// Returns a string containing HTML tags. String is then parsed to React HTML in the Previewer component.

/*
This program uses markedJS to reformat text as markdown.
I've made my own function below that uses regex to do the same thing. It gets most (but not all) syntax.
*/

import marked from 'marked'

const convertText = (input) => {

  return marked(input).replaceAll('\n', '<br>')

  // My personal regex to markdown function - still in progress!

  // return input
  //   // h1 through h6 #
  //   .replace(/^###### (.*$)/gim, '<h6>$1</h6>')
  //   .replace(/^##### (.*$)/gim, '<h5>$1</h5>')
  //   .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
  //   .replace(/^### (.*$)/gim, '<h3>$1</h3>')
  //   .replace(/^## (.*$)/gim, '<h2>$1</h2>')
  //   .replace(/^# (.*$)/gim, '<h1>$1</h1>')
  //   // blockquote >
  //   .replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>')
  //   // multi line code ```
  //   .replace(/```([^\r]*?)```/gim, '<code>$1</code>')
  //   // single line code `
  //   .replace(/`(.*?)`/gim, '<code>$1</code>')
  //   // bold and italic ***, ___
  //   .replace(/\*\*\*(.*)\*\*\*/gim, '<b><i>$1</i></b>')
  //   .replace(/___(.*)___/gim, '<b><i>$1</i></b>')
  //   //bold **, __
  //   .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
  //   .replace(/__(.*)__/gim, '<b>$1</b>')
  //   // italic *, _
  //   .replace(/\*(.*)\*/gim, '<i>$1</i>')
  //   .replace(/_(.*)_/gim, '<i>$1</i>')
  //   // strikethrough ~~
  //   .replace(/~~(.*)~~/gim, '<s>$1</s>')
  //   // img [caption](link)
	// 	.replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
  //   // hyperlink [text](link)
	// 	.replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
  //   // list items * + -
  //   .replace(/^[-*+]+ (.*$)/gim, '<li>$1</li>')
  //   // list items, number
  //   .replace(/^\d+. (.*$)/gim, '<li>$1</li>')
  //   // horizontal rules
  //   .replace(/---/, '<hr />')
  //   // line breaks
  //   .replaceAll('\n', '<br />')
  //   .trim()

}

export default convertText
