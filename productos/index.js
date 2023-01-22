import HEADER from "../componentes/header.js";
import FOOTER from "../componentes/footer.js";

const mainId = document.getElementById("main-id");

function InsertHeaderAndFooter() {
  const headerNode = document.getElementById("header-id");
  const footerNode = document.getElementById("space-footer");
  headerNode.innerHTML = HEADER;
  footerNode.innerHTML = FOOTER;
}
InsertHeaderAndFooter();

function buscarBtnAddProductandNode() {
  const btnAddProduct = document.getElementById("add-product");
  const listaProductsNode = document.getElementById("lista-todos-productos");
  btnAddProduct.addEventListener("click", (e) => {
    e.preventDefault();
    insertarFormularioEnElMain();
  });
}

function buscarBtnGuardarProducto() {
  const btnSaveProduct = document.getElementById("btn-guardar-producto");

  btnSaveProduct.addEventListener("click", (e) => {
    e.preventDefault();
    insertarNodesEnElMain();
  });
}

function insertarNodesEnElMain() {
  const nodeHtml = `
    <div class="header-products">
    <h1>Todos los Productos</h1>
    <button id="add-product">Agregar Producto</button>
  </div>
  <div id="lista-todos-productos"></div>
    `;
  mainId.innerHTML = nodeHtml;
  buscarBtnAddProductandNode();
}

function insertarFormularioEnElMain() {
  const nodeHtml = `
  <form>
  <h2>Agregar Nuevo Producto</h2>
  <input type="text" placeholder="url de la imagen" />
  <input type="text" placeholder="categogia" />
  <input type="text" placeholder="Nombre del producto" />
  <input type="text" placeholder="precio" />
  <textarea
    name=""
    id=""
    cols="30"
    rows="10"
    placeholder="Descripcion del producto"
  ></textarea>
  <button id="btn-guardar-producto">Agregar Producto</button>
    </form>
      `;
  mainId.innerHTML = nodeHtml;
  buscarBtnGuardarProducto();
}

insertarNodesEnElMain();
