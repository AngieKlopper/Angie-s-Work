///Singleton Pattern

var Singleton = (function (){
    var instance;

    function createInstance(){
        var object = new Object("I'm an Instance");
        return object;
    }
return{
    getInstance: function(){
        if(!instance){
            instance = createInstance();
        }
    }

}
})();

function run(){
    var instance1 = Singleton.getInstance();
    var instance2 = Singleton.getInstance();

    console.log("Same Instance?" + (instance1 === instance2));

}

run();