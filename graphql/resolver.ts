import { addPerson, deletePersonById, getPeople, getPersonById } from '../src/db'

export const resolvers = {
	Query: {
		people: () => getPeople(),
		person: (_: any, args: any) => getPersonById(args.id),
	},
	Mutation: {
		addPerson: (_: any, args: any) => addPerson(args),
		deletePerson: (_: any, args: any) => deletePersonById(args.id),
	},
}
