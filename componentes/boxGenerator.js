export default function BoxGenerator({ urlImage, name, precio }) {
  let nodeHtml = `
    <div class="box">
    <img
      src="${urlImage}"
    />
    <p>${name}</p>
    <p>$ ${precio}</p>
    <button>Ver producto</button>
    </div>
    `;

  return nodeHtml;
}
