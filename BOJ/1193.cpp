#include <iostream>
#include <vector>
#include <utility>

void my_solution(int n) {
    int k = 0, numerator, denominator;
    for (int i = 1; i <= n; ++i) {
        for (int j = 0; j < i; ++j) {
            if (i % 2 != 0) {
                numerator = i-j;
                denominator = j+1;
            }
            else {
                numerator = j+1;
                denominator = i-j;
            }
            k++;
            if (k == n) {
                printf("%d/%d\n", numerator, denominator);
                break;
            }
        }
        if (k ==n) {
            break;
        }
    }
}

void other_solution(int a) {
    int b = 1;
    while (a - b > 0){
        a -= b;
        b++;
    }
	if (b % 2 == 1) printf("%d/%d", b + 1 - a, a);
	else printf("%d/%d",a ,b + 1 - a);
}

int main() {
    int n;
    scanf("%d", &n);
    other_solution(n);
}