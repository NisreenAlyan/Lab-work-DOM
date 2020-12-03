const data = {
  image: "https://bitsofco.de/content/images/2018/11/HTML-to-Render-Tree-to-Final.png",
  title: "DOM exercise",
  linkes: ['https://www.w3.org/', 'https://developer.mozilla.org/', 'https://javascript.info/']
}

//add your code

//add image
const picture = document.querySelector('img');
picture.src = "https://bitsofco.de/content/images/2018/11/HTML-to-Render-Tree-to-Final.png";

//add title
const title = document.querySelector('h1');
title.textContent = 'DOM exercise';

// add linkes
const w3 = document.querySelector('a');
w3.addEventListener("click", event => {
  w3.href = 'https://www.w3.org/'
})

const MDN = document.querySelector('a');
MDN.addEventListener("click", event => {
  MDN.href = 'https://developer.mozilla.org/'
})

const javaScript = document.querySelector('a');
javaScript.addEventListener("click", event => {
  javaScript.href = 'https://javascript.info/'
})

