var array = [];

function forLoop(array) {
    for (var i = 0; i < 25; i++) {
      var endSentence = 's.'
      if (i == 1) endSentence = "."
      array.push("I am ${i} strange loop${endSentence}")
    }
    return array
}
function whileLoop(n) {
  while (n>0) {
    console.log(--n)
  }
  return 'done'
}
function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5;
  }
//  do {
//    array.slice(0, array.length - 1);
//  } while array.length > 0 && (maybeTrue())
  return array;
}
