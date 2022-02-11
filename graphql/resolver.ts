import { PubSub } from 'graphql-yoga'
import { getMovies } from '../src/api'
import { addPerson, deletePersonById, getPeople, getPersonById } from '../src/data'

export const getResolvers = (pubsub: PubSub) => ({
	Query: {
		people: () => getPeople(),
		person: (_: any, args: any) => getPersonById(args.id),
		movies: (_: any, args: any) => getMovies(args.limit, args.rating),
	},
	Mutation: {
		addPerson: (_: any, args: any) => addPerson(args, pubsub),
		deletePerson: (_: any, args: any) => deletePersonById(args.id, pubsub),
	},
	Subscription: {
		publishMessageEvent: {
			subscribe: () => pubsub.asyncIterator('publishMessageEvent'),
		},
		addPersonEvent: {
			subscribe: () => pubsub.asyncIterator('addPersonEvent'),
		},
		deletePersonEvent: {
			subscribe: () => pubsub.asyncIterator('deletePersonEvent'),
		},
	},
})
