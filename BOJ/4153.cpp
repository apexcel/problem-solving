#include <cstdio>
int main() {
    long a, b, c;
    while (true) {
        scanf("%ld %ld %ld", &a, &b, &c);
        if (a == 0 && b == 0 && c == 0) {
            break;
        }
        long a2 = a*a, b2=b*b, c2=c*c;
        printf("%s\n", ((a2 + b2 == c2 || a2 + c2 == b2 || b2 + c2 == a2 ) ? "right" : "wrong"));
    }
    return 0;
}