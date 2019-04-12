const main = document.getElementById("main");

function scrollFunction() {
  if (event.srcElement.scrollTop > 100) {
    // console.log(event.srcElement.scrollTop);
    document.getElementById("header").classList.add("smallhead");
  } else {
    document.getElementById("header").classList.remove("smallhead");
  }
}

main.addEventListener("scroll", scrollFunction);
