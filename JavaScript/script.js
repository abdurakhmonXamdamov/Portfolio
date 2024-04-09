window.addEventListener('DOMContentLoaded', function(){
  this.window.addEventListener('scroll', function(){
    const header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 0)
  })

  const menuBtn = document.querySelector('.menu-btn')
  const navBar = document.querySelector('.navigation')
  const navBarItems = this.document.querySelectorAll('.navigation a')

  menuBtn.addEventListener('click', ()=>{
    menuBtn.classList.toggle('active')
    navBar.classList.toggle('active')
  })

  navBarItems.forEach((Items) =>{
      Items.addEventListener('click', ()=>{
        menuBtn.classList.remove('active')
        navBar.classList.remove('active')
      })
  })

  const scrollBtn = document.querySelector('.scrollToTop');
  window.addEventListener('scroll', function() {
    scrollBtn.classList.toggle('passive', window.scrollY > 500)
  })

  scrollBtn.addEventListener('click', ()=>{
    this.document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  })

  this.window.addEventListener('scroll', ()=>{
    let reveals = this.document.querySelectorAll('.reveal')

    for(let i = 0; i<reveals.length; i++){
      let windowHeight = this.window.innerHeight;
      let revealTop = reveals[i].getBoundingClientRect().top;
      let revealPoint = 50;

      if(revealTop < windowHeight - revealPoint){
        reveals[i].classList.add('active')
      }
    }
  })

})