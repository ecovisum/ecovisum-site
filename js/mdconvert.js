"use strict";

/* globals fetch */
const converter = new showdown.Converter();

const convertMd = (md, mdPage) => {
  let convertedText = converter.makeHtml(md);
  mdPage.innerHTML = convertedText;
}

const getMarkdown = (filename, mdPage) => {
  fetch(filename, { credentials: 'same-origin' })
    .then((response) => {
      response.text()
        .then((text) => convertMd(text, mdPage))
    })
    .catch(e => console.log(`Something's wrong: ${e}`));
}

pages.map(p => getMarkdown(p.mdFile, p.page));


// ========= ORIGINAL SHOWDOWN EXAMPLE =========
// fetch(filename, {credentials: 'same-origin', mode: 'no-cors'})
