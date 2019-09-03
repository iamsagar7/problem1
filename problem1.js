
function factorialize(number){
    output = [];
    sNumber = number.toString();
    sum=0;

for (var i = 0, len = sNumber.length; i < len; i += 1) {
    output.push(+sNumber.charAt(i));
}
console.log(output)
for(let num in output){
        var result = 1;
        for (var i = 2; i <= num; i++){ 
        result *=i
        
         }
         sum +=result
        
        }
     
  
console.log(sum)
}

factorialize(245)


