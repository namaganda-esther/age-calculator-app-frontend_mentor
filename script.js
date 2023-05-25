
function calculateAge() {
   
   var inputDay = parseInt(document.getElementById('day').value);
   let warningDay;

   if(isNaN(inputDay) || inputDay < 1 || inputDay > 31){
      warningDay = "must be a valid day";
   }else if( inputDay == ""){
      warningDay = "this is a required field";
   }
   document.getElementById('warningDay').innerHTML = warningDay;


   var inputMonth = parseInt(document.getElementById('month').value);
   let warningMonth;
   if(isNaN(inputMonth) || inputMonth < 1 || inputMonth > 12){
      warningMonth = "must be a valid month";
   }
   document.getElementById('warningMonth').innerHTML = warningMonth;


   var inputYear = parseInt(document.getElementById('year').value);
   let warningYear;
   if(isNaN(inputYear) || inputYear > Date()){
      warningYear = "must be in the past";
   }
   document.getElementById('warningYear').innerHTML = warningYear;

   var currentDate = new Date();
   var currentDay = currentDate.getDate();
   var currentMonth = currentDate.getMonth() + 1;
   var currentYear = currentDate.getFullYear();

   var ageYears = currentYear - inputYear;
   var ageMonths = currentMonth - inputMonth;
   var ageDays = currentDay - inputDay;

   // if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
   //    ageYears--;
   //    ageMonths = 12 + ageMonths;
   // }

   if (ageDays < 0) {
      ageMonths--;
      var daysInPreviousMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
      ageDays = daysInPreviousMonth + ageDays;
   }

   if (ageMonths < 0) {
      ageYears--;
      ageMonths = 12 + ageMonths;
   }

   document.getElementById('ageYears').textContent = ageYears;
   document.getElementById('ageMonths').textContent = ageMonths;
   document.getElementById('ageDays').textContent = ageDays;
}

document.getElementById('arrowimg').addEventListener('click', calculateAge);










// function calculateAge() {
//    var inputDay = parseInt(document.getElementById('day').value);
//    var inputMonth = parseInt(document.getElementById('month').value);
//    var inputYear = parseInt(document.getElementById('year').value);

//    var currentDate = new Date();
//    var currentDay = currentDate.getDate();
//    var currentMonth = currentDate.getMonth() + 1;
//    var currentYear = currentDate.getFullYear();

//    var ageYears = currentYear - inputYear;
//    var ageMonths = currentMonth - inputMonth;
//    var ageDays = currentDay - inputDay;

//    if(ageMonths < 0 || (ageMonths === 0 && ageDays < 0)){
//     ageYears--;
//     ageMonths = 12 + ageMonths;
//    }

//    document.getElementById('ageYears').textContent = ageYears;
//    document.getElementById('ageMonths').textContent = ageMonths;
//    document.getElementById('ageDays').textContent = ageDays;
// }

// document.getElementById('arrowimg').addEventListener('click', calculateAge);