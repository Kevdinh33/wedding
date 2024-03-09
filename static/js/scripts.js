/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
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

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});
function openImagePopup() {
    // Create the popup element
    var imagePopup = document.createElement("div");
    imagePopup.id = "imagePopup";
  
    // Popup styles with flexbox
    imagePopup.style.display = "flex";
    imagePopup.style.alignItems = "center"; // Center vertically
    imagePopup.style.justifyContent = "center"; // Center horizontally
    imagePopup.style.position = "fixed"; // Maintain position on scroll
    imagePopup.style.top = 0; // Align to top of viewport
    imagePopup.style.left = 0; // Align to left of viewport
    imagePopup.style.width = "100%"; // Set full width
    imagePopup.style.height = "100vh"; // Set full viewport height
    imagePopup.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    imagePopup.style.zIndex = "100";
  
    // Create and style the close button (optional)
    var closeButton = document.createElement("button");
    closeButton.textContent = "X";
    closeButton.style.position = "absolute";
    closeButton.style.top = "10px";
    closeButton.style.right = "10px";
    closeButton.style.fontSize = "30px";
    closeButton.style.backgroundColor = "transparent";
    closeButton.style.border = "none";
    closeButton.style.cursor = "pointer";
  
    // Add click event listener to close button (optional)
    closeButton.addEventListener("click", function() {
      document.body.removeChild(imagePopup);
    });
  
    // Create and style the image
    var image = document.createElement("img");
    image.src = "/static/assets/img/portfolio/WeddingSchedule.jpg"; // Update with your image path
    image.style.maxHeight = "100%";
    image.style.maxWidth = "100%";
  
  
    // Click outside image to close popup
    imagePopup.addEventListener("click", function(event) {
      if (event.target !== image) {
        document.body.removeChild(imagePopup);
      }
    });
  
    // Append elements and display popup
    if (closeButton) { // Add close button if it exists
      imagePopup.appendChild(closeButton);
    }
    imagePopup.appendChild(image);
    document.body.appendChild(imagePopup);
  }
  
openImagePopup()
