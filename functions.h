#pragma once
#include <vector>
#include <string>

std::vector<std::string> split_string(std::string& origin, char delimiter) {
    std::vector<std::string> splited;
    int prev = 0, curr = origin.find(delimiter);

    while (curr != std::string::npos) {
        std::string substring = origin.substr(prev, curr - prev);
        splited.push_back(substring);
        prev = curr + 1;
        curr = origin.find(',', prev);
    }
    splited.push_back(origin.substr(prev, curr - prev));
    return splited;
}