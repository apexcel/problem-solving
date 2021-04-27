#include <cstdio>
#include <algorithm>
#include <cmath>
int average(int arr[], int len) {
    double sum = 0, avg;
    for (int i = 0; i < len; i++) {
        sum += arr[i];
    }
    return round(sum / len);
}

int median(int arr[], int len) {
    return arr[(len / 2)];
}

int mode(int arr[], int len) {
    int size = 8001, cnt[size] = {0,};

    for (int i = 0; i < len; i++) {
        int idx = abs(arr[i]);
        if (arr[i] <= 0) cnt[idx]++;
        if (arr[i] > 0) cnt[4000 + idx]++;
    }

    int max_cnt = *std::max_element(cnt, cnt + size);
    int flag = 0, mode_index = 0;

    for (int i = -4000; i < 4001; i++) {
        int temp = i <= 0 ? abs(i) : i + 4000;
        if (max_cnt == cnt[temp]) {
            mode_index = i;
            flag++;
        }
        if (flag == 2) {
            break;
        }
    }

    return mode_index;
}

int range(int arr[], int len) {
    return (*std::max_element(arr, arr + len)) - (*std::min_element(arr, arr + len));
}

int main() {
    int tc, n[500001] = {0, };
    scanf("%d", &tc);

    int len = tc, i = 0;

    while (tc--) {
        scanf("%d", &n[i++]);
    }
    
    std::sort(n, n + len);
    printf("%d\n%d\n%d\n%d", average(n, len), median(n, len), mode(n, len), range(n, len));
    return 0;
}