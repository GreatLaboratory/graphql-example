import { GraphQLServer, PubSub } from 'graphql-yoga'
import { getResolvers } from '../graphql/resolver'

const pubsub: PubSub = new PubSub()
const resolvers = getResolvers(pubsub)

const server: GraphQLServer = new GraphQLServer({
	typeDefs: 'graphql/schema.graphql',
	resolvers,
})

// 서버에서 지속적으로 publishMessageEvent 이벤트 발행 - 보통은 mutation resolver로직 내부에서
// 클라이언트 측에서 graphql의 subscription으로 요청을 보내면 해당 publishMessageEvent 이벤트를 실시간 구독
setInterval(() => {
	pubsub.publish('publishMessageEvent', {
		publishMessageEvent: Math.random().toString(36).substr(2, 11),
	})
}, 1000)

server.start(() => console.log('GraphQL Server Running😋'))
