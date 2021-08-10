#include <string>
#include <vector>

using namespace std;

string solution(string phone_number) {
    string answer = "";
    for (int i = phone_number.size() - 4; i > 0; --i) {
        answer += '*';
    }
    answer += phone_number.substr(phone_number.size() - 4, 4);
    return answer;
}