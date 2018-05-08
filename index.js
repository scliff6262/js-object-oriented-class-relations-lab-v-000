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
    return store.trips.filter(function(trip){return trip.driverId === this.id}.bind(this))
  }

  passengers(){
    return this.trips().map(function(trip){return trip.passenger()})
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

  constructor(driver, passenger){
    this.id = ++tripId
    this.driverId = driver.id
    this.passengerId = passenger.id
    store.trips.push(this)
  }

  driver(){
    const driver = store.drivers.filter(function(driver){return driver.id === this.driverId}.bind(this))
    return driver[0]
  }

  passenger(){
    const passenger = store.passengers.filter(function(passenger){return passenger.id === this.passengerId}.bind(this))
    return passenger[0]
  }
}
