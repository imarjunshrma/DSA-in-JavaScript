var isValid = function(s) {
    let stack = [];
    
    for(let i = 0;i<s.length;i++){
       let curr = s[i];
      if(stack.length > 0){
        let last = stack[stack.length - 1];
        if((curr === ")" && last === "(") || (curr === "]" && last === "[") || (curr === "}" && last === "{")){
          stack.pop();
        }else{
          stack.push(curr);
        }
        
      }else{
          stack.push(curr);
      }
    }
    
    
    if(stack.length > 0){
      return false;
    }
    // console.log(stack)
    return true;
};





var isValid = function(s) {
  let stack = [];
  
  let map = {
    '{' : '}',
     '(' : ')',
     '[' : ']'
  }
  for(let i = 0;i<s.length;i++){
     let curr = s[i];
     
     // check it's paranthesis or not
     if(curr in map){
       
       //check top 
       
       if(stack.length === 0 || stack.pop() !== map[curr]) return false;
     }else{
      // return false;
      stack.push(curr);
     }
  }
  
  
  return stack.length === 0;
};

console.log(isValid("([})"))