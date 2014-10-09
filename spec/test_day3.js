// Tests
var Car = require("../lab_day3");
var expect = require("chai").expect;

var myCar;

  beforeEach(function(){
    myCar = new Car("toyota","matrix","red");{}
  });


describe("Car", function() {
  it("should match the make of the car", function(){
    expect(myCar.make).to.equal("toyota");
  });
  it("should match the model of the car", function(){
    expect(myCar.model).to.equal("matrix");
  });
  it("should match the year of the car", function(){
    expect(myCar.year).to.equal(2014);
  });
  it("should match the color of the car", function(){
    expect(myCar.color).to.equal("red");
  });



  describe("#sale", function() {
    it("should add currentOwner to previousOwner", function(){
       myCar.sale("john");
      expect(myCar.previousOwners).to.eql(["manufacturer"]);
    });
    it("should add newOwner to currentOwner", function(){
       myCar.sale("john");
      expect(myCar.currentOwner).to.eql("john");
    });
  });

  describe("#paint", function() {
    it("should not have the color red", function(){
      myCar.paint("blue");
      expect(myCar.color).not.to.equal("red");
    });
  });

  describe("#start", function() {
    it("should change the state to true", function(){
      myCar.start();
      expect(myCar.state).to.equal(true);
    });
  });

  describe("#off", function() {
    it("should... ", function(){
      myCar.off();
      expect(myCar.state).to.equal(false);
    });
  });

  describe("#driveTo", function() {
    it("should return true", function(){
      myCar.start();
      expect(myCar.driveTo("Austin")).to.eql(true);
    });
  });

  describe("#park", function() {
    it("should return true", function(){
      expect(myCar.park()).to.eql(true);
    });
  });
});