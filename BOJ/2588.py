# solution A
# a = int(input())
# b = int(input())
# print(a, b)
# val1 = a * (b % 10)
# val2 = a * ((b // 10) % 10)
# val3 = a * ((b // 100) % 10)
# print(val1)
# print(val2)
# print(val3)
# print(a * b)

# solution B
a = int(input())
b = input()
for i in reversed(range(len(b))):
    print(int(b[i]) * a)
print(a * int(b))

# solution C
A=int(input())
B=int(input())
print(A*(B%10), A*((B%100)//10), A*(B//100), A*B, sep='\n')
