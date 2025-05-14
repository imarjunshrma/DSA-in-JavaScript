// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.


var firstUniqChar = function (s) {
    let map = {};

    for (let i = 0; i < s.length; i++) {
        let element = s[i];
        map[element] = (map[element] || 0) + 1;
    }

    for (let i = 0; i < s.length; i++) {
        let element = s[i];
        if (map[element] == 1) {
            return i;
        }
    }
    return -1;
};

console.log(firstUniqChar("aabb"));
// "leetcode"