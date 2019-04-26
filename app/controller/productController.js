const ProductDao = require("../dao/productDao");
const ControllerCommon = require("./common/controllerCommon");

class ProductContoller {
    constructor() {
        this.productDao = new ProductDao();
        this.common = new ControllerCommon();
    }

    findAll(res) {
        this.productDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };
}

module.exports = ProductContoller;
