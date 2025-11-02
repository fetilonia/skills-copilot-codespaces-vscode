# MS-102 Certificate 모의 테스트

500문제 풀셋에서 매회 50문항을 무작위로 출제하고, 선택지 기반 자동 채점을 제공합니다. 브라우저만 있으면 실행되는 정적 페이지로 구성되어 있어 GitHub Pages에 바로 배포해 사용할 수 있습니다.

## 주요 기능

- 무작위 50문항 출제
- 객관식 선택지 표시, 정답 보기 토글
- 채점 및 점수 계산, 정답/오답 하이라이트
- 키워드 필터, 다시 풀기, 재추출
- 시드 고정 랜덤 지원: 같은 시드로 항상 동일한 50문항 구성

## 데모 실행

- GitHub Pages 배포 후 접속
- 항상 같은 50문항을 보고 싶다면 URL 뒤에 seed 파라미터를 붙이세요
    
    예: https://your-account.github.io/your-repo/index.html?seed=20251102
    

## 파일 구조

- index.html: UI와 채점 로직
- questions.js: 전체 500문항 데이터 배열
    - 형식: { id, question, answer, choices?, explain? }
    - choices가 없으면 주관식처럼 정답 보기로 확인 가능

## 사용 방법

1) questions.js에 전체 문항을 data 배열로 정의

2) index.html과 함께 저장소에 업로드

3) GitHub → Settings → Pages → Deploy from a branch → main / root 설정

4) 배포 URL 접속 후 문제 풀이 및 채점

## Notion 임베드

- Notion 페이지에서 /embed 블록 추가 후 GitHub Pages URL을 붙여넣으면 바로 사용 가능합니다.

## 라이선스

- 개인 학습 및 내부 교육 용도 권장. 문제가 외부 저작물에 기반한 경우 원 저작권을 준수하세요.
