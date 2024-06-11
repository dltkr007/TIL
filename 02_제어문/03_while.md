# while 문
기본 구조 (while 얘는 구조가 JS랑 완전 똑띠한듯)
```Java
while (조건문) {
    <수행할 문장1>;
    <수행할 문장2>;
    <수행할 문장3>;
    ...
}

```

# 예시
```Java
int treeHit = 0;
while (treeHit < 10) {
    treeHit++;  // treeHit += 1 로도 표현 가능
    System.out.println("나무를  " + treeHit + "번 찍었습니다.");
    if (treeHit == 10) {
        System.out.println("나무 넘어갑니다.");
    }
}
```

# break
무한 루프와 break 개념
```Java
int coffee = 10;
int money = 300;

while (money > 0) {
    System.out.println("돈을 받았으니 커피를 줍니다.");
    coffee--;
    System.out.println("남은 커피의 양은 " + coffee + "입니다.");
    if (coffee == 0) {
        System.out.println("커피가 다 떨어졌습니다. 판매를 중지합니다.");
        break;
    }
}
```

# continue
조건문으로 돌아가게 하는 continue
```Java
int a = 0;
while (a < 10) {
    a++;
    if (a % 2 == 0) {
        continue;  // 짝수인 경우 조건문으로 돌아간다.
    }
    System.out.println(a);  // 홀수만 출력된다.
}
```