#include <stdio.h>
#include <stdlib.h>

int main() {
    int a, s, b = 0;
    scanf("%d\n", &a);
    while((s = getchar()) != '\n') {
        b += s - '0';
    }
    printf("%d", b);
}