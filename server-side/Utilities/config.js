let environment = 'dev';

let serverURLs = {
    "dev": {
        "NODE_SERVER": "https://localhost",
        "NODE_SERVER_PORT": "3000",
        "MYSQL_HOST": "localhost",
        "MYSQL_USER": "root",
        "MYSQL_PASSWORD": 'L3v1m4nn1@',
        "MYSQL_DATABASE": "angular7_crud",
    }
}

let config = {
    "DB_URL_MYSQL": {
        "host": '${serverURLs[environment].MYSQL_HOST}',
        "user": '${serverURLs[environment].MYSQL_USER}',
        "password": '${serverURLs[environment].MYSQL_PASSWORD}',
        "DATBASE": '${serverURLs[environment].MYSQL_DATABASE}'
    },
    "NODE_SERVER_PORT": {
        "port": '${serverURLs[environment].NODE_SERVER_PORT}'
    },
    "NODE_SERVER_URL": {
        "url": '${serverURLs[environment].NODE_SERVER}'
    }
};

module.exportd = {
    config: config
}