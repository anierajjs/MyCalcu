const actions = document.querySelector('.actions');
const ans = document.querySelector('.ans');
console.log(actions);
console.log(ans);
let expression = '';
let a = 0;

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
            // Clear the entire number entered
            expression = '';
            ans.value = 0;
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
        } else if (value == 'radic') {
            expression = Math.sqrt(expression);
        } else if (value == 'log') {
            expression = Math.log(expression);
        } else if (value == 'sin') {
            expression = Math.sin(expression);
        } else if (value == 'cos') {
            expression = Math.cos(expression);
        } else if (value == 'tan') {
            expression = Math.tan(expression);
        } else {
            expression += value;
            ans.value = expression;
        }
    }
    
});

const square = () => {
    return eval(expression * expression);
}
