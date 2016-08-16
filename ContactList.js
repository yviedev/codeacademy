var friends = {
    bill: 
    {
        firstName: "Bill",
        lastName: "Gates",
        number: "123-456-7890",
        address: ["Redmond", "Washington"]
    },
    steve:
    {
        firstName: "Steve",
        lastName: "Jobs",
        number: "123-456-7890",
        address: ["Cupertino", "California"]
    }
};

//print out all the entries we have in our friends contact list
var list = function (obj)
{
    // execute for/in loop
    for (var key in obj)
    {
        console.log(key);
    }
}
list(friends);

//search for (name) in list and if found print out contact information
var search = function (name){
    for (var key in friends){
        if (friends[key].firstName === name){
            console.log(friends[key]);
            return friends[name.toLowerCase()];
        }
    }
};
search("Bill");

