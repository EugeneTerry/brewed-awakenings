import { getProducts, getEmployees, getOrders } from "./database.js"

// Get copy of state for use in this module
const products = getProducts()
const employees = getEmployees()
const orders = getOrders()


// Function whose responsibility is to find the product for an order
const findProduct = (order, products) => {
    let orderProduct = null

    for (const product of products) {
        if (product.id === order.productId) {
            orderProduct = product
        }
    }

    return orderProduct
}

// Function whose responsibility is to find the employee for an order
const findEmployee = (order, employees) => {
    let orderEmployee = null

    for (const employee of employees) {
        if (employee.id === order.employeeId) {
            orderEmployee = employee
        }
    }

    return orderEmployee
}

export const Orders = () => {
    let html = "<ul>"

    for (const currentorder of orders) {
        const currentemployee = findEmployee(currentorder, employees)
        const currentproduct = findProduct(currentorder, products)

        html += `<li>${currentproduct.name} was sold by ${currentemployee.name} on ${new Date(currentorder.timestamp).toLocaleDateString()}</li>`
    }

    html += "</ul>"

    return html
}

