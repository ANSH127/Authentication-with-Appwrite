import { Client, Account} from "appwrite";

const client = new Client();

const account = new Account(client);

client
    .setEndpoint('http://localhost/v1') // Your API Endpoint
    .setProject('641e8e37491aeae91e5f') // Your project ID
;

export const myaccount=account;