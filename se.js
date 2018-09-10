
//global variables
var tracker='off';
var tracker2='off';
var tracker3='off';
var tracker4='off';
var tracker5='off';
var tracker6='off';
var tracker7='off';
var tracker8='off';
var tracker9='off';
var tracker10='off';
var tracker11='off';
var tracker12='off';

//filler function for the random weather variables
//function SomeFunction(){
 //   alert("Hello!");
//} did in the bottom - Iliya

//function to change one sprinkler
function change(){
    //get the sprinkler image into the variable image
    var image=document.getElementById('sprinkler');
    
    //if the tracker has been turned off the image will toggle to the on image
    if(tracker=='off'){
        image.src='img/g_sprinkler2.png';
        tracker='on';
    }
    
    //if the tracker has been turned on the image will toggle to the off image
    else{
        image.src='img/r_sprinkler2.png';
        tracker='off';
    }
}

function change2(){
    var image=document.getElementById('sprinkler2');
    if(tracker=='off'){
        image.src='img/g_sprinkler2.png';
        tracker='on';
    }else{
        image.src='img/r_sprinkler2.png';
        tracker='off';
    }
}

function change3(){
    var image=document.getElementById('sprinkler3');
    if(tracker=='off'){
        image.src='img/g_sprinkler2.png';
        tracker='on';
    }else{
        image.src='img/r_sprinkler2.png';
        tracker='off';
    }
}

function change4(){
    var image=document.getElementById('sprinkler4');
    if(tracker=='off'){
        image.src='img/g_sprinkler2.png';
        tracker='on';
    }else{
        image.src='img/r_sprinkler2.png';
        tracker='off';
    }
}

function change5(){
    var image=document.getElementById('sprinkler5');
    if(tracker=='off'){
        image.src='img/g_sprinkler2.png';
        tracker='on';
    }else{
        image.src='img/r_sprinkler2.png';
        tracker='off';
    }
}

function change6(){
    var image=document.getElementById('sprinkler6');
    if(tracker=='off'){
        image.src='img/g_sprinkler2.png';
        tracker='on';
    }else{
        image.src='img/r_sprinkler2.png';
        tracker='off';
    }
}

function change7(){
    var image=document.getElementById('sprinkler7');
    if(tracker=='off'){
        image.src='img/g_sprinkler2.png';
        tracker='on';
    }else{
        image.src='img/r_sprinkler2.png';
        tracker='off';
    }
}

function change8(){
    var image=document.getElementById('sprinkler8');
    if(tracker=='off'){
        image.src='img/g_sprinkler2.png';
        tracker='on';
    }else{
        image.src='img/r_sprinkler2.png';
        tracker='off';
    }
}

function change9(){
    var image=document.getElementById('sprinkler9');
    if(tracker=='off'){
        image.src='img/g_sprinkler2.png';
        tracker='on';
    }else{
        image.src='img/r_sprinkler2.png';
        tracker='off';
    }
}

function change10(){
    var image=document.getElementById('sprinkler10');
    if(tracker=='off'){
        image.src='img/g_sprinkler2.png';
        tracker='on';
    }else{
        image.src='img/r_sprinkler2.png';
        tracker='off';
    }
}

function change11(){
    var image=document.getElementById('sprinkler11');
    if(tracker=='off'){
        image.src='img/g_sprinkler2.png';
        tracker='on';
    }else{
        image.src='img/r_sprinkler2.png';
        tracker='off';
    }
}

function change12(){
    var image=document.getElementById('sprinkler12');
    if(tracker=='off'){
        image.src='img/g_sprinkler2.png';
        tracker='on';
    }else{
        image.src='img/r_sprinkler2.png';
        tracker='off';
    }
}

function Off(){
    //gets all the sprinkler images into a variable
    var image=document.getElementById('sprinkler');
    var image2=document.getElementById('sprinkler2');
    var image3=document.getElementById('sprinkler3');
    var image4=document.getElementById('sprinkler4');
    var image5=document.getElementById('sprinkler5');
    var image6=document.getElementById('sprinkler6');
    var image7=document.getElementById('sprinkler7');
    var image8=document.getElementById('sprinkler8');
    var image9=document.getElementById('sprinkler9');
    var image10=document.getElementById('sprinkler10');
    var image11=document.getElementById('sprinkler11');
    var image12=document.getElementById('sprinkler12');

    //changes the source of each individual image to the off image
    image.src='img/r_sprinkler2.png';
    image2.src='img/r_sprinkler2.png';
    image3.src='img/r_sprinkler2.png';
    image4.src='img/r_sprinkler2.png';
    image5.src='img/r_sprinkler2.png';
    image6.src='img/r_sprinkler2.png';
    image7.src='img/r_sprinkler2.png';
    image8.src='img/r_sprinkler2.png';
    image9.src='img/r_sprinkler2.png';
    image10.src='img/r_sprinkler2.png';
    image11.src='img/r_sprinkler2.png';
    image12.src='img/r_sprinkler2.png';
    
    //sets all the trackers to off
    var tracker='off';
    var tracker2='off';
    var tracker3='off';
    var tracker4='off';
    var tracker5='off';
    var tracker6='off';
    var tracker7='off';
    var tracker8='off';
    var tracker9='off';
    var tracker10='off';
    var tracker11='off';
    var tracker12='off';
}

function On(){
    
    var image=document.getElementById('sprinkler');
    var image2=document.getElementById('sprinkler2');
    var image3=document.getElementById('sprinkler3');
    var image4=document.getElementById('sprinkler4');
    var image5=document.getElementById('sprinkler5');
    var image6=document.getElementById('sprinkler6');
    var image7=document.getElementById('sprinkler7');
    var image8=document.getElementById('sprinkler8');
    var image9=document.getElementById('sprinkler9');
    var image10=document.getElementById('sprinkler10');
    var image11=document.getElementById('sprinkler11');
    var image12=document.getElementById('sprinkler12');

    image.src='img/g_sprinkler2.png';
    image2.src='img/g_sprinkler2.png';
    image3.src='img/g_sprinkler2.png';
    image4.src='img/g_sprinkler2.png';
    image5.src='img/g_sprinkler2.png';
    image6.src='img/g_sprinkler2.png';
    image7.src='img/g_sprinkler2.png';
    image8.src='img/g_sprinkler2.png';
    image9.src='img/g_sprinkler2.png';
    image10.src='img/g_sprinkler2.png';
    image11.src='img/g_sprinkler2.png';
    image12.src='img/g_sprinkler2.png';
    
    var tracker='on';
    var tracker2='on';
    var tracker3='on';
    var tracker4='on';
    var tracker5='on';
    var tracker6='on';
    var tracker7='on';
    var tracker8='on';
    var tracker9='on';
    var tracker10='on';
    var tracker11='on';
    var tracker12='on';
}

//Iliya Weather Hash Table
var weather = {
    '0':"Snowing",
    '1':"Storming",
    '2':"Heavy Rain",
    '3':"Light Rain",
    '4':"Heavy Fog",
    '5':"Light Fog",
    '6':"Overcast",
    '7':"Mostly Cloudy",
    '8':"Partly Cloudy",
    '9':"Clear",
    '10':"Sunny" 
};

//Iliya Day HASH
var days = {
    '0':"Sunday",
    '1':"Monday",
    '2':"Tuesday",
    '3':"Wednesday",
    '4':"Thursday",
    '5':"Friday",
    '6':"Saturday"   
};
var error ={
    '0':"Error: Poor Weather Conditions",
    '1':"Error: Too Cold",
    '2':"Error: Drought Conditions"
};
//Scheduled Weather display -Iliya
function scheduler(){
   // document.getElementById('showScheduler').style.display = "block";
    var x = document.getElementById('showScheduler');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
//display scheduled times
function scheduled(){
    var x = document.getElementById('showScheduled');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        if(showFlag != 1)
        x.style.display = 'none';
    }
}
//Set schedule - Javascript implemenation - Iliya
var startTime;
var endTime;
var inputDay;
var showFlag;
function setSchedule(){
    inputDay = document.querySelector('input[name="Day"]:checked').value; 
    var currentDay = getTime().getDay();
    var convertDay = days[currentDay];
        
    startTime = document.querySelector('input[name="TimeStart"]').value;
    endTime = document.querySelector('input[name="TimeEnd"]').value;
    
    if(startTime != null || endTime != null){
        scheduled();
        showFlag = 1;
        displaySchedule();
    }
    
    if(inputDay == convertDay){
        //document.getElementById("WeatherDisplay").innerHTML = convertDay;
        runSchedule(startTime, endTime);
        
    }    
}
//Remove Scheduled Nums
function removeSchedule(){
    startTime = undefined;
    endTime = undefined;
    inputDay = undefined;
    showFlag = 0;
    scheduled();
}
//display schedule
function displaySchedule(timeStart, timeEnd, setDay){
    document.getElementById("startTime").innerHTML = startTime;
    document.getElementById("endTime").innerHTML = endTime;
    document.getElementById("daySelected").innerHTML = inputDay;
}
//timeout
var minuteRefresh;
//looping function
function runSchedule(){ 
    var currentTime = checkTime(getTime().getHours()) + ':' + checkTime(getTime().getMinutes());
    if((currentTime === startTime)){ 
          if ((weatherCode == "sunny") || (weatherCode == "fair (night)") || (weatherCode == "fair (day)") || (weatherCode == "hot") || (weatherCode == "party cloudly") || (weatherCode == "mostly cloudy") || (weatherCode == "cloudy")){
                On();
                }
         }
    if((currentTime === endTime)){ 
        Off(); 
        stopTimeout();
        scheduled();
        }
    else{ minuteRefresh = setTimeout(runSchedule, 500);}    
}
function stopTimeout(){
    clearTimeout(minuteRefresh);
} 
//Live weather - Iliya
var liveWeather;
function live() {
    document.getElementById("weatherType").innerHTML = "Live Weather:";
    var currentWeather;
    reallySimpleWeather.weather({
                        wunderkey: '', // leave blank for Yahoo
                        location: 'Boca Raton, FL', //your location 
                        woeid: '', // "Where on Earth ID"
                        unit: 'f', // 'c' also works
                    success: function(weather) {
                        html = weather.temp+'°'+weather.units.temp;
                        
                        html += ' : ' + weather.currently;
                        //html += ' : ' + weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed;
                        currentWeather = weather.currently;
	                   document.getElementById("WeatherDisplay").innerHTML = weather.city+', '+weather.region;;
                        document.getElementById("WeatherDisplay2").innerHTML = html;
                        checkLiveWeather(currentWeather);
                        },
                    error: function(error) {
                        document.getElementById("WeatherDisplay").innerHTML = '<p>'+error+'</p>';
                        }
                    });
    
    
}
//check live weather
var weatherCode;
function checkLiveWeather(passedCode) {
    weatherCode = passedCode.toLowerCase();
    liveWeather = weatherCode;
    if ((weatherCode == "sunny") || (weatherCode == "fair (night)") || (weatherCode == "fair (day)") || (weatherCode == "hot") || (weatherCode == "party cloudly") || (weatherCode == "mostly cloudy")){
        
    }
    else Off();
    
}

//randomizer - Iliya
function randomize() {
    
    document.getElementById("weatherType").innerHTML = "Simulation:";
    
    var number = genRand();
    var weatherSim = weather[number];
    
    if(number <= 5) Off();
    else On();
    
    document.getElementById("WeatherDisplay2").innerHTML = weatherSim;

}

//random number 0 - 10 - Iliya
function genRand() {
    "use strict";
    var base = 0;
    var top = 10;
    var random  = Math.floor(Math.random() * (top-base + 1) + base);
    return random;
}

//random number 0 - 100 - Iliya
function genRand2() {
    "use strict";
    var base = 30;
    var top = 100;
    var random  = Math.floor(Math.random() * (top-base + 1) + base);
    return random;
}

//real time = Iliya
function getTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("displayTime").innerHTML =
    "Time: " + h + ":" + m + ":" + s;
    var time = setTimeout(getTime, 500);
    return today;
}
function checkTime(i) {
   if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

