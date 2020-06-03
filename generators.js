function Timedelay(pTime, callbacks){
    setTimeout(function(){
        callbacks("pausing for" + pTime);
    }, 1000);
}


Timedelay(1000, function(message){
    console.log("you are welcome");
    Timedelay(2000, function(message){
        console.log("thank you");
        Timedelay(3000, function(message){
            console.log("God bless you");
        });
    });
});
function* Messages(){
    console.log(yield(Timedelay(1000, function(){

    })));
    console.log(yield(Timedelay(1000, function(){

    })));
    console.log(yield(Timedelay(2000, function(){

    })));
}