import { Sequelize } from 'sequelize';

import envHelper from '#root/helpers/envHelper';

const DB_URI = envHelper('DB_URI');

const sequelize = new Sequelize(DB_URI, {
    dialectOptions: {
        charset: 'utf8',
        multipleStatements: true
    },
    logging: false
});

export default sequelize;
