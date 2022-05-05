import { ApolloServer } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import Resolvers from './resolvers';
import Schema from './schema';
import auth from './auth';
import JWT from 'jsonwebtoken';

/* This is here just for testing, private key should be stored elsewhere */
const JWT_SECRET = "62uBxue9q4bXhTXRjfGAjHx6rYWpfcvZmzqqkq2hs2ab7RFMSzRpRGvbEk9ah2NfpLfj3nk5eAZYdacpnpm2sjG8PmBSeh5ywP3zmmWDCTjZxnwrHkV6wNkYzgAftYpr";

export default (utils) => {
  const executableSchema = makeExecutableSchema({
    typeDefs: Schema,
    resolvers: Resolvers.call(utils),
    schemaDirectives: {
      auth: auth
    },
  });
 
  const server = new ApolloServer({
    schema: executableSchema,
    context: async ({ req }) => {
      const authorization = req.headers.authorization;
      if(typeof authorization !== typeof undefined) {
        var search = "Bearer";
        var regEx = new RegExp(search, "ig");
        const token = authorization.replace(regEx, '').trim();
        return JWT.verify(token, JWT_SECRET, function(err, result) {
          if(err) {
            return req;
          } else {
            return utils.db.models.User.findByPk(result.id).then((user) => {
              return Object.assign({}, req, { user });
            });
          }
        });
      } else {
        return req;
      }
    },
  });
  
  return server;
};