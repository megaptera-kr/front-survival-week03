# 오늘의 메뉴 만들기

데브로드 프론트엔드 생존코스 3주차 과제

## 실행하기

```shell
npm install

npm start
```

## E2E 테스트

```shell
npm start

npm codeceptjs
```

## **요구사항**

<aside>
⚠️ `restaurants.json` 파일을 이용하여 식당 목록을 보여주세요.

</aside>

오늘의 메뉴를 고를 수 있도록 아래 조건에 따라 식당 목록을 볼 수 있도록 만들어 주세요.

- 사용자는 식당 이름, 종류, 메뉴가 보이는 식당 목록을 볼 수 있다.
- 사용자는 식당 이름을 입력하여 이름이 (부분)일치하는 식당 목록을 골라 볼 수 있다.
- 사용자는 식당 종류 버튼을 눌러서 종류가 일치하는 식당 목록만 골라 볼 수 있다.
- 사용자는 입력한 식당 이름과 선택한 종류가 모두 일치하는 식당 목록만 골라 볼 수 있다.

## 힌트

아래의 웹사이트를 접속해서 결과물을 미리 확인해볼 수 있습니다.

<aside>
🔑 [https://seed2whale.github.io/frontend-survival-week03/](https://seed2whale.github.io/frontend-survival-week03/)

</aside>

### 로컬에서 E2E 테스트 확인방법

- E2E 테스트는 앱이 요구사항대로 동작하는지 브라우저를 띄우고 자동으로 테스트합니다.

```bash
# 실행하기
$ npm start

# E2E 테스트 실행
$ npm run codeceptjs
```

## 과제 진행 방법

Git과 GitHub을 활용한 Pull request에 익숙하지 않은 상태라면 아래의 Repository의 README를 따라 실습하며 Pull request 훈련을 반드시 여러번 하시기 바랍니다.

[데브로드 Git Training 가이드](https://www.notion.so/Git-Training-380165c8a23344448567ef9ee4e92b22)

1. [3주차 과제](https://github.com/megaptera-kr/frontend-survival-week03)를 fork 한 후 과제를 진행합니다.
2. 과제가 끝나면 origin에 push하고 Pull request를 보냅니다.

```bash
git add .
git commit
git push origin <브랜치네임 - 깃헙유저네임>

# 예시)
git add .
git commit
	# 커밋 메세지 작성
git push origin bbhye1
	# pull request 보내기
```

### **주의할 점**

base repository(upstream)의 master에 PR 요청을 보내는 게 아닌 이미 생성되어 있는 **본인의 GitHub Username와 동일한 branch**에 보내는 걸 꼭 잊지 말아주세요.

![스크린샷 2023-02-02 오후 6.29.38.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3b0a092c-c157-4bb4-9eb5-83e98f89e713/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-02-02_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.29.38.png)

1. 만약 추가로 작업을 한 후 commit을 추가하고 싶을때, 동일한 branch로 다시 한번 origin에 push하면 PR이 갱신되는 것을 볼 수 있습니다.
2. 과제가 Merge가 된다면 통과입니다.

