import { Weather } from "../model/weather";

export const mockedWeatherData: Weather = {
  cod: "200",
  message: 0.0107,
  cnt: 8,
  list: [
    {
      dt: 1567458000,
      main: {
        temp: 14.82,
        temp_min: 14.82,
        temp_max: 15.56,
        pressure: 1023.52,
        sea_level: 1023.52,
        grnd_level: 1018.61,
        humidity: 70,
        temp_kf: -0.74
      },
      weather: [
        { id: 804, main: "Clouds", description: "overcast clouds", icon: "04n" }
      ],
      clouds: { all: 89 },
      wind: { speed: 4.85, deg: 261.681 },
      sys: { pod: "n" },
      dt_txt: "2019-09-02 21:00:00"
    },
    {
      dt: 1567468800,
      main: {
        temp: 13.9,
        temp_min: 13.9,
        temp_max: 14.45,
        pressure: 1023.34,
        sea_level: 1023.34,
        grnd_level: 1018.27,
        humidity: 77,
        temp_kf: -0.55
      },
      weather: [
        { id: 804, main: "Clouds", description: "overcast clouds", icon: "04n" }
      ],
      clouds: { all: 94 },
      wind: { speed: 4.53, deg: 250.837 },
      sys: { pod: "n" },
      dt_txt: "2019-09-03 00:00:00"
    },
    {
      dt: 1567479600,
      main: {
        temp: 12.89,
        temp_min: 12.89,
        temp_max: 13.26,
        pressure: 1022.93,
        sea_level: 1022.93,
        grnd_level: 1017.94,
        humidity: 84,
        temp_kf: -0.37
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n"
        }
      ],
      clouds: { all: 26 },
      wind: { speed: 3.88, deg: 247.666 },
      sys: { pod: "n" },
      dt_txt: "2019-09-03 03:00:00"
    },
    {
      dt: 1567490400,
      main: {
        temp: 12.67,
        temp_min: 12.67,
        temp_max: 12.85,
        pressure: 1022.99,
        sea_level: 1022.99,
        grnd_level: 1017.99,
        humidity: 84,
        temp_kf: -0.18
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d"
        }
      ],
      clouds: { all: 28 },
      wind: { speed: 3.17, deg: 255.345 },
      sys: { pod: "d" },
      dt_txt: "2019-09-03 06:00:00"
    },
    {
      dt: 1567501200,
      main: {
        temp: 15.97,
        temp_min: 15.97,
        temp_max: 15.97,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1018.88,
        humidity: 63,
        temp_kf: 0
      },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }
      ],
      clouds: { all: 83 },
      wind: { speed: 4.25, deg: 259.184 },
      sys: { pod: "d" },
      dt_txt: "2019-09-03 09:00:00"
    },
    {
      dt: 1567512000,
      main: {
        temp: 18.87,
        temp_min: 18.87,
        temp_max: 18.87,
        pressure: 1023.33,
        sea_level: 1023.33,
        grnd_level: 1017.93,
        humidity: 54,
        temp_kf: 0
      },
      weather: [
        { id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }
      ],
      clouds: { all: 88 },
      wind: { speed: 3.91, deg: 258.529 },
      sys: { pod: "d" },
      dt_txt: "2019-09-03 12:00:00"
    },
    {
      dt: 1567522800,
      main: {
        temp: 19.45,
        temp_min: 19.45,
        temp_max: 19.45,
        pressure: 1022.1,
        sea_level: 1022.1,
        grnd_level: 1016.64,
        humidity: 64,
        temp_kf: 0
      },
      weather: [
        { id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }
      ],
      clouds: { all: 99 },
      wind: { speed: 4.42, deg: 257.713 },
      sys: { pod: "d" },
      dt_txt: "2019-09-03 15:00:00"
    },
    {
      dt: 1567533600,
      main: {
        temp: 18.83,
        temp_min: 18.83,
        temp_max: 18.83,
        pressure: 1020.89,
        sea_level: 1020.89,
        grnd_level: 1015.54,
        humidity: 70,
        temp_kf: 0
      },
      weather: [
        { id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }
      ],
      clouds: { all: 98 },
      wind: { speed: 4.2, deg: 262.194 },
      sys: { pod: "d" },
      dt_txt: "2019-09-03 18:00:00"
    }
  ],
  city: {
    id: 2643743,
    name: "London",
    coord: { lat: 51.5073, lon: -0.1277 },
    country: "GB",
    population: 1000000
  }
};

