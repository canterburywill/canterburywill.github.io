// JavaScript source code
// Example: Log a message to the browser console when the page loads
console.log("Website loaded!");

document.querySelectorAll('section').forEach(section => {
  // IMPORTANT: Ensure these selectors match your HTML structure.
  // If your headers are <h2> with class "section-title", use:
  // const header = section.querySelector('h2.section-title');
  const header = section.querySelector('h3'); // Your current selector
  
  // Ensure your collapsible content is wrapped in a div with class "section-content"
  const content = section.querySelector('.section-content'); 

  if (header && content) {
    // REMOVE THIS LINE: content.style.display = 'none';
    // CSS will now handle the initial collapsed state for animation.

    // Make header look clickable
    header.style.cursor = 'pointer';

    // Add click listener
    header.addEventListener('click', () => {
      // Toggle the .open class on the content div. CSS will use this for animation.
      content.classList.toggle('open'); 
      
      // Toggle .collapsed class on the parent section. Useful for styling the header (e.g., arrow).
      section.classList.toggle('collapsed', !content.classList.contains('open'));
    });

    // Ensure the section starts with the 'collapsed' class if its content is not 'open'.
    // This helps if you have JavaScript-independent arrow styling.
    if (!content.classList.contains('open')) {
      section.classList.add('collapsed');
    } else {
      section.classList.remove('collapsed'); // Unlikely needed if .open isn't there by default
    }

  }
});

document.querySelectorAll('section').forEach(section => {
  const folderIcon = section.querySelector('.folder-icon img');
  const hotspot = section.querySelector('.folder-hotspot');
  const header = section.querySelector('h3'); // or your header selector
  const content = section.querySelector('.section-content');

  if (folderIcon && header && content && hotspot) {
    // Hover image swap
    hotspot.addEventListener('mouseenter', () => {
      folderIcon.src = folderIcon.dataset.hover;
    });
    hotspot.addEventListener('mouseleave', () => {
      folderIcon.src = folderIcon.dataset.normal;
    });

    // Toggle dropdown on click
    hotspot.addEventListener('click', () => {
      content.classList.toggle('open');
      section.classList.toggle('collapsed', !content.classList.contains('open'));
    });
    // (Optional) Keyboard accessibility
    hotspot.parentElement.addEventListener('keydown', e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        hotspot.click();
      }
    });
  }
});
