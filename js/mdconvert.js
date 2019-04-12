const converter = new showdown.Converter();

const getMarkdown = (filename, mdPage) => {
  fetch(filename, { credentials: 'same-origin' })
    .then((response) => {
      response.text()
      .then((text) => convertMd(text, mdPage))
    })
    .catch(e => console.log("Something's wrong…"));
}

const convertMd = (md, mdPage) => {
  convertedText = converter.makeHtml(md);
  mdPage.innerHTML = convertedText;
}

const page1 = document.getElementById('page-1');
const page2 = document.getElementById('page-2');
const page3 = document.getElementById('page-3');
const page4 = document.getElementById('page-4');
const page5 = document.getElementById('page-5');
const page6 = document.getElementById('page-6');
const page7 = document.getElementById('page-7');
const page8 = document.getElementById('page-8');

getMarkdown('./markdown/index.md', page1);
getMarkdown('./markdown/problem.md', page2);
getMarkdown('./markdown/solution.md', page3);
getMarkdown('./markdown/cases.md', page4);
getMarkdown('./markdown/everyone.md', page5);
getMarkdown('./markdown/prices.md', page6);
getMarkdown('./markdown/about.md', page7);
getMarkdown('./markdown/research.md', page8);



// ========= ORIGINAL EXAMPLE =========
  // fetch(filename, {credentials: 'same-origin', mode: 'no-cors'})

// const convertmd = (md) => {
//   const converter = new showdown.Converter(),
//   text = '# hello, markdown!',
//   html = converter.makeHtml(text);
//   console.log(html);
// }

  // return true; //no effect
