window.onload = () => {
  document.getElementById("submit-btn").addEventListener("click", sendEmail);
};
function sendEmail() {
  let Name = document.getElementById("Name").value;
  let Email = document.getElementById("Email").value;
  let Subject = document.getElementById("Subject").value;
  let Message = document.getElementById("Message").value;

  if (isEmpty(Email) || isBlank(Email)) {
    alert("Please write your email");
  } else {
    fetch("/api/contacts/", {
      method: "POST",
      body: JSON.stringify({
        Name: Name,
        Email: Email,
        Subject: Subject,
        Message: Message,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then((records) => {
        alert("Your message has been sent!");
      })
      .catch((err) => {
        alert("Your message hasn't been sent!");
      });
  }
}

function isEmpty(str) {
  return !str || 0 === str.length;
}
function isBlank(str) {
  return !str || /^\s*$/.test(str);
}
