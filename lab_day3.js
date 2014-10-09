
function Car(make, model, color){
	this.make = make;
	this.model = model;
	this.year = new Date().getFullYear();
  this.color = color;
	this.state = false;
  this.previousOwners = [];
  this.currentOwner = "manufacturer";
}


Car.prototype.sale = function(newOwner){
  this.previousOwners.push(this.currentOwner);
  this.currentOwner = newOwner;
};

Car.prototype.paint = function(newColor){
  this.color = newColor;
};

Car.prototype.start = function(){
  this.state = true;
};

Car.prototype.off = function() {
  this.state = false;
};

Car.prototype.driveTo = function(destination){
  if(this.state === true){
  console.log("driving to " + destination);
    return true;
  }
};

Car.prototype.park = function(){
  if(this.state === false){
  console.log("parked!");
  return true;
  }
};

// var car1 = new Car(honda,civic,2014,off,blue);{}

	module.exports=Car;	