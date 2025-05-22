// JavaScript source code
// Example: Log a message to the browser console when the page loads
console.log("Website loaded!");

document.querySelectorAll('section').forEach(section => {
  const header = section.querySelector('h3');
  const content = section.querySelector('.section-content');
  if (header && content) {
    // Start collapsed
    content.style.display = 'none';
    // Make header look clickable
    header.style.cursor = 'pointer';
    // Add click listener
    header.addEventListener('click', () => {
      const isHidden = content.style.display === 'none';
      content.style.display = isHidden ? 'block' : 'none';
      section.classList.toggle('collapsed', !isHidden);
    });
  }
});
