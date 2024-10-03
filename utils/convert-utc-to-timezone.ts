import { TDateISO } from "@/types/iso";

function convertToLocalWithCustomOffset(
  strUTC: TDateISO,
  hoursOffset: number,
  minutesOffset: number
): TDateISO {
  let dateUTC = new Date(strUTC + ":00");
  let totalOffsetInMs =
    hoursOffset * 60 * 60 * 1000 + minutesOffset * 60 * 1000;
  let adjustedTime = new Date(dateUTC.getTime() + totalOffsetInMs);
  let year = adjustedTime.getFullYear();
  let month = String(adjustedTime.getMonth() + 1).padStart(2, "0");
  let day = String(adjustedTime.getDate()).padStart(2, "0");
  let hours = String(adjustedTime.getHours()).padStart(2, "0");
  let minutes = String(adjustedTime.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}` as TDateISO;
}

export default convertToLocalWithCustomOffset;
