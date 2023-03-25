//Intro

let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");


//Branch2 dialogue
option1.addEventListener("click", branch2);
option2.addEventListener("click", branch2);
option3.addEventListener("click", branch2);

function branch2() {
  document.getElementById("narratorText").innerHTML = "What? No, you’re here to slay the princess.";
  option1.removeEventListener("click", branch2);
  option2.removeEventListener("click", branch2);
  option3.removeEventListener("click", branch2);

  option1.innerHTML = "“Slaying princesses is my jam! Let’s get going!";
  option2.innerHTML = "“I can’t kill a princess!”";
  option3.innerHTML = "“(Loud pretend-snoring.)”";

  option1.addEventListener("click", branch3);
  option2.addEventListener("click", branch4);
  option3.addEventListener("click", branch4);
  
}

//Branch3 dialogue
function branch3() {
  document.getElementById("narratorText").innerHTML = "… That was surprisingly easy. Well, it’s not my job to question your morals. If you’re going to do this, you won’t succeed empty-handed. Pick a chest, Hero. Choose wisely."
  option1.removeEventListener("click", branch3)
  option2.removeEventListener("click", branch3);
  option3.removeEventListener("click", branch3);

  option1.innerHTML = "(A chest gilded in gold, too heavy for you to lift. An ornate leaf pattern adorns its surface, glinting beckoningly. Choose this chest.)"
  option2.innerHTML = "(A chest carved from obsidian. It has been polished so finely that its surface is almost rainbowed. Choose this chest.)"
  option3.innerHTML = "(A nondescript wooden chest. Its brass lock has long since tarnished. Choose this chest.)"

  option1.addEventListener("click", branch7);
  option2.addEventListener("click", branch8);
  option3.addEventListener("click", branch9);
}

//Branch4 dialogue
function branch4() {
  document.getElementById("narratorText").innerHTML = "If you don’t, a terrible tragedy will befall the kingdom. You and I included. You’re the only one who can save us from the prophecy, Hero."
  option1.removeEventListener("click", branch3);
  option2.removeEventListener("click", branch4);
  option3.removeEventListener("click", branch4);

  option1.style.display = "none"
  option2.innerHTML = "“Still, how do you even know the prophecy is true?”";
  option3.innerHTML = "“(Even louder pretend-snoring.)”";

  option2.addEventListener("click", branch5);
  option3.addEventListener("click", branch5);
}

//Branch5 dialogue
function branch5() {
  document.getElementById("narratorText").innerHTML = "I don’t make the rules. If you don’t kill the princess, all of us are going to die.";
  option2.removeEventListener("click", branch5);
  option3.removeEventListener("click", branch5);

  option2.innerHTML = "“Fine. But if I find out that you’re lying to me, I’m turning around and heading back down.”";
  option3.innerHTML = "“(The loudest pretend-snoring you can muster.)”"

  option2.addEventListener("click", branch6);
  option3.addEventListener("click", badEnd1);

}

//Branch6 dialogue
function branch6() {
  document.getElementById("narratorText").innerHTML = "If you’re going to do this, you won’t succeed empty-handed. Pick a chest, Hero. Choose wisely.";
  option1.style.display = "inline"
  option2.removeEventListener("click", branch6);
  option3.removeEventListener("click", branch6);

  option1.innerHTML = "(A chest gilded in gold, too heavy for you to lift. An ornate leaf pattern adorns its surface, glinting beckoningly. Choose this chest.)"
  option2.innerHTML = "(A chest carved from obsidian. It has been polished so finely that its surface is almost rainbowed. Choose this chest.)"
  option3.innerHTML = "(A nondescript wooden chest. Its brass lock has long since tarnished. Choose this chest.)"

  option1.addEventListener("click", branch7);
  option2.addEventListener("click", branch8);
  option3.addEventListener("click", branch9);
}

//BadEnd1 dialogue
function badEnd1() {
  document.getElementById("narratorText").innerHTML = "Fine, have it your way. You fall back asleep for who-knows-how-long. Your sleep is restless, in which you have a never-ending nightmare of being chased by something you can’t see. When you finally wake, it’s pitch black outside and dead silent. You open the cabin door to an endless void. You call out, but your voice is swallowed by the darkness. And soon, you are too. <br></br><br>BAD ENDING</br>"
  option2.removeEventListener("click", badEnd1);
  option3.removeEventListener("click", badEnd1);

  option2.style.display = "none"
  option3.style.display = "none"
}

//Branch7 dialogue
function branch7() {
  document.getElementById("narratorText").innerHTML = "You obtained: Midas’ Finger!"
  option1.removeEventListener("click", branch7);
  option2.removeEventListener("click", branch7);
  option3.removeEventListener("click", branch7);

  option1.style.display = "none"
  option2.style.display = "none"
  option3.style.display = "none"
}

//Branch8 dialogue
function branch8() {
  document.getElementById("narratorText").innerHTML = "You obtained: Excalibur!"
  option1.removeEventListener("click", branch8);
  option2.removeEventListener("click", branch8);
  option3.removeEventListener("click", branch8);

  option1.style.display = "none"
  option2.style.display = "none"
  option3.style.display = "none"
}

//Branch9 dialogue
function branch9() {
  document.getElementById("narratorText").innerHTML = "You obtained: Plot Armour!"
  option1.removeEventListener("click", branch9);
  option2.removeEventListener("click", branch9);
  option3.removeEventListener("click", branch9);

  option1.style.display = "none"
  option2.style.display = "none"
  option3.style.display = "none"
}


/*
This is the code I wrote to implement a typewriter effect for text, but I haven't yet figured out how to integrate it with the code above.

//Branch1 dialogue
let i = 0;
let text = 'Narrator: You open your eyes, having just awoken from a long slumber. You are in a cabin at the base of a mountain. At the top of the mountain is a tower. And in that tower is a princess, guarded by a dragon.';
let speed = 20;

function branch1() {
 
  if (i < text.length) {
      document.getElementById("narratorText").innerHTML += text.charAt(i);
      i++;
      setTimeout(branch1, speed);
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

  */