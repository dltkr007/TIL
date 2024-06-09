# StringBuffer
StringBuffer는 문자열을 추가하거나 변경할 때 주로 사용하는 자료형   
append, insert, substring, delete, reverse, length 등등 메서드 개많음   

- append
StringBuffer 객체를 생성하고 문자열을 생성하는 예제
```Java
StringBuffer sb = new StringBuffer(); // StringBuffer 객체 sb 생성
sb.append("hello");
sb.append(" ");
sb.append("jump to java");
String result = sb.toString(); // sb 객체에 저장된 내용을 문자열로 변환하여 result 변수에 저장
System.out.println(result); // "hello jump to java" 출력
```
StringBuffer 자료형은 append 메서드를 사용하여 문자열을 계속해서 추가해 나갈 수 있음. 그리고 toString() 메서드를 사용하여 StringBuffer를 String 자료형으로 변경할 수 있음.   
-> StirngBuffer 대신 String 자료형을 사용한다면?

```Java
String result = "";
result += "hello";
result += " ";
result += "jump to java";
System.out.println(result); // "hello jump to java" 출력
```
두 예제의 결과는 같지만, 내부적으로 객체를 생성하고 메모리를 사용하는 과정이 다름   
첫 예제는 처음에 StringBuffer 객체를 한 번만 생성하지만,   
두 번째 예제에서는 String 자료형에 +연산이 있을 때마다 새로운 String 객체를 생성하므로 총 4개의 String 자료형 객체가 만들어짐.   
   
String 자료형은 값이 한 번 생성되면 변경할 수 없음.   
toUpperCase같은 메서드를 보면 문자열이 변경되는 것처럼 보이지만, 해당 메서드를 수행할 때 또 다른 String 객체를 생성해서 리턴하는 것.   
반면에 StringBuffer 자료형은 값을 변경할 수 있으므로 생성된 값을 언제든지 수정할 수 있음.   
   
그러나 StringBuffer 자료형은 String 자료형보다 무거움.   
new StringBuffer()로 객체를 생성하면 String을 사용할 때보다 메모리 사용량이 많고 속도가 느림.   

-> 문자열을 추가하거나 변경하는 작업이 많으면 StringBuffer   
-> 적으면, String을 사용하는 것이 유리   
-> 멀티 스레드 환경(비동기 작업 처리)이 아닐 때는 또 StringBuffer 대신 StringBuilder를 사용한다는 듯;   

- insert
insert 메서드를 통해 특정 위치에 원하는 문자열 삽입 가능
```Java
StringBuffer sb = new StringBuffer();
sb.append("jump to java");
sb.insert(0, "hello ");
System.out.println(sb.toString());
// hello jump to java
```

- substring
substring 메서드는 String 자료형의 substring 메서드와 동일하게 작동(문자열 추출)   
```Java
StringBuffer sb = new StringBuffer();
sb.append("hello jump to java");
System.out.println(sb.substring(0, 4));
// hell
```