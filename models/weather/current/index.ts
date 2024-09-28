import { TDateISO } from "@/types/iso"

export class Current {
    time: TDateISO
    interval: number
    temperature_2m: number
    relative_humidity_2m: number
    apparent_temperature: number
    is_day: 0|1
    precipitation: number
    rain: number
    showers: number
    snowfall: number
    weather_code: number
    cloud_cover: number
    pressure_msl: number
    surface_pressure: number
    wind_speed_10m: number
    wind_direction_10m: number
    wind_gusts_10m: number


    constructor(current: Current) {
        this.time = current.time
        this.interval = current.interval
        this.temperature_2m = Math.round(current.temperature_2m)
        this.relative_humidity_2m = current.relative_humidity_2m
        this.apparent_temperature = Math.round(current.apparent_temperature)
        this.is_day = current.is_day
        this.precipitation = current.precipitation
        this.rain = current.rain
        this.showers = current.showers
        this.snowfall = current.snowfall
        this.weather_code = current.weather_code
        this.cloud_cover = current.cloud_cover
        this.pressure_msl = current.pressure_msl
        this.surface_pressure = current.surface_pressure
        this.wind_speed_10m = current.wind_speed_10m
        this.wind_direction_10m = current.wind_direction_10m
        this.wind_gusts_10m = current.wind_gusts_10m

    }

    get_current_weather() {
        return {
            time: this.time,
            interval: this.interval,
            temperature_2m: Math.round(this.temperature_2m),
            relative_humidity_2m: this.relative_humidity_2m,
            apparent_temperature: Math.round(this.apparent_temperature),
            is_day: this.is_day,
            precipitation: this.precipitation,
            rain: this.rain,
            showers: this.showers,
            snowfall: this.snowfall,
            weather_code: this.weather_code,
            cloud_cover: this.cloud_cover,
            pressure_msl: this.pressure_msl,
            surface_pressure: this.surface_pressure,
            wind_speed_10m: this.wind_speed_10m,
            wind_direction_10m: this.wind_direction_10m,
            wind_gusts_10m: this.wind_gusts_10m,
        }
    }
}