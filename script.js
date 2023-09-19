const hour = document.querySelector('#clock-div #hour')
const year = document.querySelector('#clock-div #year')
const date = document.querySelector('#clock-div #date')

const userName = document.querySelector('.usr-input')

let newHour = new Date()
let newYear = new Date()
let newDate = new Date()

let hourNow = newHour.toLocaleTimeString()
let yearNow = newHour.getFullYear()
let nowDate = newHour.toDateString()


hour.innerHTML = hourNow
year.innerHTML = yearNow
date.innerHTML = nowDate

userName.innerHTML = "lucas"