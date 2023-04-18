const submitBtn = document.getElementById("submitBtn");

const email = document.getElementById("email");

const message = document.getElementById("message");

const name = document.getElementById("name");

submitBtn.addEventListener("click", function () {
  console.log(submitBtn.value);
  console.log(email.value);
  console.log(message.value);
});
