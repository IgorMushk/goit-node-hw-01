//const contacts = require("./contacts");
const { 
    listContacts, 
    getContactById, 
    removeContact, 
    addContact } = require("./contacts");

// test
// async function testListContacts() {
//   const list = await listContacts();
//   console.log(list);
// }
  
// testListContacts();

//   async function testGetContactById() {
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

//JsGjsm4ejx55R-Ne5ZVip
 async function testRemoveContact() {
  const list = await removeContact("JsGjsm4ejx55R-Ne5ZVip");
  console.log(list);
}
  
testRemoveContact();