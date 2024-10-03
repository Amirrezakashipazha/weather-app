import { TDateISO } from "@/types/iso";

/**
 * Converts UTC time to local time based on latitude and longitude.
 * @param {TDateISO} utcTime - The UTC time in ISO 8601 format (without 'Z').
 * @param {number} latitude - The latitude of the location.
 * @param {number} longitude - The longitude of the location.
 * @returns {TDateISO} - The converted time in local time format.
 */
function convertUtcToLocalTime(utcTime: TDateISO, latitude: number, longitude: number): TDateISO {
    const iranTimeOffset = 3.5 * 60; // UTC+3:30 in minutes for IRST
    let localOffset = iranTimeOffset; // Default to Iran time

    // Adjust for Qazvin (8 minutes behind Tehran)
    if (latitude === 36.18 && longitude === 50.00) { // Approximate coordinates for Qazvin
        localOffset -= 8; // Subtract 8 minutes
    }

    const iranDate = new Date(`${utcTime}Z`); // Append 'Z' to treat it as UTC
    iranDate.setMinutes(iranDate.getMinutes() + localOffset);

    // Format the date to match TDateISO
    const year = iranDate.getUTCFullYear().toString().padStart(4, '0');
    const month = (iranDate.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = iranDate.getUTCDate().toString().padStart(2, '0');
    const hours = iranDate.getUTCHours().toString().padStart(2, '0');
    const minutes = iranDate.getUTCMinutes().toString().padStart(2, '0');

    // Construct the TDateISO formatted string
    const formattedDateISO: TDateISO = `${year}-${month}-${day}T${hours}:${minutes}` as TDateISO;

    return formattedDateISO;
}

export default convertUtcToLocalTime;
