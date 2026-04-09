# SMATh WORLD — Intro Page

**Live:** https://kimee770.github.io/SMAthworld/

---

## 작업 내용 (2026-04-09)

Figma 디자인(`SMATh-WORLD_Intro`, node `2-5`)을 바닐라 HTML/CSS/JS로 픽셀 퍼펙트 구현

### 구현 스펙
- 캔버스 1480×987px 고정, JS로 뷰포트에 맞게 자동 스케일
- 배경 3색 방사형 그래디언트 (보라/시안/핑크)
- 헤더: 로고 + 5개 네비 링크 + Contact Us 버튼
- 아크 갤러리: 8장 이미지 카드 부채꼴 배열 (-86 ~ +86deg)
- 헤드라인: Newsreader 폰트 60px + italic 48px
- 서브타이틀 + 서비스 태그 3개

### 해결한 이슈
- 카드별 Figma 정확 크롭 좌표 적용 (단순 `object-fit:cover` 대체)
- 카드 2 (AI Portrait) 흰 테두리 제거 → `scale(1.35)` + 정확 크롭
- 카드 8 (Neural Pulse) 가로 이미지 `-86deg` 회전 크롭 구현
- Figma 에셋 URL 7일 만료 이슈 → 주기적 갱신 필요

### 기술 스택
- HTML / CSS / Vanilla JS (프레임워크 없음)
- Google Fonts: Newsreader, Manrope, Noto Sans KR
- GitHub Pages 배포

---

## 다음 작업 예정
- About, Services, Portfolio 등 하위 섹션 구현
