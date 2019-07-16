import { ApolloServer } from "apollo-server-micro";
import schema from "libraries/nexus/schema";
import getContext from 'libraries/apollo/getContext'

const apolloServer = new ApolloServer({ schema, context: getContext, playground: true, introspection: true });

export const config = {
	api: {
		bodyParser: false
	}
};

export default apolloServer.createHandler({ path: "/api/graphql" });
