const biriyaniKhor = ['abul', 'babul', 'dabul', 'abul', 'babul']
const numbers = [1, 2, 3, 1, 2, 4, 5, 2, 3, 6];

function noDuplicate (array){
      const unique = [];
      for ( const item of array){
            if (unique.includes(item)===false){
                  unique.push(item);
            }
      }
      return unique;
}
const uniqueArray = noDuplicate(biriyaniKhor);
// console.log(uniqueArray);




const srtArray = ['bakir', 'rakib', 'abdul', 'bakir', 'rakib']
const numArray = [12,12,11,11,23,23,24,24];
function duplicateNo (sortedArray){
      const unique = [];
      for (const item of sortedArray){
            if(unique.includes(item)===false){
                  unique.push(item);
            }
      }
      return unique;
}
const uniqueArr = duplicateNo(numArray);
console.log(uniqueArr)