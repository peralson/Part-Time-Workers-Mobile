const getShiftDuration = (start, end) => {
    const subtract = new Date(end).getTime() - new Date(start).getTime()
    return {
        hours: parseInt(subtract / 60 / 60),
        minutes: subtract / 60 % 60
    }
}

export default getShiftDuration