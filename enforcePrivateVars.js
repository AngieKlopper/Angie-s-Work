function createPerson(name){
    var privateProperties = {};
    var person = {
        setname: function (name){
            if (!name) throw new Error("A person must have a name");
            privateProperties.name = name;
        },
        getName: function(){
            return privateProperties.name;
        }
    }; 
    person.setname(name);
    return person.getName;
}

console.log(createPerson("Fluffy"));


//var dog = {
//  name:"fluffy",
//    size: "large",
//    lbs: 800,
//    breed: "Poodle",
//};