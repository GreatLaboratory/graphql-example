import { PubSub } from 'graphql-yoga'

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

let personIdx: number = people.length

export const getPeople = (): Person[] => people

export const getPersonById = (id: number): Person => people.filter((person: Person) => person.id === id)[0]

export const addPerson = (person: Person, pubsub: PubSub) => {
	const { name, age, gender } = person
	const newbie: Person = {
		id: personIdx++,
		name,
		age,
		gender,
	}
	people.push(newbie)
	pubsub.publish('addPersonEvent', {
		addPersonEvent: newbie,
	})
	return newbie
}

export const deletePersonById = (id: number, pubsub: PubSub): boolean => {
	let result = false
	for (const [i, person] of Object.entries(people)) {
		if (person.id === id) {
			people.splice(+i, 1)
			result = true
			break
		}
	}
	pubsub.publish('deletePersonEvent', {
		deletePersonEvent: result,
	})
	return result
}
