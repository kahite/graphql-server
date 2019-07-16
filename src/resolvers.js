import {users} from "./db";

const resolvers = {
	Query: {
		users: (parent, args, context, info) => {
			return users;
		},
		user: (parent, { id }, context, info) => {
			return users.find(user => user.id == id)
		}
	},
	Mutation: {
		createUser: (parent, { id, name, email, age }, context, info) => {
			const newUser = { id, name, email, age};
			users.push(newUser);

			return newUser;
		},
		updateUser: (parent, { id, name, email, age }, context, info) => {
			let user = users.find(user => user.id == id);
			user.name = name;
			user.email = email;
			user.age = age;
			
			return user;
		},
		deleteUser: (parent, { id }, context, info) => {
			let userIndex = users.findIndex(user => user.id == id);
			const deletedUser = users.splice(userIndex, 1);

			return deletedUser[0];
		}
	}
};

export default resolvers;
