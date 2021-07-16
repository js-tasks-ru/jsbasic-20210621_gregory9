function initCarousel() {

  let carouselArrowLeft = document.querySelector('.carousel__arrow_left');
  //console.log(carouselArrowLeft);
  let carouselArrowRight = document.querySelector('.carousel__arrow_right');
  //console.log(carouselArrowRight);

  let slides = document.querySelectorAll('.carousel__slide');
  //console.log(slides);

  let carousel__inner = document.querySelector('.carousel__inner');
  let slideMoveWidth = carousel__inner.offsetWidth;

  let i = 0;

  carouselArrowRight.addEventListener('click', function () {

    if (i <= slides.length) {
      ++i;
      carousel__inner.style.transform = `translateX(${slideMoveWidth * i}px)`;
    }


    if (slides[i].dataset.id == 'chicken-springrolls') {
      carouselArrowRigh.style.display = 'none';
    } else {
      carouselArrowRigh.style.display = '';
    }
  })

  carouselArrowLeft.addEventListener('click', function () {

    if (i != 0) {
      --i;
      carousel__inner.style.transform = `translateX(${-slideMoveWidth * i}px)`;
    }


    if (slides[i].dataset.id == 'penang-shrimp') {
      carouselArrowLeft.style.display = 'none';
    } else {
      carouselArrowLeft.style.display = '';
    }
  })


  //console.log(slides);



  /* let carouselArrowLeft = document.querySelector('.carousel__arrow_left');
  //console.log(carousel__arrow_left);
  
  if (carousel__slide.dataset.id == 'penang-shrimp') {
    carouselArrowLeft.style.display = 'none';
  } else {
    carouselArrowLeft.style.display = '';
  }

  let click_left = 0;
  carouselArrowLeft.onclick = function(event) {
    //console.log('onclick at carousel__arrow_left');
    //console.log(event);
    
    

    click_left++;
    console.log(click_left);
    carousel__inner.style.transform = `translateX(${-slideMoveWidth * click_left}px)`;
  }

  
  let carouselArrowRight = document.querySelector('.carousel__arrow_right');
  //console.log(carousel__arrow_right);  
  let click_right = 0;  
  carouselArrowRight.onclick = function(event) {
    //console.log('onclick at carousel__arrow_right');
    
    if (carousel__slide.dataset.id == 'chicken-springrolls') {
      carouselArrowRigh.style.display = 'none';
    } else {
      carouselArrowRigh.style.display = '';
    }


    click_right++;
    console.log(click_right);
    carousel__inner.style.transform = `translateX(${slideMoveWidth * click_right}px)`;
  }
  
  let carousel__inner = document.querySelector('.carousel__inner');
  //console.log(carousel__inner);
  //console.log('carousel__inner.offsetWidth = ' + carousel__inner.offsetWidth);
  let slideMoveWidth = carousel__inner.offsetWidth;
  console.log('slideMoveWidth = ' + slideMoveWidth);
  //carousel__inner.style.transform = 'translateX(-300px)';

  // carousel__inner.style.transform = `translateX(${-slideMoveWidth}px)`;

  let carousel__slide = document.querySelector('.carousel__slide');
  console.log(carousel__slide);
  // console.log(carousel__slide.offsetWidth);
  //console.log(carousel__slide.offsetHeight); 
  console.log(carousel__slide.dataset.id);

  console.log();


  console.log(); */
}
