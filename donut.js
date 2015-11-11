// object constructor - location, minimum customer per hour,
// maximum customers per hour, average donuts per customer.
function DonutShop (location, minimum, maximum, average) {
  this.location = location;
  this.minimum = minimum;
  this.maximum = maximum;
  this.average = average;
  this.donutDemand = function() {
    var perHourDemand;
    var total = 0;
    for(var i = 0; i < 12; i++) {
      perHourDemand = (Math.floor(Math.random() * (this.maximum - this.minimum)) + this.minimum) * this.average;
      total += perHourDemand;
      console.log(perHourDemand);
    }
    console.log(total);
  };
}
