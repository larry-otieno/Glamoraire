// Get all the navigation links
const navLinks = document.querySelectorAll('#navigation li a');

// Add an event listener to each link
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    // Get the href attribute of the link
    const href = link.getAttribute('href');

    // No need to prevent default behavior or scroll to a section
    // The browser will navigate to the new page automatically
  });
});