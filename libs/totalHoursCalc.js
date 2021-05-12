import getShiftDuration from './getShiftDuration'

const totalHoursCalc = schedules => {
    let hours = 0
    let minutes = 0

    schedules.map((schedule) => {
        schedule.shifts.map((shift) => {
            const duration = getShiftDuration(shift.start._seconds, shift.end._seconds)

            hours = hours + duration.hours
            minutes = minutes + duration.minutes
        })
    })

    return { 
        hours,
        minutes
    }
}

export default totalHoursCalc