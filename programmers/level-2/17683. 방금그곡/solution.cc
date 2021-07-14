#include <string>
#include <vector>
#include <iostream>

using namespace std;

vector<string> split_string(string& origin, char delimiter) {
    vector<string> splited;
    int prev = 0, curr = origin.find(delimiter);

    while (curr != string::npos) {
        string substring = origin.substr(prev, curr - prev);
        splited.push_back(substring);
        prev = curr + 1;
        curr = origin.find(',', prev);
    }
    splited.push_back(origin.substr(prev, curr - prev));
    return splited;
}

int calc_play_time(string& begin, string& end) {
    vector<string> vb = split_string(begin, ':');
    vector<string> ve = split_string(end, ':');
    return (stoi(ve[0]) * 60 + stoi(ve[1])) - (stoi(vb[0]) * 60 + stoi(vb[1]));
}

string replace_sharp(string& note) {
    string replaced = "";
    for (int i = 1; i <= note.size(); i++) {
        if (note[i] == '#') {
            replaced += tolower(note[i-1]);
            i++;
        }
        else {
            replaced += note[i-1];
        }
    }
    return replaced;
}

string solution(string m, vector<string> musicinfos) {
    string origin = replace_sharp(m);
    string res_title = "(None)";
    int res_size = 0;

    for (auto it = musicinfos.begin(); it != musicinfos.end(); it++) {
        vector<string> vec = split_string(*it, ',');
        string title = vec[2];
        string replaced = replace_sharp(vec[3]);
        string target = replaced;
        int playtime = calc_play_time(vec[0], vec[1]);

        if (playtime > replaced.length()) {
            for (int i = 0; i < playtime - replaced.length(); i++) {
                target += target[i];
            }
        }
        else {
            target = replaced.substr(0, playtime);
        }

        if (target.find(origin) != string::npos) {
            if (res_size < target.length()) {
                res_title = title;
                res_size = target.length();
            }
        }
    }
    return res_title;
}

int main() {
    cout << solution("ABCDEFG", {"12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,AB#CDE#F#"});
    cout << solution("ABC", {"12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"});
    return 0;
}