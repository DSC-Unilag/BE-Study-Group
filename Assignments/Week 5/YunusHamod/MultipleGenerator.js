let multiples = (number, length) =>{
    if(length == 1){
        return number;
    }else{
        let newNumber = number + number;
        for(let i=2;i<length;i++){
            newNumber+=number;
        }
        console.log(newNumber);
    }
}
