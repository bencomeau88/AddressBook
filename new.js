//all objects begin with capital letters
//$ sign to 'hint' you are targeting a JQuery selector

//constructor funciton to create an object called Contact
var Contact = function(firstName, lastName, address, phoneNumber, eMail) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.eMail = eMail;
}

//show this.firstName as an anchor tag...this anchor tag is supposed to display info when clicked(see showInfo();)
Contact.prototype.display = function() {
    var contactElement = $('<a class="contact" id="contact" href="#">'+this.firstName+'</a>');
    //use eMail to uniquely identify each person?...better way? EMAIL IS NOT A VALID ID 
    var $section = $('<section id="person'+this.eMail+'">'+'</section>')
    //should I make info a array?...how?
    $section.append('<p>'+this.firstName+' '+this.lastName+'</p>' + '<p>'+this.address+'</p>'+'<p>'+this.phoneNumber+'</p>'+'<p>'+this.eMail+'</p>');
    $section.hide();
    contactElement.show();
    var elementSection = [contactElement, $section];
    return elementSection;
}
//shows above "info" when clicked, should not be a prototype?
Contact.prototype.showInfo = function(){
        var $contactElement = $('.contact');
        var $uniqueId = $('#person'+this.eMail);
        $contactElement.on('click', function(e){
            e.preventDefault;
            //$('#person') is just another name for the info from Contact.display();
            $uniqueId.show();
            // return uniqueId;
        })
    }

//array to load new Contact() into
var AddressBook = function(){
    this.contacts = [];
}

//function to reset all the form entered values
var clear = function(){
    $('#first').val('');
    $('#last').val('');
    $('#address').val('');
    $('#phone').val('');
    $('#eMail').val('');
}

//push into the AddressBook function/array and append the entered (contact) into array
AddressBook.prototype.add = function(contact){
    this.contacts.push(contact);
    console.log(contact)
  $('#contacts').append(contact.display());
}

//defines variable that is a new AddressBook object
var addressBook = new AddressBook();

//main code
$(document).ready(function() {
//variables
  var $contactInfo = $('#contactInfo');
  var $submit = $('#submit');
//on form 'submit' store values using above functions()
    $contactInfo.on('submit', function(e){
    e.preventDefault();
    var firstName = $('#first').val();
    var lastName = $('#last').val();
    var address = $('#address').val();
    var phoneNumber = $('#phone').val();
    var eMail = $('#eMail').val();
    var contact = new Contact(firstName, lastName, address, phoneNumber, eMail)
    addressBook.add(contact);
    contact.showInfo();
    clear();

  })
    

})
//end of code