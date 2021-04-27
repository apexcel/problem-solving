a, b=map(int, input().split())
t = (60 * a) + b - 45
h = int(t // 60)
m = int(t % 60)
if h > 23:
    h = 0
elif h < 0:
    h = 23
if m < 0:
    m = 60 + m
if m > 59:
    h = h+ 1
print(h,m)