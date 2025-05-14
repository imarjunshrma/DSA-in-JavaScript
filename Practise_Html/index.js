const items = [
    { id: 1, category: "fruits", name: "apple" },
    { id: 2, category: "fruits", name: "banana" },
    { id: 3, category: "vegetables", name: "carrot" },
    { id: 4, category: "fruits", name: "mango" },
    { id: 5, category: "vegetables", name: "spinach" },
  ];
  // output should be fruits:[],vegetables:[]
  
  const output = items.reduce((accumlator,current,index,ar)=>{
      const category = current.category;
      const name = current.name;
      if(accumlator[category]){
           accumlator[category].push(name);
      }else{
           accumlator[category] = [name];
      }
      return accumlator;
  },{})
  console.log(output)


  