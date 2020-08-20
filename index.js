var kittens = ["Milo", "Otis", "Garfield"]
 //define your array here
function destructivelyAppendKitten(Ralph) {
  kittens.push(Ralph)
  return kittens;
}
function destructivelyPrependKitten(Ralph){
  kittens.unshift(Ralph)
}
function destructivelyRemoveLastKitten(Garfield) {
  kittens.pop(Garfield)
}
function destructivelyRemoveFirstKitten(Milo ){
  kittens.shift(Milo)
}
function appendKitten (Jeff) {
  var i = kittens.push(Jeff)
  return i
}
// Add your functions and code here
