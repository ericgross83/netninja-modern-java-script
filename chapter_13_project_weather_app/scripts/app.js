const form = document.querySelector('form')
const card = document.querySelector('.card')
const details = document.querySelector('.details')
const time = document.querySelector('img.time')
const icon = document.querySelector('.icon img')

const updateUI = ({ cityDets, weather }) => {
    details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
  `;

    // update the night/day & icon images

    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`
    icon.setAttribute('src', iconSrc)

    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg'

    time.setAttribute('src', timeSrc)

    // remove the d-none class if present
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }
}

const updateCity = async (city) => {

    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);
    return { cityDets, weather };

};

form.addEventListener('submit', (e) => {
    e.preventDefault()


    const city = form.city.value.trim()
    form.reset()
    
    // update the ui with new city
    updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err))
    
    // set local storage
    localStorage.setItem('city', city)
})

const fetchDataForLocalStorage = () => { 
  const city = localStorage.getItem('city')

  if (city) {
    updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err))
  }
 }

 fetchDataForLocalStorage()