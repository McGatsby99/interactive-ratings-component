
// button functionality

let selected = document.getElementsByClassName('choice')[0].children;
console.log(selected)

for(let i = 0; i < selected.length; i++){
    selected[i].addEventListener('click', () =>{
        console.log(document.getElementsByTagName('img'));
        if(document.getElementsByClassName('selected').length > 0){
            for(let j = 0; j < selected.length; j++){
                selected[j].classList.remove('selected')
            }
        }
        selected[i].classList.add('selected')
    })
}

let submit = document.getElementsByClassName('submit')[0];
console.log(submit);


submit.addEventListener('click', () =>{
    document.getElementsByTagName('body')[0].style.textAlign = 'center';
    document.getElementsByClassName('star')[0].style.display = 'none';
    document.getElementsByClassName('thanks-icon')[0].style.display = 'inline-block'

    let picked = document.getElementsByClassName('selected')[0].innerHTML

    // picked message
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