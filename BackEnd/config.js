module.exports = {
    dev:{
        connectionString:"postgresql://postgres:docker@127.0.0.1:5432/wedding",
        port: "3000" 
    },
    test:{
        connectionString: '127.123.123.234:5432'
    },
    production:{
        connectionString: process.env.POSTGRES_CONNECTION_STRING + '?ssl=true',
        port: process.env.PORT
    }
}
