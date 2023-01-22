export default function BoxGenerator({
  urlImage,
  name,
  precio,
  categoria,
  des,
}) {
  let nodeHtml = `
    <div class="box">
    <img
      src="${urlImage}"
    />
    <p>${name}</p>
    <p>$ ${precio}.00</p>
    <button>Ver producto</button>
    </div>
    `;

  return nodeHtml;
}
