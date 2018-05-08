class Driver {

  let idCounter = 0;

  constructor(name){
    this.name = name
    this.id = ++idCounter
  }

}
