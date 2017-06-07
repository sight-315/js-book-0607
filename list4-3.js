function sum(rangeFrom,rangeTo){
    var total = 0;
    for(var counter = rangFrom; counter <= rangeTo; counter++){
        total += counter;
    }
    window.alert(total);
}