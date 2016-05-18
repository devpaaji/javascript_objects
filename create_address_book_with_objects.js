var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++) {
        printPerson(contacts[i]);
    }
}

/*Create a search function
then call it passing "Jones"*/
function search(lastName) {
    var n =  contacts.length;
    for(var i = 0; i < n; i++) {
     if(contacts[i].lastName === lastName) {
            printPerson(contacts[i]); 
    }
}

}
//search("Jones");

function add(firstName, lastName, phoneNumber, email) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.phoneNumber = phoneNumber,
    this.email = email
};

contacts[2] = new add("Rahul", "Gulati", "(560)-333-4444", "abc@gmail.com");

list();
