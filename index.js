function giveMeFive(obj){
    let newArray = [];
    for (let key in obj){
      if (key.length == 5){
        newArray.push(key);
      } 
      if (obj[key].length == 5){
        newArray.push(obj[key]);
      }
    }
    return newArray;
  }