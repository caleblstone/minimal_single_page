let arrow = document.querySelector('section.arrow a')

arrow.addEventListener("click", function(){
  document.querySelector('section.socialmedia').scrollIntoView({ 
  behavior: 'smooth'
  });
})
