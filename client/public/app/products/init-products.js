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

function CreateTableFromJson(jsonRows) {
  let rows = `<div class="row">`;

  for (var i = 0; i < jsonRows.length; i++) {
    rows += `  <div class="col-lg-3 col-md-6">
            <div class="box">
              <h3>${jsonRows[i].product_name}</h3>
              <h4><sup>$</sup>${jsonRows[i].product_price}</h4>
              <p>${jsonRows[i].product_desc}</p>
               </div>
          </div>`;
  }
  console.log(rows);
  return rows + "</div>";
}
