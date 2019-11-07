"use strict";

const main = document.getElementById("main");
const header = document.getElementById("header");

const scrollFunction = () => {
  // console.log(event.srcElement.scrollTop);
  event.srcElement.scrollTop > 100 ?
    header.classList.add("smallhead")
    : header.classList.remove("smallhead")
}

main.addEventListener("scroll", scrollFunction);
