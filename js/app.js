// TUESDAY REFACTOR
var timeHr = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];

var pikeEl = document.createElement('h2');
pikeEl.textContent = 'Pike Place';
document.body.appendChild(pikeEl);
// Pike Place

 function Store(name, minHr, maxHr, avgCups, pounds) {
   this.name = name;
   this.minHr = minHr;
   this.maxHr = maxHr;
   this.avgCups = avgCups;
   this.pounds = pounds;
   this.hourlyCust = [];
   this.hourlyCups = [];
   this.cupsBeansLbs = [];
   this.totalBeans = [];
   this.go = [];

   this.hourlyCustomers = function() {
      for (var i = 0; i < timeHr.length; i++){
         this.hourlyCust[i] = (Math.floor((Math.random() * (this.maxHr - this.minHr + 1)) + this.minHr));
         console.log(this.hourlyCust[i] + ' customers this hour.');
     }
  };
   this.generateHourlyCups = function() {
      for (var i = 0; i < timeHr.length; i++) {
        this.hourlyCups[i] = Math.floor(this.avgCups * this.hourlyCust[i]);
        //console.log(this.hourlyCups[i] + ' cups needed per hour');
        this.cupsBeansLbs[i] = (this.hourlyCups[i] / 20);
        //console.log(this.cupsBeansLbs[i] + ' pounds for cups');
        this.go[i] = this.hourlyCust[i] * this.pounds;
        //console.log(this.go[i] + ' pounds needed to-go');
        //console.log(this.cupsBeansLbs[i] + ' Lbs of customer')
        this.totalBeans[i] = this.go[i] + this.cupsBeansLbs[i];
        //console.log(this.totalBeans[i] + ' total');
      }
    }
  }
  //  pikePlace.hourlyCustomers();
  //  pikePlace.generateHourlyCups();
  var pike = new Store('Pike Place', 14, 55, 1.2, 3.7);
  var hill = new Store('Capitol Hil', 32, 48, 3.2, 0.4);
  var library = new Store('Seattle Public Library', 49, 75, 2.6, 0.2);
  var lake = new Store('South Lake Union', 35, 88, 1.3, 3.7);
  var air = new Store('Sea-Tac Airport', 68, 124, 1.1, 2.7);
  var site = new Store('Website Sales', 3, 6, 0, 6.7);

  //
  var createTable = function() {
    var tableBody = document.getElementById('tableOne');
    var rowOne = document.createElement('tr');
    var cellOne = document.createElement('th');
    cellOne.textContent = 'Name:';
    rowOne.appendChild(cellOne);
    tableBody.appendChild(rowOne);

    var rowThree = document.createElement('tr');
    var cellThree = document.createElement('th');
    cellThree.textContent = 'Pike Place';
    rowThree.appendChild(cellThree);
    tableBody.appendChild(rowThree);

    var rowFour = document.createElement('tr');
    var cellFour = document.createElement('th');
    cellFour.textContent = 'Capitol Hlil';
    rowFour.appendChild(cellFour);
    tableBody.appendChild(rowFour);


    for (var i = 0; i < timeHr.length; i++) {
      var cell = document.createElement('th');
      cell.textContent = timeHr[i];
      rowOne.appendChild(cell);
    }

    for (var i = 0; i < timeHr.length; i++ ) {
      var cellBeans = document.createElement('th');
      cellBeans.textContent = this.totalBeans;
      var rowTwo = document.createElement('th');
      rowTwo.appendChild(cellBeans);
    }
  }
createTable();

 // var dotEl = document.createElement('li');
 // dotEl.textContent = timeHr[j] + ': ' + Math.round(this.totalBeans[j]) + ' lbs   ' + ' [' + this.hourlyCust[j] + ' customers, ' + this.hourlyCups[j] + ' cups, ' + ' (' + this.cupsBeansLbs[j] + ' lbs), ' + Math.round(this.go[j]) + ' lbs to-go' + ']';
 // document.body.appendChild(dotEl);
