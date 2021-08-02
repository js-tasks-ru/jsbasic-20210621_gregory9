import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor(html) {
    this.html = html;    
    this.render();
    this.open();
    this.addEventListeners();
  }

  render() {
    this.elem = createElement(`
      <div class="modal">      
        <div class="modal__overlay"></div>
        <div class="modal__inner">

          <div class="modal__header">            
            <button type="button" class="modal__close">
              <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
            </button>
            <h3 class="modal__title"></h3>
          </div>
          <div class="modal__body"></div>

        </div>
      </div>    
    `)
  }

  open() {
    document.querySelector('.container').append(this.elem);
    document.querySelector('body').classList.add('is-modal-open');
  }

  close() {
    document.querySelector('body').classList.remove('is-modal-open');
    document.querySelector('.modal').remove(this.elem);
  }  

  sub(ref) {
    return this.elem.querySelector(`.modal__${ref}`);
  }

  setTitle(modalTitile) {    
    this.sub('title').append(modalTitile);
  }

  setBody(html) {
    console.log('setBody has done!');
    let modalBody = document.createElement('div');
    modalBody.innerHTML = `<b>тут содержится тело модального окна<b/>`;

    this.sub('body').append(modalBody);    
  }

  addEventListeners() {
    this.elem.onclick = ( {target} ) => {
      let buttonClose = target.closest('.modal__close');

      if (buttonClose) {
        this.close();
      }
    };


    document.addEventListener('keydown', function(e) {   
      if (e.code === 'Escape') {
      // так работает, но повторение кода и консоли ошибка
      document.querySelector('body').classList.remove('is-modal-open');
      document.querySelector('.modal').remove(this.elem);

      //close();   // так закрывает всю вкладку в браузере
      //this.close();   // так не работает
     }
    });
  } 
}