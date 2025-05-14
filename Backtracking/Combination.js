// permutatons 1
//backtracking

function combination(n,k) {
    const output = [];
     function  helper(i,comb) {
         //base case
         if(comb.length === k) return output.push([...comb]);
 
         //recursive case
         for(let j = i;j<= n;j++){
             //append value
             comb.push(j);
             helper(j+1,comb); //increasing j because of uniqueness if i+1 then (2,2) <-> (3,2) not combination
             comb.pop();
             
         }
     }
 
     helper(1,[]);
     return output;
     
 }
 
 console.log(combination( 4,2))
// o(k * nck) - time complexity
// o(k) - space complexity