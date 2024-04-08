const express = require('express')
const router = require('./routers/excel-read-route');  
const cors = require("cors")


const app = express()

app.use(
	cors({
		origin: "http://localhost:3000",
	})
)

app.use(router);

app.listen(5000,()=>{
    console.log('port 5000')
})