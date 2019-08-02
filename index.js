var button= $('.button')
var message= $('.message')



button.on("click", getNameAndLogToConsole);

function getNameAndLogToConsole(){
  var name= $('.name-input').val();
  console.log (name);
  message.text(`Hi ${name}!`);
}

 var buttons= $('.buttons')
 var hello=$('.hello')

 var statistics= ["11% of carbon emmisions is due to deforestation", "Eleven percent of the world’s population, 800 MILLION, is currently vulnerable to climate change impacts such as droughts, floods, heat waves, extreme weather events and sea-level rise", "An area of coastal ecosystems larger than New York City is destroyed every year, removing an important buffer from extreme weather for coastal communities and releasing carbon dioxide into the atmosphere", "It would take 140 billion dollars per year to change adapt to the rapidly warming climate"]

 buttons.on("click", pickStatistic);

function pickStatistic() {
  event.preventDefault();
  var random = Math.random() * statistics.length;
  var rounded = Math.floor(random);
  var statistic = statistics[rounded];
  hello.text(statistic);
}


 var buttonGun= $('.buttonGun')
 var hi=$('.hi')

 var quotes= ["The United States has 121 guns per 100 people, or about 393,347,000 guns, which is the highest total and per capita number in the world", "There were more than 11,000 deaths as a result of murder or manslaughter involving a firearm in 2016","Since Parkland, there have been nearly 350 mass shootings — nearly one every day — based on the Gun Violence Archive’s definition, which counts every occurence in which four or more people, excluding the shooter, were shot but not necessarily killed at the same general time and location"]

 buttonGun.on("click", pickQuote);

function pickQuote() {
  event.preventDefault();
  var random = Math.random() * quotes.length;
  var rounded = Math.floor(random);
  var quote = quotes[rounded];
  hi.text(quote);
}

var buttonElection= $('.buttonElection')
var nice=$('.nice')
var img=$('img.nice');

// var sentences= [C]

buttonElection.on("click", pickSentence);

function pickSentence() {
 event.preventDefault();
 var random = Math.random() * 3;
 var rounded = Math.floor(random) + 1;
 var link="./img"+rounded+".png";
 img.attr("src", link);
 nice.text(sentence);

}
