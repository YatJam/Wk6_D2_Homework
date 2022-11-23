const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  
  let park;
  let dino1;
  let dino2;
  let dino3;
  let dino4;

  beforeEach(function () {
    park = new Park('Crab Town', 40, []);
    dino1 = new Dinosaur('t-rex', 'carnenvore', 50);
    dino2 = new Dinosaur('velocoraptor', 'carnevore', 40);
    dino3 = new Dinosaur('velocoraptor', 'carnevore', 40);
    dino4 = new Dinosaur('tricerotops', 'herbevore', 30);

  })

  it('should have a name', function (){
    const actual = park.name;
        assert.strictEqual(actual, 'Crab Town');
  });

  it('should have a ticket price', function (){
    const actual = park.ticketPrice; // Act
        assert.strictEqual(actual, 40);
  });

  it('should have a collection of dinosaurs', function (){
    const actual = park.parkCollection(); // Act
    assert.strictEqual(actual, 0);
  });

  it('should be able to add a dinosaur to its collection', function (){
      park.addDinosaur(dino1);
      const actual = park.parkCollection(); // Act
     assert.strictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function (){
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.removeDinosaur();
    const actual = park.parkCollection(); // Act
   assert.strictEqual(actual, 1);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function (){
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    park.addDinosaur(dino4);
    const actual = park.mostVistors(); // Act
   assert.strictEqual(actual, dino1);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    let specie = 'velocoraptor';
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    park.addDinosaur(dino4);
    const actual = park.findBySpecies(specie); // Act
   assert.deepStrictEqual(actual, [dino2, dino3]);

  });

  it('should be able to calculate the total number of visitors per day', function () {
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    park.addDinosaur(dino4);
    const actual = park.totalVisitorsByDay(); // Act
   assert.strictEqual(actual, 160);
  });

  it('should be able to calculate the total number of visitors per year', function () {
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    park.addDinosaur(dino4);
    const actual = park.totalVisitorsByYear(); // Act
   assert.strictEqual(actual, 58400);
  });

  it('should be able to calculate total revenue for one year', function () {
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    park.addDinosaur(dino4);
    const actual = park.annualRevenue(); // Act
   assert.strictEqual(actual, 2336000);
  });

});
