A=int(input())
if 100>= A >=90:
    print('A')
elif 89>= A >=80:
    print('B')
elif 79>= A >=70:
    print('C')
elif 69>= A >=60:
    print('D')
else:
    print('F')

# solution B short code
a = int(input())
print('A' if a >= 90 else ('B' if a >= 80 else ('C' if a >= 70 else ('D' if a >= 60 else 'F'))) )