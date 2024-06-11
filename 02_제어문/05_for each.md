# for-each 문
for each라는 키워드가 따로 있는 것이 아니고 for문을 활용   
JS의 foreach 메서드와 기능 자체는 유사함

# 기본 구조
```Java
for (type 변수명: iterate) {
    body-of-loop
}
```
iterate는 루프를 돌릴 객체   
iterate 객체에서 한 개씩 순차적으로 변수명에 대입되어 for문이 수행됨   
iterate에 사용할 수 있는 자료형은 루프를 돌릴 수 있는 자료형(배열이나 ArrayList 등)만 가능   
변수명의 type(자료형)은 iterate 객체에 포함된 자료형과 일치해야 함   

# 주의점
구조를 보면 알 수 있듯이 for each문은 반복 횟수를 명시적으로 주는 것이 불가능하고, 한 단계씩 순차적으로 반복할 때만 사용이 가능함   
   
단순히 각 요소를 순회할 때만 사용 가능하며, 반복 중간에 요소를 추가하거나 제거하거나 인덱스가 필요한 경우에는 사용할 수 없음   
-> 요소를 출력한다거나, 합산한다거나, 조건을 만족하는 요소를 찾는다거나, 요소 자체가 아니라 속성을 변경하거나 새로운 컬렉션에 추가하는 작업 등등은 가능   
-> 제약이 많지만 사용하는 이유가 for문보다 가독성이 좋아서..

# 예시 
```Java
// 일반 for문
String[] numbers = {"one", "two", "three"};
for (int i=0; i<numbers.length; i++) {
    System.out.println(numbers[i]);
}

// for each
String[] numbers = {"one", "two", "three"};
for (String number: numbers) {
    System.out.println(number);
}


// ArrayList와 for each
import java.util.ArrayList;
import java.util.Arrays;

public class Sample {
    public static void main(String[] args) {
        ArrayList<String> numbers = new ArrayList<>(Arrays.asList("one", "two", "three"));
        for (String number : numbers) {
            System.out.println(number);
        }
    }
}

```

# 추가 예시
배열에 서로 다른 타입의 요소들이 섞여있다면?
```Java
public class Main {
    public static void main(String[] args) {
        Object[] mixedArray = {"one", 2, "three", 4};

        for (Object element : mixedArray) {
            if (element instanceof String) {
                System.out.println("String: " + element);
            } else if (element instanceof Integer) {
                System.out.println("Integer: " + element);
            }
        }
    }
}
// 출력 결과
// String: one
// Integer: 2
// String: three
// Integer: 4
```
1. 배열의 타입을 Object로 선언하고   
2. for-each로 배열을 순회하면서 각 요소의 타입을 확인(instanceof 연산자 사용)   
