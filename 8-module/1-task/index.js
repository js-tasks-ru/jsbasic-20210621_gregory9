import createElement from '../../assets/lib/create-element.js';

export default class CartIcon {
  constructor() {
    this.render();

    this.addEventListeners();
  }

  render() {
    this.elem = createElement('<div class="cart-icon"></div>');
  }

  update(cart) {
    if (!cart.isEmpty()) {
      this.elem.classList.add('cart-icon_visible');

      this.elem.innerHTML = `
        <div class="cart-icon__inner">
          <span class="cart-icon__count">${cart.getTotalCount()}</span>
          <span class="cart-icon__price">€${cart.getTotalPrice().toFixed(2)}</span>
        </div>`;

      this.updatePosition();

      this.elem.classList.add('shake');
      this.elem.addEventListener('transitionend', () => {
        this.elem.classList.remove('shake');
      }, { once: true });

    } else {
      this.elem.classList.remove('cart-icon_visible');
    }
  }

  addEventListeners() {
    document.addEventListener('scroll', () => this.updatePosition());
    window.addEventListener('resize', () => this.updatePosition());
  }

  updatePosition() {
    let offsetWidthCart = this.elem.offsetWidth;
    //console.log(offsetWidthCart);
    let offsetHeightCart = this.elem.offsetHeight;
    //console.log(offsetHeightCart);
    /* if (offsetWidthCart && offsetHeightCart) {
      console.log('Cart is visible!');
    } else {
      console.log('Cart is NOT visible!');
    } */

    let topCoordCart = this.elem.getBoundingClientRect().top; // Координаты относительно окна: getBoundingClientRect
    //console.log(topCoordCart);
    let pageYOffset = window.pageYOffset;
    //console.log(pageYOffset); // Текущая прокрутка сверху:

    let initialTopCoord = this.elem.getBoundingClientRect().top + window.pageYOffset;  // текущая Y-координата относительно окна + текущая прокрутка
    //console.log(initialTopCoord);

    if (pageYOffset > topCoordCart) {
      /* this.elem.style.position = 'fixed';
      let containerElem = document.querySelector('.container');
      //console.log(containerElem);
      let containerElemRight = containerElem.getBoundingClientRect().right + 20;
      console.log(containerElemRight);

      let windowWidth = document.documentElement.clientWidth;
      //console.log(windowWidth);
      let marginCartRigth = document.documentElement.clientWidth - this.elem.offsetWidth - 10;
      console.log(marginCartRigth);

      let leftIndent = Math.min(containerElemRight, marginCartRigth) + 'px';
      console.log(leftIndent); */

      // весь код что выше можно заменить строками ниже
      let leftIndent = Math.min(
        document.querySelector('.container').getBoundingClientRect().right + 20,
        document.documentElement.clientWidth - this.elem.offsetWidth - 10
      ) + 'px'

      Object.assign(this.elem.style, {
        position: 'fixed',
        top: '50px',
        zIndex: 1e3,
        right: '10px',
        left: leftIndent
      });


    } else {
      //this.elem.style.position = 'absolute';

      Object.assign(this.elem.style, {
        position: '',
        top: '',
        left: '',
        zIndex: ''        
      });
    }

    let isMobile = document.documentElement.clientWidth <= 767;
    console.log(isMobile);

    if (isMobile) {
      Object.assign(this.elem.style, {
        position: '',
        top: '',
        left: '',
        zIndex: ''        
      });
    }
  }
}
