const burgerMenu = document.getElementById("burgerMenu");
let isMenuOpen = false;

burgerMenu.addEventListener("click", () => {
	isMenuOpen = !isMenuOpen;
	if (isMenuOpen) {
		burgerMenu.querySelector("img").src = "assets/icons/close.svg";
	} else {
		burgerMenu.querySelector("img").src = "assets/icons/hamburger.svg";
	}
});
