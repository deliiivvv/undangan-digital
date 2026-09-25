const button = document.querySelector("button");
const cover = document.querySelector(".cover");
const invitation = document.querySelector(".invitation");

button.addEventListener("click", function () {

    cover.style.display = "none";

    invitation.style.display = "block";

});