/* ══════════════════════════════════════════════════════════
   실적 목록 — 글을 추가할 때는 이 파일만 고치면 됩니다.

   { } 한 덩어리가 게시글 한 줄입니다.
   맨 위에 복사해서 붙여 넣으면 목록에 추가됩니다.
   쉼표를 빠뜨리지 않도록 주의하세요.

   type   : "논문" | "포스터" | "초록"   (상단 탭이 이 값으로 나뉩니다)
   year   : 연도 (숫자)
   kind   : 구분 — 논문이면 "SCI(E)" / "Non-SCI", 발표면 학회 이름
   field  : 분야 — "수치모델", "자료동화", "복합" 등 자유롭게
   title  : 제목
   authors: 저자 (비워두면 표시되지 않습니다)
   link   : DOI나 원문 주소 (없으면 "" 로 두세요)
   ══════════════════════════════════════════════════════════ */

const RECORDS = [

  {
    type: "논문",
    year: 2025,
    kind: "SCI(E)",
    field: "수치모델",
    title: "Numerical Weather Prediction model coupling strategy for regional forecast",
    authors: "Hong, S., Lee, S.",
    link: "https://doi.org/",
  },
  {
    type: "논문",
    year: 2025,
    kind: "Non-SCI",
    field: "수치모델",
    title: "전지구예측모델 개발을 위한 검증분석 도구: Korean Integrated Model Analysis",
    authors: "이수현, 홍길동",
    link: "",
  },
  {
    type: "논문",
    year: 2024,
    kind: "SCI(E)",
    field: "자료동화",
    title: "Impact of different scale-aware cumulus parameterizations on KIM",
    authors: "Lee, S., Kim, J.",
    link: "https://doi.org/",
  },

  {
    type: "포스터",
    year: 2025,
    kind: "한국기상학회 가을학술대회",
    field: "수치모델",
    title: "분광요소법 기반 역학코어의 수치 안정성 분석",
    authors: "이수현",
    link: "",
  },

  {
    type: "초록",
    year: 2025,
    kind: "EGU General Assembly",
    field: "수치모델",
    title: "A variable-resolution approach for KIM with a stretched grid",
    authors: "Lee, S.",
    link: "",
  },

];
