class Offer {
    constructor (
        id,
        category,
        location,
        date,
        description,
        qty,
        alreadyAssigned,
        schedule,
        salary,
        extraSalary,
    ) {
        this.id = id
        this.category = category
        this.location = location
        this.date = date
        this.description = description
        this.qty = qty
        this.alreadyAssigned = alreadyAssigned
        this.schedule = schedule
        this.salary = salary
        this.extraSalary = extraSalary
    }
}

export default Offer