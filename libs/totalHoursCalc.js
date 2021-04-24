import moment from 'moment'
import 'moment/locale/es'

const totalHoursCalc = schedules => {
    let hours = 0
    let minutes = 0

    schedules.map(sche => {
        const start = moment(sche.start._seconds * 1000).locale('es').format('HH:mm').split(':')
        const end = moment(sche.end._seconds * 1000).locale('es').format('HH:mm').split(':')

        hours = hours + (parseInt(end[0]) - parseInt(start[0]))
        minutes = minutes + (parseInt(end[1]) - parseInt(start[1]))
    })

    return { 
        hours: hours, 
        minutes: Math.abs(minutes)
    }
}

export default totalHoursCalc