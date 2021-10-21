---
문제번호: 1002
문제이름: '터렛'
주소: 'https://www.acmicpc.net/problem/1002'
분류: ['수학', '기하학']
---

# 풀이

**두 점 사이의 거리**

```js
Math.sqrt(Math.pow(x1 - x2, 2) + (y1 - y2, 2));
```

**두 원의 위치 관계**

<table style="BORDER-BOTTOM: medium none; BORDER-LEFT: medium none; BORDER-COLLAPSE: collapse; BORDER-TOP: medium none; BORDER-RIGHT: medium none" class="point" border="0" cellspacing="0" cellpadding="0" width="100%">
<caption>두 원의 위치관계</caption>
<tbody>
<tr>
<td style="BORDER-BOTTOM: #ccc 1px solid; BORDER-LEFT: #ccc 1px solid; WIDTH: 87px; HEIGHT: 36px; BORDER-TOP: #ccc 1px solid; BORDER-RIGHT: #ccc 1px solid" rowspan="2">위치관계</td>
<td style="BORDER-BOTTOM: #ccc 1px solid; BORDER-TOP: #ccc 1px solid; BORDER-RIGHT: #ccc 1px solid" rowspan="2">두 점에서 만난다</td>
<td style="BORDER-BOTTOM: #ccc 1px solid; BORDER-TOP: #ccc 1px solid; BORDER-RIGHT: #ccc 1px solid" colspan="2">한 점에서 만난다</td>
<td style="BORDER-BOTTOM: #ccc 1px solid; BORDER-TOP: #ccc 1px solid; BORDER-RIGHT: #ccc 1px solid" colspan="3">만나지 않는다</td></tr>
<tr>
<td style="BORDER-BOTTOM: #ccc 1px solid; BORDER-RIGHT: #ccc 1px solid">외접</td>
<td style="BORDER-BOTTOM: #ccc 1px solid; BORDER-RIGHT: #ccc 1px solid">내접</td>
<td style="BORDER-BOTTOM: #ccc 1px solid; BORDER-RIGHT: #ccc 1px solid">외부에 있다</td>
<td style="BORDER-BOTTOM: #ccc 1px solid; BORDER-RIGHT: #ccc 1px solid">내부에 있다</td>
<td style="BORDER-BOTTOM: #ccc 1px solid; BORDER-RIGHT: #ccc 1px solid">동심원</td></tr>
<tr>
<td style="BORDER-BOTTOM: #ccc 1px solid; BORDER-LEFT: #ccc 1px solid; BORDER-RIGHT: #ccc 1px solid"></td>
<td style="BORDER-BOTTOM: #ccc 1px solid; BORDER-RIGHT: #ccc 1px solid">r'-r&lt;d&lt;r'+r</td>
<td style="BORDER-BOTTOM: #ccc 1px solid; BORDER-RIGHT: #ccc 1px solid">r+r'=d</td>
<td style="BORDER-BOTTOM: #ccc 1px solid; BORDER-RIGHT: #ccc 1px solid">r'-r=d</td>
<td style="BORDER-BOTTOM: #ccc 1px solid; BORDER-RIGHT: #ccc 1px solid">r+r'&lt;d</td>
<td style="BORDER-BOTTOM: #ccc 1px solid; BORDER-RIGHT: #ccc 1px solid">d&lt;r'-r</td>
<td style="BORDER-BOTTOM: #ccc 1px solid; BORDER-RIGHT: #ccc 1px solid">d=0</td></tr>
<tr><td style="BORDER-BOTTOM: #ccc 1px solid; BORDER-LEFT: #ccc 1px solid; BORDER-RIGHT: #ccc 1px solid"></td>
<td style="BORDER-BOTTOM: #ccc 1px solid; BORDER-RIGHT: #ccc 1px solid">차 &lt; d &lt; 합</td>
<td style="BORDER-BOTTOM: #ccc 1px solid; BORDER-RIGHT: #ccc 1px solid">합 = d</td>
<td style="BORDER-BOTTOM: #ccc 1px solid; BORDER-RIGHT: #ccc 1px solid">차 = d</td>
<td style="BORDER-BOTTOM: #ccc 1px solid; BORDER-RIGHT: #ccc 1px solid">합 &lt;&nbsp;d</td>
<td style="BORDER-BOTTOM: #ccc 1px solid; BORDER-RIGHT: #ccc 1px solid">d &lt; 차</td>
<td style="BORDER-BOTTOM: #ccc 1px solid; BORDER-RIGHT: #ccc 1px solid">d = 0</td></tr></tbody></table>

---

1. 두 점 사이의 거리(d)를 구한다.
2. 두 원의 반지름(r, r')와 d를 비교하여 계산한다.
3. `Math.sqrt()` 수행 시 실수로 나오므로 이를 이용하지 않고 제곱된 수끼리 비교해야한다.