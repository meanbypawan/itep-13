function f1(l){
    return function(w){
      return function(h){
        return l*w*h;
      }
    }
}
const result = f1(2)(3)(4); // Currying
/*
const f2 = f1(2);
const f3 = f2(3);
const result = f3(4);
*/
console.log("Result : "+result);