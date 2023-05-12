exports.stringManupulate = (str)=>{
    const strArray = str.split("");
    let countLetter = 0;
    let countNumber = 0;
    let countSymbol = 0;
    console.log(strArray);
    strArray.forEach((ele)=>{
        if(/^[A-Z]+$/i.test(ele)){
            countLetter+=1
        }else if( /^\d+$/.test(ele)){
            countNumber+=1
        }else{
            countSymbol+=1
        }
    })

    const result = {
        countLetter,countNumber,countSymbol
    }

console.log(result)
    return result;
}