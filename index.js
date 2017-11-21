const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver() {
  drivers.push("Ralph");
}

function destructivelyPrependDriver(){
  drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver() {
copyDrivers = drivers.slice(0);
return copyDrivers.push(name);
}