const mongoose = require('mongoose');
const schema = mongoose.Schema;

const fridgeSchema = new schema({
    name : {
        type : String,
        required : [true, 'Indefined'],
        trim : true,
        unique : true
    },
    icon :{
        type : String,
        require : [true, '?']
    },
    createdAt: {
    type: Date,
    default: Date.now
    }
});

const FridgeItem = mongoose.model('FridgeItem',fridgeSchema);

module.exports = FridgeItem;