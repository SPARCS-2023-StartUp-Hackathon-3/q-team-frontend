# [TEAM Z] Repository 이름

... Repository에 대한 간략한 설명 ...

다음과 같은 기능이 포함되어 있습니다.
1. Onboarding, Login, SignUp : 로그인 전 접속할 수 있는 페이지로써, 사이트에 대해 간략하게 소개를 보고, 사이트에 계정으로 접속할 수 있습니다.

2. musicplay(default) : 로그인 후 접속할 수 있는 페이지 어디에서나, 음원을 클릭하면 어디에서든 음악 재생이 가능합니다.

3. main
  - Feed : SNS 기반, 자신의 스토리와 음원을 올리고 이를 피드로써 공유할 수 있도록 합니다. 다른 사람들이 올린 음악 피드를 감상할 수 있습니다. 
  - Privatefeed : 유료 구독을 기반으로 한 아티스트와 구독자만이 들어갈 수 있는 피드 공간입니다. 아티스트와 음악적으로 소통할 수 있는 공간입니다. 
  - Search : 다른 아티스트, 다른 사람들의 피드와 게시물을 구경할 수 있는 공간입니다.
  - Upload : 자신의 음악을 업로드할수 있는 공간입니다. 앨범, 이미지, 디테일들을 포함하여 음원을 등록가능합니다.

4. mypage
  - MyFeed : 내가 올린 게시물만을 볼 수 있는 피드입니다. 나의 활동이력을 볼 수 있습니다.
  - PlayList : 나만의 플레이리스트를 저장 및 기록가능합니다. 


## 프로젝트에서 사용한 기술

- React
- Recoil


## Dev Server 실행 방법

```
npm i
npm start
```


## Production 배포 방법

Vercel을 통해 배포하였으며,
[여기](https://q-team-frontend.vercel.app)에서 확인 할 수 있습니다.


## 환경 변수 및 시크릿

REACT_APP_REST_API_KEY = 98792ab4fa0c089a40d2c7637f996bfb
REACT_APP_REDIRECT_URI = http://localhost:3000/redirect
REACT_APP_SERVER = http://ec2-13-125-10-144.ap-northeast-2.compute.amazonaws.com:3000
