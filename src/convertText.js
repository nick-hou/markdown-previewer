// Returns a string containing HTML tags. String is then parsed to React HTML in the Previewer component.

// Option to use the markedJS library to convert text to markdown. Mostly for testing purposes
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
  //   .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
  //   // code `
  //   .replace(/\`(.*$)\`/gi, '<code>$1</code>')
  //   // bold and italic ***, ___
  //   .replace(/\*\*\*(.*)\*\*\*/gim, '<b><i>$1</i></b>')
  //   .replace(/\_\_\_(.*)\_\_\_/gim, '<b><i>$1</i></b>')
  //   //bold **, __
  //   .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
  //   .replace(/\_\_(.*)\_\_/gim, '<b>$1</b>')
  //   // italic *, _
  //   .replace(/\*(.*)\*/gim, '<i>$1</i>')
  //   .replace(/\_(.*)\_/gim, '<i>$1</i>')
  //   // img [caption](link)
	// 	.replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
  //   // hyperlink [text](link)
	// 	.replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
  //   // list items * + - #
  //   .replace(/^([\d\+\#\*])+$ (.*$)/gim, '<li>$1</li>')
  //   .replace(/^[-]+$ (.*$)/gim, '<li>$1</li>')
  //   // line breaks
  //   .replaceAll('\n', '<br />')
  //   .trim()

}

export default convertText
