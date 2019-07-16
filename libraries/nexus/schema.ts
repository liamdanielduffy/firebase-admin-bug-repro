import { makeSchema, objectType } from "nexus";

const Query = objectType({
	name: "Query",
	definition: t => {
        t.string("hello", {
            resolve: () => "world"
        })
    }
});

const schema = makeSchema({
	types: [Query],
	outputs: {
		schema: __dirname + "/generated/schema.graphql",
		typegen: __dirname + "/generated/typings.ts"
	}
});

export default schema;