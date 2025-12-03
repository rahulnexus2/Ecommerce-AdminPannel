import dotenv from 'dotenv'

dotenv.config()


const config={
port:  process.env.PORT||3000,
mongo_url:process.env.MONGO_URI||MONGO_URL,
jwt_secret:process.env.JWT_SEC

}

export default config