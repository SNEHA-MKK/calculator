var screen =document.getElementById("screen");
function btnClick(num){
     screen.value+=num
}

function clearScreen(){
    screen.value=''
}

function back(){
    screen.value=screen.value.slice(0,-1)
}

function findResult(){

    try{
    var result = eval(screen.value)
    screen.value=result;
    }
    
    catch{
        screen.value='error'

        setTimeout(() => {                    // to change to 0 after showing error
            screen.value=''
        }, 1000);
    }

}