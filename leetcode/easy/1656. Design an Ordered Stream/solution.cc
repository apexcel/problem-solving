#include <iostream>
#include <vector>
#include <string>

using namespace std;

class OrderedStream {
public:
    vector<string> stream;
    int pos = 0;
    OrderedStream(int n) {
        stream.resize(n);
    }
    
    vector<string> insert(int idKey, string value) {
        vector<string> result;
        stream[idKey - 1] = value;
        while (pos < stream.size() && stream[pos] != "") {
            result.push_back(stream[pos]);
            pos += 1;
        }
        return result;
    }
};

int main() {
    OrderedStream* OS = new OrderedStream(5);
    OS->insert(3, "ccc");
    OS->insert(1, "aaa");
    OS->insert(2, "bbb");
    OS->insert(5, "eee");
    OS->insert(4, "ddd");
    return 0;
}

/**
 * Your OrderedStream object will be instantiated and called as such:
 * OrderedStream* obj = new OrderedStream(n);
 * vector<string> param_1 = obj->insert(idKey,value);
 */