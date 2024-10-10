import {connect, ConnectOptions} from 'mongoose';

export const dbConnect = () => {
    // MONGO_URI has the database name as "db"
    connect(process.env.MONGO_URI!, { } as ConnectOptions)
        .then(() => console.log("connect successfully"))
        .catch(error => console.log(error)
    )
}