function highlight(table) {
    
  let rows = Array.from(table.rows).slice(1);
  
  for ( let row of rows) {

    if (!row.cells[3].hasAttribute('data-available')) {      
      row.hidden = true;
    } 

    if (row.cells[3].hasAttribute('data-available') 
      && row.cells[3].getAttribute('data-available') == 'true') {       
      row.classList.add('available');
    } else if (row.cells[3].hasAttribute('data-available') 
              && row.cells[3].getAttribute('data-available') == 'false') { 
      row.classList.add('unavailable');
    }

    if (row.cells[2].innerHTML == 'm') {    
      row.classList.add('male');
    } else if (row.cells[2].innerHTML == 'f') {
      row.classList.add('female');
    } 
    
    if (row.cells[1].innerHTML < 18) {
      row.style.cssText = `text-decoration: line-through;`;
    }
  }
}
