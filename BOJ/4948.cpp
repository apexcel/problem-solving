#include <stdio.h>
#include <vector>
#include <algorithm>

int main() {
    bool bools[246913] = {1, 1};
    std::vector<int> vec;

    for (int i = 2; i <= 246912; i += 1) {
        if (!bools[i]) {
            vec.push_back(i);
            for (long long j = (long long)i*i; j <= 246912; j+=i) {
                bools[j] = true;
            }
        }
    }

    while (true) {
        int n;
        scanf("%d", &n);
        if (n == 0) break;
        printf("%ld\n",std::lower_bound(vec.begin(),vec.end(),2*n+1)-std::upper_bound(vec.begin(),vec.end(),n));
    }
    return 0;
}