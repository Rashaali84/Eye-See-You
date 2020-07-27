

window.onload = () => {
    fetch("/api/admin", {
        method: "GET",
    })
        .then((res) => {
            if (!res.ok) {
                throw res;
            }
            return res.json();
        })
        .then((htmlData) => {

            document.getElementById("auth").innerHTML = htmlData;
            console.log(htmlData);
            if (htmlData.indexOf('Please') === -1) {
                fetch('/api/contacts', {
                    method: 'GET'
                })
                    .then(res => {
                        if (!res.ok) {
                            throw res;
                        }
                        return res.json();
                    })
                    .then(records => {
                        console.log(records);
                        let table = CreateTableFromJson(records);
                        var divContainer = document.getElementById("results");
                        divContainer.innerHTML = '';
                        divContainer.appendChild(table);


                    }).catch(err => console.error(err));
            }
        });




}


function CreateTableFromJson(jsonRows) {
    // EXTRACT VALUE FOR HTML HEADER. 
    var col = [];
    for (var i = 0; i < jsonRows.length; i++) {
        for (var key in jsonRows[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }
    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");
    table.className += "table table-bordered";
    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
    var tr = table.insertRow(-1);
    tr.style.border = "1px solid black";                   // TABLE ROW.

    for (var m = 0; m < col.length; m++) {
        var th = document.createElement("th");
        th.style.border = "1px solid black";      // TABLE HEADER.
        th.innerHTML = col[m];
        tr.appendChild(th);
    }

    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < jsonRows.length; i++) {

        tr = table.insertRow(-1);
        tr.style.border = "1px solid black";

        for (var j = 0; j < col.length; j++) {

            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = jsonRows[i][col[j]];
            tabCell.style.border = "1px solid black";

        }

    }

    table.style.border = 'solid 1px black';

    return table;

}

function logOut() {
    fetch("/api/logout/", {
        method: "GET",
    }).then(() => {
        var divContainer = document.getElementById("results");
        divContainer.innerHTML = "";
        window.location.assign('../login.html')
    });
}