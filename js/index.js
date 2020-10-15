let sideBtn = document.querySelector('.side_btn');
let menu = document.querySelector('.profile_menu');
let git = document.querySelector('.git');

sideBtn.addEventListener('click', function () {
	menu.classList.toggle('active');
	git.classList.toggle('active');
});
