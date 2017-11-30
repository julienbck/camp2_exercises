// See Sparta courses for the exercise summary
const car = {
  speedOfCar : 0,
  TimeOfTravel : 0,
  DistanceTraveled : 0,
  start : function() {
    this.speedOfCar = 0;
    this.TimeOfTravel = 0;
    this.DistanceTraveled = 0;
    return this;
  } ,
  changeSpeed: function(speedNumberInKmH){
    this.speedOfCar = speedNumberInKmH;
    return this;
  } ,
  drive: function (minutes){
    this.TimeOfTravel = minutes;
    this.DistanceTraveled = this.DistanceTraveled + (this.speedOfCar * (this.TimeOfTravel/60));
    return this;
  } ,
  showDistance: function(){
   console.log(this.DistanceTraveled + " Km");
  }
}

car.start().changeSpeed(130).drive(42).showDistance();
module.exports = car;
