#include <stdio.h>
#include <string.h>

int main() {
    int tc, c;
    char s[20];
    scanf("%d", &tc);
    while (tc--) {
        scanf("%d %s", &c, s);
        for (int i = 0; s[i] != '\0'; ++i) {
            for (int j = 0; j < c; ++j) {
                printf("%c", s[i]);
            }
        }
        printf("\n");
    }
}