// ### Leet Translator

// "Leet" or 1337 is a popular alternative alphabet used by internet "hackers".

// Define a function called `leetTranslator` that take a string of normal
// characters.

// `leetTranslator` should return a new string that is the translation of the
// original string into leet.

// The leet codex is below, along with an array of english letters and an array of
// the corresponding leet characters. Use the two arrays to create a leetCodex
// object to use in making the translations.

// ```javascript
// /*
// Leet Codex:
//         A -> @
//         B -> 8
//         C -> (
//         D -> |)
//         E -> 3
//         F -> ph
//         G -> g
//         H -> #
//         I -> l
//         J -> _|
//         K -> |<
//         L -> 1
//         M -> |'|'|
//         N -> /\/
//         O -> 0
//         P -> |D
//         Q -> (,)
//         R -> |2
//         S -> 5
//         T -> +
//         U -> |_|
//         V -> |/
//         W -> |/|/'
//         X -> ><
//         Y -> j
//         Z -> 2
// */

// let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
// let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

// translate('Fullstack')    // => 'ph|_|115+@(|<'
// ```


const leetTranslator = (str) => {

  var f = '';

  for (let i = 0; i < str.length; i++){
    var ind = letters.indexOf(str.toLowerCase[i]);
    f += leetChars[ind]
  }
return f;
}


//another solution, with an obj:

const leetTranslator = (str) => {

  var dict = {};
  var final = '';

  for (let i = 0; i < letters.length; i++){
  
    var curlet = letters[i];
    var curleet = leetChars[i];

    dict[curlet] = curleet; //creates a whole dictionary with letter: 'leet' pairs
  }

    for (let i = 0; i < str.length; i++) {

    final += dict[str[i]]; //adds to a new str a values of that given key, dict['a'] => @ 

    }
  
return final
//console.log(dict)
}
