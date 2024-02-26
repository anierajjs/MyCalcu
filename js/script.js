const actions = document.querySelector('.actions');
const ans = document.querySelector('.ans');
console.log(actions);
console.log(ans);
let expression = '';
let lastEntry = '';
let a = 0;
ans.value = 0;

actions.addEventListener('click', (e) => {
    console.log(e.target);
    const value = e.target.dataset['value'];

    // if (value !== undefined) {
    //     if (value == 'ce') {
    //         // removing the last entered character
    //         expression = expression.toString().slice(0, -1); // Convert to string before using slice
    //         ans.value = expression || 0; // Set to 0 if expression is empty
    //         return true;
    if (value !== undefined) {
        if (value == 'ce') {
            if (lastEntry == '=') {
                expression = '';
                ans.value = 0;
            }
            else {
                // Clear the last entry input
                expression = expression.toString().slice(0, -1);
                ans.value = expression || 0; 
            }
            return true;
            
        } else if (value == 'c') {
            // Function to clear the entire expression
            expression = '';
            ans.value = 0;
        } else if (value == '=') {
            const answer = eval(expression);
            expression = answer;
            ans.value = expression;
        } else if (value == 'x^2') {
            expression = square();
        } else {    
            if (lastEntry == '=' && isNumeric(value)) {
                expression = value;
                ans.value = expression;
            }
            else {
                expression += value;
                ans.value = expression;
            }
        }
        lastEntry = value;
    }
    
});

function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
  }
  
  
const square = () => {
    return eval(expression * expression);
}
