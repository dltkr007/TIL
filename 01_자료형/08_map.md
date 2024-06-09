# Map
파이썬의 딕셔너리와 유사   
associative array 또는 hash라고도 불림   
Map은 리스트나 배열처럼 순차적으로 요소값을 구하지 않고 키(key)를 이용해 값(value)을 얻음   
Map 자료형에는 HashMap, LinkedHashMap, TreeMap 등이 있음

# HashMap
HashMap은 키-값 쌍을 저장할 때 내부적으로 해시 테이블을 사용하여 저장하므로, 저장된 순서와 출력되는 순서가 다름(Map은 순서에 의존 X).   
-> HashMap은 요소의 순서를 보장하지 않음   
-> 따라서 항목을 추가한 순서와 상관없이 요소들이 임의의 순서로 출력   
-> 추가하는 순서대로 저장하고 출력하고 싶다면 LinkedHashMap 사용   
-> 사전식 혹은 특정 기준으로 정렬하고 싶다면 TreeMap 사용   

- put   
put 메서드는 key와 value 추가
```Java
import java.util.HashMap;

public class Sample {
    public static void main(String[] args) {
      // 제네릭스 이용
      // key, value의 자료형 타입에 따라 타입 매개변수 선언해주면 됨
      // String 타입의 키와 값으로 구성된 HashMap 
        HashMap<String, String> stringMap = new HashMap<>();
        stringMap.put("people", "사람");
        stringMap.put("baseball", "야구");
        System.out.println(stringMap); // {baseball=야구, people=사람}
      
      // Integer 타입의 키와 String 타입의 값으로 구성된 Hashmap
        HashMap<Integer, String> intStringMap = new HashMap<>();
        intStringMap.put(1, "value1");
        intStringMap.put(2, "value2");
        System.out.println(intStringMap); // {1=value1, 2=value2}
    }
}
```

- get(getOrDefault)   
get 메서드는 key에 해당하는 value를 얻을 때 사용   
key에 해당하는 value가 없을 때 get 메서드를 사용하면 null이 리턴   
null 대신 기본값을 얻고 싶다면 getOrDefault 메서드 사용
```Java
import java.util.HashMap;

public class Sample {
    public static void main(String[] args) {
        HashMap<String, String> map = new HashMap<>();
        map.put("people", "사람");
        map.put("baseball", "야구");
        System.out.println(map.get("people")); // "사람" 출력
        System.out.println(map.get("java")); // null 출력
        System.out.println(map.get("java", "자바")); // "자바" 출력               
    }
}
```

- containsKey   
containsKey 메서드는 Map에 해당 key가 있는지를 참, 거짓으로 리턴   

- remove   
remove 메서드는 해당 key의 항목을 삭제한 후 value 값을 리턴   

- size   
size 메서드는 Map 요소의 개수를 리턴   

```Java
HashMap<String, String> map = new HashMap<>();
map.put("people", "사람");
map.put("baseball", "야구");
System.out.println(map.containsKey("people"));  // true 출력
System.out.println(map.remove("people"));  // 삭제 후, "사람" 출력
System.out.println(map.size()); // people 삭제 됐으니, 1 출력
```

- keySet   
Map의 모든 key를 모아서 리턴   
-> keySet() 메서드는 집합 자료형(Set)으로 리턴하는데, 집합 자료형은 리스트 자료형으로 바꾸어 사용할 수 있음   
-> key는 중복되지 않기에 Set으로 리턴하는 듯   
```Java
import java.util.HashMap;

public class Sample {
	public static void main(String[] args) {
		HashMap<String, String> stringMap = new HashMap<>();
		stringMap.put("people", "사람");
		stringMap.put("baseball", "야구");
		
		HashMap<Integer, String> intStringMap = new HashMap<>();
		intStringMap.put(1, "value1");
		intStringMap.put(2, "value2");
		
    // 집합 자료형으로 출력
    System.out.println(stringMap.keySet());  // [baseball, people]

    // 리스트 자료형으로 바꾸기
		ArrayList<String> keyList = new ArrayList<>(stringMap.keySet());
		System.out.println(keyList); // [baseball, people]

    ArrayList<Integer> keyList = new ArrayList<>(intStringMap.keySet());
		System.out.println(keyList); // [1, 2]
	}

}
```

# Python과의 비교 예제
값으로 리스트를 가지려면?   

```Java
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        // Map의 값으로 리스트를 가지는 예제
        Map<String, List<String>> map = new HashMap<>();
        
        // "key1"에 대한 값을 리스트로 저장
        List<String> valuesForKey1 = new ArrayList<>();
        valuesForKey1.add("value1");
        valuesForKey1.add("value2");
        map.put("key1", valuesForKey1);
        
        // "key2"에 대한 값을 리스트로 저장
        List<String> valuesForKey2 = new ArrayList<>();
        valuesForKey2.add("value3");
        valuesForKey2.add("value4");
        map.put("key2", valuesForKey2);
        
        // 값에 접근할 때는 각 키에 대한 리스트를 얻어와서 사용
        List<String> valuesOfKey1 = map.get("key1");
        System.out.println("Values for key1: " + valuesOfKey1);  // [value1, value2]
        
        List<String> valuesOfKey2 = map.get("key2");
        System.out.println("Values for key2: " + valuesOfKey2);  // [value3, value4]
    }
}
```