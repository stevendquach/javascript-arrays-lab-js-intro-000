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
function destructivelyRemoveFirstKitten(Milo){
  kittens.shift(Milo)
}
function appendKitten (Broom) {
  var i = [...kittens, Broom]
  return i ;
}
function prependKitten(Jeff) {
  var y = [Jeff, ...kittens]
  return y
}
function removeLastKitten() {
  var a = kittens.pop()
  return a
}
// Add your functions and code here
