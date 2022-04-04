const { Schema, model } = require('mongoose');

const todoSchema = new Schema({
	// _id
	userId: {
		// ObjectId type
		type: Schema.Types.ObjectId,
		// Ref means which Collection does this object ID reference
		ref: 'Users',
		index: true,
	},
	text: {
		type: String,
		required: true,
	},
	completed: {
		type: Boolean,
		default: false,
	}
});

const Todo = model('Todo', todoSchema);

module.exports = Todo;