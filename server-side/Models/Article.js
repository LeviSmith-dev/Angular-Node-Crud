let mySqlConfig = require("../Utilities/mySqlConfig");

let initialize = () => {
    mySqlConfig.getDB().query("create table IF NOT EXISTS article (id INT auto_increment primary key, category VARCHAR(30), title VARCHAR(24))");
}

module.exports = {
    initialize: initialize
}