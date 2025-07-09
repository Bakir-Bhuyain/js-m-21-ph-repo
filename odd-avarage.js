/**
 * function takes an array as parameter
 * give me the average of a odd numbers in the array
*/


function oddAverage(numbers){
      const odds = [];
      for (const number of numbers){
            if ( number % 2 ===1){
      // console.log(number);
      odds.push(number);

            }
      }
      /* odds is the array that contains only the odd numbers */
      // console.log(odds);
      let sum = 0;
      for (const number of odds){
            sum = sum + number;
      }
      const count = odds.length;
      console.log(sum, count);
      const avg = sum/count ;
      return avg;
}

const numbers = [43, 23, 34, 53, 53, 64, 22];
const avg = oddAverage(numbers);
console.log('Average of the odd numbers is ', avg);