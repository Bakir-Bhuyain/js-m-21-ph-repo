//12 inch = 1 feet

function inchToFeet(inch){
      const feet  = inch / 12;
      return feet ;
}

const shuvoHeight = inchToFeet(75);
// console.log(shuvoHeight);

function inchToFeet2(inch){
      const feetFraction = inch / 12;
      const feetNumber = parseInt(feetFraction);
      const inchReamining = inch%12;
      const result = feetNumber + 'ft' + inchReamining + 'inch.';
      return result;
}

const shuvoHeight2 = inchToFeet2(75);
// console.log(shuvoHeight2);



//mile to km
function mileToKilometer (mile){
      const kilo = mile * 1.60934;
      return kilo;
}
      console.log(mileToKilometer(3));

//kilo to mile
function kilometerToMile(kilo){
      const mile = kilo / 0.621311;
      return mile;
}
      console.log(kilometerToMile(5));
