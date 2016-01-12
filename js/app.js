
var timeHr = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];

var pikeEl = document.createElement('h2');
pikeEl.textContent = 'Pike Place';
document.body.appendChild(pikeEl);
// Pike Place
var randomNumb;
var totalCupsHr;
var poundToCups;
var totalPoundsHr;
var totalCoffee;
for (var j = 0; j < timeHr.length; j++) {
 var pikePlace = {
   minHr: 14,
   maxHr: 55,
   cups: 1.2,
   pounds: 3.7,
   getNumb: function() {
     randomNumb = Math.floor((Math.random() * (this.maxHr - this.minHr + 1)) + this.minHr);
     console.log(randomNumb + ' customers this hour.');
     totalCupsHr = Math.floor(randomNumb * this.cups);
     console.log(totalCupsHr + ' cups sold this hour.');
     poundToCups = totalCupsHr / 20;
     console.log(poundToCups + ' cups sold this hour (in pounds).');
     totalPoundsHr = Math.floor(randomNumb * this.pounds);
     console.log(totalPoundsHr + ' pounds of coffee sold this hour.');
     totalCoffee = Math.floor(poundToCups + totalPoundsHr);
     console.log(totalCoffee + ' total pounds of coffee sold this hour');
   }
 }
 pikePlace.getNumb();
 var dotEl = document.createElement('li');
 dotEl.textContent = timeHr[j] + ': ' + totalCoffee + ' lbs [' + randomNumb + ' customers, ' + totalCupsHr + ' cups (' + poundToCups + ' lbs), ' + totalPoundsHr + ' lbs-to-go]';
 document.body.appendChild(dotEl);
}


// var timeHr = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];

var capEl = document.createElement('h2');
capEl.textContent = 'Capitol Hill';
document.body.appendChild(capEl);
// Pike Place
var randomNumb;
var totalCupsHr;
var poundToCups;
var totalPoundsHr;
var totalCoffee;
for (var j = 0; j < timeHr.length; j++) {
 var capitolHill = {
   minHr: 32,
   maxHr: 48,
   cups: 3.2,
   pounds: 0.4,
   getNumb: function() {
     randomNumb = Math.floor((Math.random() * (this.maxHr - this.minHr + 1)) + this.minHr);
     console.log(randomNumb + ' customers this hour.');
     totalCupsHr = Math.floor(randomNumb * this.cups);
     console.log(totalCupsHr + ' cups sold this hour.');
     poundToCups = totalCupsHr / 20;
     console.log(poundToCups + ' cups sold this hour (in pounds).');
     totalPoundsHr = Math.floor(randomNumb * this.pounds);
     console.log(totalPoundsHr + ' pounds of coffee sold this hour.');
     totalCoffee = Math.floor(poundToCups + totalPoundsHr);
     console.log(totalCoffee + ' total pounds of coffee sold this hour');
   }
 }
 capitolHill.getNumb();
 var dotEl = document.createElement('li');
 dotEl.textContent = timeHr[j] + ': ' + totalCoffee + ' lbs [' + randomNumb + ' customers, ' + totalCupsHr + ' cups (' + poundToCups + ' lbs), ' + totalPoundsHr + ' lbs-to-go]';
 document.body.appendChild(dotEl);
}

var libEl = document.createElement('h2');
libEl.textContent = 'Seattle Public Library';
document.body.appendChild(libEl);
// Pike Place
var randomNumb;
var totalCupsHr;
var poundToCups;
var totalPoundsHr;
var totalCoffee;
for (var j = 0; j < timeHr.length; j++) {
 var library = {
   minHr: 49,
   maxHr: 75,
   cups: 2.6,
   pounds: 0.2,
   getNumb: function() {
     randomNumb = Math.floor((Math.random() * (this.maxHr - this.minHr + 1)) + this.minHr);
     console.log(randomNumb + ' customers this hour.');
     totalCupsHr = Math.floor(randomNumb * this.cups);
     console.log(totalCupsHr + ' cups sold this hour.');
     poundToCups = totalCupsHr / 20;
     console.log(poundToCups + ' cups sold this hour (in pounds).');
     totalPoundsHr = Math.floor(randomNumb * this.pounds);
     console.log(totalPoundsHr + ' pounds of coffee sold this hour.');
     totalCoffee = Math.floor(poundToCups + totalPoundsHr);
     console.log(totalCoffee + ' total pounds of coffee sold this hour');
   }
 }
 library.getNumb();
 var dotEl = document.createElement('li');
 dotEl.textContent = timeHr[j] + ': ' + totalCoffee + ' lbs [' + randomNumb + ' customers, ' + totalCupsHr + ' cups (' + poundToCups + ' lbs), ' + totalPoundsHr + ' lbs-to-go]';
 document.body.appendChild(dotEl);
}

var lakeEl = document.createElement('h2');
lakeEl.textContent = 'South Lake Union';
document.body.appendChild(lakeEl);
// Pike Place
var randomNumb;
var totalCupsHr;
var poundToCups;
var totalPoundsHr;
var totalCoffee;
for (var j = 0; j < timeHr.length; j++) {
 var lake = {
   minHr: 35,
   maxHr: 88,
   cups: 1.3,
   pounds: 3.7,
   getNumb: function() {
     randomNumb = Math.floor((Math.random() * (this.maxHr - this.minHr + 1)) + this.minHr);
     console.log(randomNumb + ' customers this hour.');
     totalCupsHr = Math.floor(randomNumb * this.cups);
     console.log(totalCupsHr + ' cups sold this hour.');
     poundToCups = totalCupsHr / 20;
     console.log(poundToCups + ' cups sold this hour (in pounds).');
     totalPoundsHr = Math.floor(randomNumb * this.pounds);
     console.log(totalPoundsHr + ' pounds of coffee sold this hour.');
     totalCoffee = Math.floor(poundToCups + totalPoundsHr);
     console.log(totalCoffee + ' total pounds of coffee sold this hour');
   }
 }
 lake.getNumb();
 var dotEl = document.createElement('li');
 dotEl.textContent = timeHr[j] + ': ' + totalCoffee + ' lbs [' + randomNumb + ' customers, ' + totalCupsHr + ' cups (' + poundToCups + ' lbs), ' + totalPoundsHr + ' lbs-to-go]';
 document.body.appendChild(dotEl);
}

var seaEl = document.createElement('h2');
seaEl.textContent = 'Sea-Tac Airport';
document.body.appendChild(seaEl);
// Pike Place
var randomNumb;
var totalCupsHr;
var poundToCups;
var totalPoundsHr;
var totalCoffee;
for (var j = 0; j < timeHr.length; j++) {
 var seaTac = {
   minHr: 68,
   maxHr: 124,
   cups: 1.1,
   pounds: 2.7,
   getNumb: function() {
     randomNumb = Math.floor((Math.random() * (this.maxHr - this.minHr + 1)) + this.minHr);
     console.log(randomNumb + ' customers this hour.');
     totalCupsHr = Math.floor(randomNumb * this.cups);
     console.log(totalCupsHr + ' cups sold this hour.');
     poundToCups = totalCupsHr / 20;
     console.log(poundToCups + ' cups sold this hour (in pounds).');
     totalPoundsHr = Math.floor(randomNumb * this.pounds);
     console.log(totalPoundsHr + ' pounds of coffee sold this hour.');
     totalCoffee = Math.floor(poundToCups + totalPoundsHr);
     console.log(totalCoffee + ' total pounds of coffee sold this hour');
   }
 }
 seaTac.getNumb();
 var dotEl = document.createElement('li');
 dotEl.textContent = timeHr[j] + ': ' + totalCoffee + ' lbs [' + randomNumb + ' customers, ' + totalCupsHr + ' cups (' + poundToCups + ' lbs), ' + totalPoundsHr + ' lbs-to-go]';
 document.body.appendChild(dotEl);
}

var webEl = document.createElement('h2');
webEl.textContent = 'Website Sales';
document.body.appendChild(webEl);
// Pike Place
var randomNumb;
var totalCupsHr;
var poundToCups;
var totalPoundsHr;
var totalCoffee;
for (var j = 0; j < timeHr.length; j++) {
 var webSite = {
   minHr: 3,
   maxHr: 6,
   cups: 0,
   pounds: 6.7,
   getNumb: function() {
     randomNumb = Math.floor((Math.random() * (this.maxHr - this.minHr + 1)) + this.minHr);
     console.log(randomNumb + ' customers this hour.');
     totalCupsHr = Math.floor(randomNumb * this.cups);
     console.log(totalCupsHr + ' cups sold this hour.');
     poundToCups = totalCupsHr / 20;
     console.log(poundToCups + ' cups sold this hour (in pounds).');
     totalPoundsHr = Math.floor(randomNumb * this.pounds);
     console.log(totalPoundsHr + ' pounds of coffee sold this hour.');
     totalCoffee = Math.floor(poundToCups + totalPoundsHr);
     console.log(totalCoffee + ' total pounds of coffee sold this hour');
   }
 }
 webSite.getNumb();
 var dotEl = document.createElement('li');
 dotEl.textContent = timeHr[j] + ': ' + totalCoffee + ' lbs [' + randomNumb + ' customers, ' + totalCupsHr + ' cups (' + poundToCups + ' lbs), ' + totalPoundsHr + ' lbs-to-go]';
 document.body.appendChild(dotEl);
}
