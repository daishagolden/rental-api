class Product {
    constructor(id,name,description,price,img,user_id,order_id) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.img = img;
        this.user_id = user_id;
        this.order_id = order_id;
    }
}

module.exports = Product;