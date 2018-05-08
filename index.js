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


  trips(){
    store.trips.filter(function(trip){return trip.driverId === this.id})
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

let tripId = 0;

class Trip {

  constructor(){
    this.id = ++tripId
    store.trips.push(this)
  }
}
