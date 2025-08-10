const menuIcon = document.querySelector('.menu-icon');
const header = document.querySelector('header');
const headerNav = document.querySelector('.header__right-content');
const body = document.querySelector('body');
console.log('menuIcon: ', menuIcon)
console.log('header: ', header)

menuIcon.addEventListener('click', () => {
	menuIcon.classList.toggle('menu-icon--active');
	header.classList.toggle('header--mobile');
	headerNav.classList.toggle('header__nav-wrap');
	body.classList.toggle('no-scroll');
});
