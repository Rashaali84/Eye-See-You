window.onload = () => {
  document.getElementById("submit-btn").addEventListener("click", sendEmail);
  fetch("/api/contacts/", {
    method: "POST",
    body: JSON.stringify({
      ContactId: ContactId,
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
      alert("Your message has been sent !");
    })
    .catch((err) => {
      alert("Your message hasn't been sent  !");
    });
};
