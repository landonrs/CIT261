var food = ['rice', 'potato', 'apple', 'mushrooms'];

food = food.filter(function(name) {
	if (name.substring(0) < 'm')
		return name;
});

console.log(food);