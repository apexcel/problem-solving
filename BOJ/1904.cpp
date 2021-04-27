#include <iostream>
int main() {
    int n, cache[3];
    std::cin >> n;
    cache[0] = 1, cache[1] = 1;
    for (int i = 2; i <= n; i++) {
        cache[2] = cache[0] + cache[1];
        if (cache[2] >= 15746) cache[2] -= 15746;
        cache[0] = cache[1];
        cache[1] = cache[2];
    }
    std::cout << cache[1];
}

/*
배열 크기 3만큼만 선언하고 초기값 [1, 1, 2]로 선언 후
반복문 돌면서 피보나치를 구함. 만약 15746보다 크면 그 만큼 뺀 값, 즉 나머지를 저장한다.
현재 값은 캐시1에 저장되 있으므로 출력은 캐시1로 하면됨.
*/