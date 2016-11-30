
// user
var userCh = ""
var userChoice = document.getElementsByClassName('user-choice')
// statistics
var wins = 0;
var loose = 0;
var ties = 0;
var ywins = document.getElementById('wins')
var yloose = document.getElementById('loose')
var yties = document.getElementById('ties')
var userPoints = document.getElementById('my_stats')
var pcPoints = document.getElementById('his_stats')
var clear = document.getElementById('reset')

for(var i = 0; i < userChoice.length; i++) {
  var user = userChoice[i];
  user.addEventListener('click', function(){
    userCh =  this.id
    console.log("You Choose: " + userCh)
    var img = document.createElement("img");
    img.src = userCh + ".png"
    var display = document.getElementById('img_choice')
    display.innerHTML = ""
    display.append(img);

    // opponent
    var choiceArray = ['rock', 'paper', 'scissors']

    function opponentChoice() {
      var pcChoice = Math.floor(Math.random() * choiceArray.length)
      return choiceArray[pcChoice]
    }

    var oppChoice = opponentChoice();
    console.log("The computer choice: " + oppChoice)

    var img = document.createElement("img");
    img.src = oppChoice + "r.png"
    var displays = document.getElementById('img_pc_choice')
    displays.innerHTML = ""
    displays.append(img);

    // printing on the screen
    var importantAnnouncement = document.getElementById('announcement');
    var statistics = document.getElementById('stats')

    importantAnnouncement.addEventListener('click', function(){
      importantAnnouncement.style.color = '#fff';
      statistics.style.display = 'block';
      display.innerHTML = ""
      displays.innerHTML = ""
      announcement.style.display = 'none';
    });

    var continueButton = document.getElementById('continue')
    continueButton.addEventListener('click', function() {
      statistics.style.display = 'none';
      choices.style.display = 'block';
      announcement.style.display = 'none';
    });


    var choices = document.getElementById('choices');
    choices.style.display = 'none';
    function putResult(result) {
      importantAnnouncement.innerHTML = result;
      announcement.style.display = 'block';
    }

    clear.addEventListener('click', function() {
      wins = 0
      ties = 0
      loose = 0
      statistics.style.display = 'none';
      choices.style.display = 'block';
      announcement.style.display = 'none';
    });

    // userPoints.innerHTML = parseFloat(wins / ((wins + loose + ties)) * 100).toPrecision(4);
    // Comparisson
    if(userCh === 'rock' && oppChoice === 'rock') {
      ++ties
      putResult("Tie!");
    } else if (userCh === 'rock' && oppChoice === 'paper') {
      ++loose
      putResult("You Loose!");
      importantAnnouncement.style.color = 'red';
    } else if (userCh === 'rock' && oppChoice === 'scissors') {
      ++wins
      putResult("You Win!");
    } else if (userCh === 'paper' && oppChoice === 'rock') {
      ++wins
      putResult("You Win!");
    } else if (userCh === 'paper' && oppChoice === 'paper') {
      ++ties
      putResult("Tie!");
    } else if (userCh === 'paper' && oppChoice === 'scissors') {
      ++loose
      putResult("You Loose!");
      importantAnnouncement.style.color = 'red';
    } else if (userCh === 'scissors' && oppChoice === 'rock') {
      ++loose
      putResult("You Loose!");
      importantAnnouncement.style.color = 'red';
    } else if (userCh === 'scissors' && oppChoice === 'paper') {
      ++wins
      putResult("You Win!");
    } else if (userCh === 'scissors' && oppChoice === 'scissors') {
      ++ties
      putResult("Tie!");
    } else {
      putResult("Really!? Between 3 choices and you broke the game!");
    }


    ywins.innerHTML = "Wins: " + wins;
    yloose.innerHTML = "Looses: " + loose;
    yties.innerHTML = "Ties: " + ties;
    userPoints.innerHTML = victoryStats();
    pcPoints.innerHTML = defeatStats();

    function victoryStats() {
      var total = parseFloat(wins / (wins + loose + ties) * 100).toPrecision(4);
      return "Win percentage: " + total + "%"
    }
    function defeatStats() {
      var total = parseFloat(loose / (wins + loose + ties) * 100).toPrecision(4);
      return "Defeat percentage: " + total + "%"
    }

  });
}
