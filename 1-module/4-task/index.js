function checkSpam(str) {
  let lowerStr = str.toLowerCase();  

  if (lowerStr.includes('1xbet') || lowerStr.includes('xxx')) {
    return true;
  } else {
    return false;
  }
}

checkSpam('1XbeT now');  // === true
checkSpam('free xxxxx');  // === true
checkSpam('innocent rabbit'); // === false
