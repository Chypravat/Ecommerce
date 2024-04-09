// models/contact.js

module.exports = (sequelize, Sequelize) => {
    const Contact = sequelize.define('contact', {
        firstName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        message: {
            type: Sequelize.TEXT,
            allowNull: false
        }
    });

    return Contact;
};
