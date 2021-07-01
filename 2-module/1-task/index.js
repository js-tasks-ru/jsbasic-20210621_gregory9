function sumSalary(salaries) {
  for (let salary in salaries) {
    let sum = 0;
    for (let key in salaries) {      

      if (typeof salaries[key] == 'number'
        && isNaN(salaries[key]) !== true
        && isFinite(salaries[key]) == true ) {
        sum += salaries[key];
      }
    }

    return sum;
  }
}
