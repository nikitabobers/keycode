const number = document.querySelector(".number");
const placeholder = document.querySelector(".placeholder");
const key = document.querySelector(".key");
const loc = document.querySelector(".location");
const which = document.querySelector(".which");
const code = document.querySelector(".code");

window.addEventListener("keydown", (e) => {
    placeholder.style.display = "none";
    number.innerText = e.keyCode;

    key.innerText = e.key;
	loc.innerText = e.location;
	which.innerText = e.keyCode;
    code.innerText = e.code;
});
