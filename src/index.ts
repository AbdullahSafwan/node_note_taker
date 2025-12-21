import app from "./app";


const port = process.env.PORT;
console.log({ port });

app.listen(port, ()=>{
    console.log('listening to port', port)
})

export default app