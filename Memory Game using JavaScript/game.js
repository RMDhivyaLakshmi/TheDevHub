"use strict"
const cardArray=[
  {
      img:'Images/bundalero.jpg',
      img_name:'bundalero'
  },
  {
      img:'Images/heidi.jpg',
      img_name:'heidi'
  },
  {
      img:'Images/Noddy.jpg',
      img_name:'noddy'
  },
  {
      img:'Images/oswald.jpg',
      img_name:'oswald'
  },
  {
      img:'Images/heidi.jpg',
      img_name:'heidi'
  },
  {
      img:'Images/oswald.jpg',
      img_name:'oswald'
  },
  {
      img:'Images/scooby.jpg',
      img_name:'scooby'
  },
  {
      img:'Images/Noddy.jpg',
      img_name:'noddy'
  },
  {
      img:'Images/TJ.jpg',
      img_name:'TJ'
  },
  {
      img:'Images/bundalero.jpg',
      img_name:'bundalero'
  },
  {
    img:'Images/TJ.jpg',
    img_name:'TJ'
  },
  {
    img:'Images/scooby.jpg',
    img_name:'scooby'
  }

]


let time=[120,90,60];
let index=0;
function start()
{
  for(let i=1;i<=12;i++)
  {
    document.getElementById(i).src="https://images.unsplash.com/photo-1532456745301-b2c645d8b80d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE5fHxkZXNpZ258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
  }
  document.getElementById("score").innerHTML=0;
  document.getElementById("result").innerHTML="";
  let unmatched=12;
  let chosenCards=[];
  let chosenCardIds=[];
  cardArray.sort(()=> 0.5 - Math.random());
  let LEVEL=index+1;
  let TIME=time[index];
  game(LEVEL,TIME);
  

  function game(LEVEL,TIME){
    document.getElementById("level").innerHTML=LEVEL;
    let timeSecond = TIME;
    const timeH = document.querySelector(".time");
    displayTime(timeSecond);
    const countDown = setInterval(timer,1000);
    let divs=document.querySelectorAll(".click");

    for(let div of divs)
    {
      div.addEventListener('click',flip);
    }






    

    
    function flip(){
      if(this.firstElementChild.src!=='file:///C:/Users/RM.Dhivya%20Lakshmi/Documents/Sem6/Internet%20Programming/IP%20Lab/1028_Memory%20Game/Images/remove.jpg')
      {
        console.log(this.firstElementChild.src);
        this.firstElementChild.src=cardArray[parseInt(this.firstElementChild.id)-1].img;
        let cardId=parseInt(this.firstElementChild.id)-1;
        chosenCards.push(cardArray[cardId].img_name)
        chosenCardIds.push(cardId);
        console.log(chosenCards)
        console.log(chosenCardIds);
        if(chosenCards.length===2){
            setTimeout(checkMatch,100);
        }
      }
      
    }


    function checkMatch(){
      if(chosenCards[0]===chosenCards[1])
      {
        console.log("match");
        unmatched-=2;
        document.getElementById("score").innerHTML=12-unmatched;
        console.log(unmatched)
        document.getElementById(`${chosenCardIds[0]+1}`).src="Images/remove.jpg";
        document.getElementById(`${chosenCardIds[1]+1}`).src="Images/remove.jpg";
        //document.querySelector(`.game .row div:nth-of-type(${(chosenCardIds[0]+1)%3})`).removeEventListener('click');
        //document.querySelector(`.game .row div:nth-of-type(${(chosenCardIds[0]+1)%3})`).removeEventListener('click');
        chosenCards=[];
        chosenCardIds=[];

      }
      else{
        console.log("unmatch");
        document.getElementById(`${chosenCardIds[0]+1}`).src="https://images.unsplash.com/photo-1532456745301-b2c645d8b80d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE5fHxkZXNpZ258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
        document.getElementById(`${chosenCardIds[1]+1}`).src="https://images.unsplash.com/photo-1532456745301-b2c645d8b80d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE5fHxkZXNpZ258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
        chosenCards=[];
        chosenCardIds=[];
        console.log(chosenCardIds);
      }

    }


    function timer() {
      timeSecond--;
      displayTime(timeSecond);
      if(unmatched===0)
      {
        
        
        clearInterval(countDown);
        let divs=document.querySelectorAll('.click');
        for(let div of divs)
        {
          div.removeEventListener('click',flip);
        }
        
        index+=1;
        if(index<=2)
        {
          document.getElementById("result").innerHTML=`You won!Advancing to Level ${LEVEL+1}...`;
          document.querySelector(".button").addEventListener('click',start);
        }
        else{
          document.getElementById("startbtn").style.display='none';
          document.getElementById("result").innerHTML="Congratulations!!! All three levels cleared!!"
        }
        

      }
      
      if (timeSecond == 0 || timeSecond < 1) {
        
        let divs=document.querySelectorAll('.click');
        for(let div of divs)
        {
          div.removeEventListener('click',flip);
        }
        document.getElementById("result").innerHTML="You Lost"
      
        endCount();
        clearInterval(countDown);
      }
    }


    function displayTime(second) {
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    timeH.innerHTML = `${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}`;
    }
    
    function endCount() {
    timeH.innerHTML = "Time out";
    }
  

}


}

document.querySelector("#startbtn").addEventListener('click', start);






