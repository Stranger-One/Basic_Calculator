let inputbox = document.getElementById("inputbox")
let button = document.querySelectorAll("button")
let str ='';

button.forEach(element =>{
    element.addEventListener('click',(b)=>{
        if(b.target.innerText === '='){
            str = String(eval(str));
            inputbox.value = str;
        }
        else if(b.target.innerText === "AC"){
            str = '';
            inputbox.value = str;
        }
        else if(b.target.innerText === 'DEL'){
            str = str.substring(0, str.length-1);
            inputbox.value = str;

        }
        else{
            str += b.target.innerText;
            inputbox.value = str;
        }
    })
})