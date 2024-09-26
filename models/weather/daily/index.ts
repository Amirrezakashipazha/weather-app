import { TDateISO } from "@/types/iso";

export type temperatureDaily={
    temperature:{
average:number[],
temperature_2m_max:number[],
temperature_2m_min:number[],
    }

apparent_temperature:{
    average:number[],
apparent_temperature_max:number[],
apparent_temperature_min:number[],
}

}
export class Daily {
    time: TDateISO[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    apparent_temperature_max: number[];
    apparent_temperature_min: number[];
    sunrise: TDateISO[];
    sunset: TDateISO[];
    daylight_duration: number[];
    sunshine_duration: number[];
    uv_index_max: number[];
    uv_index_clear_sky_max: number[];
    precipitation_sum: number[];
    rain_sum: number[];
    showers_sum: number[];
    snowfall_sum: number[];
    precipitation_hours: number[];
    precipitation_probability_max: number[];
    wind_speed_10m_max: number[];
    wind_gusts_10m_max: number[];
    wind_direction_10m_dominant: number[];
    shortwave_radiation_sum: number[];
    et0_fao_evapotranspiration: number[];


    constructor(daily: Daily) {
        this.time = daily.time;
        this.weather_code = daily.weather_code;
        this.temperature_2m_max = daily.temperature_2m_max;
        this.temperature_2m_min = daily.temperature_2m_min;
        this.apparent_temperature_max = daily.apparent_temperature_max;
        this.apparent_temperature_min = daily.apparent_temperature_min;
        this.sunrise = daily.sunrise;
        this.sunset = daily.sunset;
        this.daylight_duration = daily.daylight_duration;
        this.sunshine_duration = daily.sunshine_duration;
        this.uv_index_max = daily.uv_index_max;
        this.uv_index_clear_sky_max = daily.uv_index_clear_sky_max;
        this.precipitation_sum = daily.precipitation_sum;
        this.rain_sum = daily.rain_sum;
        this.showers_sum = daily.showers_sum;
        this.snowfall_sum = daily.snowfall_sum;
        this.precipitation_hours = daily.precipitation_hours;
        this.precipitation_probability_max = daily.precipitation_probability_max;
        this.wind_speed_10m_max = daily.wind_speed_10m_max;
        this.wind_gusts_10m_max = daily.wind_gusts_10m_max;
        this.wind_direction_10m_dominant = daily.wind_direction_10m_dominant;
        this.shortwave_radiation_sum = daily.shortwave_radiation_sum;
        this.et0_fao_evapotranspiration = daily.et0_fao_evapotranspiration;
    }

    get_daily_weather() {
        return {
            time: this.time,
            weather_code: this.weather_code,
            temperature_2m_max: this.temperature_2m_max,
            temperature_2m_min: this.temperature_2m_min,
            apparent_temperature_max: this.apparent_temperature_max,
            apparent_temperature_min: this.apparent_temperature_min,
            sunrise: this.sunrise,
            sunset: this.sunset,
            daylight_duration: this.daylight_duration,
            sunshine_duration: this.sunshine_duration,
            uv_index_max: this.uv_index_max,
            uv_index_clear_sky_max: this.uv_index_clear_sky_max,
            precipitation_sum: this.precipitation_sum,
            rain_sum: this.rain_sum,
            showers_sum: this.showers_sum,
            snowfall_sum: this.snowfall_sum,
            precipitation_hours: this.precipitation_hours,
            precipitation_probability_max: this.precipitation_probability_max,
            wind_speed_10m_max: this.wind_speed_10m_max,
            wind_gusts_10m_max: this.wind_gusts_10m_max,
            wind_direction_10m_dominant: this.wind_direction_10m_dominant,
            shortwave_radiation_sum: this.shortwave_radiation_sum,
            et0_fao_evapotranspiration: this.et0_fao_evapotranspiration,
        }
    }


    getTemperature():temperatureDaily {
        return {
            temperature: {
                average: this.temperature_2m_min.map((item, index) =>Math.round((item + this.temperature_2m_max[index]) / 2)),
                temperature_2m_max: this.temperature_2m_max,
                temperature_2m_min: this.temperature_2m_min,
            },
            apparent_temperature: {
                average: this.apparent_temperature_min.map((item, index) =>Math.round((item + this.apparent_temperature_max[index]) / 2)),
                apparent_temperature_max: this.apparent_temperature_max,
                apparent_temperature_min: this.apparent_temperature_min,
            }
        }
    }
}
