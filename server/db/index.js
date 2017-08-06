import seed from '../models/seed.js';
import _ from 'lodash'
import low from 'lowdb'
import fileAsync from 'lowdb/lib/storages/file-async'
import Cryptr from 'cryptr'
const cryptr = new Cryptr(`${process.env.SECRET}`)

export const initDb = function(db) {
  db.defaults(seed).write();
};

const db = low('./server/db/db.json');
export { db };

// export const db = low('.index.json', {
//   format: {
//     deserialize: (str) => {
//       try {
//         const decrypted = cryptr.decrypt(str)
//         const obj = JSON.parse(decrypted)
//         return obj;
//       } catch (e) {
//         return JSON.parse(str);
//       }
//     },
//     serialize: (obj) => {
//       const str = JSON.stringify(obj)
//       const encrypted = cryptr.encrypt(str)
//       return encrypted
//     }
//   },
// });


