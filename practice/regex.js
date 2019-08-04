var regEx, str;

// Case sensive
str = "Hello, World!";
regEx= /Hello/;
// true
console.log(regEx.test(str));

// Ignore Case
str = "freeCodeCamp";
regEx= /FREECodeCAMP/i;
// true
console.log(regEx.test(str));

// Multiple search
str = "James has a pet cat.";
regEx = /dog|cat|bird|fish/;
// true
console.log(regEx.test(str));

// Extract Matches
str = "Extract the word 'coding' from this string.";
regEx = /coding/;
// ["coding"]
console.log(str.match(regEx));

// Find More Than the First Match
str = "Twinkle, Twinkle, little star";
regEx = /Twinkle/g;
// ["Twinkle" ,"Twinkle"]
console.log(str.match(regEx));

// Match Anything with Wildcard
str = "Let's have fun with regular expressions!";
regEx = /.un/;
// ["fun"]
console.log(str.match(regEx));

// Match Single Character with Multiple Possibilities
str = "big bag bug bog beg";
regEx = /b[ao]g/g;
// ["bag","bog"]
console.log(str.match(regEx));

str = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
regEx = /[aeiou]/gi;
// ["e","a","e","o","u","i","e","a","o","e","o","e","I","a","e","o","o","e","i","o","e","o","i","e","i"]
console.log(str.match(regEx));

// Match Letters of the Alphabet
str = "The quick brown fox jumps over the lazy dog 1@#.";
regEx = /[a-z]/gi;
// все буквы
console.log(str.match(regEx));

// Match Numbers and Letters of the Alphabet
str = "Blueberry 3.141592653s are delicious.";
regEx = /[a-c1-3]/gi;
// ["B","b","3","1","1","2","3","a","c"]
console.log(str.match(regEx));

// Match Single Characters Not Specified
str = "3 blind mice @.";
regEx = /[^a-z]/gi;
// ["3"," "," "," ","@","."]
console.log(str.match(regEx));

// Match Characters that Occur One or More Times
str = "color colour colouur";
regEx = /colou+r/g;
// ["colour","colouur"]
console.log(str.match(regEx));

// Match Characters that Occur Zero or More Times
str = "color colour colouur";
regEx = /colou*r/g;
// ["color","colour","colouur"]
console.log(str.match(regEx));

// Match Beginning/Ending String Patterns
str = "Hi colour end";
regEx = /^Hi|end$/g;
// ["Hi","end"]
console.log(str.match(regEx));

// Shorthand Character Classes

// Match All Letters and Numbers
// \w = [A-Za-z0-9_], \W = [^A-Za-z0-9_]
str = "Blueberry 3.141592653s _%";
// [все буквы, цифры и _]
console.log(str.match(/\w/g));
// [" ", ".", " ", "%"]
console.log(str.match(/\W/g));

// \d = [0-9], \D = [^0-9]

// Match Whitespace
str = "Let's have fun";
// [" " ," "]
console.log(str.match(/\s/g));
// все кроме пробелов
console.log(str.match(/\S/g));

// Specify Upper and Lower Number of Matches
str = "Wooow woow wow";
// ["Wooow","woow"]
console.log(str.match(/wo{2,3}w/gi));
// ["Wooow","woow", "wow"]
console.log(str.match(/wo{1,}w/gi));
// ["Wooow"]
console.log(str.match(/wo{3}w/gi));