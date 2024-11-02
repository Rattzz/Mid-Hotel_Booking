    const searchBtn = document.querySelector('#search-btn');
    const searchBar = document.querySelector('.search-bar-container');
    const formBtn = document.querySelector('#login-btn');
    const loginForm = document.querySelector('.login-form-container');
    const formClose = document.querySelector('#form-close');
    const menu = document.querySelector('#menu-bar');
    const navbar = document.querySelector('.navbar');
    const videoBtn = document.querySelectorAll('.vid-btn');
    const registerLink = document.querySelector('#register-link');
    const registerForm = document.querySelector('.register-form-container');
    const loginButton = document.querySelector('#login-now-btn');
    const registerButton = document.querySelector('#register-now-btn');
    

    window.onscroll = () => {
        searchBtn.classList.remove('fa-time');
        searchBar.classList.remove('active');
        menu.classList.remove('fa-time');
        navbar.classList.remove('active');
        loginForm.classList.remove('active');
        registerForm.classList.remove('active');
    };

    menu.addEventListener('click', () => {
        menu.classList.toggle('fa-time');
        navbar.classList.toggle('active');
    });

    searchBtn.addEventListener('click', () => {
        searchBtn.classList.toggle('active');
        searchBar.classList.toggle('active');
    });

    formBtn.addEventListener('click', () => {
        loginForm.classList.add('active');
        registerForm.classList.remove('active');
    });

    loginButton.addEventListener('click', (event) => {
        event.preventDefault();

        // Validate email before closing the login form
        const emailInput = document.querySelector('#login-email'); // Replace with your actual email input ID
        if (!validateEmail(emailInput.value)) {
            // Display an error message or handle the invalid email case
            return;
        }

        loginForm.classList.remove('active');
    });

    registerButton.addEventListener('click', (event) => {
        event.preventDefault();

        // Validate email before closing the register form
        const emailInput = document.querySelector('#register-email'); // Replace with your actual email input ID
        if (!validateEmail(emailInput.value)) {
            // Display an error message or handle the invalid email case
            return;
        }

        registerForm.classList.remove('active');
    });

    function validateEmail(email) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }

    formClose.addEventListener('click', () => {
        loginForm.classList.remove('active');
        registerForm.classList.remove('active');
    });

    registerLink.addEventListener('click', (event) => {
        event.preventDefault();
        loginForm.classList.remove('active');
        registerForm.classList.add('active');
    });

    videoBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.controls .active').classList.remove('active');
            btn.classList.add('active');
            let src = btn.getAttribute('data-src');
            document.querySelector('#video-slider').src = src;
            
        });
    });

    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 2,
                slidesPerGroup: 1,
            },
        },
    });

   
