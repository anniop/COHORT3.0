const arr = [1, 2, 3, 4, 5];

function filterlogic(n) {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
const ans = arr.filter(filterlogic);
console.log(ans);
