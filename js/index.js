const sideBtn = document.querySelector('.side_btn');
const menu = document.querySelector('.profile_menu');
const git = document.querySelector('.git');

sideBtn.addEventListener('click', function () {
	menu.classList.toggle('active');
	git.classList.toggle('active');
});
