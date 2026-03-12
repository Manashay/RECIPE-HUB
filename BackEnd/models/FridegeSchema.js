import mongoose from "mongoose";
const schema = mongoose.Schema;

const fridgeSchema = new schema({
    name: {
        type: String,
        required: [true, 'Ingredient name is required'],
        trim: true,
        unique: true
    },
    icon: {
        type: String,
        required: [true, 'Icon is required']
    },
    category: {
        type: String,
        required: [true, 'Category is required'],
        // Enum ensures only these specific categories can be added
        enum: [
            'spice', 
            'vegetable', 
            'grain_legume', 
            'animal_product', 
            'meat', 
            'seafood', 
            'sweet', 
            'condiment_sauce', 
            'nut_seed',
            'veg'
        ],
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('FridgeItem', fridgeSchema);
