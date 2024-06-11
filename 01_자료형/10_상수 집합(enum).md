# 상수 집합(enum)
enum 자료형은 서로 연관 있는 여러 개의 상수 집합을 정의할 때 사용   
-> 주로 상태, 옵션, 카테고리, 명시적 상수 값 목록 등을 정의할 때 사용   
String이나 int 등의 자료형이 아닌 enum 자료형 그 자체   
왜 쓰는거지?   
-> 진짜 가독성 때문인가?   

# Enum 특징
1. 고정된 상수 집합   
Enum의 값들은 컴파일 시에 이미 정해진, 변경 불가능한 상수   
따라서, 상수 값이 잘못 설정되거나 변경되는 경우에 대한 보장을 얻을 수 있음   
2. 열거형 상수   
Enum의 각 값은 열거형 상수이며, 변수처럼 사용 가능   
3. 타입 안전성   
Enum은 열거된 값들만 허용하므로 타입 안전성을 제공   
이는 잘못된 유형의 값을 입력하는 실수를 방지   
4. 코드 가독성 향상   
Enum은 상수 값의 집합을 의미적으로 그룹화하므로 코드를 읽고 이해하기 쉽게 만듦   
+ switch 문과의 호환성이 좋다고 함

# enum 예시
```Java
public class Sample {
    enum CoffeeType {
        AMERICANO,
        ICE_AMERICANO,
        CAFE_LATTE
    };

    public static void main(String[] args) {
        System.out.println(CoffeeType.AMERICANO);  // AMERICANO 출력
        System.out.println(CoffeeType.ICE_AMERICANO);  // ICE_AMERICANO 출력
        System.out.println(CoffeeType.CAFE_LATTE);  // CAFE_LATTE 출력
    }
}
// enum을 사용하지 않았을 때 == int 타입의 숫자를 인수로 대입하여 상수를 표현
// 각 커피에 대해 정수 0, 1, 2를 대입
public class Sample {
    // 각 커피 종류에 대한 정수 값 정의
    public static final int AMERICANO = 0;
    public static final int ICE_AMERICANO = 1;
    public static final int CAFE_LATTE = 2;

    public static void main(String[] args) {
        // 각 정수 값에 대응되는 문자열 출력
        System.out.println("AMERICANO: " + AMERICANO);
        System.out.println("ICE_AMERICANO: " + ICE_AMERICANO);
        System.out.println("CAFE_LATTE: " + CAFE_LATTE);
    }
}
// 가독성과 유지보수에서 enum이 좋음
```

# python과의 비교
1. 일반적인 상수 사용   
```Python
// 걍 변수 사용해서 상수 정의
AMERICANO = 1
ICE_AMERICANO = 2
CAFE_LATTE = 3
```

2. class를 활용한 열거형 구현   
```Python
class CoffeeType:
    AMERICANO = 'AMERICANO'
    ICE_AMERICANO = 'ICE_AMERICANO'
    CAFE_LATTE = 'CAFE_LATTE'

print(CoffeeType.AMERICANO)  # AMERICANO 출력
// 얘가 enum이랑 좀 비슷해 보임
```

3. enum 모듈 사용   
Python 3.4부터 표준 라이브러리에 enum 모듈이 있음