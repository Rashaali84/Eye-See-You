

window.onload = () => {
    fetch('/api/services/', {
        method: 'GET'
    })
        .then(res => {
            if (!res.ok) {
                throw res;
            }
            return res.json();
        })
        .then(records => {
            let data = records;
            let rows = CreateTableFromJson(data);
            var divContainer = document.getElementById("results");
            divContainer.innerHTML = '';
            divContainer.innerHTML = rows;


        })
        .catch(err => console.error(err));

}

function CreateTableFromJson(jsonRows) {
    let rows = `<div class="row">`;

    for (var i = 0; i < jsonRows.length; i++) {
        if (i === 0) {
            rows += `  <div class="col-md-6">
            <div class="icon-box">
              <i class="icofont-computer"></i>
             <h4><a href="#">${jsonRows[i].service_name}</a></h4>
              <p>${jsonRows[i].service_desc}</p>
               </div>
          </div>`}
        else {
            rows += `<div class="col-md-6 mt-4 mt-md-0">
        <div class="icon-box">
            <i class=${i === 1 ? 'icofont-chart-bar-graph' : i === 2 ? 'icofont-image' : i === 3 ? 'icofont-settings' : 'icofont-earth'}></i>
            <h4><a href="#">${jsonRows[i].service_name}</a></h4>
            <p>${jsonRows[i].service_desc}</p>
        </div>
    </div>`
        }
    }
    console.log(rows);
    return rows + '</div>';


}