// Indexed Database API is a JavaScript application programming interface provided by web browsers for managing a NoSQL database of JSON objects
// Import the 'idb' package to use with IndexedDB.
import { openDB } from 'idb';

// Create a function that can be used to start up the database.
const initdb = async () =>
// Create a database named 'jate' and we will use version 1.
  openDB('jate', 1, {
    // Sets the database schema if it isn't already defined.
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      // Create an object store for our data inside of the 'jate'.
      // We create a key named 'id' which will automatically be incremented for us.
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
// // Export a function we will use to PUT to the database.
export const putDb = async (content) => {
  // console.error('putDb not implemented');

  console.log('PUT request to update content: ', content);

  // Create a connection to the database database and version we want to use.
  const jateDb = await openDB('jate', 1);

  // Create a new transaction and specify the database and data privileges.
  const tx = jateDb.transaction('jate', 'readwrite');

  // Open up the desired object store.
  const store = tx.objectStore('jate');

  // Use the .put() method to update data in the database.
  const request = store.put({ jate: content });

  // Get confirmation of the request.
  const result = await request;
  console.log('🚀 - data saved to the database', result);
};


// TODO: Add logic for a method that gets all the content from the database
// /Export a function we will use to GET all from the database.
export const getDb = async () => {
  // console.error('getDb not implemented');

  console.log('GET request to get all content');

  // Create a connection to the database database and version we want to use.
  const jateDb = await openDB('jate', 1);

  // Create a new transaction and specify the database and data privileges.
  const tx = jateDb.transaction('jate', 'readonly');

  // Open up the desired object store.
  const store = tx.objectStore('jate');

  // Use the .getAll() method to get all data in the database.
  const request = store.getAll();

  // Get confirmation of the request.
  const result = await request;
  console.log('Get request confirmation - result: ', result);
  // return result;
}

initdb();
