let driverId = 0

let store = {
  drivers: [],
  passengers: [],
  trips: []
}

class Driver {

  constructor(name){
    this.name = name
    this.id = ++driverId
    store.drivers.push(this)
  }

}

let passengerId = 0;

class Passenger {

  constructor(name){
    this.name = name
    this.id = ++passengerId
    store.passengers.push(this)
  }
}
