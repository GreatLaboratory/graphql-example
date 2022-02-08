type Person = {
	id?: number
	name: string
	age: number
	gender: boolean
}

const people: Person[] = [
	{
		id: 0,
		name: 'wayne',
		age: 27,
		gender: true,
	},
	{
		id: 1,
		name: 'yumha',
		age: 25,
		gender: false,
	},
]

let personIdx = people.length

const getPeople = (): Person[] => people

const getPersonById = (id: number): Person => people.filter((person) => person.id === id)[0]

const addPerson = (person: Person) => {
	const { name, age, gender } = person
	const newbie: Person = {
		id: personIdx++,
		name,
		age,
		gender,
	}
	people.push(newbie)
	return newbie
}

const deletePersonById = (id: number): boolean => {
	for (const [i, person] of Object.entries(people)) {
		if (person.id === id) {
			people.splice(+i, 1)
			return true
		}
	}
	return false
}

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
