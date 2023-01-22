import HEADER from "./componentes/header.js";
import FOOTER from "./componentes/footer.js";

import { getData } from "./services/services.js";

import BoxGenerator from "./componentes/boxGenerator.js";

const categoria1 = document.getElementById("categoria1");
const categoria2 = document.getElementById("categoria2");
const categoria3 = document.getElementById("categoria3");

function InsertHeaderAndFooter() {
  const headerNode = document.getElementById("header-id");
  const footerNode = document.getElementById("space-footer");
  headerNode.innerHTML = HEADER;
  footerNode.innerHTML = FOOTER;
}

InsertHeaderAndFooter();

let data = await getData();

let nodeHTML = "";
let dataCategoria1 = data.filter((obj) => obj.categoria == "celulares");
let dataCategoria2 = data.filter((obj) => obj.categoria == "laptop");
let dataCategoria3 = data.filter((obj) => obj.categoria == "relojes");

for (let i = 0; i < dataCategoria1.length; i++) {
  nodeHTML = nodeHTML + BoxGenerator(dataCategoria1[i]);
}
categoria1.innerHTML = nodeHTML;

nodeHTML = "";
for (let i = 0; i < dataCategoria2.length; i++) {
  nodeHTML = nodeHTML + BoxGenerator(dataCategoria2[i]);
}
categoria2.innerHTML = nodeHTML;

nodeHTML = "";
for (let i = 0; i < dataCategoria3.length; i++) {
  nodeHTML = nodeHTML + BoxGenerator(dataCategoria3[i]);
}
categoria3.innerHTML = nodeHTML;
