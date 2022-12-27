let inputText = document.getElementById('evaluatedText');
let count = document.getElementById('wordCount');
let myarr = [];
console.log(inputText,count);

inputText.addEventListener('input', function countWord(){
    let text = inputText.value.trim();
    myarr = text.split(" ");
    console.log(myarr.length);
    count.innerText = myarr.length; 
    if(text.length==0){
        myarr.pop();
       count.innerHTML = '0';
       
    }   
       
})
