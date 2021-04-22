class Offer {
    constructor (
        id,
        name,
        category,
        location,
        date,
        description,
        requirements,
        qty,
        alreadyAssigned,
        schedule,
        salary,
        extraSalary,
    ) {
        this.id = id
        this.name = name
        this.category = category
        this.location = location
        this.date = date
        this.description = description
        this.requirements = requirements
        this.qty = qty
        this.alreadyAssigned = alreadyAssigned
        this.schedule = schedule
        this.salary = salary
        this.extraSalary = extraSalary
    }
}

export default Offer