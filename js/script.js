// TOGGLE class active
const navbarNav = document.querySelector('.navbar-nav');

//ketika list di klik
document.querySelector('#list').onclick =() => {
    navbarNav.classList.toggle('active');
};

//klik diluar sidebar untuk menghilangkan nav
const list = document.querySelector('#list');

document.addEventListener('click', function(e){
    if(!list.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    };
});

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
  shoppingCart.classList.toggle('active');
  e.preventDefault();
};


// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = 'flex';
    e.preventDefault();
  };
});