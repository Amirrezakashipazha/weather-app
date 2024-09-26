import { Current } from "./current"
import { Unit_current } from "./current/units"
import { Daily } from "./daily"
import { Unit_daily } from "./daily/units"
import { Hourly } from "./hourly"
import { Unit_hourly } from "./hourly/units"

export class weather extends Daily{
    latitude: number
    longitude: number
    generationtime_ms: number
    utc_offset_seconds: number
    timezone: "GMT"
    timezone_abbreviation: "GMT"
    elevation: number
    current_units: Unit_current
    current: Current
    hourly_units: Unit_hourly
    hourly: Hourly
    daily_units: Unit_daily
    daily: Daily;


    constructor(weather: weather) {
        super(weather.daily);
        this.latitude = weather.latitude
        this.longitude = weather.longitude
        this.generationtime_ms = weather.generationtime_ms
        this.utc_offset_seconds = weather.utc_offset_seconds
        this.timezone = weather.timezone
        this.timezone_abbreviation = weather.timezone_abbreviation
        this.elevation = weather.elevation
        this.current_units = weather.current_units
        this.current = weather.current
        this.hourly_units = weather.hourly_units
        this.hourly = weather.hourly
        this.daily_units = weather.daily_units
        this.daily = weather.daily
    }

    get_weather() {
        return {
            latitude: this.latitude,
            longitude: this.longitude,
            generationtime_ms: this.generationtime_ms,
            utc_offset_seconds: this.utc_offset_seconds,
            timezone: this.timezone,
            timezone_abbreviation: this.timezone_abbreviation,
            elevation: this.elevation,
            current_units: this.current_units,
            current: this.current,
            hourly_units: this.hourly_units,
            hourly: this.hourly,
            daily_units: this.daily_units,
            daily: this.daily,
        }
    }
}