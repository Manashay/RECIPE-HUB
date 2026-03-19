import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import RecipesSchema from '../models/recipes.js';
import recipeData from './data.js';
// import FridgeSchema from '../models/FridegeSchema.js';
// import fridgeData from './fridegeData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../.env') });

// ===== VERIFY ENV VARIABLES =====
if (!process.env.MONGO_URL) {
  console.error('❌ ERROR: MONGO_URL is not defined in .env file');
  process.exit(1);
}

console.log('✓ Environment variables loaded');

// ===== MAIN EXECUTION =====
main()
  .then(() => {
    console.log("✓ Connection Successful");
    return insertData();
  })
  .then(() => {
    console.log("✓ Recipes inserted");
    // return fridgedata();
  })
  .then(() => {
    console.log("✓ All data seeded successfully");
    mongoose.connection.close();
    process.exit(0);
  })
  .catch((err) => {
    console.error('✗ Error:', err.message);
    mongoose.connection.close();
    process.exit(1);
  });

// ===== CONNECT TO DATABASE =====
async function main() {
  try {
    console.log('🔄 Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGO_URL);
    console.log('✓ MongoDB Connected');
  } catch (error) {
    console.error('✗ Connection failed:', error.message);
    throw error;
  }
}

// ===== INSERT RECIPE DATA =====
let insertData = async () => {
  try {
    console.log('📝 Inserting recipe data...');
    
    // Optional: Delete existing data first
    // await RecipesSchema.deleteMany({});
    
    const dataToInsert = recipeData.data.map((obj) => ({ ...obj }));
    const result = await RecipesSchema.insertMany(dataToInsert);
    
    console.log(`✓ Inserted ${result.length} recipes`);
    return result;
  } catch (error) {
    console.error('✗ Recipe insertion failed:', error.message);
    throw error;
  }
};

// ===== INSERT FRIDGE DATA =====
let fridgedata = async () => {
  try {
    console.log('📝 Inserting fridge data...');
    
    // Optional: Delete existing data first
    // await FridgeSchema.deleteMany({});
    
    // const result = await FridgeSchema.insertMany(fridgeData.data, { ordered: false });
    // console.log(`✓ Inserted ${result.length} fridge items`);
    
    return result;
  } catch (err) {
    if (err.writeErrors) {
      console.warn(`⚠ Inserted with ${err.writeErrors.length} validation errors`);
      console.warn("Failed documents:", err.writeErrors.map(e => e.err.op));
    } else {
      console.error('✗ Fridge insertion failed:', err.message);
      throw err;
    }
  }
};