let isDateValid;

const submitBtn = document.querySelector('#submit-btn')

// input values
const dayInput = document.querySelector('#day')
const monthInput = document.querySelector('#month')
const yearInput = document.querySelector('#year')


// output values
const dayEl = document.querySelector('#day-el')
const monthEl = document.querySelector('#month-el')
const yearEl = document.querySelector('#year-el')

// labels
const dayLabel = document.querySelector('.day-label')
const monthLabel = document.querySelector('.month-label')
const yearLabel = document.querySelector('.year-label')

// error elements
const dayError = document.querySelector('.day-error')
const monthError = document.querySelector('.month-error')
const yearError = document.querySelector('.year-error')

// catch error if input is empty
function checkFormError() {
    let isDayValid, isMonthValid, isYearValid;

    // day error
    if (dayInput.value === '') {
        dayError.textContent = 'This field is empty';
        dayInput.classList.add('error')
        dayLabel.classList.add('error')
        isDayValid = false
    } else if (dayInput.value < 1 || dayInput.value > 31) {
        dayError.textContent = 'This day is invalid'
        dayInput.classList.add('error')
        dayLabel.classList.add('error')
        isDayValid = false
    } else {
        dayError.textContent = ''
        dayInput.classList.remove('error')
        dayLabel.classList.remove('error')
        isDayValid = true
    }

    // month error
    if (monthInput.value === '') {
        monthError.textContent = 'This field is empty'
        monthInput.classList.add('error')
        monthLabel.classList.add('error')
        isMonthValid = false
    } else if (monthInput.value < 1 || monthInput.value > 12) {
        monthError.textContent = 'This month is invalid'
        monthInput.classList.add('error')
        monthLabel.classList.add('error')
        isMonthValid = false
    } else {
        monthError.textContent = ''
        monthInput.classList.remove('error')
        monthLabel.classList.remove('error')
        isMonthValid = true
    }

    // year error
    if (yearInput.value === '') {
        yearError.textContent = 'This field is empty'
        yearInput.classList.add('error')
        yearLabel.classList.add('error')
        isYearValid = false
    } else if (yearInput.value > new Date().getFullYear()) {
        yearInput.classList.add('error')
        yearLabel.classList.add('error')
        isYearValid = false
        yearError.textContent = 'This year is invalid'
    } else { 
        yearError.textContent = ''
        yearInput.classList.remove('error')
        yearLabel.classList.remove('error')
        isYearValid = true
    }



    // add array for days in each month
    // calculate leap year
    if(isDayValid && isMonthValid && isYearValid) {
        isDateValid = true
    } else {

        isDateValid = false
    }
    console.log(isDateValid)

}

function calcAge() {
    let today = new Date();

    let currentYear = today.getFullYear()
    let currentMonth = today.getMonth() + 1
    let currentDay = today.getDate();
    let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if (dayInput.value > currentDay) {
        currentDay += monthDays[currentMonth - 1]
        currentMonth -= 1
    }
    if (monthInput.value > currentMonth) {
        currentMonth += 12
        currentYear - 1
    }

    let year = currentYear - yearInput.value
    let month = currentMonth - monthInput.value
    let day = currentDay - dayInput.value

    yearEl.textContent = year
    monthEl.textContent = month
    dayEl.textContent = day
    console.log(currentDay, currentMonth, currentYear)
}

const submitAge = () => {
    checkFormError();
    if(isDateValid) {
        calcAge()
        dayInput.value = '';
        monthInput.value = '';
        yearInput.value = '';
    }
}

submitBtn.addEventListener('click', submitAge);

// add function to calculate leap year