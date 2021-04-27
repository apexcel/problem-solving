// https://programmers.co.kr/learn/courses/30/lessons/17680

const solution = (cacheSize, cities) => {
    let cache = [], execTime = 0;
    if (cacheSize === 0) return cities.length * 5;
    cities.forEach(city => {
        city = city.toLowerCase();
        const recent = cache.findIndex(e => e === city);
        if (recent !== -1) {
            let temp = cache[recent];
            cache[recent] = '0';
            cache = cache.filter(e => e !== '0');
            cache.push(temp);
            execTime += 1;
        }
        else {
            if (cache.length >= cacheSize) {
                cache.shift();
            }
            cache.push(city);
            execTime += 5;
        }
        console.log(cache)
    });
    return execTime;
};

(() => {
    // solution(3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"])
    solution(3, ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"])
})();