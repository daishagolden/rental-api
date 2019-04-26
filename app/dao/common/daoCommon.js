const database = require("../../config/dbconfig");

const Promise = require("bluebird");

class Common {

    findAll(sqlRequest) {
        return new Promise
        (function (resolve, reject) {
            database.db.all(sqlRequest, function (err, rows) {
                if (err) {
                    reject(
                        new DaoError(20, "Internal server error")
                    );
                } else if (rows === null || rows.length === 0) {
                    reject(
                        new DaoError(21, "Entity not found")
                    );
                } else {
                    resolve(rows);
                }
            })
        });
    }
}

class DaoError {
    constructor(errorCode, message) {
        this.errorCode = errorCode;
        this.message = message;
    }
}

module.exports = Common;