const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let bmiCategory = '';

    if (bmi < 18.6) {
      bmiCategory = 'Underweight';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      bmiCategory = 'Normal weight';
    } else {
      bmiCategory = 'Overweight';
    }

    // Display the BMI result and category
    results.innerHTML = `Your BMI is <span>${bmi}</span>, indicating ${bmiCategory}.`;
  }
});