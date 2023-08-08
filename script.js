//counter code
var countdown = document.getElementById("number-wrapper");
var countdownVal = countdown.innerHTML;
var progress = document.getElementById("progress-bar");
var interval = setInterval(function () {
  countdownVal = countdownVal > 0 ? countdownVal - 1 : 0;
  countdown.innerHTML = countdownVal;
  progress.style.width = countdownVal * 10 + "%";

  if (countdownVal == 0) {
    countdown.innerText = "Time's up";
  }
  if (countdownVal == 0) {
    clearInterval(interval);
  }
}, 1000);



var list = document.getElementById("list");
var btnAdd = document.getElementById("btn-add");
function addItem(e) {
  var textValue = text.value;
  if (textValue == "") {
    alert("enter a valid item");
  } else {
    var newListElement = document.createElement("li");
    newListElement.className = "list-item";
    newListElement.appendChild(document.createTextNode(textValue+" "));
    list.appendChild(newListElement);
    var delBtn = document.createElement("button");
    delBtn.id = "btn-"+(list.childElementCount);
    delBtn.className = 'del-btn';
    delBtn.appendChild(document.createTextNode('del'));
    newListElement.appendChild(delBtn)
    text.value = "";
  }
}
var text = document.getElementById("input-text");
text.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    addItem();
  }
});
// ADD item code

btnAdd.addEventListener("click", addItem);

//update first item
var btnUpdate = document.getElementById("btn-update");
btnUpdate.addEventListener("click", function () {
  console.log(text.value);
  if (text.value == "") {
    alert("Enter updated value");
  } else {
    document.getElementById("list").firstElementChild.innerText = text.value;
    var delBtn = document.createElement("button");
    delBtn.id = "btn-"+(list.childElementCount);
    delBtn.className = 'del-btn';
    delBtn.appendChild(document.createTextNode('del'));
    document.getElementById("list").firstElementChild.appendChild(delBtn);
    text.value = "";
    
  }
});

//remove first item
var btnRemove = document.getElementById("btn-remove");
btnRemove.addEventListener("click", function (e) {
  if (list.childElementCount == 0) {
    alert("Add an item");
  } else {
    document.getElementById("list").removeChild(list.firstElementChild);
  }
});

//delete sigle item


list.addEventListener('click',function(e){
    var id = e.target.id;
    var btnDel =  document.getElementById(id);
    if(list.childElementCount == 0){
    list.removeChild(btnDel.parentElement);
    }
})


//changing the input field text to upper case
// var username = document.getElementById("username");
// username.addEventListener("input", function (event) {
//   username.value = event.target.value.toUpperCase();
// });
//form validation using regex
username.addEventListener('input',function(e){
var pattern = /^[\w]{4,20}$/;
var str = e.target.value;
  if(pattern.test(str)){
    document.getElementById('username-err').style.display='none';
  }else{
    document.getElementById('username-err').style.display='block';
  }
})

var password = document.getElementById('password');
password.addEventListener('input',function(e){
  //password meets the minimum length requirement and contains at least one upper case letter, one lower case letter,one number, and one special character.
  var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  var str = e.target.value;
    if(pattern.test(str)){
      document.getElementById('password-err').style.display='none';
    }else{
      document.getElementById('password-err').style.display='block';
    }
  })

//on submit
var formLogin = document.getElementById('login-form');
formLogin.addEventListener('submit', function(e){
  e.preventDefault();
  document.getElementById('login-form').style.display='none';
  document.getElementById('welcome-note').style.display="block";
  document.getElementById('welcome-note').innerHTML+=username.value;

})

