module.exports.up = (queryInterface, Sequelize) => {
    return queryInterface.createTable(
        'userSessions',
        {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.DataTypes.UUID
            },
            userId: {
                allowNull: false,
                references: {
                    key: 'id',
                    model: 'users'
                },
                type: Sequelize.DataTypes.UUID
            },
            expiresAt: {
                allowNull: false,
                type: Sequelize.DataTypes.DATE
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DataTypes.DATE
            }
        },
        {
            charset: 'utf8'
        }
    );
};

module.exports.down = queryInterface =>
    queryInterface.dropTable('userSessions');
