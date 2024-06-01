var screen =document.getElementById("screen");
function btnClick(num){
     screen.value+=num
}

function clearScreen(){
    screen.value=''
}

function back(){
    screen.value=screen.value.slice(0,-1)
    // slice - string method-as all inputs are given as string here
}


function findResult(){

    // to resolve run time error(eg: if input is //66*/34)


    try{

    var result = eval(screen.value)
    screen.value=result;

    }
    
    catch{
        screen.value='error'

        setTimeout(() => {     
            //change to 0 again( after 1 sec) after showing error
            screen.value=''
        }, 1000);
    }

}
//hw-try to develop scientific calculator from this