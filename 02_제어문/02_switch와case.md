# switch / case 문
switch/case는 if와 비슷하지만 좀 더 일정한 형식이 있는 조건/판단문임   
```Java
switch (입력변수) {
    case 입력값1: ...
         break;
    case 입력값2: ...
         break;
    ...
    default: ...
         break;
}

```
입력 변수의 값과 일치하는 case 입력값(입력값1, 입력값2, ...)이 있다면 해당 case 문에 속한 문장들이 실행됨   
case 문마다 있는 break 문장은 해당 case 문을 실행한 뒤 switch 문을 빠져나가기 위한 것   
만약 break 문이 없다면 그 다음의 case 문에 속한 문장들이 실행됨

# 예시 
```Java
public class Sample {
    public static void main(String[] args) {
        int month = 8;
        String monthString = "";
        switch (month) {  // 입력 변수의 자료형은 byte, short, char, int, enum, String만 가능하다.
            case 1:  monthString = "January";
                     break;
            case 2:  monthString = "February";
                     break;
            case 3:  monthString = "March";
                     break;
            case 4:  monthString = "April";
                     break;
            case 5:  monthString = "May";
                     break;
            case 6:  monthString = "June";
                     break;
            case 7:  monthString = "July";
                     break;
            case 8:  monthString = "August";
                     break;
            case 9:  monthString = "September";
                     break;
            case 10: monthString = "October";
                     break;
            case 11: monthString = "November";
                     break;
            case 12: monthString = "December";
                     break;
            default: monthString = "Invalid month";
                     break;
        }
        System.out.println(monthString);
    }
}
```
switch 문의 입력 숫자(month)에 따라 문자열이 출력되는 예제   
해당하는 case가 없다면 default로 빠짐   
이와 같이 입력값이 정형화되어 있는 경우 if보다 switch/case를 사용하는 것이 코드의 가독성이 좋음   
-> switch/case 문은 if 문으로 변경이 가능하지만, if 문으로 작성된 모든 코드를 switch 문으로 변경할 수는 없다 !   
-> 근데 그러면 사실상 특정 용도에 사용할 수 있는 가독성 좋은 if문인건가?

# 주의점
- 입력값이 정형화되는 경우라는 뜻   
입력 변수는 실행 시간에 따라 값이 결정되는 동적인 값(함수의 반환값 등)일 수 있지만, case문은 정적이며 컴파일 시에 결정되는 상수 값이어야 한다.   
   
-> 01_자료형_10_상수 집합(enum) 참조   
그래서 상수 집합인 enum에 switch 문을 사용하는듯   
enum에서 각각의 열거형 상수는 정적이고 불변한 값이니 case문에 그대로 사용하면 되니까