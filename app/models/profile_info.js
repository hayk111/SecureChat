module.exports = function(sequelize, Sequelize) {
    const ProfileInfo = sequelize.define('profile_info', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        user_id: {
            type: Sequelize.INTEGER,
        },
        first_name: {
            type: Sequelize.STRING
        },
        last_name: {
            type: Sequelize.STRING
        },
        profile_pic: {
            type: Sequelize.STRING(1000),
            defaultValue: 'default-avatar-boy.png'
        }
    });

    return ProfileInfo;
}