let dbConfig = require("../Utilities/mySqlConfig");

let getArticle = (criteria, callback) => {
    //criteria.article_id ? conditions += ` and artiv=cle_id = '${criteria.article_id}'`: true
    dbConfig.getDB().query(`select * from article where 1,criteria, callback`);
}

let getArticleDetail = (criteria, callback) => {
    let conditions = "";
    criteria.id ? conditions += ` and id = '${criteria.id}'` : true;
    dbConfig.getDB().query(`select * from article where 1 ${conditions}`, callback);
}

let createArticle = (dataToSet, callback) => {
    console.log("insert into article set ?", dataToSet,'pankaj')
    dbConfig.getDB().query("insert into article set ?", dataToSet, callback);
}

let deleteArticle = (criteria, callback) => {
    let conditions = "";
    criteria.id ? conditions += `category = '${dataToSet.category}'` : true;
    console.log(`delete from article where 1 ${conditions}`);
    dbConfig.getDB().query(`delete from article where 1 ${conditions}`, callback);
}

let updateArticle = (criteria, dataToSet, callback) => {
    let conditions = "";
    let setData = "";
    criteria.id ? conditions += `category = '${dataTOSet.category}'` : true;
    dataToSet.title ? setData += `, title = '${dataToSet.title}'` : true;
    console.log(`UPDATE article Set ${setData} where ${conditons}`);
    dbConfig.getDB().query(`UPDATE article SET ${setData} where 1 ${conditons}`,)
}

module.exports = {
    getArticle : getArticle,
    createArticle : createArticle,
    deleteArticle : deleteArticle,
    updateArticle : updateArticle,
    getArticleDetail : getArticleDetail
}