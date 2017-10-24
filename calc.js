function calc() {
	result = 0;
	return calculator = {
		getResult : function() {
			return result;
		},
		reset : function() {
			return result = 0;
		},
		add : function(a) {
			result += a;
			return function(b) {
				result = a+b;
			}
		},
		substract : function(a) {
			result -= a;
			return function(b) {
				result = a-b;
			}
		},
		divide : function(a) {
			result /= a;
			return function(b) {
				result = a/b;;
			}
		},
		multiply : function(a) {
			result *= a;
			return function(b) {
				result = a*b;
			}
		}
	}
	
}
calc();

calculator.add(1);
console.log(calculator.getResult());
calculator.multiply(8);
console.log(calculator.getResult());
calculator.add(1)(2);
console.log(calculator.getResult());
calculator.reset();
console.log(calculator.getResult());