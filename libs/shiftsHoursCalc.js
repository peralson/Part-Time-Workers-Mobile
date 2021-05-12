import getShiftDuration from './getShiftDuration'

const shiftsHoursCalc = shifts => {
    let hours = 0
    let minutes = 0

    shifts.map((shift) => {
        const duration = getShiftDuration(shift.start._seconds, shift.end._seconds)

        hours = hours + duration.hours
        minutes = minutes + duration.minutes
    })

    return { 
        hours,
        minutes
    }
}

export default shiftsHoursCalc