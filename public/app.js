// get user's time
function userTime() {
    return new Date().getHours()
}

userTime()

function getMealTime() {
    const tod = userTime()
    //0-11 am breakfast, 11-16 lunch, 16-20 dinner, >20 late night snack
    //ternary operator
    return tod > 20 ? 'late-night snack' : tod > 16 ? 'dinner' : tod > 11 ? 'lunch' : 'breakfast'
}

function buildAd1() {
    const mealTime = getMealTime()
    const div = document.querySelector('.ad1')
    const p = document.createElement('p')
    p.innerHTML = `We've got the best <span>${mealTime}</span> in town`
    div.append(p)
}


//get user coordinates
async function getCoords() {
    const position = await new Promise((resolve, reject)=> {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    }) 
    return position
}
window.onload = async () => {
    buildAd1()
    const coords = await getCoords()
    console.log(coords)
    buildAd2(coords)
}
function buildAd2(coordinates) {
    const href = `https://www.google.com/maps/search/coffee/@${coordinates[0]},${coordinates[1]},15z`
    const div = document.querySelector('.ad2')
    const p = document.createElement('p')
    p.innerHTML = `Coffee <span> <a href=${href} target="-blank">we're this close</a></span>`
    div.append(p)
}
