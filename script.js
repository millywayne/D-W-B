    var birthYear = document.getElementById("month").value;
    let birthMonth = document.getElementById("year").value;
    let birthDate = document.getElementById("akan").value;
    let getGender = document.getElementById("gender").value;
   
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

     document.getElementById(akan).innerHTML ="My akan name is " + akanMaleName.firstDay + ". My akan name is " + akanFemaleName.firstDay
