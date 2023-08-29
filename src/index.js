module.exports = function reverse (n) {
  let str = n.toString();
  let arr = str.split('');
  let arrWithoutMinus = arr.map(function(item) {
    if ( item !== '-') {
        return item;
    }
  })
  let reverseArr = arrWithoutMinus.reverse();
  let newStr = reverseArr.join('');
  return +newStr;
}
