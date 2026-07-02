import 'dotenv/config';
import { app } from "./src/app.js";
import { ConnectDB } from './src/config/db.js';

ConnectDB();

app.listen(3000, (req, res)=>{
    console.log("server is running on port 3000");
})