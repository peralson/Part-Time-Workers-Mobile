const handleStatus = status => {
    switch (status) {
        case "check_in":
            return "Check In"
    
        case "check_out":
            return "Check Out"

        case "none":
            return "Próximo"
    }
}

export default handleStatus