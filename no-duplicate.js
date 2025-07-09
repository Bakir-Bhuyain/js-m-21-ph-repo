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
console.log(uniqueArray);