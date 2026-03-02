const mongoose = require("mongoose");
const RecipesSchema = require("../models/recipes.js");
const recipeData = require("./data.js");

const FridgeSchema = require('../models/FridegeSchema.js')
const fridgeData = require('./fridegeData.js');

main()
  .then(() => {
    console.log("Connection Successful");
    return insertData();
  })
  .then(() => fridgedata())
  .then(() => {
    console.log("All data seeded");
    mongoose.connection.close();
  })
  .catch((err) => console.log(err.message));

async function main(){
    mongoose.connect('mongodb://127.0.0.1:27017/RecipeHub');
};

let insertData = async(obj)=>{
    await RecipesSchema.deleteMany({});
    recipeData.data = recipeData.data.map( (obj)=>({...obj}));
    let result = await RecipesSchema.insertMany(recipeData.data);
    // console.log(result);
};

let fridgedata = async () => {
    await FridgeSchema.deleteMany({});
    try {
        let result = await FridgeSchema.insertMany(fridgeData.data, { ordered: false });
        console.log(`Inserted ${result.length} items`);
    } catch (err) {
        console.log("Validation errors:", err.writeErrors?.map(e => e.err.op)); // shows failing docs
    }
}