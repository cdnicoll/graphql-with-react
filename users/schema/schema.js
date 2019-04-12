const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphql;
const _ = require('lodash');
var faker = require('faker');

const users = [
  {
    id: 1,
    firstName: 'Trenton',
    age: 25,
  },
  {
    id: 2,
    firstName: 'Sheldon',
    age: 33,
  },
  {
    id: 3,
    firstName: 'Ariane',
    age: 18,
  },
  {
    id: 4,
    firstName: 'Thaddeus',
    age: 42,
  },
  {
    id: 5,
    firstName: 'Jayde',
    age: 20,
  },
];

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLInt },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
  },
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLInt } },
      resolve(parentValue, args) {
        return _.find(users, { id: args.id });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
