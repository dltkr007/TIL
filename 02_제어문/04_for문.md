# for 문 기본 구조
얘도 구조는 JS랑 같음
```Java
for (초기값; 조건문; 증가치) {
    ...
}

```
# JS와 비교 예시
자바
```Java
String[] numbers = {"one", "two", "three"};
for (int i=0; i<numbers.length; i++) {
    System.out.println(numbers[i]);
}

```
JS
```javascript
let numbers = ["one", "two", "three"];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

```

# for문과 if문 예시
```Java
int[] marks = {90, 25, 67, 45, 80};
for (int i=0; i<marks.length; i++) {
    if (marks[i] >= 60) {
        System.out.println((i+1)+"번 학생은 합격입니다.");
    } else {
        System.out.println((i+1)+"번 학생은 불합격입니다.");
    }
}

```

# for문과 continue
우리가 아는 그 continue랑 같음   
break도 똑같이 사용
```Java
int[] marks = {90, 25, 67, 45, 80};
for (int i=0; i<marks.length; i++) {
    if (marks[i] < 60) {
        continue;  // 조건문으로 돌아간다.
    }
    System.out.println((i+1)+"번 학생 축하합니다. 합격입니다.");
}

```

# 이중 for문
```Java
for(int i=2; i<10; i++) {
    for(int j=1; j<10; j++) {
        System.out.print(i*j+" ");
    }
    System.out.println("");  // 줄을 바꾸어 출력하는 역할을 한다.
}

```
print에 + " " 붙여서 한 칸씩 띄우고   
한 번 돌면 println으로 줄바꿈을 한 것   
따라서 출력은 다음과 같음
```Java
2 4 6 8 10 12 14 16 18 
3 6 9 12 15 18 21 24 27 
4 8 12 16 20 24 28 32 36 
5 10 15 20 25 30 35 40 45 
6 12 18 24 30 36 42 48 54 
7 14 21 28 35 42 49 56 63 
8 16 24 32 40 48 56 64 72 
9 18 27 36 45 54 63 72 81

```