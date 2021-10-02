const graphQL = require("graphql")
const { GraphQLObjectType, GraphQLSchema, GraphQLID, GraphQLString } = graphQL

const Books = [
    { id: "1", name: "apple", genre: "tech" },
    { id: "2", name: "samsung", genre: "tech" },
    { id: "3", name: "nokia", genre: "tech" }
]

const BookType = new GraphQLObjectType({
    name: "Book",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
})

const BookTypeQuery = new GraphQLObjectType({
    name: "BookQuery",
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Books.find(index => index.id === args.id)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: BookTypeQuery
})