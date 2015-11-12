// object constructor - location, minimum customer per hour,
// maximum customers per hour, and average donuts per customer.
function DonutShop (location, minimum, maximum, average) {
  this.location = location;
  this.minimum = minimum;
  this.maximum = maximum;
  this.average = average;
  this.donutDemand = function() {
    var perHourDemand;
    var total = 0;
    var numHours = hours.length - 1 //minus location cell
    var table = document.getElementsByTagName('table')[0]; //get 1st table
    var row = table.insertRow(1); //insert row starting at index 1
    //insert location to row at cell index 0
    row.insertCell(0).innerHTML = this.location;

    //loop through each hour from 7am - 6pm, 12 hours
    for(var i = 1; i < numHours ; i++) {

      // donut demand per hour
      perHourDemand = (Math.floor(Math.random() * (this.maximum - this.minimum)) + this.minimum) * this.average;
      total += perHourDemand; //hourly total

      // insert perHourDemand to row starting at cell index 1
      row.insertCell(i).innerHTML = perHourDemand;
      console.log(perHourDemand);
    }
    // insert hourly total to row at last cell index number.
    row.insertCell(numHours).innerHTML = total;
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
var hours = ["Location", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "Total"];

// create table with location, hours of operation, and Total headings
var donutTable = document.createElement('table');
var row = document.createElement('tr');
hours.forEach(function(hour) {
  var th = document.createElement('th');
  th.textContent = hour;
  row.appendChild(th);
  donutTable.appendChild(row);
});
// insert table to html body
document.body.appendChild(donutTable);

// call object methods
ballardDonutShop.donutDemand();
wedgewoodDonutShop.donutDemand();
southLakeUnionDonutShop.donutDemand();
capitolHillDonutShop.donutDemand();
downtownDonutShop.donutDemand();








