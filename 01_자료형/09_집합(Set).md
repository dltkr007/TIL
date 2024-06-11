# 집합
python의 Set와 유사   
집합(Set) 자료형은 집합과 관련된 것을 쉽게 처리하기 위해 만든 것으로 HashSet, TreeSet, LinkedHashSet 등이 있음   

- HashSet 예시   
```Java
import java.util.Arrays;
import java.util.HashSet;

public class Sample {
    public static void main(String[] args) {
        HashSet<String> set = new HashSet<>(Arrays.asList("H", "e", "l", "l", "o"));
        System.out.println(set);  //  [e, H, l, o] 출력
    }
}

```

# 집합 자료형의 특징
- 중복을 허용하지 않음   
- 순서가 없음(unordered)   
리스트나 배열은 순서가 있기(ordered) 때문에 인덱스를 통해 자료형의 값을 얻을 수 있지만 집합 자료형(Set)는 순서가 없기에 인덱스가 지원되지 않음   
-> Map과 유사하지만 중복을 허용하지 않는다는 차이가 존재   

- HashSet   
특성 : 요소들의 순서 유지 X   
구현 : 해시 테이블 사용   
성능 : 가장 빠른 요소 접근 및 검색 성능을 가짐 (O(1) 시간)   

- TreeSet   
특성 : 요소들을 오름차순으로 정렬된 상태로 유지(Comparator를 이용하여 내림차순이나 사용자 정의 정렬 가능)   
구현 : 레드-블랙 트리 사용(이진 탐색 트리)   
성능 : 삽입, 삭제, 검색에 O(log n) 시간 소요   

- LinkedHashSet   
특성 : 요소들의 삽입 순서 유지(입력순)   
구현 : 해시 테이블과 이중 연결 리스트 사용   
성능 : 요소 접근 및 검색 성능이 HashSet과 유사 (O(1) 시간), 추가로 삽입 순서를 유지하는 오버헤드가 존재   

# 교집합, 합집합, 차집합 구하기
집합 자료형 2개 생성 예시
```Java
import java.util.Arrays;
import java.util.HashSet;

public class Sample {
    public static void main(String[] args) {
        HashSet<Integer> s1 = new HashSet<>(Arrays.asList(1, 2, 3, 4, 5, 6));
        HashSet<Integer> s2 = new HashSet<>(Arrays.asList(4, 5, 6, 7, 8, 9));
    }
}
```
제네릭스로 int를 사용하고 싶다면 int의 Wrapper 클래스인 Integer를 사용해야 함   
07_리스트에서 제네릭스 참조   
04_문자열에서 원시자료형-Wrapper 클래스 참조   
-> 제네릭스는 객체 타입만 지원하기 때문에 원시 자료형을 직접 사용할 수 없음   
-> String 문자열은 원시 자료형이 아니라 객체 타입이라 걍 String으로 쓰는 거   

# 교집합 구하기
retainAll 메서드 사용
```Java
import java.util.Arrays;
import java.util.HashSet;

public class Sample {
    public static void main(String[] args) {
        HashSet<Integer> s1 = new HashSet<>(Arrays.asList(1, 2, 3, 4, 5, 6));
        HashSet<Integer> s2 = new HashSet<>(Arrays.asList(4, 5, 6, 7, 8, 9));

        HashSet<Integer> intersection = new HashSet<>(s1);  // s1으로 intersection 생성
        intersection.retainAll(s2);  // 교집합 수행
        System.out.println(intersection);  // [4, 5, 6] 출력
    }
}
```
intersection에 s1 복제   
-> 추가나 삭제가 일어나도 서로에게 영향을 미치지 않게 독립적인 객체(intersection)를 생성   

# 나중에 자바 기초로 이동할 내용
- new 키워드   
Java에서 객체를 생성하는 연산자   
new 키워드를 사용하면 클래스의 생성자를 호출하여 해당 클래스의 인스턴스를 메모리에 할당하고 초기화   
- new 키워드의 역할   
메모리 할당 : heap 영역에 새로운 객체를 위한 메모리 할당   
생성자 호출 : 클래스의 생성자를 호출하여 객체를 초기화   
참조 반환 : 생성된 객체의 참조(reference)를 반환   
+ Garbage Collector   
Java는 메모리를 해제(delete)하는 연산자가 없음   
G/C가 주기적으로 힙 메모리를 검사하여 더 이상 참조되지 않는 객체를 식별, 해제   

# 합집합 구하기
addAll 메서드 사용
```Java
import java.util.Arrays;
import java.util.HashSet;

public class Sample {
    public static void main(String[] args) {
        HashSet<Integer> s1 = new HashSet<>(Arrays.asList(1, 2, 3, 4, 5, 6));
        HashSet<Integer> s2 = new HashSet<>(Arrays.asList(4, 5, 6, 7, 8, 9));

        HashSet<Integer> union = new HashSet<>(s1);  // s1으로 union 생성
        union.addAll(s2); // 합집합 수행
        System.out.println(union);  // [1, 2, 3, 4, 5, 6, 7, 8, 9] 출력
    }
}
```

# 차집합 구하기
removeAll 메서드 사용
```Java
import java.util.Arrays;
import java.util.HashSet;

public class Sample {
    public static void main(String[] args) {
        HashSet<Integer> s1 = new HashSet<>(Arrays.asList(1, 2, 3, 4, 5, 6));
        HashSet<Integer> s2 = new HashSet<>(Arrays.asList(4, 5, 6, 7, 8, 9));

        HashSet<Integer> substract = new HashSet<>(s1);  // s1으로 substract 생성
        substract.removeAll(s2); // 차집합 수행
        System.out.println(substract);  // [1, 2, 3] 출력
    }
}
```

# 집합 자료형과 관련된 메서드 - add, addAll, remove
- add   
집합 자료형에 값을 추가할 때 사용
```Java
import java.util.HashSet;

public class Sample {
    public static void main(String[] args) {
        HashSet<String> set = new HashSet<>();
        set.add("Jump");
        set.add("To");
        set.add("Java");
        System.out.println(set);  // [Java, To, Jump] 출력
    }
}
```

- addAll   
값을 한꺼번에 여러 개 추가할 때는 addAll 메서드 사용
```Java
import java.util.Arrays;
import java.util.HashSet;

public class Sample {
    public static void main(String[] args) {
        HashSet<String> set = new HashSet<>();
        set.add("Jump");
        set.addAll(Arrays.asList("To", "Java"));
        System.out.println(set);  // [Java, To, Jump] 출력
    }
}
```

- remove   
특정 값을 제거할 때 사용
```Java
import java.util.Arrays;
import java.util.HashSet;

public class Sample {
    public static void main(String[] args) {
        HashSet<String> set = new HashSet<>(Arrays.asList("Jump", "To", "Java"));
        set.remove("To");
        System.out.println(set);  // [Java, Jump] 출력
    }
}
```