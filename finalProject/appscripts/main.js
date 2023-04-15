//Picture sources are in the document titled 'References and Image Sources'.
//INTRO
let option1 = document.getElementById("option1");
option1.innerHTML = '“Princess? Heck yeah! Let’s get going right now!”';

let option2 = document.getElementById("option2");
option2.innerHTML = '“Oh god, not this fairytale trope again. Slay the dragon, rescue the princess, yada yada. Boring.”';

let option3 = document.getElementById("option3");
option3.innerHTML = '“... I’m going back to sleep.”';


//Transition
//Adds a black box that fades in and out between scenes.
function transition() {
  //Grab the css element transition.fade to make the transition smoother by fading in and out. I explain this further in the css.
  document.getElementById("transition").classList.toggle("fade");

  //I'm changing the zIndex of the "transition" div element (which has a black background) to bring it to the front.
  document.getElementById("transition").style.zIndex = '500';

  //This changes the zIndex back to what it originally was, so that the "transition" div element is once again hidden behind the other divs.
  function revert() {
    document.getElementById("transition").style.zIndex = '100';
  }
  
  //This sets a timer for when to trigger the revert function.
  setTimeout(revert,550);
}

//Branch1 dialogue
function branch1() {
  //Hide the buttons while the typewriting effect is playing.
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  let text = 'Narrator: You open your eyes, having just awoken from a long slumber. You are in a cabin at the base of a mountain. At the top of the mountain is a tower. And in that tower is a princess, guarded by a dragon.';
  let speed = 15;
  //Set the text to be an empty string first to remove any existing text in the textbox.
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  //Typewriter function.
  function typewriter() {
    //If i is shorter than the text length defined above, the function will add one character at a time to the end of the string at the speed I specified.
    if (i < text.length) {
      document.getElementById("narratorText").innerHTML += text.charAt(i);
      i++;
      setTimeout(typewriter, speed);
    } else { //If i = length of text (ie. when the typewriting effect ends), the buttons are displayed and event listeners are added to them.
      option1.style.display = "inline";
      option2.style.display = "inline";
      option3.style.display = "inline";
    
      //Event listeners: on click, trigger function branch2.
      option1.addEventListener("click", branch2);
      option2.addEventListener("click", branch2);
      option3.addEventListener("click", branch2);
  }
  }
  //Call the typewriter function.
  typewriter();
  };
//Call the branch1 function so that the dialogue begins upon loading the page.
branch1()

//Branch2 dialogue
function branch2() {
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  //Remove the event listeners added in the previous function (branch1) so that different event listeners can be added in this function.
  option1.removeEventListener("click", branch2);
  option2.removeEventListener("click", branch2);
  option3.removeEventListener("click", branch2);

  text = "Narrator:\nWhat? No, you’re here to slay the princess.";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      //I added an if-else loop here that adds "<br>" to the string once it encounters the characters "\n". This will trigger a line break.
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else { //If there is no "\n", the string continues as per normal.
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "inline";
      option2.style.display = "inline";
      option3.style.display = "inline";

      option1.innerHTML = "“Slaying princesses is my jam! Let’s get going!";
      option2.innerHTML = "“I can’t kill a princess!”";
      option3.innerHTML = "“(Loud pretend-snoring.)”";

      option1.addEventListener("click", branch3);
      option2.addEventListener("click", branch4);
      option3.addEventListener("click", branch4);
     };
  }
  typewriter()
  }

//Branch3 dialogue
function branch3() {
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option1.removeEventListener("click", branch3)
  option2.removeEventListener("click", branch4);
  option3.removeEventListener("click", branch4);

  text = "Narrator:\n… That was surprisingly easy. Well, it’s not my job to question your morals. If you’re going to do this, you won’t succeed empty-handed. Pick a chest, Hero. Choose wisely.";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "inline";
      option2.style.display = "inline";
      option3.style.display = "inline";

      option1.innerHTML = "(A chest gilded in gold, too heavy for you to lift. An ornate leaf pattern adorns its surface, glinting beckoningly. Choose this chest.)";
      option2.innerHTML = "(A chest carved from obsidian. It has been polished so finely that its surface is almost rainbowed. Choose this chest.)";
      option3.innerHTML = "(A nondescript wooden chest. Its brass lock has long since tarnished. Choose this chest.)";
      
      option1.addEventListener("click", branch7);
      option2.addEventListener("click", branch8);
      option3.addEventListener("click", branch9);
     };
  }
  typewriter()
}

//Branch4 dialogue
function branch4() {
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option1.removeEventListener("click", branch3);
  option2.removeEventListener("click", branch4);
  option3.removeEventListener("click", branch4);

  text = "Narrator:\nIf you don’t, a terrible tragedy will befall the kingdom. You and I included. You’re the only one who can save us from the prophecy, Hero.";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "none";
      option2.style.display = "inline";
      option3.style.display = "inline";

      option2.innerHTML = "“Still, how do you even know the prophecy is true?”";
      option3.innerHTML = "“(Even louder pretend-snoring.)”";

      option2.addEventListener("click", branch5);
      option3.addEventListener("click", branch5);
     };
  }
  typewriter()
}

//Branch5 dialogue
function branch5() {
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option2.removeEventListener("click", branch5);
  option3.removeEventListener("click", branch5);

  text = "Narrator:\nI don’t make the rules. If you don’t kill the princess, all of us are going to die.";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "none";
      option2.style.display = "inline";
      option3.style.display = "inline";

      option2.innerHTML = "“Fine. But if I find out that you’re lying to me, I’m turning around and heading back down.”";
      option3.innerHTML = "“(The loudest pretend-snoring you can muster.)”";

      option2.addEventListener("click", branch6);
      option3.addEventListener("click", badEnd1);
     };
  }
  typewriter()
}

//Branch6 dialogue
function branch6() {
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option2.removeEventListener("click", branch6);
  option3.removeEventListener("click", badEnd1);

  text = "Narrator:\nIf you’re going to do this, you won’t succeed empty-handed. Pick a chest, Hero. Choose wisely.";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "inline";
      option2.style.display = "inline";
      option3.style.display = "inline";

      option1.innerHTML = "(A chest gilded in gold, too heavy for you to lift. An ornate leaf pattern adorns its surface, glinting beckoningly. Choose this chest.)";
      option2.innerHTML = "(A chest carved from obsidian. It has been polished so finely that its surface is almost rainbowed. Choose this chest.)";
      option3.innerHTML = "(A nondescript wooden chest. Its brass lock has long since tarnished. Choose this chest.)";
  
      option1.addEventListener("click", branch7);
      option2.addEventListener("click", branch8);
      option3.addEventListener("click", branch9);
     };
  }
  typewriter()
}

//BadEnd1 dialogue
function badEnd1() {
  //Calls transition effect.
  transition();

  //Changes background to a black image.
  document.getElementById("background").style.backgroundImage = 'url(resources/black.jpeg)';
  //Sets the image size to cover the screen.
  document.getElementById("background").style.backgroundSize = "cover";

  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option2.removeEventListener("click", branch6);
  option3.removeEventListener("click", badEnd1);

  text = "Narrator:\nFine, have it your way. You fall back asleep for who-knows-how-long. Your sleep is restless, in which you have a never-ending nightmare of being chased by something you can’t see. When you finally wake, it’s pitch black outside and dead silent. You open the cabin door to an endless void. You call out, but your voice is swallowed by the darkness. And soon, you are too.\n\nBAD ENDING: Eternal Slumber";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    }
  }
  typewriter()
}

//Branch7 dialogue
function branch7() {
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option1.removeEventListener("click", branch7);
  option2.removeEventListener("click", branch8);
  option3.removeEventListener("click", branch9);

  text = "You obtained: Midas’ Finger!\n\nA golden finger that turns everything it touches into gold. Surely it’s not a real finger… is it?";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "none";
      option2.style.display = "inline";
      option3.style.display = "none";

      option2.innerHTML = "(Leave the cabin.)";

      option2.addEventListener("click", branch10);
     };
  }
  typewriter()  
}

//Branch8 dialogue
function branch8() {
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option1.removeEventListener("click", branch7);
  option2.removeEventListener("click", branch8);
  option3.removeEventListener("click", branch9);

  text = "You obtained: Excalibur!\n\nThe sword of countless myths and legends. The tales say it grants its wielder ultimate power… but at what cost?";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "none";
      option2.style.display = "inline";
      option3.style.display = "none";

      option2.innerHTML = "(Leave the cabin.)";

      option2.addEventListener("click", branch31);
     };
  }
  typewriter()
}

//Branch9 dialogue
function branch9() {
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option1.removeEventListener("click", branch7);
  option2.removeEventListener("click", branch8);
  option3.removeEventListener("click", branch9);

  text = "You obtained: Plot Armour!\n\nA nondescript set of old steel armour. It looks just about ready to fall apart. Is this really going to protect you from anything?";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "none";
      option2.style.display = "inline";
      option3.style.display = "none";

      option2.innerHTML = "(Leave the cabin.)";

      option2.addEventListener("click", branch39)
     };
  }
  typewriter()
}

//MIDAS
//Branch10 dialogue
function branch10() {
  transition();
  document.getElementById("background").style.backgroundImage = 'url(resources/forestpath.jpeg)';
  document.getElementById("background").style.backgroundSize = "cover";

  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option2.removeEventListener("click", branch10);

  text = "Narrator:\nYou leave the cabin and continue up the winding mountain path. Seemingly out of nowhere, an old woman materialises from behind the trees.";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "none";
      option2.style.display = "inline";
      option3.style.display = "none";

      option2.innerHTML = "Next";

      option2.addEventListener("click", branch11);
     };
  }
  typewriter()
}

//Branch11 dialogue
function branch11() {
  transition();

  //Adds the image to the "sprite" div element
  document.getElementById("sprite").style.backgroundImage = 'url(resources/oldwoman.png)';

  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option2.removeEventListener("click", branch11);

  text = "Old woman:\nHero, you are not the first to pass through this treacherous land. Nary a brave knight has emerged unscathed. Give me something of your possession in return for safe passage.";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "none";
      option2.style.display = "inline";
      option3.style.display = "none";

      option2.innerHTML = "Next";

      option2.addEventListener("click", branch12);
     };
  }
  typewriter()
}

//Branch12 dialogue
function branch12() {
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option2.removeEventListener("click", branch12);

  text = "Narrator:\n(Whispering) What? The only item you have is Midas’s Finger. What will you do, Hero?";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "inline";
      option2.style.display = "inline";
      option3.style.display = "inline";

      option1.innerHTML = "(Refuse and continue walking up the path.)";
      option2.innerHTML = "(Give her Midas’ Finger.)";
      option3.innerHTML = "(Turn her into gold.)";
    
      option1.addEventListener("click", branch13);
      option2.addEventListener("click", branch19);
      option3.addEventListener("click", branch23);
     };
  }
  typewriter()
}

//Branch13 dialogue
function branch13() {
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option1.removeEventListener("click", branch13);
  option2.removeEventListener("click", branch19);
  option3.removeEventListener("click", branch23);

  text = "Old woman:\nPoor choice, Hero. Till we meet again…";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "none";
      option2.style.display = "inline";
      option3.style.display = "none";

      option2.innerHTML = "Next";

      option2.addEventListener("click", branch14);
     };
  }
  typewriter()
}

//Branch14 dialogue
function branch14() {
  transition();

  //Hides the image in the "sprite" div element
  document.getElementById("sprite").style.display = "none";

  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option2.removeEventListener("click", branch14);

  text = "Narrator:\nThe old woman disappears as mysteriously as she appeared, leaving you to wonder if you made the right choice.\nGood call. We don’t know what lies ahead, and you have a princess to kill. Let’s get going, we don’t have much time.";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "none";
      option2.style.display = "inline";
      option3.style.display = "none";

      option2.innerHTML = "(Continue up the mountain path.)";

      option2.addEventListener("click", branch15);
     };
  }
  typewriter()
}

//Branch15 dialogue
function branch15() {
  transition();
  document.getElementById("background").style.backgroundImage = 'url(resources/forestpath2.jpg)';
  document.getElementById("background").style.backgroundSize = "cover";

  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option2.removeEventListener("click", branch15);

  text = "Narrator:\nYou continue walking up the mountain path without further incident. Seems like the woman might’ve just been a con artist.";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "none";
      option2.style.display = "inline";
      option3.style.display = "none";

      option2.innerHTML = "(Continue up the mountain path.)";

      option2.addEventListener("click", branch16);
     };
  }
  typewriter()
}

//Branch16 dialogue
function branch16() {
  transition();
  document.getElementById("darken").style.opacity = '0.2';

  document.getElementById("background").style.backgroundImage = 'url(resources/forestpath.jpeg)';
  document.getElementById("background").style.backgroundSize = "cover";

  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option2.removeEventListener("click", branch16);

  text = "Narrator:\nYou continue walking up the mountain path.\n\nYou’ve been walking for a while…";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "inline";
      option2.style.display = "inline";
      option3.style.display = "none";

      option1.innerHTML = "“Hey, haven’t we been here already?”";
      option2.innerHTML = "(Continue up the mountain path.)";
    
      option1.addEventListener("click", branch17);
      option2.addEventListener("click", branch18);
     };
  }
  typewriter()
}

//Branch17 dialogue
function branch17() {
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option1.removeEventListener("click", branch17);
  option2.removeEventListener("click", branch18);

  text = "Narrator:\nThat’s impossible. There’s only one straight path up the mountain.";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "none";
      option2.style.display = "inline";
      option3.style.display = "inline";

      option2.innerHTML = "(Continue up the mountain path.)";
      option3.innerHTML = "(Go back down the mountain path.)";
    
      option2.addEventListener("click", branch18);
      option3.addEventListener("click", branch18);
     };
  }
  typewriter()
}

//Branch18 dialogue
function branch18() {
  transition();
  document.getElementById("darken").style.opacity = '0.4';

  document.getElementById("background").style.backgroundImage = 'url(resources/forestpath2.jpg)';
  document.getElementById("background").style.backgroundSize = "cover";

  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option2.removeEventListener("click", branch18);
  option3.removeEventListener("click", branch18);

  text = "Narrator:\nYou’ve been walking for a while…";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "none";
      option2.style.display = "inline";
      option3.style.display = "inline";

      option2.innerHTML = "(Continue up the mountain path.)";
      option3.innerHTML = "(Go back down the mountain path.)";
    
      option2.addEventListener("click", badEnd2);
      option3.addEventListener("click", badEnd2);
     };
  }
  typewriter()
}

//BadEnd2 dialogue
function badEnd2() {
  transition();
  document.getElementById("darken").style.opacity = '0.6';
  document.getElementById("background").style.backgroundImage = 'url(resources/forestpath.jpeg)';
  document.getElementById("background").style.backgroundSize = "cover";
  
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option2.removeEventListener("click", badEnd2);
  option3.removeEventListener("click", badEnd2);

  text = "Narrator:\n\nYou continue walking along the mountain path. You pass the same tree once… twice… thrice… countless times, the path seemingly stretching forever into the distance, looping infinitely onto itself. You continue walking along the mountain path, desperately searching for a way out. But there is no end in sight. Eventually, fatigue overcomes you and you meet your untimely end.\n\nBAD ENDING: Lost";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    }
  }
  typewriter()
}

//Branch19 dialogue
function branch19() {
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option1.removeEventListener("click", branch13);
  option2.removeEventListener("click", branch19);
  option3.removeEventListener("click", branch23);

  text = "Old woman:\nMany thanks, Hero. Take this. May your journey be blessed.";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "none";
      option2.style.display = "inline";
      option3.style.display = "none";

      option2.innerHTML = "(Take it.)";

      option2.addEventListener("click", branch20);
     };
  }
  typewriter()
}

//Branch20 dialogue
function branch20() {
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option2.removeEventListener("click", branch20);

  text = "You obtained:\nSilver totem!\n\nA mysterious silver totem shaped like a human heart. You wonder what it’s for.";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "none";
      option2.style.display = "inline";
      option3.style.display = "none";

      option2.innerHTML = "“Thanks.”";

      option2.addEventListener("click", branch21);
     };
  }
  typewriter()
}

//Branch21 dialogue
function branch21() {
  transition();
  document.getElementById("sprite").style.display = "none";

  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option2.removeEventListener("click", branch21);

  text = "Narrator:\nThe old woman turns around and walks through the trees, her silhouette receding from your view.\n\nWas that really a good idea…? Well, too late now.";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "none";
      option2.style.display = "inline";
      option3.style.display = "none";

      option2.innerHTML = "(Continue up the mountain path.)";

      option2.addEventListener("click", branch22);
     };
  }
  typewriter()
}

//Branch22 dialogue
//I'm initialising a variable called 'midas' here to act as an identifier for a later dialogue branch.
let midas = 0;
//When this function is called, adds 1 to variable 'midas' and logs its value to the console.
function midasTrue() {
  midas++;
  console.log(midas);
}
function branch22() {
  transition();
  document.getElementById("background").style.backgroundImage = 'url(resources/tower.jpg)';
  document.getElementById("background").style.backgroundPosition = "top";

  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option2.removeEventListener("click", branch22);

  text = "Narrator:\nYou continue walking up the mountain path without further incident. You reach the foot of the tower safely. Somehow, the dragon is nowhere to be seen. Huh, maybe the old woman wasn’t lying."
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "none";
      option2.style.display = "inline";
      option3.style.display = "none";

      option2.innerHTML = "(Continue up the tower.)";

      //Adds two event listeners: on click, call the midasTrue function and the branch52 function.
      option2.addEventListener("click", midasTrue);
      option2.addEventListener("click", branch52);
     };
  }
  typewriter()
}

//Branch23 dialogue
function branch23() {
  transition();
  document.getElementById("sprite").style.display = "inline";
  document.getElementById("sprite").style.backgroundImage = 'url(resources/oldwomang.png)';
  
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option1.removeEventListener("click", branch13);
  option2.removeEventListener("click", branch19);
  option3.removeEventListener("click", branch23);

  text = "Narrator:\nWithout saying a word, you touch the old woman with Midas’ Finger.\n\nYou watch, mesmerised, as her skin webs over with gold before your very eyes, her features twisting into a grotesque scowl. As her form solidifies, she opens her mouth to say something, but it’s too late. She’s been immortalised in solid gold.\n\n… You could have just said no, you know.";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "inline";
      option2.style.display = "none";
      option3.style.display = "none";

      option1.innerHTML = "(Shrug and continue up the mountain path.)";

      option1.addEventListener("click", branch24);
     };
  }
  typewriter()
}

//Branch24 dialogue
function branch24() {
  transition();
  document.getElementById("sprite").style.display = "none";
  document.getElementById("background").style.backgroundImage = 'url(resources/forestpath2.jpg)';
  document.getElementById("background").style.backgroundSize = "cover";
  
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option1.removeEventListener("click", branch24);

  text = "Narrator:\nYou continue walking up the mountain path, turning back to look at the woman’s now-aureate form. Something about the way it glitters…\n\nYou shake your head. Focus.";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "none";
      option2.style.display = "inline";
      option3.style.display = "none";

      option2.innerHTML = "Next";

      option2.addEventListener("click", branch25);
     };
  }
  typewriter()
}

//Branch25 dialogue
function branch25() {
  transition();
  document.getElementById("background").style.backgroundImage = 'url(resources/lake.jpeg)';
  document.getElementById("background").style.backgroundSize = "cover";
  
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option2.removeEventListener("click", branch25);

  text = "Narrator:\nSoon, you come across an expansive lake. There’s simply no other way to get across... I hope you can swim.";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "inline";
      option2.style.display = "inline";
      option3.style.display = "inline";

      option1.innerHTML = "(Turn the lake into gold.)";
      option2.innerHTML = "(Turn the lake into gold.)";
      option3.innerHTML = "(Turn the lake into gold.)";
    
      option1.addEventListener("click", branch26);
      option2.addEventListener("click", branch26);
      option3.addEventListener("click", branch26);
     };
  }
  typewriter()
}

//Branch26 dialogue
function branch26() {
  transition();
  document.getElementById("sprite").style.display = "none";
  document.getElementById("background").style.backgroundImage = 'url(resources/lakegold.jpg)';
  document.getElementById("background").style.backgroundSize = "cover";
 
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option1.removeEventListener("click", branch26);
  option2.removeEventListener("click", branch26);
  option3.removeEventListener("click", branch26);

  text = "Narrator:\nWell, that’s one way to do it.\n\nYou dip the finger into the water and watch, mesmerised, as its power flows into the lake, ribbons of gold streaming forth from its submerged fingertip. Soon enough, the lake gleams with all the brilliance of a setting sun; rich, honeyed, and lustrous. It’s solid enough for you to walk on, and so you do, admiring the beauty of your creation. You linger for just a little too long…\n\n…Let’s get going, Hero. We don’t have much time.";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "inline";
      option2.style.display = "none";
      option3.style.display = "none";

      option1.innerHTML = "(Reluctantly continue up the mountain path.)";

      option1.addEventListener("click", branch27);
     };
  }
  typewriter()
}

//Branch27 dialogue
function branch27() {
  transition();
  document.getElementById("background").style.backgroundImage = 'url(resources/dragon.jpg)';
  document.getElementById("background").style.backgroundSize = "cover";
  document.getElementById("background").style.backgroundPosition = "top left";
 
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option1.removeEventListener("click", branch27);

  text = "Narrator:\nEventually, you reach a large clearing at the top of the mountain. As the trees thin out around you, you come face to face with a monstrous, scaly beast. The dragon. It bares its fangs at you, swinging its tail in agitation. There’s no way around it — you must get past the dragon to reach the tower behind it. What will you do?";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "inline";
      option2.style.display = "inline";
      option3.style.display = "inline";

      option1.innerHTML = "(Turn the dragon into gold.)";
      option2.innerHTML = "(Turn the dragon into gold.)";
      option3.innerHTML = "(Turn the dragon into gold.)";
    
      option1.addEventListener("click", branch28);
      option2.addEventListener("click", branch28);
      option3.addEventListener("click", branch28);
     };
  }
  typewriter()
}

//Branch28 dialogue
function branch28() {
  transition();
  document.getElementById("background").style.backgroundImage = 'url(resources/dragongold.jpg)';
  document.getElementById("background").style.backgroundSize = "cover";
  document.getElementById("background").style.backgroundPosition = "top left";
  
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option1.removeEventListener("click", branch28);
  option2.removeEventListener("click", branch28);
  option3.removeEventListener("click", branch28);

  text = "Narrator:\nYou reach out and touch the dragon with Midas’ Finger. The beast lets out a mighty roar. You watch, mesmerised, as scale by scale, it ossifies into the most magnificent golden statue you’ve ever seen. Awestruck by your creation, you caress its golden scales and once-leathery wings, unable to take your eyes off its resplendent form…\n\n… Ahem. Hero. We still have a job to do.";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "none";
      option2.style.display = "inline";
      option3.style.display = "none";

      option2.innerHTML = "(Begrudgingly continue up the tower.)";

      option2.addEventListener("click", branch29);
     };
  }
  typewriter()
}

//Branch29 dialogue
function branch29() {
  transition();
  document.getElementById("background").style.backgroundImage = 'url(resources/bedroom.jpeg)';
  document.getElementById("background").style.backgroundSize = "cover";
  
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option2.removeEventListener("click", branch29);

  text = "Narrator:\nYou climb the tower stairs. As you make your way to the top, you turn everything you pass into gold, marvelling at the sight. Finally, you reach the princess, who lays asleep.";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "inline";
      option2.style.display = "inline";
      option3.style.display = "inline";

      option1.innerHTML = "(Turn the princess into gold.)";
      option2.innerHTML = "(Turn the princess into gold.)";
      option3.innerHTML = "(Turn the princess into gold.)";
    
      option1.addEventListener("click", branch30);
      option2.addEventListener("click", branch30);
      option3.addEventListener("click", branch30);
     };
  }
  typewriter()
}

//Branch30 dialogue
function branch30() {
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option1.removeEventListener("click", branch30);
  option2.removeEventListener("click", branch30);
  option3.removeEventListener("click", branch30);

  text = "Narrator:\nYou touch the princess with Midas’ Finger. You watch, mesmerised, as her skin gives way to a brilliant, ambrosian hue.\nHaving turned everything around you into gold, you look around, satisfied. But a nagging voice persists at the back of your mind. There’s one last thing yet to be turned into gold…";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "inline";
      option2.style.display = "inline";
      option3.style.display = "inline";

      option1.innerHTML = "(Turn yourself into gold.)";
      option2.innerHTML = "(Turn yourself into gold.)";
      option3.innerHTML = "(Turn yourself into gold.)";
    
      option1.addEventListener("click", badEnd3);
      option2.addEventListener("click", badEnd3);
      option3.addEventListener("click", badEnd3);
     };
  }
  typewriter()
}

//BadEnd3 dialogue
function badEnd3() {
  transition();
  document.getElementById("background").style.backgroundImage = 'url(resources/gold.jpg)';
  document.getElementById("background").style.backgroundSize = "cover";
  
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option1.removeEventListener("click", badEnd3);
  option2.removeEventListener("click", badEnd3);
  option3.removeEventListener("click", badEnd3);

  text = "Narrator:\n\nYou press the finger to your arm and watch, mesmerised, as your body transforms. A contented smile makes its way across your features as you, too, meet your golden end.\n\nBAD ENDING: All That Glitters Is Not Gold";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    }
  }
  typewriter()
}

//EXCALIBUR
//Counter - I'm initialising a variable called 'sword' that logs the number of times Excalibur is used by the player. If sword = 3, a bad end is triggered.
let sword = 0;
//When function is called, adds 1 to variable 'sword' and logs its value to the console.
function counter() {
  sword++;
  console.log(sword);
}

//Branch31 dialogue
function branch31() {
  transition();
  document.getElementById("background").style.backgroundImage = 'url(resources/thorns.jpeg)';
  document.getElementById("background").style.backgroundSize = "cover";
  document.getElementById("background").style.backgroundPosition = "top left";
  
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option2.removeEventListener("click", branch31);

  text = "Narrator:\nYou leave the cabin and continue up the winding mountain path. But it’s not long before you’re forced to stop, thorny vines blocking your path.";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "inline";
      option2.style.display = "inline";
      option3.style.display = "none";

      option1.innerHTML = "(Use Excalibur to clear the vines. So cool.)";
      option2.innerHTML = "(Use your bare hands instead.)";
    
      //Add an event listener that will call the counter function if option1 (use Excalibur) is selected.
      option1.addEventListener("click", counter);
      option1.addEventListener("click", branch32);
      option2.addEventListener("click", branch32);
     };
  }
  typewriter()
}

//Branch32 dialogue
function branch32() {
  transition();
  document.getElementById("background").style.backgroundImage = 'url(resources/forestpath.jpeg)';
  document.getElementById("background").style.backgroundSize = "cover";

  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option1.removeEventListener("click", branch32);
  option2.removeEventListener("click", branch32);

  //If the value of variable 'sword' is 1 (meaning it has been used once), it will display this text. Else it will display a different text.
  if (sword === 1) {
    text = "Narrator:\nYou feel a surge of power. The sword seems to come alive in your hands. The vines fall away, and for a moment you feel undefeatable. You emerge on the other side, triumphant.\n\nThe sword feels heavier in your hands. You wonder if it’s just your imagination.";
  } else {
    text = "Narrator:\nYou claw at the vines with your hands. It hurts, but you manage to clear a path just wide enough for you to squeeze through. You emerge on the other side, covered in scratches.\n…Did you really need to do that?";
  }
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "none";
      option2.style.display = "inline";
      option3.style.display = "none";

      option2.innerHTML = "(Continue up the mountain path.)";

      option2.addEventListener("click", branch33);
     };
  }
  typewriter()
}

//Branch33 dialogue
function branch33() {
  transition();
  document.getElementById("background").style.backgroundImage = 'url(resources/boulderroll.jpg)';
  document.getElementById("background").style.backgroundSize = "cover";
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option2.removeEventListener("click", branch33);

  text = "Narrator:\nYou continue up the mountain path, admiring the scenery as you go. Suddenly, you notice a gigantic boulder hurtling down the path towards you! There’s no time to dodge — you’ll be crushed. What do you do?";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "inline";
      option2.style.display = "inline";
      option3.style.display = "none";

      option1.innerHTML = "(Cleave it in half with Excalibur. So cool.)";
      option2.innerHTML = "(Bear the weight of the boulder.)";
    
      option1.addEventListener("click", counter);
      option1.addEventListener("click", branch34);
      option2.addEventListener("click", branch35);
     };
  }
  typewriter()
}

//Branch34 dialogue
function branch34() {
  transition();
  document.getElementById("background").style.backgroundImage = 'url(resources/boulderpath.jpeg)';
  document.getElementById("background").style.backgroundSize = "cover";
  
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option1.removeEventListener("click", counter);
  option1.removeEventListener("click", branch34);
  option2.removeEventListener("click", branch35);

  if (sword === 2) {
    text = "Narrator:\nYou ready the sword in front of you. As the boulder nears, you close your eyes and swing down with all your might. You feel a surge of power. The sword seems to come alive in your hands. When you open your eyes again, the two halves of the boulder lay on either side of you, and for a moment you feel undefeatable. You emerge on the other side, triumphant.\n\nThe moment ends, and you heave with fatigue, feeling drained and sluggish. The sword is so heavy you can barely lift it now. You wonder if it’s just your imagination.";
  } else {
    text = "Narrator:\nYou ready the sword in front of you. As the boulder nears, you close your eyes and swing down with all your might. You feel a surge of power. The sword seems to come alive in your hands. When you open your eyes again, the two halves of the boulder lay on either side of you, and for a moment you feel undefeatable. You emerge on the other side, triumphant.\n\nThe sword feels heavier in your hands. You wonder if it’s just your imagination.";
  }
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "inline";
      option2.style.display = "none";
      option3.style.display = "none";

      option1.innerHTML = "(Continue up the mountain path.)";

      option1.addEventListener("click", branch36);
     };
  }
  typewriter()
}

//Branch35 dialogue
function branch35() {
  transition();
  document.getElementById("background").style.backgroundImage = 'url(resources/boulderpath.jpeg)';
  document.getElementById("background").style.backgroundSize = "cover";
  
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option1.removeEventListener("click", counter);
  option1.removeEventListener("click", branch34);
  option2.removeEventListener("click", branch35);

  text = "Narrator:\nYou brace yourself for the impact.\n\n… You’re surprisingly sturdy. You stop the boulder in its tracks with your heroic strength and chuck it out of the way. Phew. You manage to emerge on the other side, relieved.\n…Did you really need to do that?";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "inline";
      option2.style.display = "none";
      option3.style.display = "none";

      option1.innerHTML = "(Continue up the mountain path.)";

      option1.addEventListener("click", branch36);
     };
  }
  typewriter()
}

//Branch36 dialogue
function branch36() {
  transition();
  document.getElementById("background").style.backgroundImage = 'url(resources/sleepingdragon.jpeg)';
  document.getElementById("background").style.backgroundSize = "cover";
  
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option1.removeEventListener("click", branch36);

  text = "Narrator:\nEventually, you reach a large clearing at the top of the mountain. As the trees thin out around you, you come face to face with a monstrous, scaly beast. The dragon. You must get past to reach the tower behind it. It’s slumbering peacefully, having not yet noticed you. What will you do?";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "inline";
      option2.style.display = "inline";
      option3.style.display = "none";

      option1.innerHTML = "(Slay the dragon with Excalibur. So cool.)";
      option2.innerHTML = "(Sneak past the dragon.)";
    
      option1.addEventListener("click", counter);
      option1.addEventListener("click", branch37);
      option2.addEventListener("click", badEnd4);
     };
  }
  typewriter()
}

//Branch37 dialogue
function branch37() {
  transition();
  if (sword === 3) {
    badEnd5();
  } else {
    if (sword === 2) {
      document.getElementById("background").style.backgroundImage = 'url(resources/deaddragon.jpeg)';
      document.getElementById("background").style.backgroundSize = "cover";
      document.getElementById("background").style.backgroundPosition = "bottom right";
      
      option1.style.display = "none";
      option2.style.display = "none";
      option3.style.display = "none";

      option1.removeEventListener("click", counter)
      option1.removeEventListener("click", branch37);
      option2.removeEventListener("click", badEnd4);

      text = "Narrator:\nYou ready the sword, aiming for the dragon’s heart. You close your eyes and swing down with all your might. You feel a surge of power. The sword seems to come alive in your hands. When you open your eyes again, the dragon is dead, and for a moment you feel undefeatable. You emerge triumphant.\nThe moment ends, and you heave with fatigue, feeling drained and sluggish. The sword is so heavy you can barely lift it now. You wonder if it’s just your imagination.\n\nUpon closer look, you notice that there’s something shiny in the dragon’s mouth.";
      speed = 15;
      document.getElementById("narratorText").innerText = '';
      let i = 0;

      function typewriter() {
        if (i < text.length) {
          if (text.charAt(i) == "\n") {
            document.getElementById("narratorText").innerHTML += "<br>";
          } else {
            document.getElementById("narratorText").innerHTML += text.charAt(i);
          }
          i++;
          setTimeout(typewriter, speed);
        } else {
          option1.style.display = "inline";
          option2.style.display = "none";
          option3.style.display = "none";

          option1.innerHTML = "(Take it.)";

          option1.addEventListener("click", branch38);
        };
      }
      typewriter()
    } else {
      document.getElementById("background").style.backgroundImage = 'url(resources/deaddragon.jpeg)';
      document.getElementById("background").style.backgroundSize = "cover";
      document.getElementById("background").style.backgroundPosition = "bottom right";
      
      option1.style.display = "none";
      option2.style.display = "none";
      option3.style.display = "none";

      option1.removeEventListener("click", counter);
      option1.removeEventListener("click", branch37);
      option2.removeEventListener("click", badEnd4);

      text = "Narrator:\nYou ready the sword, aiming for the dragon’s heart. You close your eyes and swing down with all your might. You feel a surge of power. The sword seems to come alive in your hands. When you open your eyes again, the dragon is dead, and for a moment you feel undefeatable. You emerge triumphant.\nThe sword feels heavier in your hands. You wonder if it’s just your imagination.\n\nUpon closer look, you notice that there’s something shiny in the dragon’s mouth.";
      speed = 15;
      document.getElementById("narratorText").innerText = '';
      let i = 0;

      function typewriter() {
        if (i < text.length) {
          if (text.charAt(i) == "\n") {
            document.getElementById("narratorText").innerHTML += "<br>";
          } else {
            document.getElementById("narratorText").innerHTML += text.charAt(i);
          }
          i++;
          setTimeout(typewriter, speed);
        } else {
          option1.style.display = "inline";
          option2.style.display = "none";
          option3.style.display = "none";

          option1.innerHTML = "(Take it.)";

          option1.addEventListener("click", branch38);
        };
      }
      typewriter()
    }
  }
}

//Branch38 dialogue
function branch38() {
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option1.removeEventListener("click", branch38);

  text = "You obtained:\nSilver totem!\n\nA mysterious silver totem shaped like a human heart. You wonder what it’s for.";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "none";
      option2.style.display = "inline";
      option3.style.display = "none";

      option2.innerHTML = "(Continue up the tower.)";

      option2.addEventListener("click", branch52)
     };
  }
  typewriter()
}

//BadEnd4 dialogue
function badEnd4() {
  transition()
  document.getElementById("background").style.backgroundImage = 'url(resources/dragonfire.jpeg)';
  document.getElementById("background").style.backgroundSize = "cover";
  document.getElementById("background").style.backgroundPosition = "center";
  
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option1.removeEventListener("click", counter);
  option1.removeEventListener("click", branch37);
  option2.removeEventListener("click", badEnd4);

  text = "Narrator:\nYou tiptoe around the dragon as quietly as you can. Carelessly, you step on a branch. It snaps, and the dragon awakens. Noticing you, it lets out a mighty roar. You feel the heat of dragon fire singe your eyebrows even before you see it, and in an instant, you’re reduced to ash.\n\nBAD ENDING: Ashes To Ashes";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    }
  }
  typewriter()
}

//BadEnd5 dialogue
function badEnd5() {
  document.getElementById("background").style.backgroundImage = 'url(resources/excalibur.jpg)';
  document.getElementById("background").style.backgroundSize = "cover";
  document.getElementById("background").style.backgroundPosition = "bottom center";
  
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option1.removeEventListener("click", counter);
  option1.removeEventListener("click", branch37);
  option2.removeEventListener("click", badEnd4);

  text = "Narrator:\nFighting your exhaustion, you ready the sword, aiming for the dragon’s heart. You close your eyes and swing down with all your might. You feel a surge of power. The sword seems to come alive in your hands. When you open your eyes again, the dragon is dead, and for a moment you feel undefeatable. You emerge triumphant.\n\nThe moment ends. Too weak now to even hold the sword, you collapse to the ground wheezing, overwhelmed by its power. Unable to recover, you can only stare helplessly at your own weary reflection in the blade as the light fades from your eyes.\n\nBAD ENDING: The Price Of Power";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    }
  }
  typewriter()
}

//PLOT ARMOUR
//Branch39 dialogue
function branch39() {
  transition();
  document.getElementById("background").style.backgroundImage = 'url(resources/forestpath.jpeg)';
  document.getElementById("background").style.backgroundSize = "cover";
  
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option2.removeEventListener("click", branch39);

  text = "Narrator:\nYou leave the cabin. Curses! — a passing bird poops on your helmet. You wipe it off, feeling like you’re about to have a very lucky day.";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "none";
      option2.style.display = "inline";
      option3.style.display = "none";

      option2.innerHTML = "(Continue walking up the mountain path.)";

      option2.addEventListener("click", branch40);
     };
  }
  typewriter()
}

//Branch40 dialogue
function branch40() {
  transition();
  document.getElementById("background").style.backgroundImage = 'url(resources/thorns.jpeg)';
  document.getElementById("background").style.backgroundSize = "cover";
  
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option2.removeEventListener("click", branch40);

  text = "Narrator:\nYou continue up the winding path. But it’s not long before you’re forced to stop, thorny vines blocking your path. There’s nothing around that you can use to help you.\nWhat will you do, Hero?";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "inline";
      option2.style.display = "inline";
      option3.style.display = "inline";

      option1.innerHTML = "(Use your bare hands to clear the vines.)";
      option2.innerHTML = "(Walk around and look for help.)";
      option3.innerHTML = "(Jump up and down, cursing your misfortune.)";
    
      option1.addEventListener("click", branch41);
      option2.addEventListener("click", branch42);
      option3.addEventListener("click", branch43);
     };
  }
  typewriter()
}

//Branch41 dialogue
function branch41() {
  transition();
  document.getElementById("background").style.backgroundImage = 'url(resources/boulderpath.jpeg)';
  document.getElementById("background").style.backgroundSize = "cover";
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option1.removeEventListener("click", branch41);
  option2.removeEventListener("click", branch42);
  option3.removeEventListener("click", branch43);

  text = "Narrator:\nAs you approach the thorns, you trip on air and tumble face first into the prickly bramble! … Thankfully, the vines were surprisingly weak and broke under your weight. Protected by your shoddy armour, you emerge on the other side, unscathed.\n\nLucky!";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "inline";
      option2.style.display = "none";
      option3.style.display = "none";

      option1.innerHTML = "(Continue up the mountain path.)";

      option1.addEventListener("click", branch44);
     };
  }
  typewriter()
}

//Branch42 dialogue
function branch42() {
  transition();
  document.getElementById("background").style.backgroundImage = 'url(resources/boulderpath.jpeg)';
  document.getElementById("background").style.backgroundSize = "cover";
  
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option1.removeEventListener("click", branch41);
  option2.removeEventListener("click", branch42);
  option3.removeEventListener("click", branch43);

  text = "Narrator:\nAs you pace back and forth, you trip on air and tumble face first into the prickly bramble! … Thankfully, the vines were surprisingly weak and broke under your weight. Protected by your shoddy armour, you emerge on the other side, unscathed.\n\nLucky!";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "inline";
      option2.style.display = "none";
      option3.style.display = "none";

      option1.innerHTML = "(Continue up the mountain path.)";

      option1.addEventListener("click", branch44);
     };
  }
  typewriter()
}

//Branch43 dialogue
function branch43() {
  transition();
  document.getElementById("background").style.backgroundImage = 'url(resources/boulderpath.jpeg)';
  document.getElementById("background").style.backgroundSize = "cover";
  
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option1.removeEventListener("click", branch41);
  option2.removeEventListener("click", branch42);
  option3.removeEventListener("click", branch43);

  text = "Narrator:\nYou jump up and down childishly, lamenting your poor luck. As your feet land on the ground, you trip on air and tumble face first into the prickly bramble! … Thankfully, the vines were surprisingly weak and broke under your weight. Protected by your shoddy armour, you emerge on the other side, unscathed.\n\nLucky!";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "inline";
      option2.style.display = "none";
      option3.style.display = "none";

      option1.innerHTML = "(Continue up the mountain path.)";

      option1.addEventListener("click", branch44);
     };
  }
  typewriter()
}

//Branch44 dialogue
function branch44() {
  transition();
  document.getElementById("background").style.backgroundImage = 'url(resources/boulderroll.jpg)';
  document.getElementById("background").style.backgroundSize = "cover";
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option1.removeEventListener("click", branch44);

  text = "Narrator:\nYou continue up the mountain path, admiring the scenery as you go. Suddenly, you notice a gigantic boulder hurtling down the path towards you! There’s no time to dodge — you’ll be crushed. What do you do?";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "inline";
      option2.style.display = "inline";
      option3.style.display = "inline";

      option1.innerHTML = "(Prepare to bear the weight of the boulder.)";
      option2.innerHTML = "(Scream.)";
      option3.innerHTML = "(Close your eyes and resign yourself to death’s cold embrace.)";
    
      option1.addEventListener("click", branch45);
      option2.addEventListener("click", branch46);
      option3.addEventListener("click", branch47);
     };
  }
  typewriter()
}

//Branch45 dialogue
function branch45() {
  transition();
  document.getElementById("background").style.backgroundImage = 'url(resources/boulderpath.jpeg)';
  document.getElementById("background").style.backgroundSize = "cover";
  
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option1.removeEventListener("click", branch45);
  option2.removeEventListener("click", branch46);
  option3.removeEventListener("click", branch47);

  text = "Narrator:\nYou steel yourself for the boulder’s impact. However, just before it reaches you, the boulder hits a sharp pebble on the path and splits into two, its halves just barely missing you.\n\nLucky!";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "inline";
      option2.style.display = "none";
      option3.style.display = "none";

      option1.innerHTML = "(Continue up the mountain path.)";

      option1.addEventListener("click", branch48);
     };
  }
  typewriter()
}

//Branch46 dialogue
function branch46() {
  transition();
  document.getElementById("background").style.backgroundImage = 'url(resources/boulderpath.jpeg)';
  document.getElementById("background").style.backgroundSize = "cover";
  
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option1.removeEventListener("click", branch45);
  option2.removeEventListener("click", branch46);
  option3.removeEventListener("click", branch47);

  text = "Narrator:\nYou instinctively let out the loudest shriek you can muster, scaring away any and all birds in the vicinity. Just before the boulder reaches you however, it hits a sharp pebble on the path and splits into two, its halves just barely missing you.\n\nLucky!";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "inline";
      option2.style.display = "none";
      option3.style.display = "none";

      option1.innerHTML = "(Continue up the mountain path.)";

      option1.addEventListener("click", branch48);
     };
  }
  typewriter()
}

//Branch47 dialogue
function branch47() {
  transition();
  document.getElementById("background").style.backgroundImage = 'url(resources/boulderpath.jpeg)';
  document.getElementById("background").style.backgroundSize = "cover";
  
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option1.removeEventListener("click", branch45);
  option2.removeEventListener("click", branch46);
  option3.removeEventListener("click", branch47);

  text = "Narrator:\nYou squeeze your eyes shut and prepare to feel the crushing impact of the boulder. However, it never comes — just before it reaches you, the boulder hits a sharp pebble on the path and splits into two, its halves just barely missing you.\n\nLucky!";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "inline";
      option2.style.display = "none";
      option3.style.display = "none";
    
      option1.innerHTML = "(Continue up the mountain path.)";
    
      option1.addEventListener("click", branch48);
     };
  }
  typewriter()
}

//Branch48 dialogue
function branch48() {
  transition();
  document.getElementById("background").style.backgroundImage = 'url(resources/dragon.jpg)';
  document.getElementById("background").style.backgroundSize = "cover";
  document.getElementById("background").style.backgroundPosition = "top left";
  
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option1.removeEventListener("click", branch48);

  text = "Narrator:\nEventually, you reach a large clearing at the top of the mountain. As the trees thin out around you, you come face to face with a monstrous, scaly beast. The dragon. It bares its fangs at you, swinging its tail in agitation. There’s no way around it — you must get past the dragon to reach the tower behind it. What will you do?";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "inline";
      option2.style.display = "inline";
      option3.style.display = "inline";

      option1.innerHTML = "(Try to fistfight it with your bare hands. … Really??)";
      option2.innerHTML = "((Stick out your tongue, taunting the dragon.)";
      option3.innerHTML = "(Fall to your knees and resign yourself to death’s cold embrace.)";
    
      option1.addEventListener("click", branch49);
      option2.addEventListener("click", branch50);
      option3.addEventListener("click", branch51);
     };
  }
  typewriter()
}

//Branch49 dialogue
function branch49() {
  transition();
  document.getElementById("background").style.backgroundImage = 'url(resources/rubble.jpeg)';
  document.getElementById("background").style.backgroundSize = "cover";
  document.getElementById("background").style.backgroundPosition = "center";
  
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option1.removeEventListener("click", branch49);
  option2.removeEventListener("click", branch50);
  option3.removeEventListener("click", branch51);

  text = "Narrator:\nYou raise your fists, assume your best fighting stance, and throw a few practice punches in the air. The dragon visibly bristles, more bellicose than before. Letting out a mighty roar, it rears up on its haunches and swings its powerful tail with an even greater force — in one sweeping motion, its muscular tail collides with the tower! It topples instantly, burying the dragon in rubble. … I guess both the dragon and the princess are dead.\n\nHow convenient!";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "inlinr";
      option2.style.display = "nonr";
      option3.style.display = "none";
    
      option1.innerHTML = "“... Wow. Lucky!”";
    
      option1.addEventListener("click", goodEnd);
     };
  }
  typewriter()
}

//Branch50 dialogue
function branch50() {
  transition();
  document.getElementById("background").style.backgroundImage = 'url(resources/rubble.jpeg)';
  document.getElementById("background").style.backgroundSize = "cover";
  document.getElementById("background").style.backgroundPosition = "center";
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option1.removeEventListener("click", branch49);
  option2.removeEventListener("click", branch50);
  option3.removeEventListener("click", branch51);

  text = "Narrator:\nYou stick your tongue out at the dragon, dancing mockingly before it like some sort of imp. Visibly enraged, it lets out a mighty roar. Rearing up on its haunches, it swings its powerful tail with an even greater force — in one sweeping motion, its muscular tail collides with the tower! It topples instantly, burying the dragon in rubble. … I guess both the dragon and the princess are dead.\n\nHow convenient!";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "inline";
      option2.style.display = "none";
      option3.style.display = "none";
    
      option1.innerHTML = "“... Wow. Lucky!”";
    
      option1.addEventListener("click", goodEnd);
     };
  }
  typewriter()
}

//Branch51 dialogue
function branch51() {
  transition();
  document.getElementById("background").style.backgroundImage = 'url(resources/rubble.jpeg)';
  document.getElementById("background").style.backgroundSize = "cover";
  document.getElementById("background").style.backgroundPosition = "center";
  
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option1.removeEventListener("click", branch49);
  option2.removeEventListener("click", branch50);
  option3.removeEventListener("click", branch51);

  text = "Narrator:\nYou fall to your knees dramatically, the strength leaving your body. The dragon lets out a mighty roar, and you squeeze your eyes shut in anticipation of your certain fiery demise. However, it never comes — the dragon rears up on its haunches and swings its powerful tail with an even greater force. In one sweeping motion, its muscular tail collides with the tower! It topples instantly, burying the dragon in rubble. … I guess both the dragon and the princess are dead.\n\nHow convenient!";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "inline";
      option2.style.display = "none";
      option3.style.display = "none";
    
      option1.innerHTML = "“... Wow. Lucky!”";
    
      option1.addEventListener("click", goodEnd);
     };
  }
  typewriter()
}

//GoodEnd dialogue
function goodEnd() {
  transition();
  document.getElementById("background").style.backgroundImage = 'url(resources/kingdom.jpeg)';
  document.getElementById("background").style.backgroundSize = "cover";
  document.getElementById("background").style.backgroundPosition = "center";
  
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option1.removeEventListener("click", goodEnd)

  text = "Narrator:\nCongratulations, Hero! You’ve saved everyone from the prophecy! You make your way back down the mountain, past the cabin and into the kingdom walls. There, you receive a Hero’s welcome — you’re showered with riches, gifts, a feast, everything you could ever want, and you live happily ever after. The end.\n\nGOOD ENDING…?";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    }
  }
  typewriter()
}

//TRUE END
//Branch52 dialogue
function branch52() {
  transition();
  document.getElementById("background").style.backgroundImage = 'url(resources/staircase.jpg)';
  document.getElementById("background").style.backgroundSize = "cover";
  document.getElementById("background").style.backgroundPosition = "center";
  
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option2.removeEventListener("click", midasTrue);
  option2.removeEventListener("click", branch52);

  text = "Narrator:\nYou ascend the spiralling tower staircase. You have a long way to go. Looks like it’s going to take a while… So let's chat, shall we?\n\nYou’re nearing the end of your journey, Hero. How do you feel?";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "inline";
      option2.style.display = "inline";
      option3.style.display = "inline";

      option1.innerHTML = "“... I wish I’d gone back to sleep.”";
      option2.innerHTML = "“I don’t know. I don’t really want to kill the princess.”";
      option3.innerHTML = "“(Huff)... When are these stairs (Huff)… going to end…?!”";
    
      option1.addEventListener("click", branch53);
      option2.addEventListener("click", branch54);
      option3.addEventListener("click", branch55);
     };
  }
  typewriter()
}

//Branch53 dialogue
function branch53() {
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option1.removeEventListener("click", branch53);
  option2.removeEventListener("click", branch54);
  option3.removeEventListener("click", branch55);

  text = "Narrator:\nWell, I’m sorry to hear that. But look on the bright side! Once your journey is over, you can sleep for as long as you like. I certainly won’t stop you.";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "none";
      option2.style.display = "inline";
      option3.style.display = "none";
    
      option2.innerHTML = "“Yeah, I’m definitely going to need a vacation after this.”";
    
      option2.addEventListener("click", branch56)
     };
  }
  typewriter()
}

//Branch54 dialogue
function branch54() {
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option1.removeEventListener("click", branch53);
  option2.removeEventListener("click", branch54);
  option3.removeEventListener("click", branch55);

  text = "Narrator:\nYou’ve come this far — you can’t stop now. Remember all the people you’ll be saving. What’s one tiny life in exchange for that?";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "inline";
      option2.style.display = "inline";
      option3.style.display = "none";
    
      option1.innerHTML = "“You’re right. It’s a necessary evil.”";
      option2.innerHTML = "“I don’t know. It just feels wrong.”";
    
      option1.addEventListener("click", branch57);
      option2.addEventListener("click", branch57);
     };
  }
  typewriter()
}

//Branch55 dialogue
function branch55() {
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option1.removeEventListener("click", branch53);
  option2.removeEventListener("click", branch54);
  option3.removeEventListener("click", branch55);

  text = "Narrator:\n … I’m sorry for asking.";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "none";
      option2.style.display = "inline";
      option3.style.display = "none";
    
      option2.innerHTML = "(Continue up the stairs in silence.)";
    
      option2.addEventListener("click", branch58);
     };
  }
  typewriter()
}

//Branch56 dialogue
function branch56() {
  transition();
  document.getElementById("background").style.backgroundImage = 'url(resources/door.jpeg)';
  document.getElementById("background").style.backgroundSize = "cover";
  document.getElementById("background").style.backgroundPosition = "center";
  
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option2.removeEventListener("click", branch56);

  text = "Narrator:\nAnd you’ll be able to take one once you save the kingdom. Would you look at that, you’ve reached the top already.\n\nA heavy wooden door stands before you – behind it lies the princess’s chambers. Are you ready, Hero?";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "none";
      option2.style.display = "inline";
      option3.style.display = "none";

      option2.innerHTML = "(Nod and open the door.)";

      option2.addEventListener("click", branch59);
     };
  }
  typewriter()
}

//Branch57 dialogue
function branch57() {
  transition();
  document.getElementById("background").style.backgroundImage = 'url(resources/door.jpeg)';
  document.getElementById("background").style.backgroundSize = "cover";
  document.getElementById("background").style.backgroundPosition = "center";
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option1.removeEventListener("click", branch57);
  option2.removeEventListener("click", branch57);

  text = "Narrator:\nWell, no time to worry about that now. Would you look at that, you’ve reached the top already.\n\nA heavy wooden door stands before you – behind it lies the princess’s chambers. Are you ready, Hero?";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "none";
      option2.style.display = "inline";
      option3.style.display = "none";
    
      option2.innerHTML = "(Nod and open the door.)";
    
      option2.addEventListener("click", branch59);
     };
  }
  typewriter()
}

//Branch58 dialogue
function branch58() {
  transition();
  document.getElementById("background").style.backgroundImage = 'url(resources/door.jpeg)';
  document.getElementById("background").style.backgroundSize = "cover";
  document.getElementById("background").style.backgroundPosition = "center";
  
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option2.removeEventListener("click", branch58);

  text = "Narrator:\n… Would you look at that, you’ve reached the top already. That wasn’t so bad, was it?\n\nA heavy wooden door stands before you – behind it lies the princess’s chambers. Are you ready, Hero?";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "none";
      option2.style.display = "inline";
      option3.style.display = "none";

      option2.innerHTML = "(Nod and open the door.)";

      option2.addEventListener("click", branch59);
     };
  }
  typewriter()
}

//Branch59 dialogue
function branch59() {
  transition();
  document.getElementById("background").style.backgroundImage = 'url(resources/dungeon.jpeg)';
  document.getElementById("background").style.backgroundSize = "cover";
  
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option2.removeEventListener("click", branch59);

  text = "Narrator:\nThe door opens into a small, windowless room. A single lantern is suspended from the ceiling, casting a dim, flickering glow across the chamber.\n\nThere lies the princess, asleep.";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "inline";
      option2.style.display = "inline";
      option3.style.display = "none";
    
      option1.innerHTML = "(Kill the princess.)";
      option2.innerHTML = "“I can’t do it.” (Spare the princess.)";
    
      //If the player reached this branch through the Midas route, the midasTrue function would have added 1 to the 'midas' variable in branch22.
      if (midas === 0) { //midas = 0 means the route is Excalibur. Added an event listener to call the counter function if Excalibur is used again.
        option1.addEventListener("click", counter); 
        option1.addEventListener("click", branch61);
      } else {
        option1.addEventListener("click", branch60);
      }
      option2.addEventListener("click", branch62);
     };
  }
  typewriter()
}

//Branch60 dialogue
function branch60() {
  transition()
  document.getElementById("background").style.backgroundImage = 'url(resources/dungeon.jpeg)';
  document.getElementById("background").style.backgroundSize = "cover";
  
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option1.removeEventListener("click", branch60);
  option2.removeEventListener("click", branch62);

  text = "Narrator:\nYou gingerly place your hands around the princess’s neck. In a few moments, it’s over.\n\nYou’ve done it, Hero! You’ve saved us all!";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "none";
      option2.style.display = "inline";
      option3.style.display = "none";
    
      option2.innerHTML = "(Leave the tower.)";
    
      option2.addEventListener("click", badEnd7);
     };
  }
  typewriter()
}

//Branch61 dialogue
function branch61() {
  transition()

  if (sword === 3) {
    badEnd6()
  } else {
    option1.style.display = "none";
    option2.style.display = "none";
    option3.style.display = "none";

    option1.removeEventListener("click", counter);
    option1.removeEventListener("click", branch61);
    option2.removeEventListener("click", branch62);

    text = "Narrator:\nYou ready Excalibur, holding it above the princess’s sleeping form. You feel a surge of power — the sword seems to come alive in your hands. In one swift movement, you bring it down into the princess’s heart.\n\nYou’ve done it, Hero! You’ve saved us all!";
    speed = 15;
    document.getElementById("narratorText").innerText = '';
    let i = 0;

    function typewriter() {
      if (i < text.length) {
        if (text.charAt(i) == "\n") {
          document.getElementById("narratorText").innerHTML += "<br>";
        } else {
          document.getElementById("narratorText").innerHTML += text.charAt(i);
        }
        i++;
        setTimeout(typewriter, speed);
      } else {
        option1.style.display = "none";
        option2.style.display = "inline";
        option3.style.display = "none";
    
        option2.innerHTML = "(Leave the tower.)";
    
        option2.addEventListener("click", badEnd7)
      };
    }
    typewriter()
  }
}

//BadEnd6 dialogue
function badEnd6() {
  document.getElementById("background").style.backgroundImage = 'url(resources/excalibur.jpg)';
  document.getElementById("background").style.backgroundSize = "cover";
  document.getElementById("background").style.backgroundPosition = "bottom center";
  
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option2.removeEventListener("click", badEnd6);

  text = "Narrator:\nFighting your exhaustion, you ready Excalibur, holding it above the princess’s sleeping form. You feel a surge of power — the sword seems to come alive in your hands. In one swift movement, you bring it down into the princess’s heart.\n\nThe moment ends. Too weak now to even hold the sword, you collapse to the ground wheezing, overwhelmed by its power. Unable to recover, you can only stare helplessly at your own weary reflection in the blade as the light fades from your eyes.\n\nBAD ENDING: The Price Of Power";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    }
  }
  typewriter()
}

//BadEnd7 dialogue
function badEnd7() {
  transition()
  document.getElementById("background").style.backgroundImage = 'url(resources/door.jpeg)';
  document.getElementById("background").style.backgroundSize = "cover";
  
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option2.removeEventListener("click", badEnd7);

  text = "Narrator:\nYou try the handle of the door — it doesn’t move. Beginning to panic, you push against it with every ounce of strength in your body. It doesn’t budge an inch.\n\nPanic gives way to horror, which gives way to hysteria, and finally, to cold, dark, dread as you realise all your efforts are futile. You’re trapped in the tower, condemned to spend the rest of your life in this room.\n\nThe flickering lantern your only source of light, you quickly lose all sense of time. Seconds bleed into minutes, hours, days, and you can feel yourself losing your mind to hunger and thirst. Eventually, you meet your inevitable end.\n\nBAD ENDING: A Life For A Life";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } 
  }
  typewriter()
}

//Branch62 dialogue
function branch62() {
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option1.removeEventListener("click", counter);
  option1.removeEventListener("click", branch61);
  option1.removeEventListener("click", branch60);
  option2.removeEventListener("click", branch62);

  text = "Narrator:\nWhat?! But you’ve come all this way! Just to throw away every one of our lives? Need I remind you of what’s going to happen if you don’t kill her?";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "none";
      option2.style.display = "inline";
      option3.style.display = "none";
    
      option2.innerHTML = "“I know, I know. But I just can’t do it. It feels wrong. There has to be another way.”";
    
      option2.addEventListener("click", branch63);
     };
  }
  typewriter()
}

//Branch63 dialogue
function branch63() {
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option2.removeEventListener("click", branch63);

  text = "Narrator:\nWhat other way is there?? We’re running out of time. Come on, Hero. There’s nothing else you can do.";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "none";
      option2.style.display = "inline";
      option3.style.display = "none";
    
      option2.innerHTML = "“Well, there’s one thing left that I haven’t used — this has to be useful somehow.” (Take out the silver totem.)";
    
      option2.addEventListener("click", branch64);
     };
  }
  typewriter()
}

//Branch64 dialogue
function branch64() {
  transition();
  document.getElementById("background").style.backgroundImage = 'url(resources/white.png)'
  
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option2.removeEventListener("click", branch64);

  text = "Narrator:\nBut —\n\nWait. The totem is glowing! How is this possible—! … Ahem.\n\nThe totem begins to glow brighter and brighter still, until it fills the dark room with the brilliance of a thousand suns. It’s so bright that you’re forced to close your eyes.";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "inline";
      option2.style.display = "none";
      option3.style.display = "none";

      option1.innerHTML = "(Shield your eyes.)";

      option1.addEventListener("click", branch65);
     };
  }
  typewriter()
}

//Branch65 dialogue
function branch65() {
  transition()
  document.getElementById("sprite").style.display = "inline";
  document.getElementById("sprite").style.backgroundImage = 'url(resources/princess.png)';
  document.getElementById("sprite").style.marginBottom = "180px";
  document.getElementById("background").style.backgroundImage = 'url(resources/bedroom.jpeg)';
  document.getElementById("background").style.backgroundSize = "cover";
  
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option1.removeEventListener("click", branch65);

  text = "Narrator:\nWhen you open your eyes again, you find that the room has been transformed. Looking around, you notice that the princess is awake and gawking at you in shock.";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "none";
      option2.style.display = "inline";
      option3.style.display = "none";

      option2.innerHTML = "“... Hello, uh, Your Highness. Do you happen to know what’s going on?”";

      option2.addEventListener("click", branch66);
     };
  }
  typewriter()
}

//Branch66 dialogue
function branch66() {
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option2.removeEventListener("click", branch66);

  text = "Princess:\nI… can’t believe it. I’m awake! Somehow you’ve broken the prophecy!";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "none";
      option2.style.display = "inline";
      option3.style.display = "none";

      option2.innerHTML = "“Does this mean I don’t have to kill you any more?”";

      option2.addEventListener("click", branch67);
     };
  }
  typewriter()
}

//Branch67 dialogue
function branch67() {
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option2.removeEventListener("click", branch67);

  text = "Princess:\n(She laughs.) It seems so! I guess everyone is saved.";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "inline";
      option2.style.display = "inline";
      option3.style.display = "inline";
    
      option1.innerHTML = "“How do you know the prophecy has been lifted?”";
      option2.innerHTML = "“What’s with the prophecy, anyway?”";
      option3.innerHTML = "“I don’t have any more questions. Let’s get going!”";
    
      option1.addEventListener("click", branch68);
      option2.addEventListener("click", branch69);
      option3.addEventListener("click", trueEnd);
     };
  }
  typewriter()
}

//Branch68 dialogue
function branch68() {
  document.getElementById("background").style.backgroundImage = 'url(resources/bedroom.jpeg)';
  document.getElementById("background").style.backgroundSize = "cover";
  
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option1.removeEventListener("click", branch68)
  option2.removeEventListener("click", branch69)
  option3.removeEventListener("click", trueEnd)

  text = "Princess:\nWell, if the prophecy wasn’t lifted, I’d still be under that sleeping spell!";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "none";
      option2.style.display = "inline";
      option3.style.display = "inline";
    
      option1.innerHTML = "“How do you know the prophecy has been lifted?”";
      option2.innerHTML = "“What’s with the prophecy, anyway?”";
      option3.innerHTML = "“I don’t have any more questions. Let’s get going!”";
    
      option1.addEventListener("click", branch68);
      option2.addEventListener("click", branch69);
      option3.addEventListener("click", trueEnd);
     };
  }
  typewriter()
}

//Branch69 dialogue
function branch69() {
  document.getElementById("background").style.backgroundImage = 'url(resources/bedroom.jpeg)';
  document.getElementById("background").style.backgroundSize = "cover";
  
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  option1.removeEventListener("click", branch68)
  option2.removeEventListener("click", branch69)
  option3.removeEventListener("click", trueEnd)

  text = "Princess: My father exiled an oracle for practising dark magic. In a rage, she cursed our kingdom with this prophecy — that if I was still alive by my next birthday, a terrible tragedy would befall the kingdom. I agreed to be put in the tower for my own protection, under a sleeping spell, while he tried to find a way to break the curse. And, well, if someone made it past all the obstacles to kill me before then, nobody could fault them for risking their life to try and save the kingdom.";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } else {
      option1.style.display = "inline";
      option2.style.display = "none";
      option3.style.display = "inline";
    
      option1.innerHTML = "“How do you know the prophecy has been lifted?”";
      option2.innerHTML = "“What’s with the prophecy, anyway?”";
      option3.innerHTML = "“I don’t have any more questions. Let’s get going!”";
    
      option1.addEventListener("click", branch68);
      option2.addEventListener("click", branch69);
      option3.addEventListener("click", trueEnd);
     };
  }
  typewriter()
}

//TrueEnd dialogue
function trueEnd() {
  transition()
  document.getElementById("sprite").style.display = "none";
  document.getElementById("background").style.backgroundImage = 'url(resources/kingdom.jpeg)';
  document.getElementById("background").style.backgroundSize = "cover";
  document.getElementById("background").style.backgroundPosition = "center";
  
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";

  text = "Narrator:\nYou and the princess leave the tower. You tell her the tale of your journey as you both make your way back down the mountain, past the cabin, and into the kingdom walls. There, you receive a Hero’s welcome – you’re showered with riches, gifts, a feast, everything you could ever want. The princess is reunited with her father, who cries tears of joy, and all of you live happily ever after. The end.\n\nCongratulations, Hero! Against all odds, you saved both the kingdom and the princess. I suppose it’s better to err on the side of mercy after all. I guess this means you’ve come to the end of your journey. Thank you for playing!\n\nTRUE ENDING: Hero";
  speed = 15;
  document.getElementById("narratorText").innerText = '';
  let i = 0;

  function typewriter() {
    if (i < text.length) {
      if (text.charAt(i) == "\n") {
        document.getElementById("narratorText").innerHTML += "<br>";
      } else {
        document.getElementById("narratorText").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typewriter, speed);
    } 
  }
  typewriter()
}