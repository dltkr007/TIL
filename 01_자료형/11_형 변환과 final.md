# 형 변환
- 원시 자료형과 Wrapper 클래스   
int : Integer   
long : Long   
double : Double   
float : Float   
boolean : Boolean   
char : Character   
-> 04_문자열 참조(유틸리티 메서드를 사용할 때)   

# 문자열 <-> 정수
문자열을 정수로 바꾸려면 Integer(int 자료형의 Wrapper 클래스) 클래스를 사용   
```Java
public class Sample {
    public static void main(String[] args) {
        String num = "123";
        int n = Integer.parseInt(num);
        System.out.println(n);  // 123 출력
    }
}
```
정수를 문자열로 바꿀 때는 여러 방법이 있음
```Java
public class Sample {
    public static void main(String[] args) {
        int n = 123;
        // 1번 : 빈 문자열("")을 앞에 더하기
        String num = "" + n;
        System.out.println(num);  // 123 출력

        // 2번 : String.valueOf(정수)
        String num1 = String.valueOf(n);
        System.out.println(num1);

        // 3번 : Integer.toString(정수)
        String num2 = Integer.toString(n);
        System.out.println(num2);
    }
}
```

# 문자열 <-> 실수
정수와 마찬가지(메서드만 다름)   
문자열에서 실수로 바꿀 때   
Double.parseDouble   
Float.parseFloat
```Java
public class Sample {
    public static void main(String[] args) {
        String num = "123.456";
        double d = Double.parseDouble(num);
        System.out.println(d);
    }
}
```
실수를 문자열로 바꿀 때   
String.valueOf(실수)   
Double.toString(실수)   
Float.toString(실수)
```Java
public class Sample {
    public static void main(String[] args) {
        double d = 123.456;
        String numAsString = String.valueOf(d); // 또는 numAsString = Double.toString(d);
        System.out.println(numAsString);
    }
}

```
# 정수 <-> 실수
자주 사용하지는 않음
```Java
public class Sample {
    public static void main(String[] args) {
        int n1 = 123;
        double d1 = n1;  // 정수를 실수로 바꿀때에는 캐스팅이 필요없다.
        System.out.println(d1);  // 123.0 출력

        double d2 = 123.456;
        int n2 = (int) d2; // 실수를 정수로 바꿀때에는 반드시 정수형으로 캐스팅해 주어야 한다.
        System.out.println(n2);  // 소숫점이 생략된 123 출력
    }
}
```
실수를 정수로 변환하면 실수의 소수점은 제거됨   
int n2 = (int) d2;에서 (int)는 d2의 자료형을 강제로 int형으로 바꾼다는 의미이고, 이를 캐스팅이라고 함   
-> 실수 형태의 문자열을 정수로 바꿀 때는 NumberFormatException 에러가 발생함   
-> Double.parseDouble()을 이용해서 문자열을 실수로 바꾼 후 정수로 변환해야 함

# final
final은 자료형에 값을 단 한 번만 설정할 수 있게 강제하는 키워드   
값을 한 번 설정하면 그 값을 다시 설정할 수 없음   
```Java
public class Sample {
    public static void main(String[] args) {
        final int n = 123;  // final로 설정하면 값을 바꿀 수 없다.
        n = 456;  // 컴파일 오류 발생
    }
}
```
리스트의 경우도 final로 선언하면 재할당(add, remove는 가능)은 불가능   
```Java
import java.util.ArrayList;
import java.util.Arrays;

public class Sample {
    public static void main(String[] args) {
        final ArrayList<String> a = new ArrayList<>(Arrays.asList("a", "b"));
        a = new ArrayList<>(Arrays.asList("c", "d"));  // 컴파일 에러 발생
    }
}
```
+ 값을 더하거나 뺄 수도 없게 하려면 List.of를 작성   
-> 수정할 수 없는 리스트(unmodifiable list)
```Java
import java.util.List;

public class Sample {
    public static void main(String[] args) {
        final List<String> a = List.of("a", "b");
        a.add("c");  // UnsupportedOperationException 발생
    }
}

```

-> Java의 final 키워드는 JS의 const와 유사한가?
두 키워드 모두 변수에 대한 재할당을 금지하고, 상수로 선언된 값을 변경할 수 없도록 한다.   
하지만 Java의 final 키워드는 변수를 선언할 때 초기화해야 하며, 이후에 값을 변경할 수 없다.   
JS의 const 키워드는 선언 시 초기화해도 되지만, 선언 후에도 값을 할당할 수 있다.   
-> 선언 시점의 차이   
Java의 final 변수는 값을 한 번만 할당할 수 있으므로 해당 변수의 불변성이 보장된다.   
JS의 const 변수는 기본적으로 재할당을 허용하지 않지만, 객체나 배열 등의 참조 타입의 경우에는 객체 내부의 속성이나 배열의 요소를 변경하는 것이 가능하다.   
-> 불변성의 차이   
JS의 const 변수는 블록 스코프를 따르며, 블록 내에서만 유효하다.   
Java의 final 변수는 클래스 변수, 인스턴스 변수, 메서드 내의 로컬 변수 등 다양한 스코프에서 사용이 가능하다.   
-> 블록 스코프의 차이