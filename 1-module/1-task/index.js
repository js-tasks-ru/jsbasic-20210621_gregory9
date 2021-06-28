function factorial(n) {
  let resultF = 1;
  if (n == 0 || n == 1) {
    resultF = 1;
  } else {

    for (let i = n; i > 1; i--) {
      resultF *= i;
    }
  }

  return resultF;
}

factorial(0); // 1
factorial(1); // 1
factorial(3); // 6
factorial(5); // 120