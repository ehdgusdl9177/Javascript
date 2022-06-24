## Java and JavaScript
### Java
- Java를 서버 측에서 HTML을 동적으로 렌더링하고 사용자에게 다시 보내기 위해 사용할 수 있고 non-web 개발 환경에서도 사용이 가능하지만 브라우저에서 직접 지원이 되지는 않는다.
- Java는 엄격히 객체 지향저깅며 강형인 언어
- 데이터 컨테이너에 저장할 데이터 종류도 정의해야 한다.
### JavaScript
- 브라우저와 다른 모든 환경에서 실행된다.
- 정해진 곳에서만 객체로 작업할 필요가 없다.(약형)
<img width="737" alt="스크린샷 2022-06-24 오후 4 13 39" src="https://user-images.githubusercontent.com/75515697/175482962-38c04caf-3b32-4e9d-9b6d-653beefa9d6b.png">

### Client-side (Brower) vs Server-side (NodeJS)
- 클라이언트 측은 브라우저고 Node.js 도움을 받는 서버 측은 인터넷에 연결된 컴퓨터로 웹페이지를 제공할 수는 있지만 최종 사용자의 컴퓨터에서 직접 코드를 실행하지 않는다.

#### Client-side (Brower)
- 클라이언트 측 부분이 JavaScript의 기원이다.
- 다양한 브라우저 공급 업체, 즉 브라우저를 개발하는 여러 회사를 살펴보면 이들이 자체 JavaScript 실행 엔진을 제공한다는 걸 보게 될 것이다.
- 예를 들어 V8 엔진은 Chrome의 JavaScript 엔진 이름이다.
- 중요한 것은 브라우저에서 웹페이지와 상호작용할 수 있다는 것이다.
- JavaScript 내부에서 로드된 웹 페이지를 조작할 수 있다.
- API라고 불리는 특정 브라우저 기능을 사용하여 사용자 위치 등을 얻을 수도 있다.

#### Server-side (NodeJS)
- 서버 측에서는 브라우저에서 엔진을 추출하여 브라우저 외부에서 실행할 수 있도록 하는 게 목적이었다.
- 즉, JavaScript 지식을 재사용하되 다른 작업에 JavaScript를 활용하는 것이다.
- 그래서 어디에서든 Node.js와 JavaScript를 실행할 수 있다.
