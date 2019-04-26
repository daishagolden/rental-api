const Product = require('../model/product');
const daoCommon = require('./common/daoCommon');
const Orders = require("../model/orders");
const Users = require("../model/users");

class ProductDao {
    constructor() {
        this.common = new daoCommon();
    }
    findAll() {
        let sqlRequest = "SELECT * FROM Product";
        return this.common.findAll(sqlRequest).then(rows => {
            let product = [];
            console.log(rows);
            for (const row of rows) {
                product.push(new Product(
                        row.id,
                        row.name,
                        row.description,
                        row.price,
                        row.img,
                        row.user_id,
                        row.order_id
                    ));
                };
                return product;
            });
        }
}
module.exports = ProductDao;