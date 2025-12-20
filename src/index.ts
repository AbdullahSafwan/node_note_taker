import app from "./app";


const port = process.env.PORT ? +process.env.PORT : 8080;
console.log({ port });

app.listen(port, ()=>{
    console.log('listening to port', port)
})

export default app