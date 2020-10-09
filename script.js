var scoreList = document.getElementById("scoreList");
var start = document.getElementById("start");
var questions = document.getElementById("questions");
var anwsers = document.getElementById("anwser");
var instruction = document.getElementById("instruction");
var qcontent = document.getElementById("Qcontent");
var H1 = document.createElement("h1");
var scorePage = document.getElementById("highScore");
var form = document.getElementById("nameForm");
var Mytimer;
var sec = 60;
var names = [];

form.style.display = "none";

function timer() {
  document.getElementById("Time").innerHTML = "00:" + sec;
  sec--;
  localStorage.setItem("time", sec);

  if (sec < 0) {
    clearInterval(Mytimer);
  }
}

start.addEventListener("click", function () {
  Mytimer = setInterval(timer, 1000);

  start.style.display = "none";

  questions.innerHTML = "";
  instruction.innerHTML = "";

  questions.textContent =
    "The condition in an if/else statement is wraped in what?";

  var anwsersFirst = [
    "Brackets",
    "Parentheses",
    "Quotations",
    "Square Brackets",
  ];

  for (var i = 0; i < anwsersFirst.length; i++) {
    var anwser = anwsersFirst[i];
    var li = document.createElement("li");
    var button = document.createElement("button");
    button.textContent = anwser;
    button.setAttribute("class", "btn btn-primary btn-lg");
    button.setAttribute("id", i + 1);
    li.setAttribute("id", i + 1 + " list");
    li.setAttribute("class", "mt-3");
    li.textContent = "";

    li.appendChild(button);
    anwsers.appendChild(li);
  }

  document.getElementById("2").addEventListener("click", function () {
    H1.textContent = "Correct";
    qcontent.appendChild(H1);
    qTwo();
  });
  document.getElementById("1").addEventListener("click", function () {
    H1.textContent = "Incorrect";
    qcontent.appendChild(H1);
    sec -= 10;
    qTwo();
  });
  document.getElementById("3").addEventListener("click", function () {
    H1.textContent = "Incorrect";
    qcontent.appendChild(H1);
    sec -= 10;
    qTwo();
  });
  document.getElementById("4").addEventListener("click", function () {
    H1.textContent = "Inorrect";
    qcontent.appendChild(H1);
    sec -= 10;
    qTwo();
  });
});

function qTwo() {
  questions.innerHTML = "";

  questions.textContent =
    "What punctuation mark is used to show the end of a line of code in JavaScript?";

  var anwsersTwo = [".", ",", ":", ";"];

  for (var i = 0; i < anwsersTwo.length; i++) {
    document.getElementById(i + 1).remove();
    var button = document.createElement("button");
    button.setAttribute("class", "btn btn-primary btn-lg");
    button.setAttribute("id", i + 1 + " :qTwo");
    button.textContent = anwsersTwo[i];

    document.getElementById(i + 1 + " list").appendChild(button);
  }

  document.getElementById("4 :qTwo").addEventListener("click", function () {
    H1.textContent = "Correct";
    qcontent.appendChild(H1);
    qThree();
  });
  document.getElementById("1 :qTwo").addEventListener("click", function () {
    H1.textContent = "Inorrect";
    qcontent.appendChild(H1);
    sec -= 10;
    qThree();
  });
  document.getElementById("2 :qTwo").addEventListener("click", function () {
    H1.textContent = "Inorrect";
    qcontent.appendChild(H1);
    sec -= 10;
    qThree();
  });
  document.getElementById("3 :qTwo").addEventListener("click", function () {
    H1.textContent = "Inorrect";
    qcontent.appendChild(H1);
    sec -= 10;
    qThree();
  });
}

function qThree() {
  questions.innerHTML = "";

  questions.textContent = "Which tag sets the largest header?";

  var anwsersThree = ["h1", "p", "h2", "div"];

  for (var i = 0; i < anwsersThree.length; i++) {
    document.getElementById(i + 1 + " :qTwo").remove();
    var button = document.createElement("button");
    button.setAttribute("class", "btn btn-primary btn-lg");
    button.setAttribute("id", i + 1 + " :qThree");
    button.textContent = anwsersThree[i];

    document.getElementById(i + 1 + " list").appendChild(button);
  }

  document.getElementById("1 :qThree").addEventListener("click", function () {
    H1.textContent = "Correct";
    qcontent.appendChild(H1);
    qFour();
  });
  document.getElementById("2 :qThree").addEventListener("click", function () {
    H1.textContent = "Inorrect";
    qcontent.appendChild(H1);
    sec -= 10;
    qFour();
  });
  document.getElementById("3 :qThree").addEventListener("click", function () {
    H1.textContent = "Inorrect";
    qcontent.appendChild(H1);
    sec -= 10;
    qFour();
  });
  document.getElementById("4 :qThree").addEventListener("click", function () {
    H1.textContent = "Inorrect";
    qcontent.appendChild(H1);
    sec -= 10;
    qFour();
  });
}

function qFour() {
  questions.innerHTML = "";

  questions.textContent = "Which one is not a commonly used data type?";

  var anwsersFour = ["Strings", "Numbers", "Alerts", "Booleans"];

  for (var i = 0; i < anwsersFour.length; i++) {
    document.getElementById(i + 1 + " :qThree").remove();
    var button = document.createElement("button");
    button.setAttribute("class", "btn btn-primary btn-lg");
    button.setAttribute("id", i + 1 + " :qFour");
    button.textContent = anwsersFour[i];

    document.getElementById(i + 1 + " list").appendChild(button);
  }
  document.getElementById("1 :qFour").addEventListener("click", function () {
    H1.textContent = "Incorrect";
    qcontent.appendChild(H1);
    sec -= 10;
    qFive();
  });
  document.getElementById("2 :qFour").addEventListener("click", function () {
    H1.textContent = "Inorrect";
    qcontent.appendChild(H1);
    sec -= 10;
    qFive();
  });
  document.getElementById("3 :qFour").addEventListener("click", function () {
    H1.textContent = "Correct";
    qcontent.appendChild(H1);
    qFive();
  });
  document.getElementById("4 :qFour").addEventListener("click", function () {
    H1.textContent = "Inorrect";
    qcontent.appendChild(H1);
    sec -= 10;
    qFive();
  });
}

function qFive() {
  questions.innerHTML = "";

  questions.textContent = "An object is enclosed with what?";

  var anwsersFive = ["()", "{}", "[]", "''"];

  for (var i = 0; i < anwsersFive.length; i++) {
    document.getElementById(i + 1 + " :qFour").remove();
    var button = document.createElement("button");
    button.setAttribute("class", "btn btn-primary btn-lg");
    button.setAttribute("id", i + 1 + " :qFive");
    button.textContent = anwsersFive[i];

    document.getElementById(i + 1 + " list").appendChild(button);
  }
  document.getElementById("1 :qFive").addEventListener("click", function () {
    H1.textContent = "Incorrect";
    qcontent.appendChild(H1);
    sec -= 10;
    finish();
  });
  document.getElementById("2 :qFive").addEventListener("click", function () {
    H1.textContent = "Correct";
    qcontent.appendChild(H1);
    finish();
  });
  document.getElementById("3 :qFive").addEventListener("click", function () {
    H1.textContent = "Incorrect";
    qcontent.appendChild(H1);
    sec -= 10;
    finish();
  });
  document.getElementById("4 :qFive").addEventListener("click", function () {
    H1.textContent = "Inorrect";
    qcontent.appendChild(H1);
    sec -= 10;
    finish();
  });
}

function finish() {
  H1.textContent = "";
  sec = 60;
  clearInterval(Mytimer);
  form.style.display = "block";

  for (var i = 0; i < 4; i++) {
    document.getElementById(i + 1 + " list").remove();
  }

  questions.textContent = "All Done!";
  instruction.textContent =
    "Your Final Score is " + localStorage.getItem("time");
}

function storeNames() {
  localStorage.setItem("Names", names);
  renderNames();
}

function renderNames() {
  for (var i = 0; i < names.length; i++) {
    var name = names[i];

    var li = document.createElement("li");
    li.textContent = name;
    li.setAttribute("id", "Score: " + i);

    anwsers.appendChild(li);
  }
}

document
  .getElementById("submitBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    var nameText = document.getElementById("userName").value.trim();
    var Score = nameText + "---" + localStorage.getItem("time");

    if (nameText === "") {
      alert("enter a username");
      return;
    }

    names.push(Score);
    document.getElementById("userName").value = "";

    storeNames();

    form.style.display = "none";
    questions.textContent = "HighScores";
    var clearBtn = document.createElement("button");
    var returnBtn = document.createElement("button");
    clearBtn.setAttribute("class", "btn btn-primary btn-lg center-text");
    returnBtn.setAttribute("class", "btn btn-primary btn-lg center-text");
    clearBtn.setAttribute("id", "clear");
    returnBtn.setAttribute("id", "return");
    clearBtn.textContent = "Clear History";
    returnBtn.textContent = "Go Back";

    qcontent.appendChild(clearBtn);
    qcontent.appendChild(returnBtn);

    document.getElementById("return").addEventListener("click", function () {
      questions.textContent = "Coding Quiz";
      instruction.textContent =
        "You will have 60 seconds to anwser the 5 following questions for every anwser that you get wrong 10 seconds will be deducted from your time. If you run out of time you lose try to complete it in the fastest possible time and save your score to the highscore leader board.";
      start.style.display = "block";

      for (var i = 0; i < names.length; i++) {
        document.getElementById("Score: " + i).remove();
      }
      document.getElementById("return").remove();
      document.getElementById("clear").remove();
    });
    document.getElementById("clear").addEventListener("click", function () {
      clearHistory();
    });
  });

function init() {
  var storedNames = localStorage.getItem("Names", names);

  if (storedNames !== null) {
    names = storedNames;
  }

  renderNames();
}

document.getElementById("Highscores").addEventListener("click", function () {
  H1.textContent = "";

  init();

  questions.textContent = "HighScores";
  instruction.style.display = "none";
  start.style.display = "none";
  var clearBtn = document.createElement("button");
  var returnBtn = document.createElement("button");
  clearBtn.setAttribute("class", "btn btn-primary btn-lg");
  returnBtn.setAttribute("class", "btn btn-primary btn-lg");
  clearBtn.setAttribute("id", "clear");
  returnBtn.setAttribute("id", "return");
  clearBtn.textContent = "Clear History";
  returnBtn.textContent = "Go Back";

  qcontent.appendChild(clearBtn);
  qcontent.appendChild(returnBtn);

  document.getElementById("return").addEventListener("click", function () {
    questions.textContent = "Coding Quiz";
    instruction.style.display = "block";
    start.style.display = "block";
    document.getElementById("return").remove();
    document.getElementById("clear").remove();

    for (var i = 0; i < names.length; i++) {
      document.getElementById("Score: " + i).remove();
    }
  });
  document.getElementById("clear").addEventListener("click", clearHistory());
});

function clearHistory() {
  for (var i = 0; i < names.length; i++) {
    document.getElementById("Score: " + i).remove();
  }
  localStorage.clear("Names");
}
