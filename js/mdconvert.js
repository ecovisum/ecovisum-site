const page1 = document.getElementById('page-1');
const page2 = document.getElementById('page-2');
const page3 = document.getElementById('page-3');
const page4 = document.getElementById('page-4');

const converter = new showdown.Converter();
let page;

const getMarkdown = (filename, mdPage) => {
  fetch(filename, mdPage, { credentials: 'same-origin' })
    .then((response) => {
      // console.log(mdPage, response);
      response.text().then(function (text) {
        let mdText = text;
        convertedText = converter.makeHtml(mdText);
        mdPage.innerHTML = convertedText;
      })
    })
    .catch(e => console.log("Something's wrong…"));
}

// const convertMd = (md) => {
//   console.log(md);
//   convertedText = converter.makeHtml(md);
//   page.innerHTML = convertedText;
// }

// let fileName = './markdown/index.md';
getMarkdown('./markdown/index.md', page1);
// fileName = './markdown/problem.md';
getMarkdown('./markdown/problem.md', page2);



// ========= ORIGINAL EXAMPLE =========
  // fetch(filename, {credentials: 'same-origin', mode: 'no-cors'})

// const convertmd = (md) => {
//   const converter = new showdown.Converter(),
//   text = '# hello, markdown!',
//   html = converter.makeHtml(text);
//   console.log(html);
// }

  // return true; //no effect
