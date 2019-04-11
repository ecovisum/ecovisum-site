const page1 = document.getElementById('page-1');

const converter = new showdown.Converter();
let rawMd;

const getMarkdown = (filename) => {
  fetch(filename, {credentials: 'same-origin'})
    .then((response) => response.text())
    .then(convertMd)
    .catch(e => console.log("Something's wrong…"));
  // return true; //no difference
}

const convertMd = (retrievedText) => {
  convertedText = converter.makeHtml(retrievedText);
  page1.innerHTML = convertedText;
}

const fileName = './markdown/index.md';
getMarkdown(fileName);



// ========= ORIGINAL EXAMPLE =========
// fetch('./index.md', {credentials: 'same-origin'})
// const convertmd = (md) => {
//   const converter = new showdown.Converter(),
//   text = '# hello, markdown!',
//   html = converter.makeHtml(text);
//   console.log(html);
// }
