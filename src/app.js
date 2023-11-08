/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let newArray = [];
  for (let i = 0; i < 4; i++) {
    if (i === 2) {
      newArray[i] = Math.floor(Math.random() * 3);
    } else if (i === 3) {
      newArray[i] = Math.floor(Math.random() * 5);
    } else {
      newArray[i] = Math.floor(Math.random() * 4);
    }
  }
  let frase =
    who[newArray[0]] +
    " " +
    action[newArray[1]] +
    " " +
    what[newArray[2]] +
    " " +
    when[newArray[3]];

  document.getElementById("excuse").innerHTML = frase;
};
