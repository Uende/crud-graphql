// No GraphQL toda request é POST
// Além disso, toda request acesso o mesmo endpoint -> /graphql

// Query - Obter informações (GET)
// Mutation - Manipular dados (POST, PUT, PATCH, DELETE)

//Schema - Todo type é chamado de Schema


const {ApolloServer} = require('apollo-server')
const typeDefs = require('./graphql/typedefs')
const resolvers = require('./graphql/resolvers')


const server = new ApolloServer({typeDefs, resolvers})

server.listen().then(({url}) => console.log(`Server started in ${url}`))
