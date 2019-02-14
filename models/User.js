const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema 
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

UserSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validatePassword = function(password){
    return bcrypt.compareSync(password, this.password);
};

module.exports = item = mongoose.model('users', UserSchema);