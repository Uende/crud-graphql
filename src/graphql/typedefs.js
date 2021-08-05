
const {gql} = require('apollo-server')

const typeDefs = gql`

    type User{
        # ID para o GraphQL saber qual desse atributos representam a chave primária
        _id: ID!
        name: String!
        email: String!
        phone: Float!
        active: Boolean!
    }

    type Query{
        hello: String
        users: [User]!
        getUserByEmail(email: String!): User!
    }

    type Mutation{
        createUser(name: String!, email: String!, phone: Float!): User!
        deleteUser(id: ID!): Boolean
        updateUser(id: ID!, name: String, email: String, phone: Float, active: Boolean): User!
    }

`

module.exports = typeDefs