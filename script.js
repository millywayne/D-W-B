function MakeArray(n) {
    this.length = n;
    for (var i = 1; i <=n; i++) {
      this[i] = 0;
    }
 }
 function getName(){
    var getMonth = document.getElementById("month").value;
    var getYear = document.getElementById("year").value;
    var getDate = document.getElementById("akan").value;
    var getGender = document.getElementById("gender").value;
    }
    var akanMaleName = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaa","Kofi","Kwame"]
    var akanFemaleName = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
 
 //Initialize Gender Arrays
 days = new MakeArray()
 Gender = "Female"
 Gender = "Male"
 //Initialize Days of Week Array
 days = new MakeArray(7);
 days[0] = "Saturday"
 days[1] = "Sunday"
 days[2] = "Monday"
 days[3] = "Tuesday"
 days[4] = "Wednesday"
 days[5] = "Thursday"
 days[6] = "Friday"
 
 //Initialize Akan Names Arrays
 Name = new MaleName
 Sunday = "Kwasi"
 Monday = "Kwadwo"
 Tuesday = "Kwabena"
 Wednesday = "Kwaku"
 Thursday = "Yaa"
 Friday = "Kofi"
 Saturday = "Kwame"
  
  Name = new FemaleName
  Sunday = "Akosua"
  Monday = "Adwoa"
  Tuesday = "Abenaa"
  Wednesday = "Akua"
  Thursday = "Yaa"
  Friday = "Afua"
  Saturday = "Ama"
 
 //Initialize Months Array
 months = new MakeArray(12);
 months[1] = "January" 
 months[2] = "February" 
 months[3] = "March" 
 months[4] = "April" 
 months[5] = "May" 
 months[6] = "June" 
 months[7] = "July" 
 months[8] = "August"
 months[9] = "September" 
 months[10] = "October"
 months[11] = "November"
 months[12] = "December"
 
 function getDayName(dateStr, locale)
 {
     var date = new Date(dateStr);
     return date.toLocaleDateString(locale, { weekday: 'long' });      
 }
 
 var dateStr = '23';
 var day = getDayName(dateStr, "nl-NL"); // Gives back 'Kwasi' which is Akan for Sunday.
 
 
 //Day of Week Function
 function compute(form) {
    var val1 = parseInt(form.day.value, 10)
    if ((val1 < 0) || (val1 > 31)) {
       alert("Invalid Day")
    }
    var val2 = parseInt(form.month.value, 10)
    if ((val2 < 0) || (val2 > 12)) {
       alert("Invalid month")
    }  
    var val2x = parseInt(form.month.value, 10)
    var val3 = parseInt(form.year.value, 10)
    if (val3 < 1900) {
     alert("Are you that old!")
    }
    if (val2 === 1) {
       val2x = 13;
       val3 = val3-1
    }
    if (val2 === 2) {
       val2x = 14;
       val3 = val3-1
    }
    
 } 
 