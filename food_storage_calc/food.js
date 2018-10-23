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
        return Math.ceil(this.estimatedNeededAmount / this.cupsPerCan) * this.costPerCan;
    };
  
  };
  }
  
  var rice = new FoodItem("Rice", 6.46, 13.5, [.25, .5]);
  var refriedBeans = new FoodItem("Refried Beans", 7.54, 16, [.5, 1]);
  var potato = new FoodItem("Potato Flakes", 6.04, 13, [.3, .6]);
  var macaroni = new FoodItem("Macaroni", 3.71, 12, [.5, 1]);
  var flour = new FoodItem("Flour", 5.17, 16, [.25, .5]);
  var oats = new FoodItem("Oats", 5.00, 16, [.5, 1]);
  var apple = new FoodItem("Apple Slices", 11.25, 2, [.125, .25]);
  var carrot = new FoodItem("Carrots", 11.50, 5.625, [.125, .25]);
  
  //This array holds the Items that have not been added to the table yet
  var unusedFoodItems = [rice, refriedBeans, potato, macaroni, flour, oats, apple, carrot];
  //This array holds the food items that have been added to the table
  var tableItems = [];

  function getUnusedFoodItems() {
      return unusedFoodItems;
  }
  
  
  

  
  module.exports = {rice: rice, potato: potato,FoodItem: FoodItem, unusedFoodItems: unusedFoodItems, tableItems: tableItems,
                    getUnusedFoodItems: getUnusedFoodItems};
