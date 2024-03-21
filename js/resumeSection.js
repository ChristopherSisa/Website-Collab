document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.querySelectorAll('.skill-level').forEach(skillLevel => {
            const level = skillLevel.getAttribute('data-level');
            skillLevel.style.width = level + '%';
          });
        }
      });
    }, {threshold: 0.6});
  
    observer.observe(document.querySelector('.skills-display'));
  });
  