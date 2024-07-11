//your JS code here. If required.
 function getNumbersArray() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([1, 2, 3, 4]);
        }, 3000);
      });
    }

    // Function to filter out odd numbers
    function filterOddNumbers(array) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const filteredArray = array.filter(number => number % 2 === 0);
          document.getElementById('output').textContent = `After filtering odd numbers: ${filteredArray}`;
          resolve(filteredArray);
        }, 1000);
      });
    }

    // Function to multiply even numbers by 2
    function multiplyEvenNumbers(array) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const multipliedArray = array.map(number => number * 2);
          document.getElementById('output').textContent = `After multiplying even numbers by 2: ${multipliedArray}`;
          resolve(multipliedArray);
        }, 2000);
      });
    }

    // Chain the promises
    getNumbersArray()
      .then((numbers) => {
        return filterOddNumbers(numbers);
      })
      .then((filteredNumbers) => {
        return multiplyEvenNumbers(filteredNumbers);
      })
      .then((finalResult) => {
        console.log('Final result:', finalResult);
      })
      .catch((error) => {
        console.error('Error:', error);
      });