
import mongoose from "mongoose"
export const connectdb = async()=>{

    try {
      const {connection}= await mongoose.connect(process.env.MONGO_DB_URL,{
            dbName :'nextapp'
        })
        console.log('db is connected ...')
        
    } catch (error) {
        console.log('failed database')
        console.log(error)
    }

}

