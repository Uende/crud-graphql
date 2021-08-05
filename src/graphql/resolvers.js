
let users = [
    {_id: String(Math.floor(Math.random() * 100)), name: 'Uende', email: 'uende@gmail.com', phone: 71984044385, active: true},
    {_id: String(Math.floor(Math.random() * 100)), name: 'Emerson', email: 'emerson@gmail.com', phone: 71984044385, active: false}
]
// É aqui que é colocada a função a ser executada quando a solicitação de um determinado objeto ou item na Query é feita
const resolvers = {
    Query: {
        hello: () => 'Olá mundo! Conseguii!!',
        users: () => users,
        getUserByEmail: (_, args) => {
            return users.find((user) => user.email === args.email)
        }
    },
    Mutation: {
        createUser: (_, args) => {
            const newUser = {
                _id: String(Math.random()), 
                name: args.name, 
                email: args.email, 
                phone: args.phone, 
                active: true
            }

            users.push(newUser)
            
            return newUser
        },
        deleteUser: (_, args) => {
            const newUsers = users.filter((user) => user._id !== args.id)
            users = newUsers
            return true
        },
        updateUser: (_, args) => {
            let user = users.find(user => user._id === args.id)
            user.name = args.name ? args.name : user.name
            user.email = args.email ? args.email : user.email
            user.phone = args.phone ? args.phone : user.phone
            user.active = args.active ? args.active : user.active

            return user
        }
    }
}

module.exports = resolvers