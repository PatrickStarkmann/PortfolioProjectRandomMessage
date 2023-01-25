
const returnRandName = () => {
    const name = ["Benno", "Joscha", "Malte"]
    return name[Math.floor(Math.random() * 3)] 
  }

  const returnRandDate = () => {
    const date = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return date[Math.floor(Math.random() * 10)] 
  }

  const returnRandWeather = () => {
    const weather = ["sun", "rain", "snow"]
    return weather[Math.floor(Math.random() * 3)] 
  }

  const weatherForecast = () => {
    console.log(`Hello ${returnRandName()} on the ${returnRandDate()} January there will be ${returnRandWeather()}.`)
  }

weatherForecast();

  