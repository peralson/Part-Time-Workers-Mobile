const formattedSalary = salary => {
    let salaryArray = salary.toString().split(".");
    if (salaryArray.length === 2) {
        if (salaryArray[1].length === 1) {
            salaryArray[1] = salaryArray[1] + '0'
        }
    }

    return salaryArray.join(',')
}

export default formattedSalary