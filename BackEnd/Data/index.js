const mongoose = require("mongoose");
const RecipesSchema = require("../models/recipes.js");
const recipeData = require("./data.js");

// const FridgeSchema = require('../models/FridegeSchema.js')
// const fridgeData = require('./fridegeData.js');

main().then( ()=>{
    console.log("Connection Successful");
}).catch( (err)=>{
    console.log(err.message);
});

async function main(){
    mongoose.connect('mongodb://127.0.0.1:27017/RecipeHub');
};

let insertData = async(obj)=>{
    await RecipesSchema.deleteMany({});
    recipeData.data = recipeData.data.map( (obj)=>({...obj}));
    let result = await RecipesSchema.insertMany(recipeData.data);
    console.log(result);
};

insertData();

// let fridgedata = async(items)=>{
//     await FridgeSchema.deleteMany({});
//     fridgeData.data = fridgeData.data.map( (item)=>({...item}));
//     let result = await FridgeSchema.insertMany(fridgeData.data);
//     console.log (result);
// }

// fridgedata();