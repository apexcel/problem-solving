#include <cstdio>

bool in_row[3] = {false, false, false};
int idx = 0;

bool doom_number(int doom) {
    int qout = doom / 10, rem = doom % 10;
    in_row[idx % 3] = (rem == 6 ? true : false);
    // printf("in_row[%d] idx: %d qout: %d rem: %d\n", idx%3, idx, qout, rem);
    // printf("in_row[0]: %d in_row[1]: %d in_row[2]: %d\n", in_row[0], in_row[1], in_row[2]);
    idx++;

    if (idx > 2 && in_row[0] && in_row[1] && in_row[2] == true) {
        idx = 0;
        return true;
    }
    if (qout > 0) {
        return doom_number(qout);
    }
    idx = 0;
    return false;
}

int main() {
    int n, dooms[10001], doom = 666, i = 0;
    for (int j = 666; i <= 10001; j++) {
        if (doom_number(j)) {
            dooms[i++] = j;
        }
    }
    scanf("%d", &n);
    printf("%d", dooms[n-1]);
    return 0;
}