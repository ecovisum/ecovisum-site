const pages = [
  {
    "page": document.getElementById('page-1'),
    "mdFile": './markdown/index.md'
  },
  {
    "page": document.getElementById('page-2'),
    "mdFile": './markdown/problem.md'
  },
  {
    "page": document.getElementById('page-3'),
    "mdFile": './markdown/solution.md'
  },
  {
    "page": document.getElementById('page-4'),
    "mdFile": './markdown/cases.md'
  },
  {
    "page": document.getElementById('page-5'),
    "mdFile": './markdown/everyone.md'
  },
  {
    "page": document.getElementById('page-6'),
    "mdFile": './markdown/prices.md'
  },
  {
    "page": document.getElementById('page-7'),
    "mdFile": './markdown/about.md'
  },
  {
    "page": document.getElementById('page-8'),
    "mdFile": './markdown/research.md'
  }
]
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

// const convertmd = (md) => {
//   const converter = new showdown.Converter(),
//   text = '# hello, markdown!',
//   html = converter.makeHtml(text);
//   console.log(html);
// }

// fetch(filename, {credentials: 'same-origin', mode: 'no-cors'})
const main = document.getElementById("main");
const header = document.getElementById("header");

const scrollFunction = () => {
  // console.log(event.srcElement.scrollTop);
  event.srcElement.scrollTop > 100 ?
    header.classList.add("smallhead")
  : header.classList.remove("smallhead")
}

main.addEventListener("scroll", scrollFunction);
