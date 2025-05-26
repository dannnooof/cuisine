function toggleAccordion(header) {
    const content = header.nextElementSibling;
    content.classList.toggle('open');

    const allContents = document.querySelectorAll('.accordion-content');
    allContents.forEach(item => {
      if (item !== content) {
        item.classList.remove('open');
      }
    })
  }