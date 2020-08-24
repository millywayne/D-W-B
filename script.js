const { get } = require("jquery");

    function  getAkanName(){
    let birthYear = document.getElementById("year-input").value;
    let birthMonth = Number(document.getElementById("month-input").value);
    let birthDate = Number(document.getElementById("day-input").value);
    let genders = document.getElementByName("gender");

    function getGender(){
       for (let gender of genders){
          if (gender.checked){
              return gender.value;
          }
       }
    }
    let myGenderValue = getGender();
   console.log(myGenderValue);

   function mapMonth(){
      if (birthMonth < 1 || birthMonth > 12){
         return false ;
      }
      else{
          return true;
      }
   }
   function mapDay(){
      if (birthMonth === 2 && Number(birthYear)%4===0){
         if (birthDay > 28 || birthDay < 1){
            return false;
         }
         else if (birthMonth === 2 && birthDay > 29){
            return false;
         } else if (birthMonth === 2 && birthDay < 1){
            return false;
         } else {
            return true;
      }
   
    } else if (birthDay < 1 || birthDay > 31){
            return false;
         }else {
            return true;
         }
      }
   }

    let akanMaleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaa","Kofi","Kwame"];
    let akanFemaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let monthValid = monthValidator();
    let dayValid = dayValidator();

    let dayOfWeekNumber = Math.floor((((Number(birthYear.slice(0, 2))/4)-2*Number(birthYear.slice(0, 2))-1)+((5*Number(birthYear.slice(2, 4))/4))+((26*(birthMonth+1)/10))+birthDay)%7);

    let index;
    if(dayOfWeekNumber == 0){
       index = 6;
    }else {
       index = dayOfWeekNumber = 1;
    }
    console.log(index);

    if (myGenderValue == "male" && monthValid && dayValid) {
      document.getElementById('result').textContent = "Your born day is a " + daysOfWeek[index] + " , your Akan name is " + maleAkanNames[index];
      document.getElementById('display-name').textContent = "Your Akan name is: ";
      document.getElementById('result').style.fontSize = "16px";
      return false;
    } else if (myGenderValue == "female" && monthValid && dayValid) {
      document.getElementById('result').textContent = "Your born day is a " + daysOfWeek[index] + " , your Akan name is " + femaleAkanNames[index];
      document.getElementById('display-name').textContent = "Your Akan name is: ";
      document.getElementById('result').style.fontSize = "16px";
      return false;
    } else {
      alert("Your day/month submission is invalid, please try again!");
    }document.getElementById("result").innerHTML = "The day is on a saturday." + " " + "Your akan name is ama";
  