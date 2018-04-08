import rethinkdb from 'rethinkdb'
import Pool from 'rethinkdb-pool'

const config = {
    host: "localhost",
    port: 28015,
    db: 'games'
}

export const pool = Pool(rethinkdb, config)
export const r = rethinkdb





