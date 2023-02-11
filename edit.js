const allh2=document.getElementsByTagName('h2');
for(const h2 of allh2){
    h2.style.color='lightblue';
}
document.getElementById('backpack').style.backgroundColor='tomato';

const cards=document.getElementsByClassName('card');
for(const card of cards){
    card.style.borderRadius='30px';
}

function print(){
    console.log('button clicked');
}

const allButton=document.querySelectorAll('.panda-btn-buy-now');
for(const button of allButton){
    button.addEventListener('click',function(event){
        event.target.parentNode.remove(event.target);
    })
}

// const texts=document.getElementsByClassName('form-control');
// for(const text of texts){
//     console.log(text.target.value);
    // text.addEventListener('keyup',function(event){
    //     const checking=event.target.value;
    //     const touchBtn=document.getElementsByClassName('panda-btn-buy-now');
    //     if(checking==='email'){
    //         touchBtn.removeAttribute('disabled');
    //     }
    //     else{
    //         touchBtn.setAttribute('disabled',true);
    //     }
    // })
// }



document.getElementById('exampleInputEmail1').addEventListener('keyup',function(event){
    const compare=event.target.value;
    const checkBtn=document.getElementById('check');
    if(compare==='email'){
        checkBtn.removeAttribute('disabled');
    }
    else{
        checkBtn.setAttribute('disabled',true);
    }
});





const image=document.getElementById('change');
image.addEventListener('onmouseover',function(){
    image.src="images/shoes/shoe-3.png";
})
image.addEventListener('mouseout',function(){
    image.src="images/shoes/shoe-1.png";
})





document.getElementById('subscribe').addEventListener('dblclick',function(){
    subscribe.style.backgroundColor="green";
    
})