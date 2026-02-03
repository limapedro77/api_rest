require('dotenv').config()

module.exports = {
    dialect: "mysql",
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    port: process.env.DATABASE_PORT,
    host: process.env.DATABASE_HOST,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    },
    dialectOptions: {
        timezone: 'America/Sao_Paulo',
    },
    timezone: 'America/Sao_Paulo',
}