// Write your solution here!
const cats = [
    "Milo",
     "Otis",
    "Garfield"
]
function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat() {
    cats.pop()
}
// destructivelyRemoveLastCat();
// console.log(cats);

function destructivelyRemoveFirstCat() {
    cats.shift()
}
function appendCat(name) {
    const copyOfcats = [...cats]
    copyOfcats.push(name)
    return copyOfcats
}
function prependCat(name) {
    const copyOfcats = [...cats]
    copyOfcats.unshift(name)
    return copyOfcats
}
function removeLastCat() {
    const copyOfcats = [...cats]
    copyOfcats.pop()
    return copyOfcats
}
function removeFirstCat() {
    const copyOfcats = [...cats]
    copyOfcats.shift()
    return copyOfcats
}
