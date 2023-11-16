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
  
  async function removeContact(contactId) {
    const contacts = await listContacts();
    const index = contacts.findIndex((contact) => contact.id === contactId)
    if(index === -1) return null;
  const [removeContact] = contacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return removeContact;
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
//  async function testAddContact() {
//   const list = await addContact("Vasyl", "Vasyl@magnis.org","(000) 123-4567");
//   console.log(list);
// }
  
// testAddContact();

//mwvq9WVIkAEOIuxA9X4_F
 async function testRemoveContact() {
  const list = await removeContact("mwvq9WVIkAEOIuxA9X4_F");
  console.log(list);
}
  
testRemoveContact();