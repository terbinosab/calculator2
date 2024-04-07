function clearResult() {
    document.getElementById('result').value = '';
  }
  
  function appendToResult(value) {
    document.getElementById('result').value += value;
  }
  
  function calculateResult() {
    try {
      let result = eval(document.getElementById('result').value);
      document.getElementById('result').value = result;
    } catch (error) {
      document.getElementById('result').value = 'Error';
    }
  }
  
  // Additional functionality (optional):
  document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (!isNaN(key) || key === '.' || key === '+' || key === '-' || key === '*' || key === '/' || key === 'Enter') {
      event.preventDefault();
      if (key === 'Enter') {
        calculateResult();
      } else {
        appendToResult(key);
      }
    } else if (key === 'Escape') {
      clearResult();
    }
  });
  