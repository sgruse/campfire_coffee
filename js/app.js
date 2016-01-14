// TUESDAY REFACTOR
var timeHr = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];

// var pikeEl = document.createElement('h2');
// pikeEl.textContent = 'Pike Place';
// document.body.appendChild(pikeEl);
// // Pike Place

 function Store(name, minHr, maxHr, avgCups, pounds) {
   this.loc = name;
   this.minHr = minHr;
   this.maxHr = maxHr;
   this.avgCups = avgCups;
   this.pounds = pounds;
   this.hourlyCust = [];
   this.hourlyCups = [];
   this.cupsBeansLbs = [];
   this.totalBeans = [];
   this.go = [];
   this.combined = 0;
   this.hourlyCustomers = function() {
      for (var i = 0; i < timeHr.length; i++){
         this.hourlyCust[i] = (Math.floor((Math.random() * (this.maxHr - this.minHr + 1)) + this.minHr));
         console.log(this.hourlyCust[i] + ' customers this hour.');
     }
  };

   this.generateHourlyCups = function() {
     this.hourlyCustomers();
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
  };
    this.totalTotals = function() {
      for ( var i = 0; i < timeHr.length; i++) {
        this.combined += this.totalBeans[i];
        }
    }                                            //TOAL BEANS FOR GRAPH

  }
  var pike = new Store('Pike Place Market', 14, 55, 1.2, 3.7);
  var hill = new Store('Capitol Hil', 32, 48, 3.2, 0.4);
  var library = new Store('Seattle Public Library', 49, 75, 2.6, 0.2);
  var lake = new Store('South Lake Union', 35, 88, 1.3, 3.7);
  var air = new Store('Sea-Tac Airport', 68, 124, 1.1, 2.7);
  var site = new Store('Website Sales', 3, 6, 0, 6.7);

  pike.generateHourlyCups();
  hill.generateHourlyCups();
  library.generateHourlyCups();
  lake.generateHourlyCups();
  air.generateHourlyCups();
  site.generateHourlyCups();

  var createTable = function() {
    var section = document.getElementById('table');
    var table = document.createElement('table');
    var times = ['location', '6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm', 'total']
    var row1 = document.createElement('tr');
    // CREATE TIMES
    for (var i = 0; i < times.length; i++) {
      var tableHead = document.createElement('th');
      tableHead.textContent = times[i];
      row1.appendChild(tableHead);
    }
    table.appendChild(row1);

    // CREATE LOCATION
    var places = [pike, hill, library, lake, air, site];
    for (var m = 0; m < places.length; m++) {
      var row2 = document.createElement('tr');
      var pl = document.createElement('th');
      pl.textContent = places[m].loc;
      row2.appendChild(pl);

      // CREATES TOTAL BEANS PER HOUR
      for (var p = 0; p < timeHr.length; p++) {
        var allTotals = document.createElement('td');
        allTotals.textContent = places[m].totalBeans[p].toFixed(1);
        console.log('hey');
        row2.appendChild(allTotals);
      }
      table.appendChild(row2);
    }
    // table.appendChild(row3);
    section.appendChild(table);
}

createTable();
