window.onload = () => {
  fetch("/api/products/", {
    method: "GET",
  })
    .then((res) => {
      if (!res.ok) {
        throw res;
      }
      return res.json();
    })
    .then((records) => {
      //let data = records;
      let rows = CreateTableFromJson(records);
      var divContainer = document.getElementById("results");
      divContainer.innerHTML = "";
      divContainer.innerHTML = rows;
    })
    .catch((err) => console.error(err));
};

function CreateBrandList(id) {
  let brands = fetch("/api/brands/", {
    method: "GET",
  })
    .then((res) => {
      if (!res.ok) {
        throw res;
      }
      return res.json();
    })
    .then((brands) => {
      return brands;
    })
    .catch((err) => console.error(err));
  let rows = `<div class="col-lg-3 col-md-6">
              <div class="box">
              <ul>`;
  for (let i = 0; i < brands.length; i++) {
    if (brands.product_id == id) {
      rows += `<li><i class="bx bx-chevron-right"></i>${brands[i].brand_title}</li>`;
    }
  }
  console.log(rows);
  let parent = document.getElementById("products");
  let divContainer = document.createElement("div");
  divContainer.className = "row";
  divContainer.innerHTML = rows + "</ul></div></div>";
  parent.after(divContainer);
}

function CreateTableFromJson(jsonRows) {
  let rows = `<div class="row" id="products">`;

  for (var i = 0; i < jsonRows.length; i++) {
    rows += `<div class="col-lg-3 col-md-6" id="${jsonRows[i].product_name}">
              <div class="box" onmouseover=CreateBrandList(${jsonRows[i].product_id})>
                <h3>${jsonRows[i].product_name}</h3>
                <h4>min <sup>$</sup>${jsonRows[i].product_price}</h4>
                <p>${jsonRows[i].product_desc}</p>
              </div>
            </div>`;
  }
  console.log(rows);
  return rows + "</div>";
}
// From the block:
// <div class="text-center">
//     <button id="${jsonRows[i].product_id}" onclick="CreateBrandList(${jsonRows[i].product_id})" type="submit">More details</button>
// </div>
