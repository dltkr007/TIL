# boolean
참(true) 또는 거짓(false)의 값을 갖는 자료형을 boolean 자료형이라고 함   
```Java
boolean isSuccess = true;
boolean isTest = false;
```

# boolean 연산
```Java
2 > 1 // 참
1 == 2 // 거짓
3 % 2 == 1 // 참
"3".equals("2") // 거짓
```
'=='와 '.equals()'는 서로 다른 용도로 사용됨   
- '==' 연산자   
  - 기본 데이터 타입에서는 값의 동일성을 비교   
  ```Java
  int a = 3;
  int b = 3;
  System.out.println(a == b); // 참
  ```
  - 객체 참조 타입에서는 두 객체의 참조(메모리 주소)가 동일한지를 비교   
  ```Java
  String s1 = new String("hello");
  String s2 = new String("hello");
  System.out.println(s1 == s2); // 거짓(서로 다른 객체이므로)
  ```
- '.equals()' 메서드
  - 객체의 내용이 동일한지를 비교(메모리 주소와 상관 X)   
  ```Java
  String s1 = new String("hello");
  String s2 = new String("hello");
  System.put.println(s1.equals(s2)); // 참(내용이 동일하므로)
  ```
   
-> == 연산자는 객체의 참조를 비교하고, .equals() 메서드는 객체의 내용을 비교   
-> String 객체를 비교할 때는 내용 비교를 위해 일반적으로 .equals() 메서드를 사용   

# boolean 연산과 조건문
boolean 연산은 보통 조건문의 판단 기준으로 많이 사용
```Java
int base = 180;
int height = 195;
boolean isTall = height > base;

if (isTall) {
  System.out.println("더 크다");
}

int i = 3;
boolean isOdd = i % 2 == 1;
System.out.println(isOdd); // true 출력
```
