let generator = (n) =>{
    let arr = [];
    if(n==1){
        arr=[0];
        return arr;
    }
    else{
    for(let i=0;i<n-2;i++){
         arr[i+2] = arr[i+1]+arr[i];
    }
    console.log(arr);
}
}