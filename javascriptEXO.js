var R=numbers => {
    if(numbers.length===0) 
    return 0
    var K=0,Z=1;
    while(Z<numbers.length){
        if(numbers[Z]!==numbers[K]){
            K++
            numbers[K]=numbers[K]
            Z++
        }
        else Z++



    }
    return K+1
};
