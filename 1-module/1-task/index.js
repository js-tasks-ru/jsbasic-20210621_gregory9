function factorial(n) {
  let resultF = 1;
  if (n == 0 || n == 1) {
    return resultF = 1;
  }

  for (let i = n; i > 1; i--) {
    resultF *= i;
  }
  return resultF;
}