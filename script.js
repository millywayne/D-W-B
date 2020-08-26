function getName(){
   var name = document.getElementById("name").value;
   var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
   var akanMale = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
   var akanFemale = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
   var dd = parseInt(document.getElementById("date").value);
   var cc = parseInt(document.getElementById("year").value.slice(0,2));
   var yy = parseInt(document.getElementById("year").value.slice(2,4));
   var mm = parseInt(document.getElementById("month").value);
   var day = (((cc/4)-2*cc-1)+((5*yy/4))+((26*(mm+1)/10))+dd)%7;
   var akanDay = days[Math.floor(day)];
   var gender = parseInt(document.getElementById("gender").value);
   
   if (gender == 1) {
     if (akanDay === 'Sunday') {
       document.getElementById("output").value = name + ": Born on Sunday: Akan Name would be: " + akanMale[0];
       return false;
     }else{
        return true;
     }
     else if (akanDay === 'Monday') {
       document.getElementById("output").value = name + ": Born on Monday: Akan Name would be: " + akanMale[1];
       return false;
     }else{
        return true;
     }
     else if (akanDay === 'Tuesday') {
       document.getElementById("output").value = name + ": Born on Tuesday: Akan Name would be: " + akanMale[2];
       return false;
     }else{
        return true;
     }
     else if (akanDay === 'Wednesday') {
       document.getElementById("output").value = name + ": Born on Wednesday: Akan Name would be: " + akanMale[3];
       return false;
     }else{
        return true;
     }
     else if (akanDay === 'Thursday') {
       document.getElementById("output").value = name + ": Born on Thursday: Akan Name would be: " + akanMale[4];
       return false;
     }else{
        return true;
     }
     else if (akanDay === 'Friday') {
       document.getElementById("output").value = name + ": Born on Friday: Akan Name would be: " + akanMale[5];
       return false;
     }else{
        return true;
     }
     else{
       document.getElementById("output").value = name + ": Born on Saturday: Akan Name would be: " + akanMale[6];
       return false;
     }else{
        return true;
     }
   }
     if (gender == 2) {
       if (akanDay === 'Sunday') {
         document.getElementById("output").value = name + ": Born on Sunday: Akan Name would be: " + akanFemale[0];
         return false;
       }else{
          return true;
       }
       else if (akanDay === 'Monday') {
         document.getElementById("output").value = name + ": Born on Monday: Akan Name would be: " + akanFemale[1];
         return false;
       }else{
          return true;
       }
       else if (akanDay === 'Tuesday') {
         document.getElementById("output").value = name + ": Born on Tuesday: Akan Name would be: " + akanFemale[2];
         return false;
       }else{
          return true;
       }
       else if (akanDay === 'Wednesday') {
         document.getElementById("output").value = name + ": Born on Wednesday: Akan Name would be: " + akanFemale[3];
         return false;
       }else{
          return true;
       }
       else if (akanDay === 'Thursday') {
         document.getElementById("output").value = name + ": Born on Thursday: Akan Name would be: " + akanFemale[4];
         return false;
       }else{
          return true;
       }
       else if (akanDay === 'Friday') {
         document.getElementById("output").value = name + ": Born on Friday: Akan Name would be: " + akanFemale[5];
         return false;
       }else{
          return true;
       }
       else {
         document.getElementById("output").value = name + ": Born on Saturday: Akan Name would be: " + akanFemale[6];
         return false;
       }else{
          return true;
       }
     }
}
