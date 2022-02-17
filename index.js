import express from "express";
import  mongoose  from "mongoose";
import exphbs from "express-handlebars";
import routes from "./routes/routes.js";
import  path  from "path";
import sass from "node-sass";


const PORT = process.env.PORT || 3000

const app = express(); // создаем переменную с функцией express
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})


app.use(routes) //регистрируем роут
app.use(express.static(path.join('./', 'public'))) // подключаем статически стили
app.use(express.static('views/images'));

app.engine('hbs', hbs.engine) // регистриуем переменую с ключом engine в express 1 параметр даем имя, 2 параметр указываем переменую с ключом engine
app.set('view engine', 'hbs') // указываем что по умолчанию будем использовать handlebars
app.set('views', 'views')

async function start (){
    try{
        // await mongoose.connect(
        //     "mongodb+srv://developer:bwe319tuu2@cluster0.lrcrd.mongodb.net/Normocard_clinic",
        // {
        //     useNewUrlParser: true,
        //     // useFindAndModify: false
        // })
        app.listen(PORT, () => {
            console.log(`The server was started on the port ${PORT}`)
        });
    }catch(error){
        console.log("Error: ", error)
    }
}

start()