const productList = [];

class Product {
  constructor(name, quantity, price) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }
}

const showProducts = () => {
  const products = productList.length;
  let HTMLProductList = "";
  for (let i = 0; i < products; i++) {
    HTMLProductList =
      HTMLProductList +
      `
        <p><strong>Nombre: </strong>${productList[i].name}</p>
        <p><strong>Cantidad: </strong>${productList[i].quantity}</p>
        <p><strong>Precio: </strong>${productList[i].price}</p>
        <button onclick="editProduct('${productList[i].name}'); return false;">Editar</button>
        <button onclick="deleteProduct('${productList[i].name}'); return false;">Eliminar</button>
        `;
  }
  document.getElementById("product-list").innerHTML = HTMLProductList;
};

const addProduct = () => {
  const name = document.getElementById("name").value;
  const quantity = document.getElementById("quantity").value;
  const price = document.getElementById("price").value;

  if (
    productList.findIndex(
      (item) => item.name.toUpperCase() === name.toUpperCase()
    ) >= 0
  ) {
    alert("El producto ya existe.");
  } else {
    productList.push(new Product(name, quantity, price));
  }
  showProducts();
};

const updateProduct = () => {
  const name = document.getElementById("name").value;
  const quantity = document.getElementById("quantity").value;
  const price = document.getElementById("price").value;
  const indexProducto = productList.findIndex(
    (item) => item.name.toUpperCase() === name.toUpperCase()
  );

  if (indexProducto >= 0) {
    productList[indexProducto].quantity = quantity;
    productList[indexProducto].price = price;
    document.getElementById("add-btn").disabled = true;
    document.getElementById("update-btn").disabled = false;
  }

  showProducts();
};

const editProduct = (name) => {
  const indexProducto = productList.findIndex(
    (item) => item.name.toUpperCase() === name.toUpperCase()
  );
  if (indexProducto >= 0) {
    document.getElementById("name").value = productList[indexProducto].name;
    document.getElementById("quantity").value =
      productList[indexProducto].quantity;
    document.getElementById("price").value = productList[indexProducto].price;
    document.getElementById("add-btn").disabled = true;
    document.getElementById("update-btn").disabled = false;
  }
  showProducts();
};

const deleteProduct = (name) => {
  const indexProducto = productList.findIndex(
    (item) => item.name.toUpperCase() === name.toUpperCase()
  );
  if (indexProducto >= 0) {
    productList.splice(indexProducto, 1);
  }
  showProducts();
};

showProducts();
