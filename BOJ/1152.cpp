#include <cstdio>
#include <cstring>

int main() {
    char s[1000001];
    int i = 0;
    scanf("%[^\n]s", s);
    char *tok;
    tok = strtok(s, " ");
    while (tok != NULL) {
        tok = strtok(NULL, " ");
        i++;
    }
    printf("%d", i);
}