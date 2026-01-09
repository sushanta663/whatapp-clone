import mongoose  from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const usserName = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const Connection = async () => {

  const URL =`mongodb+srv://${usserName}:${password}@sushantam.k1r5e.mongodb.net/?retryWrites=true&w=majority&appName=SushantaM`;
  try{
    await mongoose.connect(URL);
    console.log('Database connect Successfully!');
  } catch(error){
    console.log('Error while connecting with the database:',error.message);
  }
  
}

export default Connection;