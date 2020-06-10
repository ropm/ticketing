module.exports.up = (queryInterface, Sequelize) => {
    return queryInterface.createTable(
        'tickets',
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.DataTypes.INTEGER.UNSIGNED
            },
            title: {
                allowNull: false,
                type: Sequelize.DataTypes.STRING
            },
            description: {
                allowNull: false,
                type: Sequelize.DataTypes.TEXT
            },
            progressState: {
                allowNull: true,
                type: Sequelize.DataTypes.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DataTypes.DATE
            },
            updatedAt: {
                allowNull: true,
                type: Sequelize.DataTypes.DATE
            },
            deletedAt: {
                allowNull: true,
                type: Sequelize.DataTypes.DATE
            }
        },
        {
            charset: 'utf8'
        }
    );
};
