## Why GraphQL?

1. over-fetching
    - 기존 rest api로 하게 되면 첫 화면에서 유저의 이름만 보여주고 나중화면에서 성별과 이메일을 보여주는 상황에서 url을 2번 호출하게 되고, 이는 db를 2번 조회하는 상황이 된다. → 비효율
    - 이를 방지하기 위해선 애초에 호출할 때 아예 호출 가능성이 있는 데이터를 전부 호출하는데 이는 서버로부터 과도하게 많은 데이터를 받게 되는 셈이다. → over-fetching
    - 이를 해결하는 것이 GraphQL인데 개발자가 어떤 정보를 원하는지를 요청하는 측이 통제할 수 있다.
2. under-fetching
    - 인스타를 키면 피드 받고 알림, 사용자 프로필도 받게 된다. 3가지의 api 요청이 호출된다.
    - GraphQL는 이를 해결할 수 있다. 한 쿼리에 정확히 원하고자하는 데이터만 받아올 수 있다.

---

## What is GraphQL?

-   query 또는 mutation을 통해 서버에게 질의한다.
-   원하는 응답형식을 미리 스키마로 정의해놓을 수 있다.
-   url이라는 것이 존재하지 않는다.
-   schema란 개발자가 받거나 줄 정보에 대한 서술이다.
-   query는 단지 정보를 받을 때만 쓰이는 것이다. (GET)
-   mutation은 정보를 조작하여 변형시킬 때 쓰인다. (POST, PUT, DELETE)
-   resolver는 query를 resolve(해결)하는 것이다.
-   graphql이란 query를 설명하고 resolvers를 프로그래밍하는 것이다.
