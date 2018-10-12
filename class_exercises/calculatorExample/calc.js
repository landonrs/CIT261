const calculator = {
  _number1: 0,
  _number2: 0,
  _operation: '',
  _isAdding: false,
  _performingOperation: false,
  _inputOutput: document.getElementById('calcInput'),
  clear: function() {
    this._inputOutput.value = '';
  },
  setToAdd: function() {
      if(!this._isAdding) {
      this._number1 = this._inputOutput.value;
      this._inputOutput.value = '+';
      this._isAdding = true;
      this._performingOperation = true;
      }
      else if (!isNaN(this._inputOutput.value)){
          this._number1 += this._inputOutput.value
          this._inputOutput.value = '+';
      }
      this._operation = '+';
  },
  buttonClicked: function(button) {
    console.log(button);
    console.dir(button);
    

    let inputBox = calculator._inputOutput;

    switch (button.innerHTML) {
      case 'M':
        break;
      case 'C':
        calculator.clear();
        break;
      case '/':
        break;
      case 'X':
        break;
      case '-':
        break;
      case '+':
        calculator.setToAdd();
        break;
      case '=':
      if(calculator._performingOperation) {
        if (calculator._isAdding) {
            inputBox.value = parseFloat(this._number1) + parseFloat(inputBox.value);
            calculator._isAdding = false;
            }
      }
        break;
      default:
        //if it made it to here it's a number
        if(isNaN(parseFloat(inputBox.value)) && inputBox.value != ''){
            inputBox.value = '';
        }
        inputBox.value = inputBox.value + button.innerHTML;
    }
  }
};
const buttonContainer = document.querySelector('.calcButtons');
buttonContainer.addEventListener('touchend', (e) => {
  calculator.buttonClicked(e.target);
});

// function buttonClicked(button) {
//   console.log(button);
//   debugger;

//   let inputBox = this.inputOutput;

//   switch (button.innerHTML) {
//     case 'M':
//       break;
//     case 'C':
//       this.clear();
//       break;
//     case '/':
//       break;
//     case 'X':
//       break;
//     case '-':
//       break;
//     case '+':
//       break;
//     case '=':
//       break;
//     default:
//       //if it made it to here it's a number
//       inputBox.value = inputBox.value + button.innerHTML;
//   }
// }
