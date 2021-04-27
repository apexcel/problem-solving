#include <stdio.h>
#include <iostream>

int main() {
    char s[100];
    int a[26];
    std::fill_n(a, 26, -1);
    scanf("%s", s);
    for (int i = 0; s[i] != '\0'; ++i) {
        if (s[i] - 97 >= 0 && a[s[i] - 97] == -1) {
            a[s[i] - 97] = i;
        }
    }
    for (int j = 0; j < 26; ++j) {
        printf("%d ", a[j]);
    }
}