exports.randomNum = (start=1,end = 100)=>{
    start = Math.ceil(start);
    end = Math.floor(end)
    return Math.floor(Math.random() *(end - start) + start)
}

