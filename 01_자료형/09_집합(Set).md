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