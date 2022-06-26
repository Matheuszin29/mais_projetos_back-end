const input = document.querySelector('input')
input.addEventListener('keypress' , ()=>{
    let inputLength = input.value.length;
    if (inputLength === 3 || inputLength === 7){
        input.value += '.';
    }else if (inputLength === 11 ){
        input.value+='-';
    }

})
//para cartão
