const image= document.getElementById('image');
const yes= document.getElementById('yes');
const no= document.getElementById('no');
const heading=document.getElementById('heading');
let yes_count=0;

const dudu_sad=["Dudu_Sad1.jpg","dudu_sad2.jpg","dudu_sad3.jpg","dudu_sad4.jpg"];
const dudu_answer=["Are you sure about your cuteness?","Do you really think you are cute?","Still you are thinking you are cute?","Sorry for making you sad click on No to get your answer!!!!!"];

yes.addEventListener('click', function(){
    if(yes_count==3){
        yes.remove();
        console.log("remove yes button");
    }
        heading.innerText=dudu_answer[yes_count]
        image.src=dudu_sad[yes_count];
        if(yes_count<3){
        yes_count+=1;
    }
        console.log(yes_count);
});


no.addEventListener('click', function(){
    image.src='Right.jpg';
    heading.innerText="You are Right you are not cute!!!!!"
    no.remove();
    yes.remove();
    let delayInMilliseconds = 5000;
    setTimeout(function() {
        heading.innerHTML = "Wait for sometime";
      }, delayInMilliseconds);
    delayInMilliseconds = 5000;
    setTimeout(function() {
        document.getElementById('counting').innerText="1"
      }, delayInMilliseconds);
      delayInMilliseconds = 8000;
      setTimeout(function() {
        document.getElementById('counting').innerText="2"
      }, delayInMilliseconds);
      delayInMilliseconds = 11000;
      setTimeout(function() {
        document.getElementById('counting').innerText="3"
      }, delayInMilliseconds);
      delayInMilliseconds = 13000;
      setTimeout(function() {
      document.getElementById('counting').remove();
      heading.innerText="You are the cutest my Bubu!!!!!"
      image.src="happy.jpg";
      }, delayInMilliseconds);
});
