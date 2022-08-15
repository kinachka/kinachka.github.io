class CartService {
    
    constructor() {
        this.cart = {}
    }

    getInfo() {
        const items = Object.keys(this.cart).map(id => {
            return {
                id,
                ...this.cart[id]
                // title: this.cart[id].title,
                // amount: this.cart[id].amount,
                // price: this.cart[id].price
            }
        })
    
        const totalPrice = items.reduce((sum, item) => {
            return sum += item.amount * item.price
        }, 0)
    
        return { items, totalPrice }
    }

    clear() {
        this.cart = {}
    }

    remove(productId) {
        if (this.cart[productId].amount === 1) {
            delete this.cart[productId]
        } else {
            this.cart[productId].amount--
        }
        
    }

    add(product) {
        const key = product.id
        if (this.cart[key]) {
            this.cart[key].amount++
            return
        }
        this.cart[key] = {
            title: product.title,
            price: product.price,
            amount: 1
        }
    }
} 