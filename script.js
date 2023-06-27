const burger = document.querySelector('.burger i');
const nav = document.querySelector('.navlinks');

// Defining a function
function toggleNav() {
         burger.classList.toggle('fa-bars');
         burger.classList.toggle('fa-times');
         nav.classList.toggle('navlinks-active');
      }

// Calling the function after click event occurs
      burger.addEventListener('click', function() {
             toggleNav();
         });



