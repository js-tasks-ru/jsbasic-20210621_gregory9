function camelize(str) {
  let arr = str.split('-');  
  let arrTemp = [];
  arrTemp.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    arrTemp.push(arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1));
  }

  let strNew = arrTemp.join('');
  //console.log(strNew);
  return strNew;
}
