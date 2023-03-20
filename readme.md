Чтобы использовать mongodb на маке нужно установить его через brew

brew tap mongodb/brew
brew install mongodb-community

После этого она установиться и нужно создать папку в которой все будет хранится 
mkdir ~/data/db

И теперь запускаем сервер
mongod --dbpath ~/data/db 
Указывая путь к папке 

Также для удобства мы используем приложение которое скачали - mondodb-compass
Там есть терминал 
show databases - посмотреть все табл 
use mongo - так можно обратится к таблице или создать новую
db.createCollection("users")- так мы создаем новую коллекцию 
show collections - так мы смотрим какие коллекции есть 
db.dropDatabase() - для удаления
db.users.insert({
  name:"Jon",
  age:25
}) - так мы добавляем пользах
db.users.find() - запрос на получение данных и он автомт присвает уник id
db.users.insertMany([
  {name:"Q", age:1},
  {name:"w", age:2},
  {name:"e", age:3},
  {name:"r", age:4}
])-так мы добавялем массив данных 
db.users.find({age:25}) - так можно искать по опред критерию
db.users.find({$or:[{age:25}, {name:"q"}]}) - так можно искать сразу по двум критериям
db.users.update({name:"Q"},
  {
    $set:{name:"QWERTY"}
  }
)-так мы меняем записи внтури
db.users.updateMany({},
  {
    $rename:{name:"fullname"}
  }
)-так мы обновим название полей
db.users.deleteOne({fullname:"w"})-так мы можем удалять польз по критерию
db.users.bulkWrite([
    {
      insertOne:{
        document:{name:'lol',age:12}
      },
      deleteOne:{
        filter:{fullname:'e'}
      }
    }
  ])-так мы можем добавлять и удалять в сразу за одно действие
  db.users.update(
    {fullname:"e"},
    {
      $set:{
        posts:[
        {title:'lol',text:'lollol'},
        {title:'lol1',text:'lollol231'},
        ]
      }
    }
  ) - так мы создали связь один ко мноким где будут 2 поста
  db.users.find({posts:{$exists:true}}) - так нам покажет всех польз в постами

чтобы запустить проект с монго то нужно зайти на их сервер и создать бесплатную таблицу 
npm i init -y
npm i mongodb компилируем файлы




