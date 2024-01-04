
// button functionality

let selected = document.getElementsByClassName('choice')[0].children;
let submit = document.getElementsByClassName('submit')[0];

console.log(submit.disabled);
console.log(selected)

for(let i = 0; i < selected.length; i++){
    selected[i].addEventListener('click', () =>{
        console.log(document.getElementsByTagName('img'));
        if(document.getElementsByClassName('selected').length > 0){
            for(let j = 0; j < selected.length; j++){
                selected[j].classList.remove('selected')
            }
        }
        selected[i].classList.add('selected');
        submit.disabled = false;
    })
}







submit.addEventListener('click', () =>{

    // body
    document.getElementsByTagName('body')[0].style.textAlign = 'center';

    // icons
    document.getElementsByClassName('star')[0].style.display = 'none';
    document.getElementsByClassName('thanks-icon')[0].style.display = 'inline-block'

    // picked message
    let picked = document.getElementsByClassName('selected')[0].innerHTML

    document.getElementsByClassName('picked')[0].style.display = 'inline-block'
    document.getElementsByClassName('picked')[0].innerHTML = `You selected ${picked} out of 5`;

    // h1
    document.getElementsByTagName('h1')[0].innerHTML = 'Thank you!'

    // p

    document.getElementsByClassName('paragraph')[0].innerHTML = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"


    // choices
    document.getElementsByClassName('choice')[0].style.display = 'none'

    // submit
    document.getElementsByClassName('submit')[0].style.display = 'none'
})