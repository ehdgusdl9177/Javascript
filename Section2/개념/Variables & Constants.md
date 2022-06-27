## Variables
- 변수는 일종의 데이터 컨테이너 또는 저장소라고 볼 수 있다.
- 변수는 값이 변할 수 있는 데이터 컨테이너
```js
let userName = 'Max';

userName = 'Manu';
// 변수에 재할당할 수 있다.
```

## Constants
- 데이터 컨테이너지만 let 키워드 대신에 const 키워드를 사용해 생성한다.
- const 키워드를 사용해 생성된 상수의 특별한 점은 값을 변경할 수 없다는 것이다.(바꾸려고 하면 오류가 발생한다.)
- 따라서 절대로 값이 변해서는 안된다.
```js
const totalUsers = 15;

totalUsers = 20;
// 오류가 발생한다.
```
