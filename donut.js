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
    //loop through each hour from 7am - 6pm, 12 hours
    for(var i = 0; i < 12; i++) {
      // donut demand per hour
      perHourDemand = (Math.floor(Math.random() * (this.maximum - this.minimum)) + this.minimum) * this.average;
      total += perHourDemand; //hourly total
      console.log(perHourDemand);
    }
    console.log(total);
  };
}

//instantiate new DonutShop location objects
var downtownDonutShop = new DonutShop("Downtown", 8, 43, 4.50);
var capitolHillDonutShop = new DonutShop("Capitol Hill", 4, 37, 2.00);
var southLakeUnionDonutShop = new DonutShop("South Lake Union", 9, 23, 6.33);
var wedgewoodDonutShop = new DonutShop("Wedgewood", 2, 28, 1.25);
var ballardDonutShop = new DonutShop("Ballard", 8, 58, 3.75);

// hours of operation in an array
var hours = ["Location", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"];

// create table with hours of operation
var donutTable = document.createElement('table');
var row = document.createElement('tr');
hours.forEach(function(hour) {
  var td1 = document.createElement('td');
  td1.textContent = hour;
  row.appendChild(td1);
  donutTable.appendChild(row);
})
document.body.appendChild(donutTable);







