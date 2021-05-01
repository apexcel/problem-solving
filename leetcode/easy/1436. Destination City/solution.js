// https://leetcode.com/problems/destination-city/
/**
 * @param {string[][]} paths
 * @return {string}
 */
 function destCity(paths) {
    let next = paths[0][1];
    while(next) {
        const exist = paths.find(path => path[0] === next);
        if (exist) next = exist[1];
        else return next;
    }
};

console.log(destCity([["B","C"],["D","B"],["C","A"]]))
console.log(destCity([["A","Z"]]))
console.log(destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]))