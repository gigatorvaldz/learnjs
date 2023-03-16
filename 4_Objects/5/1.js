let someObj = {}

function A() { return someObj }
function B() { return someObj }

alert( new A() == new B() )