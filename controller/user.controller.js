const user = require('../schema/user.schema');
const {db} = require('../config/database');
const Sequelize = require('sequelize');

exports.post = (body, done) => {

    user.create(body).then((userData) => {
        if (userData) {
            done(null, userData)
        }
    }).catch((err) => {
        console.log(err)
    })
};

exports.get = (done) => {
    user.findAll({})
        .then((user) => {
            if (user) {
                done(null, user)
            }
        })
        .catch(err => {
            console.log(err);
        })
};

exports.put = (body, id, done) => {
    // const {userName}=body;
    db.query("update tbl_users set userName = '" + body.userName + "' where uid = " + id + " ").then((userData) => {
        if (userData) {
            done(null, userData)
        }
    }).catch((err) => {
        console.log(err)
    })
};

/*exports.put = (body, id, done) => {

    user.update(body,{where: { uid: id}}).then((userData) => {
        if (userData) {
            done(null, userData)
        }
    }).catch((err) => {
        console.log(err)
    })
};*/

exports.deleteUser = ( id, done) => {
    // const {userName}=body;
    db.query("delete from tbl_users where uid="+id).then((userData) => {
        if (userData) {
            done(null, userData)
        }
    }).catch((err) => {
        console.log(err)
    })
};


