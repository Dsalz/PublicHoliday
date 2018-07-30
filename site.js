

$(document).ready(function (){    
  $('.countdownClock').fadeIn(3000);
  $('.holidaze').fadeIn(3000);
  
  var weekDays =[ "Sunday" , "Monday" , "Teusday" , "Wednesday", "Thursday" , "Friday" , "Saturday"]
  var holidaydays = [
     "Jan 1, 2018 00:00:00" , "Mar 30, 2018 00:00:00" , "Apr 2, 2018 00:00:00" , "May 1, 2018 00:00:00" , "May 29, 2018 00:00:00" , "Jun 15, 2018 00:00:00" , "Aug 21, 2018 00:00:00" , "Oct 1, 2018 00:00:00" , "Nov 20, 2018 00:00:00" , "Dec 25, 2018 00:00:00" , "Dec 26, 2018 00:00:00" ];
  
  var holidaydate = [
    "1st January 2018" , "30th March 2018" , "2nd April 2018", "1st May 2018", "29th May 2018", "15th - 16th June 2018", "21st - 22nd August 2018", "1st October 2018", "20th November 2018", "25th December 2018", "26th December 2018"
  ]
  
  var holidaynames = [
    "New Year's Day", "Good Friday", "Easter Monday", "Labour/Workers Day", "Democracy Day","Eid el Fitri", "Eid el Kabir", "Independence Day", "Eid el Maulud" , "Christmas Day", "Boxing Day"
  ];
 var currdate = new Date().getTime();
  var nxtholidaytime;
  var nxtholidayname;
  var nxtholidaydate;
  var days;
  var hours;
  var minutes;
  var seconds;
  var html;
  var index;
  var dayindex;
  
  function updateTimer(nxtholidaytime, nxtholidayname, nxtholidaydate, dayindex){
  days = ("0" + Math.floor( nxtholidaytime/ (1000 * 60 * 60 * 24))).slice(-2);
   hours = ("0" + Math.floor((nxtholidaytime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
   minutes = ("0" + Math.floor((nxtholidaytime % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
   seconds = ("0" + Math.floor((nxtholidaytime % (1000 * 60)) / 1000)).slice(-2);
       
    if (days == 1){
      html = "<div class = 'timer'><div class= 'timer-item'><div class = 'timer-time'>" + days + "</div><div class = 'timer-label'>Day</div></div><div class= 'timer-item'><div class = 'timer-time'>" + hours +"</div><div class = 'timer-label'>Hours</div></div><div class= 'timer-item'><div class = 'timer-time'>"+ minutes +"</div><div class = 'timer-label'>Minutes</div></div><div class= 'timer-item'><div class = 'timer-time'>"+ seconds + "</div><div class = 'timer-label'>Seconds</div></div></div><hr style='background-color: #0FF' class='divida'><div class='holiday-info'><p class= 'day'> To</p><p> "+ nxtholidayname +"</p><p class= 'day-date'>("+ weekDays[dayindex] + " " + nxtholidaydate +")</p></div>";
    }
    else{
      html = "<div class = 'timer'><div class= 'timer-item'><div class = 'timer-time'>" + days + "</div><div class = 'timer-label'>Days</div></div><div class= 'timer-item'><div class = 'timer-time'>" + hours +"</div><div class = 'timer-label'>Hours</div></div><div class= 'timer-item'><div class = 'timer-time'>"+ minutes +"</div><div class = 'timer-label'>Minutes</div></div><div class= 'timer-item'><div class = 'timer-time'>"+ seconds + "</div><div class = 'timer-label'>Seconds</div></div></div><hr style='background-color: #0FF' class='divida'><div class='holiday-info'><p class= 'day'> To</p><p> "+ nxtholidayname +"</p><p class= 'day-date'>("+ weekDays[dayindex] + " " + nxtholidaydate +")</p></div>";
    };
      $('#timer').html(html);
     document.title = "PublicHoliday.com.ng - Just " + days + " days to " + nxtholidayname +"!";
};  
  
function getCountdown(){  
  
  for(var i=0; i<holidaydays.length; i++){
     currdate = new Date().getTime();
    var holidayday = new Date(holidaydays[i]).getTime();
 dayindex = new Date(holidaydays[i]).getDay();     
    if(currdate + (1000 * 60 * 60 * 24) < holidayday){
   nxtholidaytime = holidayday - currdate;
     nxtholidayname = holidaynames[i];
      nxtholidaydate = holidaydate[i];
      index = i;
       updateTimer(nxtholidaytime, nxtholidayname, nxtholidaydate, dayindex);
      break;
    };
  }; 
};
  
var start = setInterval(getCountdown , 1000);
 
  
  function prevholidays(){
    var nuprev = "";
   for(var i=index-1; i>=0; i--){
     nuprev += "<tr><td>" + holidaynames[i] + "</td><td>" + holidaydate[i] + "</td></tr>";
     $(".prev-table").html(nuprev);
   }
  }
  
  function futureholidays(){
    var nunext = "";
   for(var i=index; i<holidaynames.length; i++){
     nunext += "<tr><td>" + holidaynames[i] + "</td><td>" + holidaydate[i] + "</td></tr>";
   };
    $(".next-table").html(nunext);
  };
  
  $(".prevholidays").click(function (){
    $(this).toggleClass('clicked');
    prevholidays();
    $('.holidays').css('margin-bottom' , '0px');
  $('.prevholidays-data').slideToggle();
    
  });
 
  $(".futureholidays").click(function (){
    $(this).toggleClass('clicked');
  futureholidays();
    
 $('.holidays').css('margin-bottom' , '0px');
      $('.futureholidays-data').slideToggle();  
  });
  
  
});sss