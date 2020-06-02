const body = document.body
const toggleClass = document.getElementById('toggleClass')

const deg = 6
const hr = document.getElementById('hr')
const mn = document.getElementById('mn')
const sc = document.getElementById('sc')

setInterval(() => {
	const day = new Date()
	const hh = day.getHours() * 30
	const mm = day.getMinutes() * deg
	const ss = day.getSeconds() * deg

	hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`
	mn.style.transform = `rotateZ(${mm}deg)`
	sc.style.transform = `rotateZ(${ss}deg)`
}, 1000)


toggleClass.addEventListener('click', () => {
	body.classList.toggle('light')
})
