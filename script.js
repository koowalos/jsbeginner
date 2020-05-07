function foo() {
  var a = 1;

  if (a >= 1) {
    let b = 2;

    while (b < 5) {
      let c = b * 2;
      b++;

      console.log(a + c);
    }
  }
}

foo();

function foo() {
  var a = 1;

  if (a >= 1) {
    let b;

    for (b = 2; b < 5; b++) {
      let c = b * 2;
      console.log(a + c);
    }
  }
}

foo();
