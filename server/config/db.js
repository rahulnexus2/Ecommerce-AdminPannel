import Mongoose from 'mongoose';
import config from './config.js';


const ConnectDb=async()=>{
  Mongoose.set('strictQuery',true)
try{
  const conn=await Mongoose.connect(config.mongo_url);

  console.log(`MongoDb connected ${conn.connection.host}`)

}catch(error)
{
  console.log(`MogoDb connection Error: ${error.message}`);
  process.exit(1);

}

}

export default ConnectDb;