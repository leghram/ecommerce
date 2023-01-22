import HEADER from "../componentes/header.js";
import FOOTER from "../componentes/footer.js";

import { getData, addProduct } from "../services/services.js";

import BoxGenerator from "../componentes/boxGenerator.js";

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

  btnSaveProduct.addEventListener("click", async (e) => {
    e.preventDefault();
    const newOBJ = obtenerProductoDelFormulario();
    await addProduct(newOBJ);
    insertarNodesEnElMain();
  });
}

async function buscarSpaceForShowProducts() {
  const zonaProducts = document.getElementById("lista-todos-productos");
  const listProducts = await getData();
  let nodeHtml = "";
  for (let i = 0; i < listProducts.length; i++) {
    nodeHtml = nodeHtml + BoxGenerator(listProducts[i]);
  }
  zonaProducts.innerHTML = nodeHtml;
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
  buscarSpaceForShowProducts();
}

function insertarFormularioEnElMain() {
  const nodeHtml = `
  <form>
  <h2>Agregar Nuevo Producto</h2>
  <input id='id-url-pro' type="text" placeholder="url de la imagen" />
  <input id='id-categoria-pro' type="text" placeholder="categogia" />
  <input id='id-name-pro' type="text" placeholder="Nombre del producto" />
  <input id='id-precio-pro' type="text" placeholder="precio" />
  <textarea
    name=""
    id="areadescription"
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

function obtenerProductoDelFormulario() {
  const urlImage = document.getElementById("id-url-pro").value;
  const name = document.getElementById("id-name-pro").value;
  const precio = document.getElementById("id-precio-pro").value;
  const categoria = document.getElementById("id-categoria-pro").value;
  const des = document.getElementById("areadescription").value;
  return { urlImage, name, precio, categoria, des };
}

insertarNodesEnElMain();
