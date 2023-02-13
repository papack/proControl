import { scale } from "@proControl/Widgets/lib/uitls"

export const timeToAngle = (time: Date) => {
  // Get hours and minutes
  const hours = time.getHours()
  const minutes = time.getMinutes()

  // Convert to angle
  const hoursAngle = scale(hours, [0, 12], [0, 360])
  const minutesAngle = scale(minutes, [0, 60], [0, 360])

  // Return
  return {
    hoursAngle: hoursAngle - 90, // -90 because of the rotation of the clock
    minutesAngle: minutesAngle - 90 // ->we want 0 (12) to be at the top
  }
}
