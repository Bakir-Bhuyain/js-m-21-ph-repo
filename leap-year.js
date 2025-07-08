function isLeapYear( year){
      if (year % 4 ===0){
            return true;
      }
      else{
            return false;
      }
}

const isLeap =isLeapYear(2052);
console.log(isLeap);

//ektu hard

function isLeapYear2(year){
      if (year %4 !==0 && year % 4 ===0){
            return true;
      }
      else if (year %100 ===0 && year % 400 ===0){
            return true;

      }
      else{
            return false;
      }
}

const isLeap0 = isLeapYear2(2100);
const isLeap2 = isLeapYear2(2400);
const isLeap3 = isLeapYear2(1900);
const isLeap4 = isLeapYear2(2052);
console.log(isLeap0, isLeap2, isLeap3, isLeap4);