class FoodItem {
  constructor(name, costPerCan, cupsPerCan, mealRationAmount) {
  this.name = name;
  this.costPerCan = costPerCan;
  this.cupsPerCan = cupsPerCan;
  this.mealRationAmount = mealRationAmount;
  this.estimatedNeededAmount = 0;
  this.determineNeededAmount = function(storageLength, numPeople, percentOfDiet) {
      this.estimatedNeededAmount = 0;
      for(var i in numPeople){
          this.estimatedNeededAmount +=  (mealRationAmount[i] * numPeople[i]) * (percentOfDiet * 3) * storageLength;
      }
      return this.estimatedNeededAmount;
  };
  this.getEstimatedItemCost = function(){
      return (this.estimatedNeededAmount / this.cupsPerCan) * this.costPerCan;
  };

};
}

var rice = new FoodItem("Rice", 4.25, 32, [.5, 1]);
var refriedBeans = new FoodItem("Refried Beans", 4.25, 32, [.5, 1]);
var potato = new FoodItem("Potato Flakes", 4.25, 32, [.5, 1]);
var macaroni = new FoodItem("Macaroni", 4.25, 32, [.5, 1]);
var flour = new FoodItem("Flour", 4.25, 32, [.5, 1]);
var oats = new FoodItem("Oats", 4.25, 32, [.5, 1]);


function insertNumbersIntoSelect(){
    var numChildrenSelect = document.getElementById('childrenSelect');
    var numAdultSelect = document.getElementById('adultSelect');

    for (var i = 1; i<=50; i++){
        var childNumberOption = document.createElement('option');
        var adultNumberOption = document.createElement('option');
        childNumberOption.value = i;
        adultNumberOption.value = i;

        childNumberOption.innerHTML = i;
        adultNumberOption.innerHTML = i;
        
        numChildrenSelect.appendChild(childNumberOption);
        numAdultSelect.appendChild(adultNumberOption);
    }
}

module.exports = {rice: rice, FoodItem: FoodItem};