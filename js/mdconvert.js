const converter = new showdown.Converter();

const getMarkdown = (filename, mdPage) => {
  fetch(filename, { credentials: 'same-origin' })
    .then((response) => {
      response.text()
      .then((text) => convertMd(text, mdPage))
    })
    .catch(e => console.log(`Something's wrong: ${e}`));
}

const convertMd = (md, mdPage) => {
  convertedText = converter.makeHtml(md);
  mdPage.innerHTML = convertedText;
}

pages.map(p => getMarkdown(p.mdFile, p.page));


// ========= ORIGINAL SHOWDOWN EXAMPLE =========
// fetch(filename, {credentials: 'same-origin', mode: 'no-cors'})
