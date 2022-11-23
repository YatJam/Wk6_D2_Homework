const Park = function (name, ticketPrice) {
    this.name = name
    this.ticketPrice = ticketPrice
    this.dinosaurCollection = []
}

Park.prototype.parkCollection = function () {
    return this.dinosaurCollection.length;
}

Park.prototype.addDinosaur = function (dinosaur) {
    this.dinosaurCollection.push(dinosaur);
}

Park.prototype.removeDinosaur = function () {
    this.dinosaurCollection.pop();
}

Park.prototype.mostVistors = function () {
    this.dinosaurCollection.sort(function(a, b) {
        return b.guestsAttractedPerDay-a.guestsAttractedPerDay
    })
    return this.dinosaurCollection[0]
 }

 Park.prototype.findBySpecies = function (specie) {
    let dinosaurBySpecies = [];
    for (const dino of this.dinosaurCollection){
        if (dino.species == specie) {
            dinosaurBySpecies.push(dino);
        }
        
    }
    return dinosaurBySpecies
 }

 Park.prototype.totalVisitorsByDay = function () {
    let dailyVisitors = 0;
  
    for (const visitors of this.dinosaurCollection) {
      dailyVisitors += visitors.guestsAttractedPerDay;
    }
  
    return dailyVisitors;
  };

  Park.prototype.totalVisitorsByYear = function () {
    let yearlyVisitors = 0;
    yearlyVisitors = (this.totalVisitorsByDay() * 365);
    return yearlyVisitors
  }

  Park.prototype.annualRevenue = function () {
    let revenue = 0;
    revenue = (this.totalVisitorsByYear() * 40);
    return revenue
  }


module.exports = Park;