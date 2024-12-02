const field = document.getElementById("field");
const submit = document.getElementById("submit-btn");
const download = document.getElementById("download-img");
const img = document.getElementById("img");

const btn = document.getElementById("download");

const link = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

function display() {
  if (field.value != 0) {
    img.classList.remove("screen");
    btn.classList.remove("screen");
    document.querySelector("#error").classList.add("screen");
    img.src = link + field.value;
    download.href = link + field.value;
  } else if (field.value == 0) {
    document.querySelector("#error").innerHTML = "Empty input field";
    document.querySelector("#error").classList.remove("screen");
    img.classList.add("screen");
    btn.classList.add("screen");
  }
}

submit.addEventListener("click", () => {
  display();
});
