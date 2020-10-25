const navbar = document.querySelector("header .pages-wrapper");
const li = document.querySelectorAll("header .pages-wrapper li");
const logo = document.querySelector("header .list-logo");
const customerImg = document.querySelectorAll('.testimonials .thumbnail img');
const carousel = document.querySelector('.testimonials .content-carousel');
const hamburgerIcon = document.querySelector('header .hamburger-icon');
const smallScreenList = document.querySelector('header .pages-wrapper ul');

if(window.innerWidth >= 765){
  window.addEventListener("scroll", () => {
    if (window.pageYOffset <= 140) {
      navbar.style.position = "relative";
      navbar.style.background = "#fff";
      navbar.style.top = "auto";
      navbar.style.boxShadow = 'none';
      li.forEach((list) => {
        list.querySelectorAll("a").forEach((a) => (a.style.color = "#222"));
      });
    } else {
      if (navbar.style.position === "relative") {
        navbar.style.position = "fixed";
        navbar.style.top = "-50px";
        navbar.style.background = "#0066ff";
        navbar.style.boxShadow = '0 -4px 18px rgba(0, 0, 0, 0.6)';
        li.forEach((list) => {
          list.querySelectorAll("a").forEach((a) => (a.style.color = "#fff"));
        });
        logo.style.visibility = "visible";
        logo.style.opacity = "1";
      }
      setTimeout(() => {
        navbar.style.top = "0";
      }, 100);
    }
  });
  
  
  function activeClass(){
    customerImg.forEach(img => {
       img.classList.remove('active')
    })
  }
  
  
  customerImg.forEach(img => {
    img.addEventListener('click', () => {
    activeClass();
    let width = img.getAttribute('data-width')
      carousel.style.left = `-${width}%`;
      img.classList.add('active')
    })
  })
}

hamburgerIcon.addEventListener('click', () => {
  if(smallScreenList.className !== 'active-ul'){
      smallScreenList.classList.add('active-ul');
  }else{
    smallScreenList.classList.remove('active-ul');
  }
})

const bodyRect = document.body.getBoundingClientRect();
const elemRect = document.querySelector('#section-nine .statistics-wrapper').getBoundingClientRect();
let offset = elemRect.top - bodyRect.top - 500;


const homeNumbersCountDown = document.querySelectorAll('#section-nine .statistics-wrapper div');

window.addEventListener('scroll', () => {
    if(window.pageYOffset >= offset){
      if(homeNumbersCountDown[0].firstElementChild.textContent === '0'){
          homeNumbersCountDown.forEach(cl => {
            let count = 0;
            setInterval(() => {
              count++
              if(count <= cl.firstElementChild.getAttribute('data-countdown')){
                cl.firstElementChild.textContent = `${count}${cl.firstElementChild.getAttribute('data-counttext')}`;
              }
            }, 10);
        })
      }
    }
})



