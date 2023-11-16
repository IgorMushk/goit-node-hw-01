const fs = require("fs/promises");
const path = require("path");
const {nanoid} = require("nanoid");

const contactsPath = path.join(__dirname,"/db/contacts.json");
console.log(contactsPath);

async function listContacts() {
  const contacts = await fs.readFile(contactsPath);
  return JSON.parse(contacts);
  }
  
  async function getContactById(contactId) {
    const contacts = await listContacts();
    const contact = contacts.find((contact) => contact.id === contactId);
    return contact || null;
  }
  
  function removeContact(contactId) {
    // ...твой код. Возвращает объект удаленного контакта. Возвращает null,
    // если объект с таким id не найден.
  }
  
  async function addContact(name, email, phone) {
    const contacts = await listContacts();
    const newContact = {
     id:  nanoid(),
     name,
     email,
     phone
    };
    contacts.push(newContact);
    await fs.writeFile(contactsPath,JSON.stringify(contacts,null,2));
    return newContact;
  };

// test
// async function testListContacts() {
//   const list = await listContacts();
//   console.log(list);
// }
  
// testListContacts();

//  async function testGetContactById() {
//   const list = await getContactById('05olLMgyVQdWRwgKfg5J6');
//   console.log(list);
// }
  
// testGetContactById();

//{ "name": "Vasyl", "email": "Vasyl@magnis.org","phone": "(000) 123-4567"}
 async function testAddContact() {
  const list = await addContact("Vasyl", "Vasyl@magnis.org","(000) 123-4567");
  console.log(list);
}
  
testAddContact();
