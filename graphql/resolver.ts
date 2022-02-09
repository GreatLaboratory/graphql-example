import { getMovies } from '../src/api'
import { addPerson, deletePersonById, getPeople, getPersonById } from '../src/data'

export const resolvers = {
	Query: {
		people: () => getPeople(),
		person: (_: any, args: any) => getPersonById(args.id),
		movies: (_: any, args: any) => getMovies(args.limit, args.rating),
	},
	Mutation: {
		addPerson: (_: any, args: any) => addPerson(args),
		deletePerson: (_: any, args: any) => deletePersonById(args.id),
	},
}
