var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM

var updateClock = function()
{
  var time = new Date().getHours();
  var messageText;
  var message = document.getElementById('timeEvent');
  var lolcat = document.getElementById('lolcat');
  var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";

  if (time == partyTime){
	 image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    messageText = "IZ PARTEE TIME!!";
    }
  else if (time == napTime) {
	 image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "IZ NAP TIME…";
    }
  else if (time == lunchTime) {
	 image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "IZ NOM NOM NOM TIME!!";
    }
  else if (time == wakeupTime) {
	 image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "IZ TIME TO GETTUP.";
    }
  else if (time < noon) {
	 image = "https://s-media-cache-ak0.pinimg.com/originals/64/57/a1/6457a1015242d0b33221a23e828b60f5.jpg";
    messageText = "Good morning!";
    }
  else if (time > evening) {
	 image = "https://i.pinimg.com/736x/61/76/6a/61766adffeab377cea0f8ededb3ce6d8–coffee-cans-coffee-coffee.jpg";
    messageText = "Good Evening!";
    }
  else {
	 image = "http://i.imgur.com/6Ywp1ag.jpg";
    messageText = "Good afternoon!";
    }

    message.innerText = messageText;
    lolcat.src = image;

	showCurrentTime();
}
var showCurrentTime = function ()
{
  // display the string on the webpage
  var clock = document.getElementById('clock');

  var currentTime = new Date();

  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridian = "AM";

  // Set hours
  if (hours >= noon)
  {
    meridian = "PM";
  }
  if (hours > noon)
  {
    hours = hours - 12;
  }

  // Set minutes
  if (minutes < 10)
  {
    minutes = "0" + minutes;
  }

  // Set seconds
  if (seconds < 10)
  {
    seconds = "0" + seconds;
  }

  // put together the string that displays the time
  var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

  clock.innerText = clockTime;
};

updateClock();

var oneSecond = 1000;

setInterval( updateClock, oneSecond);

var partyTimeButton = document.getElementById("partyTimeButton");
var isPartyTime = false;

var partyEvent = function() {

   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
      partyTimeButton.innerText = "Party Time!";
      partyTimeButton.style.backgroundColor = "#222";
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
      partyTimeButton.innerText = "Party Over";
      partyTimeButton.style.backgroundColor = "#0A8DAB";
   }
};

partyTimeButton.addEventListener('click', partyEvent);

var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var wakeUpEvent = function()
{
    wakeUpTime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
