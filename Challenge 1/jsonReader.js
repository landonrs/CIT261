function foodItem(name, costPerCan, cupsPerCan, mealRationAmount) {
    this.name = name;
    this.costPerCan = costPerCan;
    this.cupsPerCan = cupsPerCan;
    this.mealRationAmount = mealRationAmount;
    this.percentOfDiet = 0;
    this.estimatedNeededAmount = 0;
    this.determineNeededAmount = function(storageLength) {
        this.estimatedNeededAmount =  mealRationAmount * (percentOfDiet * 3) * storageLength;
    }
    this.getEstimatedTotalCost = function(){
        return (estimatedNeededAmount / cupsPerCan) * costPerCan;
    }

}

var rice = new foodItem("rice", 4.25, 32, [])