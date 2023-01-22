const URL = "https://6283eb40a48bd3c40b68933b.mockapi.io/FOTO_PERFIL";

const getData = async () => {
  let finalData = await fetch(URL)
    .then((response) => response.json())
    .then((data) => data);

  return finalData;
};

const addProduct = async (objProduct) => {
  let finalData = await fetch(URL, {
    method: "POST", // or 'PUT'
    body: JSON.stringify(objProduct), // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => console.log("Success:", response));

  return finalData;
};

export { getData, addProduct };
