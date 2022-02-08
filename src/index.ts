import { GraphQLServer } from 'graphql-yoga'
import { resolvers } from '../graphql/resolver'

const server: GraphQLServer = new GraphQLServer({
	typeDefs: 'graphql/schema.graphql',
	resolvers: resolvers,
})

server.start(() => console.log('GraphQL Server Running😋'))
