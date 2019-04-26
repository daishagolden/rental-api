let sqlite3 = require("sqlite3").verbose();
let DB_PATH = ("./db/product.db");

const db = new sqlite3.Database(DB_PATH,
    function(err) {
        if(err) {
            console.log(err);
            return
        }
        console.log("connected to " + DB_PATH + " database");

        db.exec("PRAGMA foreign_keys = ON;",
        function(err) {
            if(err) {
                console.error("Pragma statement didn't work.");
            } else {
                console.log("Foreign Key Enforcement is on.");
            }
        });
    }
);

let init = function(){

    db.run("CREATE TABLE if not exists product(" +
        "id INTEGER PRIMARY KEY UNIQUE," +
        "name TEXT NOT NULL," +
        "description TEXT," +
        "price TEXT NOT NULL," +
        "img TEXT NOT NULL," +
        "user_id INTEGER NOT NULL," +
        "order_id INTEGER NOT NULL,"+
        "FOREIGN KEY('user_id') REFERENCES user_info('user_id'),"+
        "FOREIGN KEY('order_id') REFERENCES orders('order_id')" +
        ")"
    );

    db.run("CREATE TABLE if not exists user_info (" +
        "user_id INTEGER PRIMARY KEY UNIQUE," +
        " first_name TEXT," +
        " last_name TEXT," +
        " age INTEGER NOT NULL," +
        " email TEXT UNIQUE NOT NULL," +
        " phone_number INTEGER UNIQUE NOT NULL" +
        ")"
        
    );

    db.run("CREATE TABLE if not exists orders("+
        "order_id INTEGER PRIMARY KEY UNIQUE" +
        ")"
    );
    
};

console.log("created database")

module.exports = {
    init: init,
    db:db
};
