'use strict';

var total = 0;
var entryCount = 0;
var entry;

do {
    entry = prompt("Enter test score\n" +
                   "Or enter 999 to end entries", 999);
    entry = parseInt(entry);
    if (entry >= 0 && entry <= 100) 
    {
      total = total + entry;  
      entryCount++;
    }
    else if (entry != 999){
      alert("Entry must by a valid number from 0 through 100\n" +
          "Or enter 999 to end entries");         
    }
  }
  while (entry != 999);
    
  var average = total / entryCount;
  average = parseInt(average);
  alert("Average score is " + average);
  document.getElementById("demo").innerHTML = "Thanks for using average test score app.";