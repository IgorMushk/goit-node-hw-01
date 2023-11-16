const { CONNREFUSED } = require("dns");
const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname,"/db/contacts.json");
console.log(contactsPath);

async function listContacts() {
  const contacts = await fs.readFile(contactsPath);
  return JSON.parse(contacts);
  }
  
  function getContactById(contactId) {
    // ...твой код. Возвращает объект контакта с таким id. Возвращает null, если объект с таким id не найден.
  }
  
  function removeContact(contactId) {
    // ...твой код. Возвращает объект удаленного контакта. Возвращает null, если объект с таким id не найден.
  }
  
  function addContact(name, email, phone) {
    // ...твой код. Возвращает объект добавленного контакта. 
  };

// test
async function testListContacts() {
  const list = await listContacts();
  console.log(list);
}
  
testListContacts();