'use server'

import { MongoClient, ServerApiVersion } from 'mongodb';
const uri:string = process.env.mongoDbUri!;

const client = new MongoClient(uri,  {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
}
);

interface Employee {
  name: string;
  surname: string;
  telephone: string;
  email: string;
  manager: string;
  status: string;
}


export default async function Submit(formData: FormData) {
    let result;
    try {
        const database = client.db("hr-db"),
            employees = database.collection<Employee>("employees");

        result = await employees.insertOne({
            name: formData.get('name')?.toString()!, // ToDo validation
            surname: formData.get('surname')?.toString()!, // ToDo validation
            telephone: formData.get('telephone')?.toString()!, // ToDo validation
            email: formData.get('email')?.toString()!, // ToDo validation
            manager: formData.get('manager')?.toString()!, // ToDo validation
            status: formData.get('status')?.toString()! // ToDo validation
        });
    } finally {
        await client.close();
    }
    return { result: result.insertedId } ;
}