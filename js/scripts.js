/*!
* Start Bootstrap - Scrolling Nav v5.0.5 (https://startbootstrap.com/template/scrolling-nav)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-scrolling-nav/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 100,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});





//CHATGPT CODE



// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const openButton = document.getElementById('buttonpic');
const closeButton = document.getElementById('close-lightbox');

// Open the lightbox when the "Get on the Waitlist" button is clicked
openButton.addEventListener('click', () => {
    lightbox.style.display = 'flex'; // Show the lightbox
});

// Close the lightbox when the close button is clicked
closeButton.addEventListener('click', () => {
    lightbox.style.display = 'none'; // Hide the lightbox
});

// Close the lightbox when clicking outside of the content area
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

// Form submission logic
document.getElementById('signup-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const emailInput = document.getElementById('email');
    const message = document.getElementById('message');
    const email = emailInput.value;
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxfuqEWlhFJUXuYL4FB6OpQMFuuzzpXPKRgRJJTcO1jaaqgADeCBGIWZm3z9xn9ZYPL/exec';
    //^ this is the web URL for data recording


        try {
            const response = await fetch(scriptURL, {
                method: 'POST',
                body: JSON.stringify({ email }),
                headers: { 'Content-Type': 'application/json' },
            });

            const result = await response.text();
            if (result === 'Success') {
                message.textContent = 'Thank you for signing up!';
                message.style.color = 'green';
                emailInput.value = '';

                // Hide the lightbox after a short delay
                setTimeout(() => {
                    lightbox.style.display = 'none';
                }, 2000);
            } else {
                message.textContent = 'Oops! Something went wrong.';
                message.style.color = 'red';
            }
        } catch (error) {
            console.error('Error:', error);
            message.textContent = 'There was a problem. Please try again later.';
            message.style.color = 'red';
        }
});


