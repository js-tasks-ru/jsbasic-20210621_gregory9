function toggleText() {
  let button = document.querySelector('.toggle-text-button');

  button.onclick = function (event) {

    let text = document.querySelector('#text');    
    
    text.hidden = !text.hidden;
  }
}