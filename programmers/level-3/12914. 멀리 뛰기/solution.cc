using namespace std;

long long solution(int n) {
    long long prev = 1, curr = 1, temp;

    for (int i = 2; i <= n; i += 1) {
        temp = curr;
        curr = (curr + prev) % 1234567;
        prev = temp;
    }

    return curr;
}