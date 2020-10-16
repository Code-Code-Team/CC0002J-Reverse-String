const inputElement = document.getElementById('input');
const buttonElement = document.getElementById('button');
const textElement = document.getElementById('text');


buttonElement.addEventListener('click',()=>{
    reverseString()
    
    
});


inputElement.addEventListener('keyup',(e)=>{
    if(e.keyCode ==13){
        reverseString()
    }
    inputElement.innerText= ""
})
    
    
    function reverseString(){
        textElement.value = ""
        
        textElement.innerText = inputElement.value.split('').reverse().join(' ')
        inputElement.value = ''

    

}

