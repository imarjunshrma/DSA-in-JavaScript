// Isomorphic Strings
// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

var isIsomorphic = function (s, t) {
    //length should be same
    if (s.length !== t.length) return false;

    let aHash = {};
    let bHash = {};

    for (let i = 0; i < s.length; i++) {
        //
        let a = s[i];
        let b = t[i];
        if (!aHash[a]) aHash[a] = b;
        if (!bHash[b]) bHash[b] = a;

        if (aHash[a] !== b || bHash[b] !== a) {
            return false;
        }
    }

    return true;
};


// console.log(isIsomorphic("foo","bar"));
// console.log(isIsomorphic("egg","add"));
// console.log(isIsomorphic("paper","title"));



//brute force 
//naive method
//abcdc
//pqrpo
var isIsomorphic = function (s, t) {

    // -> 
    for (let i = 0; i < s.length; i++) {
        //

        const a1 = s[i];
        const a2 = t[i];

        for (let j = i+1; j < s.length; j++) {
            const a3 = s[j];
            const a4 = t[j];

            if (a1 === a3 && a2 !== a4) return false;
            if (a2 === a4 && a1 !== a3) return false;
        }
    }

}
//abcdc
//pqrpo