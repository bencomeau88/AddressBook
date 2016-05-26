var Contact = function(firstName, lastName, address, phoneNumber, eMail) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.eMail = eMail;
}

var firstName = $('input[id="first"]').val();
var lastName = $('#last').val();
var address = $('#address').val();
var phoneNumber = $('#phone').val();
var eMail = $('#eMail').val();


Contact.prototype.addToBook = function() {
    new Contact(firstName, lastName, address, phoneNumber, eMail);
}

var AddressBook = function(){
	this.contacts = [];
}
var addressBook = 
$(document).ready(function() {
	//$ sign to 'hint' you are making a selection
var $contactInfo = $('#contactInfo');
var $submit = $('#submit');
	$contactInfo.on('submit', function(){
		addressBook.push();
        console.log(name);
        console.log(eMail);
 
    })





})
