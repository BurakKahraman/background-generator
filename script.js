const array = [1,2,10,16];
const double =[];

array.forEach( (num) => {
  double.push(num * 2);
 });
console.log("forEach loop double",double);


const mapArray = array.map( (num) => {
  return num *2 ;
});

const array1 = [[0,1],[2,3],[4,5]];
const flattened = array1.reduce((accumulator,array) => {
  return accumulator.concat(array);
},[]);

console.log("1");
debugger;
setTimeout( () => {
console.log("2");

},0);
debugger;
for(i=3;i<10;i++){
console.log(i);
}

debugger;
 console.log(i)
debugger;

const c = (num) => {
  return num*2;
}

c(3);

console.log(c(3));
