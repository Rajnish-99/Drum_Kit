// bhyie ab vhal rha h mamla kaida
// ab hum add karenge cheje
// new cheej seekhi wo h addEventListener
// function handleclick() // ye humne function bana dia h jiski help se hum pop up msg denge jab bhi click hoga mamala pani
// {
//   var audio= new Audio('sounds/tom-1.mp3');
//   audio.play();
// }
// document.querySelector("button").addEventListener("click", handleclick);
// ek tatika aur h function ko define karne ka wo h anonymous function banana;
// uss funciton mai hum definition nahi dete h bss function likh dete h example neeche dekho
// document.querySelector("button").addEventListener("click", funcion(){
// alert("tapli baj gyi h bhyie");
// });
// ab mujea saro k sath aise karna h  ki kisi bhi button ko dabau mamla set ho jaye
// bhai yaha use karna padega for loop ko kyoki mamla chal rha h sare button new Promise(function(resolve, reject)

// ye sare buttons ki length dega
var n = document.querySelectorAll(".drum").length;
for (var i = 0; i < n; i++)
// iterate kar raha h har jgh   agar maine all name kia aur drum use nahi kia toh wo sirf first element ko access karega
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    // assigning the different values to the words
    var valueButton = this.innerHTML;
    makeSound(valueButton);
    buttonAnimation(valueButton);
  });
}
// below will work when the key is pressed from the keyboard

//detecting the keypress
document.addEventListener("keypress", function(event) {
  makeSound(event.key); // this is used to provide the which key is pressed
  // we can put anyname to the event/ anything of your choice
  buttonAnimation(event.key);
});
// funciton to perfrom the task from different sources
// will work id there is  screen press and there is a press from the keyboard
function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case "a":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    case "s":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case "d":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case "j":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case "k":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case "l":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    default:
      console.log(valueButton);
  }
}

function buttonAnimation(currentkey) {
  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
