import { pool, r } from './rethinkdb.js'


let query = r.tableCreate('games')

pool.run(query, function (error, games) {
    console.log('created table : games')
})

query = r.table('games').insert(
    [
        { 
            name: 'Rachet and Clank',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZBj4cIRvFXCaItpRaYEPINP57Nkf87a1W3OBiU4cUBsNuOj9k',
            platform : 'ps2'
        },
        {
            name: 'Dragon Ball Z Budokai Tenkaichi 3',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJCQj2OUH0zhWYZ9fBSPYbOOX5-LHX3OE-KcopptlHNMzkY5G2',
            platform : 'ps2'
        },
        {
            name: 'Naruto Ultimate Ninja Storm Revolution ',
            image: 'https://oceanofgames.cc/wp-content/uploads/2014/09/Naruto-Revoulation-PC-Game-Download-830x467.jpg',
            platform : 'xbox 360'
        }
    ]
)

pool.run(query, function (error, games) {
    console.log('Inserted games : ', games)
})


query = r.table('games').count()

pool.run(query, function (error, games) {
    console.log('Games : ', games)
})

query = r.table('games').filter(r.row('platform').eq('ps2'))

pool.run(query, function (error, games) {
    console.log('Games of ps2 : ', games)
})