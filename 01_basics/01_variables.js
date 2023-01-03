const accountId = 144553
let accountEmail = "nitin@google.com"
var accountPassword = "12345"
accountCity = "Indore"
let accountState

/*
prefer not to use var
because of issue in block scope and functional scope 
*/

// accountId = 2 ->not allowed will give error
accountEmail = "nc@nc.com"
accountPassword = "54321"
accountCity = "Sendhwa"

console.log(accountId)

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

//testing
//we can use semi colons in javascript its based on choice