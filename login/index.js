import HEADER from "../componentes/header.js";
import FOOTER from "../componentes/footer.js";

const btnLoguear = document.getElementById("loguear");
const inputmail = document.getElementById("inputmail");
const inputpass = document.getElementById("inputpass");

function InsertHeaderAndFooter() {
  const headerNode = document.getElementById("header-id");
  const footerNode = document.getElementById("space-footer");
  headerNode.innerHTML = HEADER;
  footerNode.innerHTML = FOOTER;
}

InsertHeaderAndFooter();

btnLoguear.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputmail.value == "admin" && inputpass.value == "admin") {
    console.log("loguead");
    window.location.assign("../productos/index.html");
  }
});
