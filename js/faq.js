document.querySelector('.faq-container').addEventListener('click', event => {
  if (event.target.classList.contains('faq-question-button')) {
    const answer = event.target.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  }
});
