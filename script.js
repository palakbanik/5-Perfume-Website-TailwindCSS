/* ~~~~~~~~~~~~~~ Toggle Button ~~~~~~~~~~~~~~~ */
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
	navMenu.classList.toggle("left-[0]")
	hamburger.classList.toggle("ri-close-large-line")
})

navLink.forEach(link => {
	link.addEventListener("click", () => {
		navMenu.classList.toggle("left-[0]")
		hamburger.classList.toggle("ri-close-large-line")
	})
})

/* ~~~~~~~~~~~~~~ Show Scroll Up ~~~~~~~~~~~~~~~ */
const scrollUp = () => {
	const scrollUpBtn = document.getElementById("scroll-up")

	if (this.scrollY >= 250) {
		scrollUpBtn.classList.remove("-bottom-1/2")
		scrollUpBtn.classList.add("bottom-10")
	} else {
		scrollUpBtn.classList.remove("-bottom-1/2")
		scrollUpBtn.classList.add("bottom-10")
	}
}

window.addEventListener("scroll", scrollUp)

/* ~~~~~~~~~~~~~~ Scroll Sections Active Link ~~~~~~~~~~~~~~~ */

/* ~~~~~~~~~~~~~~ Scroll Reveal Animation ~~~~~~~~~~~~~~~ */