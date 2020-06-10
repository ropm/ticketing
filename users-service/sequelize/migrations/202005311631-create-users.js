module.exports.up = (queryInterface, Sequelize) => {
    return queryInterface.createTable(
        'users',
        {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.DataTypes.UUID
            },
            email: {
                allowNull: false,
                unique: true,
                type: Sequelize.DataTypes.STRING
            },
            passwordHash: {
                allowNull: false,
                type: Sequelize.DataTypes.CHAR(64)
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

module.exports.down = queryInterface => queryInterface.dropTable('users');
