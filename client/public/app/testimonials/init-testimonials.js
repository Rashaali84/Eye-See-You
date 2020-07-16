window.onload = () => {

    document.getElementById('submit-review').addEventListener("click", sendSubmit);
    fetch('/api/testmonials/', {
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
            console.log(data);
            let rows = CreateTableFromJson(data);
            var divContainer = document.getElementById("results");
            divContainer.innerHTML = '';
            divContainer.innerHTML = rows;


        })
        .catch(err => console.error(err));
}
function sendSubmit() {
    let name = document.getElementById('name').value;
    let message = document.getElementById('message').value;

    console.log(message);

    if (isEmpty(name) || isBlank(name)) {
        alert('Please Write a name .. ');
    }
    else if (isEmpty(message) || isBlank(message)) {
        alert('Please Write a message .. ');
    }
    else {
        fetch('/api/testmonials/', {
            method: 'POST',
            body: JSON.stringify({ name: name, message: message }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then(res => {
                if (!res.ok) {
                    throw res;
                }
                return res.json();
            })
            .then(records => {
                document.getElementById('name').value = '';
                document.getElementById('message').value = '';
                alert(`Your review is sent successfully ! `)

            })
            .catch(err => console.error(err));
    }
}

function isEmpty(str) {
    return (!str || 0 === str.length);
}
function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}

function CreateTableFromJson(jsonRows) {
    let rows = `<div class="row">`;

    for (var i = 0; i < jsonRows.length; i++) {

        rows += ` <div class="col-lg-6">
            <div class="testimonial-item mt-4" >
                <img
                    src="assets/img/testimonials/testimonials-${jsonRows[i].testmonial_id}.jpg"
                    class="testimonial-img"
                    alt=""
                />
                <h3>${jsonRows[i].name}</h3>
                <h4>Customer</h4>
                <p>
                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                    ${jsonRows[i].message}
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>` ;

    }

    return rows + '</div>';


}