#include <stdio.h>
int main() {
    int tc;
    char str[81];
    scanf("%d", &tc);
    while (tc > 0) {
        int sum = 0, cnt = 0;
        scanf("%s", str);

        for (int i = 0; str[i]; i++) {
            str[i] == 'O' ? cnt++ : cnt = 0;
            sum += cnt;
        }
        tc--;
    printf("%d\n", sum);
    }
}