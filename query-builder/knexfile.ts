export default {
    client: "better-sqlite3",
    connection: {
        filename: "./src/database/database.db",
    },
    useNullAsDefault: true,
    
    migrations: {
        extension: "ts",
        directory: "./src/database/migrations",
    },

    seeds: {
        extension: "ts",
        directory: "./src/database/seeds",
    },
};
