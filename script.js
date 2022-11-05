/* TO-DO:
-study slider from w3schools
-polish this project/challenge
-add style for mobile screens
*/

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const slides = document.getElementsByClassName("content");

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function showSlides(n) {
	if (n > slides.length) {
		slideIndex = 1;
	}
	
	if (n < 1) {
		slideIndex = slides.length;
	}
	
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	
	slides[slideIndex - 1 ].style.display = "flex";
}

let slideIndex = 1;
showSlides(slideIndex);

prevBtn.addEventListener("click", function() {
	plusSlides(-1);
})

nextBtn.addEventListener("click", function() {
	plusSlides(1);
})