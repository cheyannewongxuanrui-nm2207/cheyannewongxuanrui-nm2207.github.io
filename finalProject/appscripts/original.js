//Intro

//Typewriter effect from w3schools

//Branch1 dialogue
let i = 0;


function branch1() {
  let text = 'Narrator: You open your eyes, having just awoken from a long slumber. You are in a cabin at the base of a mountain. At the top of the mountain is a tower. And in that tower is a princess, guarded by a dragon.';
  let speed = 20;
  if (i < text.length) {
      document.getElementById("narratorText").innerHTML += text.charAt(i);
      i++;
      setTimeout(branch1, speed);
      //clearTimeout(branch1, speed);
    } else {

    let button = document.createElement("button");
    button.textContent = '“Princess? Heck yeah! Let’s get going right now!”';
    document.getElementById("option1").appendChild(button);
    button.addEventListener("click", branch2);

    let button2 = document.createElement("button");
    button2.textContent = '“Oh god, not this fairytale trope again. Slay the dragon, rescue the princess, yada yada. Boring.”';
    document.getElementById("option2").appendChild(button2);
    button2.addEventListener("click", branch2);

    let button3 = document.createElement("button");
    button3.textContent = '“... I’m going back to sleep.”';
    document.getElementById("option3").appendChild(button3);
    button3.addEventListener("click", branch2);

  }

  return
  
  };
  
branch1()

//Branch2 dialogue
let t = 0
function branch2() {
 text = "Narrator: What? No, you’re here to slay the princess."
 speed = 20
 //i = 0
 //document.getElementById("narratorText").innerHTML = text
 
  if (t < text.length) {
      document.getElementById("narratorText").innerHTML += text.charAt(t);
      t++;
      setTimeout(branch2, speed);
    } else {

      document.getElementById("button").innerHTML = '“Slaying princesses is my jam! Let’s get going!”'


    //let button = document.createElement("button");
    //button.textContent = '“Slaying princesses is my jam! Let’s get going!”';
    //document.getElementById("option1").appendChild(button);
    //button.addEventListener("click", branch3);

    //let button2 = document.createElement("button");
    //button2.textContent = '“I can’t kill a princess!”';
    //document.getElementById("option2").appendChild(button2);
    //button2.addEventListener("click", branch3);

    //let button3 = document.createElement("button");
    //button3.textContent = '“(Loud pretend-snoring.)”';
    //document.getElementById("option3").appendChild(button3);
    //button3.addEventListener("click", branch3);
    }
  };

//Branch3






