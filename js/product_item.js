const urlParams = new URLSearchParams(window.location.search);

const productId = urlParams.get("product");

fetch("https://kea2sem-1270.restdb.io/rest/products/" + productId, {
  method: "GET",
  headers: {
    "x-apikey": "602f53d35ad3610fb5bb638d",
  },
})
  .then((res) => res.json())
  .then((response) => {
    showProduct(response);
  })
  .catch((err) => {
    console.error(err);
  });

function showProduct(product) {
  console.log(product);
  //populate
  document.querySelector(".productTitle").textContent = product.name;
  document.querySelector(".description p").textContent =
    product.productDescription;

  document.querySelector(".material p span:last-of-type").textContent =
    product.productMaterials;
  document.querySelector(".price h2 span").textContent = product.price;
  document.querySelector(".product-image img").src = product.image;
  document.querySelector(".imgbox1 img").src = product.image;
  document.querySelector(".imgbox2 img").src = product.image;
}
