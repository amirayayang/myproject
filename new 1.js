const header = document.querySelectore("header";
Window.addEventListener ("Scroll", Function() {
	header.classList.toggle("sticky",window.scrollY >100);
});

Let menu = document.querySelector('#menu-icon');
Let navlist = document.querySelector('.navlist');

menu.onclick=()=>{
menu.classlist.toggle('bx-x);
navlist.classlist.toggle('open');
}