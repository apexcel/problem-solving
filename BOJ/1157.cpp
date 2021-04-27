#include <stdio.h>
#include <string>
#include <algorithm>
#include <array>

int main() {
    char s[1000000], c;
    int a[26] = {0, }, m = 0;
    scanf("%s", s);
    for (int i = 0; s[i] != '\0'; ++i) {
        int el = (int)tolower(s[i]) - 97;
        a[el]++;
    }

    for (int j = 0; j < 26; ++j) {
        if (a[j] > m) {
            m = a[j];
            c = (char)j + 65;
        }
        else if (a[j] == m) {
            c = '?';
        }
    }
    printf("%c", c);
}