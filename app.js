console.log('Hello World');

var friends = ["Prep","Kiddo","Sammie","Kaden","Caleb"];

//Test
var lyrics = ("song lyrics");

// (var i) initilization statement - initilizes variable to maintain loop
// conditional statement on whether loop should continue to run
// What we should do after loop has run/ increment variable
// put in curly braces which is block of code that will run
for(var f = 0; f < friends.length; f++ ){
    console.log(friends[f]);
    for(var i = 99; i >= 1; i-- ){
        console.log(i + ' song lyrics');
    }
}

for(var i = 99; i >= 1; i-- ){
    console.log(i);
}

//Test
for(var s = 0; s < lyrics.length; s++ ){
    console.log(lyrics[s]);
}