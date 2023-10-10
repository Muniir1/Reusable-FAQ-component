const allContainer = document.querySelector('.faq');

const svgCode = `<svg class="faq-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
</svg>`;
const svgCode2 = `<svg class="faq-icon2"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>`

const FAQ = [
  {
    question: "How many bones does a cat have?",
    answer: "A cat has 230 bones - 6 more than a human",
    open: true,
  },
  {
    question: "How much do cats sleep?",
    answer: "The average cat sleeps 12-16 hours per day",
    open: false,
  },
  {
    question: "How long do cats live?",
    answer: "Outdoor cats live 5 years on average. Indoor cats live 15 years on average.",
    open: false,
  },
];

FAQ.forEach((item) => {


  const faqQuestions = document.createElement('div');
  faqQuestions.classList.add('qustion'); 
  allContainer.appendChild(faqQuestions);

  const qaIcon = document.createElement('div')
  qaIcon.classList.add('question');
  faqQuestions.appendChild(qaIcon)

  const Icon = document.createElement('image');
  Icon.innerHTML = item.open ? svgCode2 : svgCode;
  qaIcon.appendChild(Icon);

  const qa = document.createElement('p');
  qa.textContent = item.question;
  qa.classList.add('question'); 
  qaIcon.appendChild(qa);

  const ans = document.createElement('p');
  ans.textContent = item.answer; 
  ans.classList.add('answer'); 
  if(!item.open){
    ans.classList.remove('answer');
    ans.classList.add('hidden-answer');
  }
  faqQuestions.appendChild(ans);

  qaIcon.addEventListener('click', () => {
    if (ans.style.display === 'none') {
      ans.style.display = 'block';
      Icon.innerHTML = svgCode2;
      ans.classList.add('fade-in');
      item.open = true;
    } else {
      ans.style.display = 'none';
      Icon.innerHTML = svgCode; 
      ans.classList.remove('fade-in');
      item.open = false;
    }
  });
});
