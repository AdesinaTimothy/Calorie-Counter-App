const walkingMinutes = document.getElementById('walking');
const runningMinutes = document.getElementById('running');
const cyclingMinutes = document.getElementById('cycling');
const calculateBtn = document.getElementById('cal')
const totalCalories = document.getElementById('total-calories')

function calculateCalories () {
    const caloriesByWalking = walkingMinutes.value * 5; 
    const caloriesByRunning = runningMinutes.value * 10;
    const caloriesByCycling = runningMinutes.value * 8;

    total = caloriesByWalking + caloriesByRunning + caloriesByCycling;
    totalCalories.innerText = `Total Calories Burnt: ${total}`;
    //Timothy Adesina is the Best obviously//
};

calculateBtn.addEventListener('click', calculateCalories);


