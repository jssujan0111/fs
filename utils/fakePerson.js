const genFirstName = ()=>{
    let firstName = ["Md","Mr"];
    return firstName[Math.floor(Math.random() * firstName.length)];
}

const genLastName = ()=>{
    let lastName = ["Arif","Sujan","Abdul","Ripon","Ashik","Mijan","Khalek"];

    return lastName[Math.floor(Math.random() * lastName.length)];
}

const genEmail = ()=>{
    let email = ["sk@gmail.com","js@gmail.com","kj@gmail.com","kha@gmail.com","fs@gmail.com"];
    return email[Math.floor(Math.random() * email.length)];
}
const genImage = ()=>{
    let avatar = [
        "https://i.ibb.co/sW0RKsY/pink-shirt.png",
        "https://i.ibb.co/sW0RKsY/pink-shirt.png",
        "https://i.ibb.co/bB85BML/men.png",
        "https://i.ibb.co/D41rsxP/floral-shirt.png",
        "https://i.ibb.co/PCzj35R/camo-vest.png"
    ]
    return avatar[Math.floor(Math.random() * avatar.length)];
}
const genAge = () =>{
    start = Math.ceil(19);
    end = Math.floor(60)
    return Math.floor(Math.random() *(end - start) + start)
}
const genAdress = () =>{
    const adress = [
        {city:"Sherpur",division:"Dhaka"},
        {city:"Uttora",division:"Dhaka"},
        {city:"Komlapur",division:"Dhaka"},
        {city:"Mirpur",division:"Dhaka"},
        {city:"Gulisthan",division:"Dhaka"},
        {city:"Khilkhet",division:"Dhaka"},
    ]
    return adress[Math.floor(Math.random() * adress.length)];
}
exports.fakePersonGenerator=(searchParam)=>{
    const firstname = genFirstName();
    const lastname = genLastName();
    const email = genEmail();
    const avatar = genImage();
    const address = genAdress();
    const createFakePerson = {
        firstname,lastname,email,avatar,address
    }
    const createFakePersonWithQuery = {};
    console.log(searchParam.length);
    if(searchParam.length != 0){
        
        for (const key of searchParam) {
            if (createFakePersonWithQuery[key]) {
                continue;
            }
            createFakePersonWithQuery[key] = createFakePerson[key]
        }
        return createFakePersonWithQuery
    }else{
        return createFakePerson
    }
    
}