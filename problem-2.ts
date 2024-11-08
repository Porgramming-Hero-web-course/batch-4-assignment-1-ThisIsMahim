const removeDuplicates=(arr:number[]):number[]=>{
    const newArr:number[]=[]
    for(let i=0; i<arr.length;i++){
        if(newArr.indexOf(arr[i])===-1)
            newArr.push(arr[i])
    }
    return newArr
}
