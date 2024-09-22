import { TDateISO } from "@/types/iso"

export class Hourly {

    time: TDateISO[]
    temperature_2m: number[]
    relative_humidity_2m: number[]
    dew_point_2m: number[]
    apparent_temperature: number[]
    precipitation_probability: number[]
    precipitation: number[]
    rain: number[]
    showers: number[]
    snowfall: number[]
    snow_depth: number[]
    weather_code: number[]
    pressure_msl: number[]
    surface_pressure: number[]
    cloud_cover: number[]
    cloud_cover_low: number[]
    cloud_cover_mid: number[]
    cloud_cover_high: number[]
    visibility: number[]
    evapotranspiration: number[]
    et0_fao_evapotranspiration: number[]
    vapour_pressure_deficit: number[]
    wind_speed_10m: number[]
    wind_speed_80m: number[]
    wind_speed_120m: number[]
    wind_speed_180m: number[]
    wind_direction_10m: number[]
    wind_direction_80m: number[]
    wind_direction_120m: number[]
    wind_direction_180m: number[]
    wind_gusts_10m: number[]
    temperature_80m: number[]
    temperature_120m: number[]
    temperature_180m: number[]
    soil_temperature_0cm: number[]
    soil_temperature_6cm: number[]
    soil_temperature_18cm: number[]
    soil_temperature_54cm: number[]
    soil_moisture_0_to_1cm: number[]
    soil_moisture_1_to_3cm: number[]
    soil_moisture_3_to_9cm: number[]
    soil_moisture_9_to_27cm: number[]
    soil_moisture_27_to_81cm: number[]
    is_day: (0 | 1)[]


    constructor(hourly: Hourly) {
        this.time = hourly.time
        this.temperature_2m = hourly.temperature_2m
        this.relative_humidity_2m = hourly.relative_humidity_2m
        this.dew_point_2m = hourly.dew_point_2m
        this.apparent_temperature = hourly.apparent_temperature
        this.precipitation_probability = hourly.precipitation_probability
        this.precipitation = hourly.precipitation
        this.rain = hourly.rain
        this.showers = hourly.showers
        this.snowfall = hourly.snowfall
        this.snow_depth = hourly.snow_depth
        this.weather_code = hourly.weather_code
        this.pressure_msl = hourly.pressure_msl
        this.surface_pressure = hourly.surface_pressure
        this.cloud_cover = hourly.cloud_cover
        this.cloud_cover_low = hourly.cloud_cover_low
        this.cloud_cover_mid = hourly.cloud_cover_mid
        this.cloud_cover_high = hourly.cloud_cover_high
        this.visibility = hourly.visibility
        this.evapotranspiration = hourly.evapotranspiration
        this.et0_fao_evapotranspiration = hourly.et0_fao_evapotranspiration
        this.vapour_pressure_deficit = hourly.vapour_pressure_deficit
        this.wind_speed_10m = hourly.wind_speed_10m
        this.wind_speed_80m = hourly.wind_speed_80m
        this.wind_speed_120m = hourly.wind_speed_120m
        this.wind_speed_180m = hourly.wind_speed_180m
        this.wind_direction_10m = hourly.wind_direction_10m
        this.wind_direction_80m = hourly.wind_direction_80m
        this.wind_direction_120m = hourly.wind_direction_120m
        this.wind_direction_180m = hourly.wind_direction_180m
        this.wind_gusts_10m = hourly.wind_gusts_10m
        this.temperature_80m = hourly.temperature_80m
        this.temperature_120m = hourly.temperature_120m
        this.temperature_180m = hourly.temperature_180m
        this.soil_temperature_0cm = hourly.soil_temperature_0cm
        this.soil_temperature_6cm = hourly.soil_temperature_6cm
        this.soil_temperature_18cm = hourly.soil_temperature_18cm
        this.soil_temperature_54cm = hourly.soil_temperature_54cm
        this.soil_moisture_0_to_1cm = hourly.soil_moisture_0_to_1cm
        this.soil_moisture_1_to_3cm = hourly.soil_moisture_1_to_3cm
        this.soil_moisture_3_to_9cm = hourly.soil_moisture_3_to_9cm
        this.soil_moisture_9_to_27cm = hourly.soil_moisture_9_to_27cm
        this.soil_moisture_27_to_81cm = hourly.soil_moisture_27_to_81cm
        this.is_day = hourly.is_day
    }

    get_hourly_weather() {
        return {
            time: this.time,
            temperature_2m: this.temperature_2m,
            relative_humidity_2m: this.relative_humidity_2m,
            dew_point_2m: this.dew_point_2m,
            apparent_temperature: this.apparent_temperature,
            precipitation_probability: this.precipitation_probability,
            precipitation: this.precipitation,
            rain: this.rain,
            showers: this.showers,
            snowfall: this.snowfall,
            snow_depth: this.snow_depth,
            weather_code: this.weather_code,
            pressure_msl: this.pressure_msl,
            surface_pressure: this.surface_pressure,
            cloud_cover: this.cloud_cover,
            cloud_cover_low: this.cloud_cover_low,
            cloud_cover_mid: this.cloud_cover_mid,
            cloud_cover_high: this.cloud_cover_high,
            visibility: this.visibility,
            evapotranspiration: this.evapotranspiration,
            et0_fao_evapotranspiration: this.et0_fao_evapotranspiration,
            vapour_pressure_deficit: this.vapour_pressure_deficit,
            wind_speed_10m: this.wind_speed_10m,
            wind_speed_80m: this.wind_speed_80m,
            wind_speed_120m: this.wind_speed_120m,
            wind_speed_180m: this.wind_speed_180m,
            wind_direction_10m: this.wind_direction_10m,
            wind_direction_80m: this.wind_direction_80m,
            wind_direction_120m: this.wind_direction_120m,
            wind_direction_180m: this.wind_direction_180m,
            wind_gusts_10m: this.wind_gusts_10m,
            temperature_80m: this.temperature_80m,
            temperature_120m: this.temperature_120m,
            temperature_180m: this.temperature_180m,
            soil_temperature_0cm: this.soil_temperature_0cm,
            soil_temperature_6cm: this.soil_temperature_6cm,
            soil_temperature_18cm: this.soil_temperature_18cm,
            soil_temperature_54cm: this.soil_temperature_54cm,
            soil_moisture_0_to_1cm: this.soil_moisture_0_to_1cm,
            soil_moisture_1_to_3cm: this.soil_moisture_1_to_3cm,
            soil_moisture_3_to_9cm: this.soil_moisture_3_to_9cm,
            soil_moisture_9_to_27cm: this.soil_moisture_9_to_27cm,
            soil_moisture_27_to_81cm: this.soil_moisture_27_to_81cm,
            is_day: this.is_day,
        }
    }
}