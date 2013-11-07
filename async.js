var read = require('read');

var addresses = [];

var Contact = function(name, address, phone) {
  this.name    = '';
  this.address = '';
  this.phone   = '';
};

Contact.prototype.toString = function() {
  return "Name: " + this.name + " Phone: " + this.phone + " Address: " + this.address;
};

var contact = new Contact();

read({ prompt: '> '}, getName);

function getName(err, result, isDefault) {
  console.log("Please enter your name: ");
  read({prompt: '> '}, getPhone);
}

function getPhone(err, result, isDefault) {
  contact.name = result;
  console.log("Please enter your phone number: ");
  read({prompt: '> '}, getAddress);
}

function getAddress(err, result, isdefault) {
  contact.phone = result;
  console.log("Please enter your address: ");
  read({prompt: '> '}, function(err, result) {
    contact.address = result;
    console.log(contact.toString());
    addresses.push(contact);
  });
}
