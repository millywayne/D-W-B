    function  giveName(){
    var birthYear = document.getElementById("year").value;
    let birthMonth = document.getElementById("month").value;
    let birthDate = document.getElementById("akan").value;
    let gender = document.getElementByName("genders");

    function gender(){
       for (gender of genders){
          if (gender.checked) return gender.value
       }
    }
   function mapMonth(){
      if (birthMonth<1 || birthMonth>12){
         return false ;
      }
      else return true;
   }
   function weekDay(){
      if (birthMonth === 2 && Number(birthYear)%4===0){
         if (birthDate>28 || birthDate <1){
            return false;
         }
         else if (birthMonth == 2 && birthDate>29){
            return false;
         } else {
            return true;
         }
      }
        else if (birthDate <1 || birthDate > 31){
            return false;
         }else {
            return true;
         }
      }
   }
    function myFunction(){
       var d = new Name();
       var weekday = new Array(7);

    let akanMaleName = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaa","Kofi","Kwame"];
    let akanFemaleName = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var n = weekday[d.getName()];
  document.getElementById("akan").innerHTML = n;
    }
    function myFunction(){
       document.getElementById("myGender"),classList.toggle("show");
   }
   window .onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
    function makeArray(sunday, monday, tuesday, wednesday, thursday, friday, saturday){
  this.firstDay = sunday;
  this.secondDay = monday;
  this.thirdDay = tuesday;
  this.fourthDay = wednesday;
  this.fifthDay = thursday;
  this.sixthDay = friday;
  this.seventhDay = saturday;
    }
     var akanMaleName = makeArray("Kwasi","Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame");
     var akanFemaleName = makeArray("Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama");

     document.getElementById(akan).innerHTML ="Your akan name is " + akanMaleName.day + "Your akan name is " + akanFemaleName.Day
    console.log(akanMaleName + akanFemaleName);
   }