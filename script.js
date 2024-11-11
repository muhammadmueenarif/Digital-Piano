  /*
This code is an event listener for button with id 'btn1'. When it is clicked, it triggers function that creates 
new instance of Audio object with source set to 'sounds/C.mp3'. The play() method is then called on
sound1 object, which starts playing the audio file. */
document.getElementById("btn1").addEventListener("click", () => {
    const sound1 = new Audio("sounds/C.mp3");
    sound1.play();
  });
  document.getElementById("btn2").addEventListener("click", () => {
    const sound2 = new Audio("sounds/CC.mp3");
    sound2.play();
  });
  document.getElementById("btn3").addEventListener("click", () => {
    const sound3 = new Audio("sounds/D.mp3");
    sound3.play();
  });
  document.getElementById("btn4").addEventListener("click", () => {
    const sound4 = new Audio("sounds/DD.mp3");
    sound4.play();
  });
  document.getElementById("btn5").addEventListener("click", () => {
    const sound5 = new Audio("sounds/E.mp3");
    sound5.play();
  });
  document.getElementById("btn6").addEventListener("click", () => {
    const sound6 = new Audio("sounds/F.mp3");
    sound6.play();
  });
  document.getElementById("btn7").addEventListener("click", () => {
    const sound7 = new Audio("sounds/FF.mp3");
    sound7.play();
  });
  document.getElementById("btn8").addEventListener("click", () => {
    const sound8 = new Audio("sounds/G.mp3");
    sound8.play();
  });
  document.getElementById("btn9").addEventListener("click", () => {
    const sound9 = new Audio("sounds/GG.mp3");
    sound9.play();
  });
  document.getElementById("btn10").addEventListener("click", () => {
    const sound10 = new Audio("sounds/A.mp3");
    sound10.play();
  });
  document.getElementById("btn11").addEventListener("click", () => {
    const sound11 = new Audio("sounds/AA.mp3");
    sound11.play();
  });
  document.getElementById("btn12").addEventListener("click", () => {
    const sound12 = new Audio("sounds/B.mp3");
    sound12.play();
  });
  document.getElementById("btn13").addEventListener("click", () => {
    const sound13 = new Audio("sounds/C2.mp3");
    sound13.play();
  });
  
                                              /* Methods 02 */
  // we can do same thing in another way. we can give onclick function of playSound to each button.
  // pass the note as parameter in function and then create object and play the desired sound from sounds folder.
  // we can also use switch case to play different sounds based on the note.
  /*
  function playSound(note) {
    const sound = new Audio(`sounds/${note}.mp3`);
    sound.play();
  }
    */
  
  /*
  Second methods has function of playSound. It takes note parameter. Inside the function, a new instance of 
  Audio object is created with source set to the path 'sounds/'. The play() method then called on sound object 
  which starts playing the audio file corresponding to the given note.
  
  This function simplify code by removing repetitive event listeners for each button. Instead of attaching
  event listener to each button and creating a new Audio object for each note, attach single event listener 
  to each button and call playSound function with appropriate note as the parameter. This approach reduces 
  amount of code and makes it easier to maintain and update the audio playback functionality.
   */
  
                            
  
                                  //Method 3. now we will do same by using switch statement
  
  /* function playSoundBySwitch(note) {
    let sound;
    switch (note) {
      case 'C':
        sound = new Audio('sounds/C.mp3');
        break;
      case 'CC':
        sound = new Audio('sounds/CC.mp3');
        break;
      case 'D':
        sound = new Audio('sounds/D.mp3');
        break;
      case 'DD':
        sound = new Audio('sounds/DD.mp3');
        break;
      case 'E':
        sound = new Audio('sounds/E.mp3');
        break;
      case 'F':
        sound = new Audio('sounds/F.mp3');
        break;
      case 'FF':
        sound = new Audio('sounds/FF.mp3');
        break;
      case 'G':
        sound = new Audio('sounds/G.mp3');
        break;
      case 'GG':
        sound = new Audio('sounds/GG.mp3');
        break;
        // ... add more cases for other notes
  
      default:
        console.error('Invalid note');
        return;
    }
    sound.play();
    console.log(`Playing sound for note: ${note}`);
    // add more code to handle successful or failed sound playback
    // ...
  }
    */