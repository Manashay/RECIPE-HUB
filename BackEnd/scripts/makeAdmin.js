import 'dotenv/config';
import mongoose from "mongoose";
import User from '../models/User';

const email = 'admin@gmail.com';   // the email you registered with

mongoose.connect(process.env.MONGO_URL).then(async () => {

    // 👇 first, list ALL users so you can see what's in the DB
    const allUsers = await User.find({});
    console.log('All users in DB:', allUsers);

    // then try to find your specific user
    const user = await User.findOneAndUpdate(
        { email },
        { role: 'admin' },
        { new: true }
    );

    if (!user) {
        console.log('❌ User not found for email:', email);
    } else {
        console.log(`✅ ${user.name} is now an admin!`);
    }

    mongoose.disconnect();
});