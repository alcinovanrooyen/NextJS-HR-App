'use server';

import { MongoClient } from "mongodb";

const uri:string = process.env.mongoDbUri!;

const client = new MongoClient(uri);

interface Employee {
    _id: string;
    name: string;
    surname: string;
    telephone: string;
    email: string;
    manager: string;
    status: string;
  }


export default async function getRows():Promise<[Employee]> {
    
    const rows:[Employee] = [{
        _id: '1234',
        name: '',
        surname: '',
        telephone: '',
        email: '',
        manager: '',
        status: ''
    }];

    try {
        const database = client.db("hr-db");
        const employees = database.collection<Employee>("employees");

        const cursor = employees.find();

        await client.connect();
        for await (const doc of cursor) {
            rows.push(doc);
        }

    } finally {
        await client.close();
    }
    
    
    return new Promise(res=>res(rows));
}

