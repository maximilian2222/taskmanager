const {Schema,model} = require('mongoose')

const TaskSchema = new Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxLength: [20, ' name can not be more then 20 characters']

    },
    completed: {
        type: Boolean,
        default:false
    }
})



module.exports = model('Task', TaskSchema)