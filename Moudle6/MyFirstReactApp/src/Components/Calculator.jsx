function Calculator() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operator, setOperator] = useState('');
    const [result, setResult] = useState(null);
  
    const handleCalculate = () => {
      let res;
      const number1 = parseFloat(num1);
      const number2 = parseFloat(num2);
  
      switch (operator) {
        case '+':
          res = number1 + number2;
          break;
        case '-':
          res = number1 - number2;
          break;
        case '*':
          res = number1 * number2;
          break;
        case '/':
          res = number2 !== 0 ? number1 / number2 : 'Error: Division by zero';
          break;
        default:
          res = 'Invalid operator';
      }
  
      setResult(res);
    };
  
    return (
      <div>
        <h1>Calculator</h1>
        <div>
          <input
            type="text"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="First number"
          />
        </div>
        <div>
          <input
            type="text"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Second number"
          />
        </div>
        <div>
          <input
            type="text"
            value={operator}
            onChange={(e) => setOperator(e.target.value)}
            placeholder="Operator (+, -, *, /)"
          />
        </div>
        <button onClick={handleCalculate}>Calculate</button>
        {result !== null && <div>Result: {result}</div>}
      </div>
    );
  }
  
  export default Calculator;