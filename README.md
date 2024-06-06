# TIL - SSAFY 여름방학 - 스프링 부트, 리액트

프로그램: 컴퓨터에서 실행될 때 특정 작업을 수행하는 일련의 명령어(연산)들의 모음

운영체제: 시스템 하드웨어를 관리 + 응용 소프트웨어를 실행하기 위해서 하드웨어 추상화 플랫폼과 공통 시스템 서비스(메모리, 파일 시스템 관리)를 제공하는 시스템 소프트웨어

비트: 컴퓨터가 값을 저장하는 최소 단위

바이트: 컴퓨터 정보 처리의 최소 단위 (8비트, 256가지 값을 표현)

- 자바 가상 머신 - JVM(Java virtual machine)  
자바 바이트코드를 실행할 수 있는 주체, 자바 바이트코드는 플랫폼에 독립적이며 모든 JVM은 자바 가상 머신 규격에 정의된 대로 자바 바이트코드를 실행  
JAVA 원시프로그램(.java) -> 컴파일(프로그래밍) -> 자바 바이트코드(.class) -> JVM  
컴파일은 자연어(소스 코드)를 기계어로 변환, 그러나 자바 바이트코드는 기계어가 아닌 이진 코드  
Java는 JVM을 사용하기에 OS 플랫폼에 독립적임 -> 윈도우에서 작성한 자바 파일을 리눅스, Mac에서도 실행 가능  
하지만 JVM이 OS에서 종속적이기 때문에 해당 OS에서 실행 가능한 JVM이 필요함  
또한 JVM이라는 중간 단계를 통해야하므로 C, C++ 보다 속도가 느림

- 정리  
자바 컴파일러는 자바 코드(.java)를 컴파일하여 자바 바이트코드(.class)로 변환해 클래스 파일을 만듦  
자바 바이트코드(.class)를 실행시키는 주체가 JVM  
JVM은 자바 바이트코드(.class)를 OS에 특화된 코드로 변환(인터프리터와 JIT 컴파일러)하여 실행  
JVM을 사용하여 자바는 특정 하드웨어 OS에 종속적이지 않지만 JVM이 OS에 종속적임  


# Java 코드의 구조
자바는 객체 지향 프로그래밍 언어라 모든 코드가 클래스 단위로 작성됨  
&nbsp; + 객체 지향적   
&nbsp;&nbsp;&nbsp;&nbsp; 자바는 숫자(int, float, long 등)나 논릿값(true, false)을 제외하면 거의 모두 객체로 구성   
&nbsp;&nbsp;&nbsp;&nbsp; 실제로 자바는 Object 클래스에서 모든 클래스를 파생함   
&nbsp;&nbsp;&nbsp;&nbsp; 자바에서 int, float, long, true, false 등을 원시 자료형이라고 함   
메서드는 함수와 동일한 개념. 다만 클래스 내의 함수는 보통 메서드라고 부름  
자바는 모든 것이 클래스 기반이므로 자바에서 사용하는 함수는 모두 메서드  
ctrl + spacebar (자동완성)  

```Java
클래스 생성 예시  
package java_0606; // 패키지 선언  

// 클래스 블록 (자바 코드의 가장 바깥쪽 영역)
// 클래스 이름과 소스 파일명(intro01.java)이 일치해야함  
public class intro01 {
    // 메서드 블록
    // main method 작성 (main ctrl spacebar)  
    public static void main(String[] args) {
        // 명령문(statement) 작성 (출력문: sysout ctrl spacebar)
        System.out.println("Hello SSAFY!!!");
    }
}
```

- main method (public static void main(String [] args) { })  
클래스 안에 들어있는 메서드로 실행 명령인 java(JVM)를 실행 시 가장 먼저 호출 되는 부분(프로그램의 시작점)  
만약 Application에서 main() 메서드가 없으면 절대로 실행될 수 없음  
-> Application의 시작은 특정 클래스의 main()을 실행
  
  - public: 메서드의 접근 제어자로, 어디서든 이 메서드에 접근할 수 있다는 의미
  - static: 메서드에 static이 지정되어 있으면 이 메서드는 인스턴스를 생성하지 않아도 실행할 수 있다는 것을 의미
  - void: 메서드의 리턴값이 없음을 의미
  - String[]: 문자열을 나타내는 자바의 입력자료형([]는 값이 여러 개로 이루어진 배열이라는 것을 의미)
  - args: String[] 자료형의 매개변수로, 메서드에 전달하는 입력값인 인수를 의미, 다른 변수명 사용해도 상관 없음

- 메서드 블록 구성
  - 접근 제어자   
    public, private, protected가 오거나 아무것도 오지 않을 수 있음
  - static 메서드   
    static 키워드가 붙으면 클래스 메서드가 되어 객체를 만들지 않아도 '클래스명.메서드명' 형태로 호출 가능, 안 붙는 경우도 존재
  - 리턴 자료형   
    메서드가 실행된 후 리턴되는 값의 자료형을 의미, 리턴값이 있을 경우 반드시 리턴 자료형을 표기해야 하며, 없는 경우 void로 표기해야 함
  - 메서드명   
    메서드명은 자유롭게 가능, 메서드명 뒤에 이어지는 괄호 안의 값들(입력 자료형, 매개변수 등)은 메서드의 입력 인자를 뜻함.   
    입력 인자는 '입력자료형 + 매개변수명' 형태로 이루어지며 개수에 제한이 없고, 클래스 내에는 이러한 메서드를 여러 개 만들 수 있음
  - 명령문   
    컴퓨터에 무언가 일을 시키는 문장을 명령문(statement)라고 함.   
    명령문은 반드시 세미콜론을 붙여 문장이 끝났다는 것을 표시해야함, 메서드 블록 안에는 여러 개의 명령문이 존재할 수 있음

- 속성과 생성자   
  속성은 클래스의 상태를 나타내는 변수로, 클래스 내부에 선언됨   
  생성자는 클래스 인스턴스를 생성할 때 실행되는 메서드로, 주로 속성을 초기화하는 용도로 사용
```Java
public class Sample {

    /* 속성 */
    private String message;

    /* 생성자 */
    public Sample(String message) {
        this.message = message
    }
}
```

- 기본 문법
  - 주석
    - // 내용 : 해당 기호가 있는 위치부터 그 줄 끝까지 주석처리
    - /* 내용 */ : 해당 범위의 내용 주석처리
    - /** 내용 */ : Documentation API를 위한 주석 처리

  - 출력문
    - print : 단순 출력
    - println : 출력 + 줄바꿈
    - printf : 형식을 정해서 출력 (%d, 정수 / %f, 실수 / %c, 문자 / %s, 문자열)
```Java
package java_0606;

public class intro01 {
	public static void main(String[] args) {
		
		System.out.println("\\"); // \ 출력
		System.out.println("\""); // " 출력
		
		System.out.printf("%d\n", 10); // 정수 10진수
		System.out.printf("%o\n", 10); // 정수 8진수
		System.out.printf("%x\n", 10); // 정수 16진수
		System.out.printf("%X\n", 10); // 정수 16진수 (대문자)
		
		System.out.printf("%4d\n", 10); // 4칸 확보 후 오른쪽부터 차지
		System.out.printf("%-4d\n", 10); // 4칸 확보 후 왼쪽부터 차지
		System.out.printf("%04d\n", 10); // 4칸 확보 후 오른쪽부터 차지, 남는 부분은 0으로 채움
		
		System.out.printf("%f\n", 10.12345); // 실수
		System.out.printf("%.2f\n", 10.12345); // 실수 .n자리까지 반올림
		
		System.out.printf("%s\n", "싸피"); // 문자열
		System.out.printf("%c", 'a'); // 문자('' 사용해야함)
	}

}
  ```

# 변수와 자료형
- 변수명 규칙
  - 숫자로 시작 X
  - _와 $ 이외의 특수문자 사용 X
  - 자바의 키워드는 변수명으로 사용 X
```
abstract  continue  for         new        switch
assert    default   goto        package    synchronized
boolean   do        if          private    this
break     double    implements  protected  throw
byte      else      import      public     throws
case      enum      instanceof  return     transient
catch     extends   int         short      try
char      final     interface   static     void
class     finally   long        strictfp   volatile
const     float     native      super      while

```
- 자료형
  변수명 앞의 int, String 등은 변수의 자료형(type)을 뜻함

```Python
int a; // 변수 선언 (변수 a의 자료형은 int이다.)
String b; // 변수 b의 자료형은 String이다.

a = 1; // int 자료형 변수 a에 1이라는 값 대입
b = "hello ssafy"; // String 자료형 변수 b에 문자열 값 대입
// = 은 대입 연산자

// 변수 선언과 동시에 값 대입도 가능
int a = 1; 
String b = "hello ssafy";

// 타입과 맞지 않는 값을 대입하면?
int a = "hello ssafy";
Type mismatch: cannot convert from String to int
```
- 자료형 종류
  - int
  - long
  - double
  - boolean
  - char
  - String
  - StringBuffer
  - List
  - Map
  - Set
  - 사용자 정의
```Python
StringBuffer sb;
// sb 변수의 자료형은 StringBuffer로, sb 변수에는 StringBuffer 자료형에 해당하는 값만 대입 가능

List myList;
// myList 변수의 자료형은 List로, myList 변수에는 List 자료형에 해당하는 값만 대입 가능

class Animal {
// 사용자가 Animal이라는 클래스를 만들었다고 가정
}
Animal cat;
// cat 변수의 자료형은 Animal이며, cat 변수에는 Animal 자료형에 해당하는 값만 대입 가능
```
