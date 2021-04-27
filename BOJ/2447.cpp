#include <cstdio>
void printStarts(int i, int j, int n) {
    if ((i/n) % 3 == 1 && (j/n) % 3 == 1) {
        printf(" ");
    }
    else {
        if (n / 3 == 0) printf("*");
        else printStarts(i, j, n /3);
    }
    
}
int main() {
    int tc; 
    scanf("%d", &tc);
        for (int i = 0; i < tc; i++) {
            for (int j = 0; j < tc; j++) {
                printStarts(i, j, tc);
            }
            printf("\n");
        }
    return 0;
}