let ibg = document.querySelector(".ibg");
let img = ibg.querySelector("img").getAttribute("src");
ibg.setAttribute("style", "background-image:url(" + img + ")");
let mobile = document.querySelector(".mobile");
let btn = document.querySelector(".btn-burger");
let span = btn.querySelectorAll("span");
let flug = true;
btn.onclick = () => {
	for(s of span) {
		flug ? s.classList.add('active') : 
		s.classList.remove('active');
	}
	flug ? mobile.style.display = 'block' :
	mobile.style.display = 'none';
	flug = !flug;
}