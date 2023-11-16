//const contacts = require("./contacts");
const { 
    listContacts, 
    getContactById, 
    removeContact, 
    addContact } = require("./contacts");

    const { Command } = require('commander');
    const program = new Command();
    program
      .option('-a, --action <type>', 'choose action')
      .option('-i, --id <type>', 'user id')
      .option('-n, --name <type>', 'user name')
      .option('-e, --email <type>', 'user email')
      .option('-p, --phone <type>', 'user phone');
    
    program.parse(process.argv);
    
    const argv = program.opts();
    
    // TODO: рефакторить
    function invokeAction({ action, id, name, email, phone }) {
      switch (action) {
        case 'list':
          // ...
          break;
    
        case 'get':
          // ... id
          break;
    
        case 'add':
          // ... name email phone
          break;
    
        case 'remove':
          // ... id
          break;
    
        default:
          console.warn('\x1B[31m Unknown action type!');
      }
    }
    
    invokeAction(argv);

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
//  async function testRemoveContact() {
//   const list = await removeContact("JsGjsm4ejx55R-Ne5ZVip");
//   console.log(list);
// }
  
// testRemoveContact();