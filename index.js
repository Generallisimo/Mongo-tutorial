const {MongoClient} = require("mongodb")

// создаем доступ к базе данны
const client = new MongoClient('mongodb+srv://kingfsocietyall:-2gedpu-wYpjyw@cluster0.oqb0tgq.mongodb.net/test')
// создадим фун которая будет запускать приложение и конетится к бд
const start = async()=>{
    try{
        // так как асинхрон так мы подсоед
        await client.connect()
        await client.db().collection('users')//создаем колекцию
        const users = client.db().collection('users')
        // теперь можно добавлять удалять итд
        await users.insertOne({name:"Jon", age:125})
        const user = await users.findOne({name:"Jon"})
        console.log(user)
    }catch(e){
        // вылавливаем ошибки
        console.log(e)
    }
}
start()