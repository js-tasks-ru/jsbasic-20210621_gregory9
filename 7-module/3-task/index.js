import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.render();

    this.elem.addEventListener('click', (event) => this.onClick(event));
    //this.elem.addEventListener('click', ({ target }) => this.onClick(target));

    //this.addEventListeners();
  }

  render() {
    this.elem = createElement(`
      <div class="slider">        
        <div class="slider__thumb">
          <span class="slider__value">0</span>
        </div>
        <div class="slider__progress"></div>
        <div class="slider__steps"></div>
      </div>
    `);

    for (let i = 0; i < this.steps; i++) {
      let spanElem = createElement(`
        <span> </span>
      `);

      if ( i == 0) {
        spanElem.classList.add('slider__step-active');
      }

      this.elem.querySelector('.slider__steps').append(spanElem);
    }

  }

  sub(ref) {
    return this.elem.querySelector(`.slider__${ref}`);
  }

  /* onClick(target) {
    // if (event.target.closest('span')) {
      //event.preventDefault();
      //console.log('dfgdffgdfg');
    } 
    console.log('event = ' + target);
    console.log('event.target = ' + target);
  } */

  onClick(event) {
    if ( event.target.tagName != 'SPAN' ) {
      return;
    }

    let spanElem = event.target.closest('span');

    /* console.log('event = ' + event.target);
    console.log('event.target = ' + event.target); */
    console.log('event = ' + spanElem);
    //console.log('event.target = ' + event.target);

  }
  




  






}
