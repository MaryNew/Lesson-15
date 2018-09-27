var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var main = document.getElementById("main");
var myList = document.getElementById("list");
var ul = document.getElementsByTagName("ul");
var story = myList.getElementsByClassName("item");
var popup = document.getElementsByClassName("popup")[0];
var close = document.querySelector(".close");
var name = prompt('Как вас зовут?');
var age = prompt('Сколько вам лет?');
var value;
true;
false;


console.log(btn1);
console.log(btn2);
console.log(ul);
console.log(story);

function addItem() {
  var newLi = document.createElement("li");
  newLi.innerHTML = "Новая задача!";
  newLi.className = "item";
  myList.appendChild(newLi);
  popup.style.display = "none";
}
function delItem() {
  myList.removeChild(story[0]);

  if(story.length == 0) {
    popup.style.display = "block";
  }
}

function message() {
  console.log("Пользователь " + name + " допущен");
}

function closePopup() {
  popup.style.display = "none"; 
}

if (age >= 18) {
  value = confirm("Вы подписаны на рассылку?");
  if (value == true) {
    message();
  } else {
    alert(name + ", доступ запрещен!");
  }
} else {
  alert(name + ", доступ запрещен!");
}


btn1.addEventListener("click", addItem);
btn2.addEventListener("click", delItem);
close.addEventListener("click", closePopup);



