let getSecondsToday = () => {
    let now = new Date();
    let t = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
  
    let result = t-now;
    result = Math.round(result / 1000)
    return result;
  }
  
  alert(getSecondsToday());
  