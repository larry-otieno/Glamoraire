// Get the footer links
const footerLinks = document.querySelectorAll('.footer a');

// Add an event listener to each link
footerLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    // Prevent the default link behavior
    e.preventDefault();

    // Open the link in a new tab
    window.open(link.href, '_blank');
  });
});