const graphQL = require("graphql")
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphQL

const Books = [
    { id: "1", name: "apple", genre: "tech" }
]

const BookType = new GraphQLObjectType({
    name: "Book",
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
})

const BookTypeQuery = new GraphQLObjectType({
    name: "BookQuery",
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                return Books.find(index => index.id === args.id)
            }
        }
    }
})


module.exports = new GraphQLSchema({
    query: BookTypeQuery
})