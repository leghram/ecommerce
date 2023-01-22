import HEADER from "../componentes/header.js";
import FOOTER from "../componentes/footer.js";

function InsertHeaderAndFooter() {
  const headerNode = document.getElementById("header-id");
  const footerNode = document.getElementById("space-footer");
  headerNode.innerHTML = HEADER;
  footerNode.innerHTML = FOOTER;
}

InsertHeaderAndFooter();
