// TUESDAY REFACTOR
var timeHr = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];

var pikeEl = document.createElement('h2');
pikeEl.textContent = 'Pike Place';
document.body.appendChild(pikeEl);
// Pike Place
for (var j = 0; j < timeHr.length; j++) {
 var pikePlace = {
   name: 'Pike Place',
   minHr: 14,
   maxHr: 55,
   avgCups: 1.2,
   pounds: 3.7,
   hourlyCust: [],
   hourlyCups: [],
   cupsBeansLbs: [],
   totalBeans: [],
   go: [],

   hourlyCustomers: function() {
      for (var i = 0; i < timeHr.length; i++){
         this.hourlyCust[i] = (Math.floor((Math.random() * (this.maxHr - this.minHr + 1)) + this.minHr));
         console.log(this.hourlyCust[i] + ' customers this hour.');
     }
  },
   generateHourlyCups: function() {
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
      var dotEl = document.createElement('li');
      dotEl.textContent = timeHr[j] + ': ' + Math.round(this.totalBeans[j]) + ' lbs   ' + ' [' + this.hourlyCust[j] + ' customers, ' + this.hourlyCups[j] + ' cups, ' + ' (' + this.cupsBeansLbs[j] + ' lbs), ' + Math.round(this.go[j]) + ' lbs to-go' + ']';
      document.body.appendChild(dotEl);
    }
  }
   pikePlace.hourlyCustomers();
   pikePlace.generateHourlyCups();
 }

 
