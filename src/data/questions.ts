export interface Question {
  id: number;
  intelligence: IntelligenceType;
  text: string;
}

export type IntelligenceType =
  | "linguistic"
  | "logical"
  | "spatial"
  | "bodily"
  | "musical"
  | "interpersonal"
  | "intrapersonal"
  | "naturalist";

export interface Representative {
  name: string;
  title: string;
  reason: string;
}

export interface IntelligenceInfo {
  key: IntelligenceType;
  label: string;
  emoji: string;
  color: string;
  summary: string;
  detail: {
    core: string;
    learningStyle: string;
    strength: string;
    dailyLife: string;
  };
  careers: string[];
  representatives: Representative[];
}

export const intelligenceMap: Record<IntelligenceType, IntelligenceInfo> = {
  linguistic: {
    key: "linguistic",
    label: "언어 지능",
    emoji: "📝",
    color: "#2563EB",
    summary: "말과 글의 힘을 아는 사람. 언어로 세상을 이해하고, 언어로 세상을 움직입니다.",
    detail: {
      core: "언어의 소리, 리듬, 의미에 민감하며, 말과 글을 통해 생각을 정확하게 표현하는 능력이 뛰어납니다. 단어의 미묘한 뉘앙스 차이를 감지하고, 상황에 맞는 표현을 자연스럽게 선택합니다.",
      learningStyle: "읽기, 듣기, 메모하기를 통해 가장 잘 배웁니다. 복잡한 개념도 언어로 정리하면 명확해지고, 토론이나 글쓰기 과정에서 사고가 깊어집니다.",
      strength: "설득력 있는 말하기, 논리적인 글쓰기, 외국어 습득, 복잡한 내용을 쉽게 풀어 설명하는 능력이 강점입니다. 사람들의 마음을 움직이는 언어를 구사할 수 있습니다.",
      dailyLife: "책이나 글을 읽으며 시간 가는 줄 모르고, 대화에서 적확한 표현을 찾으려 노력합니다. 새로운 단어를 발견하면 직접 써보고 싶어지고, 잘 쓴 문장에 감탄하기도 합니다.",
    },
    careers: ["작가", "기자", "변호사", "아나운서", "카피라이터", "교사", "번역가", "콘텐츠 크리에이터"],
    representatives: [
      { name: "한강", title: "소설가, 2024 노벨문학상 수상", reason: "한국인 최초 노벨문학상 수상자로, 강렬한 시적 산문으로 언어의 힘을 세계에 증명했습니다." },
      { name: "유시민", title: "작가, 사회평론가", reason: "명료하고 설득력 있는 글쓰기와 논객으로서의 언어 능력으로 대중과 소통합니다." },
      { name: "김영하", title: "소설가, 한예종 교수", reason: "장르를 넘나드는 언어적 상상력으로 한국 문학의 새 지평을 열었습니다." },
      { name: "손석희", title: "전 JTBC 앵커, 언론인", reason: "정확한 언어와 날카로운 질문으로 한국 저널리즘의 기준을 세웠습니다." },
      { name: "김영철", title: "영어 강사, 방송인", reason: "다개국어 구사 능력과 언어 학습의 대중화에 기여한 인물입니다." },
      { name: "RM (김남준)", title: "BTS 리더, 작사가", reason: "영어 독학과 수백 곡의 작사로 언어적 감각과 표현력을 보여주는 아티스트입니다." },
      { name: "아이유 (이지은)", title: "가수, 배우, 작사가", reason: "직접 쓴 가사의 문학적 깊이와 섬세한 언어 감각으로 인정받는 싱어송라이터입니다." },
    ],
  },
  logical: {
    key: "logical",
    label: "논리수학 지능",
    emoji: "🔢",
    color: "#7C3AED",
    summary: "세상의 원리를 파헤치는 사람. 복잡한 문제 속에서 패턴과 논리를 발견합니다.",
    detail: {
      core: "논리적 추론, 수학적 사고, 과학적 탐구에 뛰어난 능력을 보입니다. 현상의 인과관계를 분석하고, 추상적인 패턴을 인식하며, 체계적으로 문제를 해결하는 것을 즐깁니다.",
      learningStyle: "단계별 분석, 가설-검증, 분류와 비교를 통해 가장 잘 배웁니다. '왜?'라는 질문에서 시작해 근거를 찾아가는 과정 자체에서 지적 쾌감을 느낍니다.",
      strength: "복잡한 문제를 구조화하는 능력, 데이터에서 의미를 추출하는 능력, 논리적 허점을 빠르게 포착하는 능력이 강점입니다. 감이 아닌 근거로 판단합니다.",
      dailyLife: "일상에서 자연스럽게 암산을 하고, 뉴스를 볼 때 통계의 신뢰성을 따지며, 퍼즐이나 전략 게임에 몰입합니다. 규칙이나 절차를 만들면 마음이 편해집니다.",
    },
    careers: ["프로그래머", "데이터 분석가", "회계사", "과학자", "엔지니어", "수학자", "경영 컨설턴트"],
    representatives: [
      { name: "허준이", title: "프린스턴대 수학과 교수, 2022 필즈상 수상", reason: "한국인 최초 필즈상 수상자로, 조합론 분야의 난제를 해결했습니다." },
      { name: "정재승", title: "KAIST 뇌인지과학과 교수", reason: "인간 의사결정을 복잡계 패러다임으로 탐구하는 대표적 과학 커뮤니케이터입니다." },
      { name: "이해진", title: "네이버 창업자", reason: "검색 알고리즘에 대한 깊은 이해를 바탕으로 한국 최대 IT 플랫폼을 구축했습니다." },
      { name: "백진언", title: "고등과학원 수학난제연구소 박사", reason: "60년간 풀리지 않던 '소파 움직이기 문제'를 7년 연구 끝에 해결했습니다." },
      { name: "장대익", title: "가천대학교 학장, 진화학자", reason: "진화학과 과학철학을 아우르는 논리적 사고로 과학적 사고의 확산에 기여합니다." },
      { name: "홍진경", title: "방송인, 사업가 (서울대 식품공학과)", reason: "서울대 출신의 체계적 사고력을 바탕으로 교육 콘텐츠와 식품 사업을 성공시켰습니다." },
      { name: "이장원", title: "가수(펩퍼톤스), 방송인 (KAIST 출신)", reason: "대전과학고·KAIST 출신으로 '문제적 남자'에서 극악 난이도 수리 문제를 풀며 논리력을 입증했습니다." },
    ],
  },
  spatial: {
    key: "spatial",
    label: "공간 지능",
    emoji: "🎨",
    color: "#EC4899",
    summary: "이미지로 사고하는 사람. 머릿속에서 세상을 그리고, 변형하고, 재구성합니다.",
    detail: {
      core: "시각적·공간적 정보를 정확하게 인식하고 변환하는 능력이 뛰어납니다. 머릿속으로 사물을 회전시키거나 입체적으로 그려볼 수 있으며, 색감·비율·구도에 민감하게 반응합니다.",
      learningStyle: "그림, 도표, 다이어그램, 영상 등 시각적 자료를 통해 가장 잘 배웁니다. 텍스트만으로는 이해가 느리지만, 이미지로 변환하면 빠르게 파악합니다.",
      strength: "공간 배치 구상, 시각적 디자인, 방향 감각, 복잡한 구조물의 이해, 그리고 '보이지 않는 것을 머릿속에서 보는' 능력이 강점입니다.",
      dailyLife: "길을 한 번 가면 잘 기억하고, 가구 배치를 머릿속으로 시뮬레이션합니다. 시각적으로 균형이 맞지 않는 것이 보이면 신경이 쓰이고, 지도나 설계도를 직관적으로 읽어냅니다.",
    },
    careers: ["디자이너", "건축가", "사진작가", "영상감독", "일러스트레이터", "파일럿", "게임 개발자"],
    representatives: [
      { name: "봉준호", title: "영화감독, 아카데미 4관왕", reason: "시각적 스토리텔링의 거장으로, 독보적 공간 구성과 영상미를 보여줍니다." },
      { name: "유현준", title: "건축가, 홍익대학교 교수", reason: "공간이 인간 심리에 미치는 영향을 대중에게 알리는 대표적 건축가입니다." },
      { name: "이우환", title: "조각가, 화가", reason: "동양사상과 미니멀리즘을 결합한 독창적 공간 예술로 국제적 명성을 쌓았습니다." },
      { name: "박찬욱", title: "영화감독, 칸 감독상 수상", reason: "독보적 영상미와 공간 구성으로 세계 영화사에 이름을 올린 감독입니다." },
      { name: "승효상", title: "건축가, 이로재 대표", reason: "'빈자의 미학'이라는 독자적 건축 철학을 정립한 한국 건축계의 거장입니다." },
      { name: "지드래곤 (권지용)", title: "가수, 패션 아이콘", reason: "음악뿐 아니라 패션·무대 비주얼 전반을 직접 디자인하는 공간·시각적 감각의 소유자입니다." },
      { name: "나영석", title: "PD, 예능 제작자", reason: "'삼시세끼', '꽃보다' 시리즈 등 독창적 영상 구성과 공간 활용으로 예능의 새 문법을 만들었습니다." },
      { name: "뷔 (김태형)", title: "BTS 멤버, 시각예술 애호가", reason: "미술 전시를 즐기고 직접 그림을 그리며, 사진과 영상의 시각적 구성에 뛰어난 감각을 보여줍니다." },
    ],
  },
  bodily: {
    key: "bodily",
    label: "신체운동 지능",
    emoji: "🏃",
    color: "#F97316",
    summary: "몸으로 세상을 이해하는 사람. 움직임 속에서 배우고, 손끝으로 창조합니다.",
    detail: {
      core: "몸 전체 또는 손과 손가락 같은 신체 일부를 정교하게 사용하는 능력이 뛰어납니다. 자신의 신체를 정확하게 제어하고, 물리적 대상을 능숙하게 다룹니다.",
      learningStyle: "직접 체험하고, 만들고, 움직이면서 가장 잘 배웁니다. 설명만 듣는 것보다 실습이 훨씬 효과적이며, 몸을 움직이면서 사고할 때 아이디어가 잘 떠오릅니다.",
      strength: "운동 능력, 손재주, 동작 모방 능력, 도구 활용 능력이 강점입니다. 자신의 몸 상태를 민감하게 감지하며, 신체적 활동에서 큰 성취감을 느낍니다.",
      dailyLife: "가만히 앉아있기보다 움직일 때 에너지가 돌고, 새로운 동작을 빨리 따라 합니다. 무언가를 손으로 만들거나 고치는 것을 즐기며, 말할 때 자연스럽게 제스처를 사용합니다.",
    },
    careers: ["운동선수", "무용가", "외과의사", "조각가", "요리사", "물리치료사", "소방관"],
    representatives: [
      { name: "손흥민", title: "축구선수, 국가대표 주장", reason: "아시아 선수 최다 프리미어리그 득점 기록을 세운 한국 축구의 상징입니다." },
      { name: "김연아", title: "전 피겨스케이팅 선수", reason: "밴쿠버 올림픽 금메달리스트이자 세계 피겨 역사에 한 획을 그은 선수입니다." },
      { name: "안세영", title: "배드민턴 선수, 2024 올림픽 금메달", reason: "22세에 슈퍼 그랜드슬램을 달성한 현역 최강의 배드민턴 선수입니다." },
      { name: "이정후", title: "야구선수, 샌프란시스코 자이언츠", reason: "타격 천재로 불리며 메이저리그에서 활약하는 한국 대표 야구선수입니다." },
      { name: "박태환", title: "전 수영 선수", reason: "한국 수영 최초 올림픽 금메달리스트로 물속에서 뛰어난 신체 감각을 보여줬습니다." },
      { name: "정국 (전정국)", title: "BTS 멤버, 가수", reason: "'운동신경의 황금막내'로 불리며 댄스·운동 등 신체 활용 능력이 탁월한 아티스트입니다." },
      { name: "비 (정지훈)", title: "가수, 배우", reason: "강렬한 무대 퍼포먼스와 댄스로 아시아 스타의 기준을 세운 엔터테이너입니다." },
      { name: "지민 (박지민)", title: "BTS 멤버, 댄서", reason: "부산예술고 무용과 수석 입학, 현대무용 기반의 압도적 퍼포먼스를 보여주는 아티스트입니다." },
      { name: "황희찬", title: "축구선수, 울버햄튼", reason: "폭발적 스피드와 돌파력으로 프리미어리그에서 활약하는 신체 능력의 소유자입니다." },
    ],
  },
  musical: {
    key: "musical",
    label: "음악 지능",
    emoji: "🎵",
    color: "#EAB308",
    summary: "소리의 세계에 민감한 사람. 멜로디와 리듬 속에서 감정과 의미를 읽어냅니다.",
    detail: {
      core: "음정, 리듬, 음색을 정확하게 인식하고 구분하는 능력이 뛰어납니다. 소리의 미세한 차이를 감지하며, 음악을 통해 감정을 표현하거나 느끼는 데 탁월합니다.",
      learningStyle: "리듬이나 멜로디와 함께 학습할 때 가장 잘 기억하며, 배경 음악이 집중력에 영향을 줍니다. 소리의 패턴을 통해 정보를 자연스럽게 구조화합니다.",
      strength: "음감, 리듬감, 음악적 기억력, 분위기에 맞는 음악 선택 능력이 강점입니다. 음악적 불협화음을 즉시 감지하며, 감정을 소리로 표현하는 능력이 있습니다.",
      dailyLife: "일상에서 자연스럽게 흥얼거리고, 음악을 들으면 감정이나 장면이 선명하게 떠오릅니다. 음이 어긋나면 바로 알아차리고, 상황에 딱 맞는 음악을 고르는 것을 잘합니다.",
    },
    careers: ["음악가", "작곡가", "사운드 엔지니어", "음악치료사", "DJ", "성우", "팟캐스트 PD"],
    representatives: [
      { name: "방시혁", title: "HYBE 의장, 작곡가/프로듀서", reason: "BTS를 세계적 아티스트로 키운 프로듀서이자 수많은 히트곡의 작곡가입니다." },
      { name: "이루마", title: "피아니스트, 작곡가", reason: "'River Flows in You' 등으로 전 세계적 사랑을 받는 뉴에이지 피아니스트입니다." },
      { name: "조수미", title: "소프라노, 성악가", reason: "세계 주요 오페라 하우스에서 활동한 한국이 낳은 세계적 소프라노입니다." },
      { name: "양희은", title: "가수, 싱어송라이터", reason: "'아침이슬' 등으로 50년 넘게 한국인의 감성을 노래해 온 포크 음악의 상징입니다." },
      { name: "임영웅", title: "가수", reason: "트로트부터 팝까지 장르를 넘나드는 음악적 감각과 대중적 영향력을 보여줍니다." },
      { name: "아이유 (이지은)", title: "가수, 작사/작곡가", reason: "뛰어난 음감과 직접 작사·작곡하는 음악적 재능으로 세대를 아우르는 아티스트입니다." },
      { name: "로제 (박채영)", title: "BLACKPINK 멤버, 솔로 가수", reason: "독보적 음색과 음악적 감성으로 글로벌 솔로 아티스트로 자리매김했습니다." },
      { name: "슈가 (민윤기)", title: "BTS 멤버, 프로듀서", reason: "17세부터 작곡·편곡을 익혀 BTS 메인 프로듀서로 활동하며 외부 프로듀싱도 성공시킨 음악 창작자입니다." },
      { name: "이무진", title: "싱어송라이터", reason: "'신호등' 등을 직접 작사·작곡하고 다양한 아티스트의 프로듀서로 멜로디 구성 능력을 인정받고 있습니다." },
    ],
  },
  interpersonal: {
    key: "interpersonal",
    label: "대인관계 지능",
    emoji: "🤝",
    color: "#10B981",
    summary: "사람의 마음을 읽는 사람. 관계 속에서 에너지를 얻고, 함께할 때 빛납니다.",
    detail: {
      core: "타인의 감정, 의도, 동기를 정확하게 파악하는 능력이 뛰어납니다. 표정, 말투, 몸짓 등 비언어적 신호를 민감하게 읽어내며, 사람들과 효과적으로 소통하고 협력합니다.",
      learningStyle: "토론, 그룹 활동, 협력 프로젝트를 통해 가장 잘 배웁니다. 다른 사람의 관점에서 생각하는 것이 자연스럽고, 가르치면서 자신도 깊이 이해하게 됩니다.",
      strength: "공감 능력, 갈등 조율, 팀 빌딩, 리더십이 강점입니다. 상대에 따라 소통 방식을 유연하게 조절하며, 사람들이 편안하게 마음을 열도록 만드는 분위기를 형성합니다.",
      dailyLife: "사람들과 어울린 후 에너지가 충전되고, 주변 사람들이 고민이 있을 때 자연스럽게 찾아옵니다. 모임에서 분위기를 살피며, 의견 대립이 있으면 중재자 역할을 맡게 됩니다.",
    },
    careers: ["상담사", "교사", "마케터", "인사담당자", "외교관", "사회복지사", "영업 전문가"],
    representatives: [
      { name: "유재석", title: "MC, 방송인", reason: "누구와도 자연스럽게 소통하고 상대를 빛나게 하는 국민 MC입니다." },
      { name: "백종원", title: "요리 연구가, 더본코리아 대표", reason: "음식을 매개로 사람들의 마음을 열고 소통하는 뛰어난 리더십을 보여줍니다." },
      { name: "윤여정", title: "배우, 아카데미 여우조연상 수상", reason: "위트 있는 소통과 세대를 초월한 공감력으로 전 세계인의 마음을 사로잡았습니다." },
      { name: "오은영", title: "정신건강의학과 전문의, 방송인", reason: "아이와 부모의 마음을 읽어내는 탁월한 공감 능력의 '국민 육아 멘토'입니다." },
      { name: "신동엽", title: "MC, 방송인", reason: "누구와도 스스럼없이 소통하며 상대의 편안함을 이끌어내는 진행 스타일의 소유자입니다." },
      { name: "이영지", title: "래퍼, 방송인", reason: "솔직하고 유쾌한 소통으로 '차린건 쥐뿔도 없지만' 등에서 세대를 초월한 공감력을 보여줍니다." },
      { name: "장도연", title: "코미디언, 방송인", reason: "상대의 말에 귀 기울이고 공감하는 따뜻한 진행 스타일로 사랑받는 MC입니다." },
      { name: "안유진", title: "가수(IVE 리더), 방송인", reason: "멤버를 먼저 챙기는 리더십과 예능에서의 뛰어난 소통 능력으로 사랑받는 리더입니다." },
    ],
  },
  intrapersonal: {
    key: "intrapersonal",
    label: "자기이해 지능",
    emoji: "🧘",
    color: "#06B6D4",
    summary: "내면을 깊이 탐구하는 사람. 자신을 가장 잘 알고, 자기만의 기준으로 삶을 설계합니다.",
    detail: {
      core: "자신의 감정, 동기, 욕구, 강점과 약점을 정확하게 이해하는 능력이 뛰어납니다. 자기 내면에 대한 명확한 모델을 갖고 있으며, 이를 바탕으로 효과적으로 자기 삶을 조율합니다.",
      learningStyle: "혼자 성찰하고 정리하는 시간을 통해 가장 잘 배웁니다. 일기, 메모, 자기 대화 등을 통해 생각을 구조화하며, 자기 페이스로 학습할 때 가장 높은 효율을 보입니다.",
      strength: "자기 인식, 감정 조절, 목표 설정과 실행, 독립적 판단 능력이 강점입니다. 외부의 압력에 흔들리지 않고 자기 가치관에 따라 결정을 내릴 수 있습니다.",
      dailyLife: "하루를 돌아보며 자신의 행동을 되짚어보고, 감정의 원인을 분석합니다. 혼자만의 시간이 반드시 필요하며, 외부 보상 없이도 스스로 동기를 부여하고 실행합니다.",
    },
    careers: ["심리학자", "철학자", "연구원", "창업가", "작가", "명상 지도자", "코치"],
    representatives: [
      { name: "이효리", title: "가수, 요가 강사", reason: "최정상에서 제주 이주, 요가원 개원까지 자기 내면의 목소리에 따라 삶을 바꿔온 인물입니다." },
      { name: "최진석", title: "서강대 철학과 명예교수", reason: "노자와 장자 철학을 통해 자기 탐구와 성찰의 가치를 대중에게 전파하는 철학자입니다." },
      { name: "혜민 스님", title: "승려, 작가", reason: "베스트셀러를 통해 자기 내면을 들여다보는 성찰의 가치를 수백만 독자에게 전달했습니다." },
      { name: "김미경", title: "강연가, MKYU 대표", reason: "자기 이해와 성장의 메시지로 수십만 명에게 자기 인생 설계의 힘을 전하고 있습니다." },
      { name: "김수영", title: "명상 지도자, 작가", reason: "마음챙김 명상의 한국 보급에 기여하며 자기 인식과 내면 탐구를 가르치고 있습니다." },
      { name: "RM (김남준)", title: "BTS 리더", reason: "혼자 미술관을 찾고 독서하며, 내면 성찰을 담은 솔로 앨범으로 자기이해의 깊이를 보여줍니다." },
      { name: "수지 (배수지)", title: "배우, 가수", reason: "대중의 기대보다 자신의 기준으로 작품을 선택하며 꾸준히 자기만의 길을 걸어온 인물입니다." },
      { name: "손석구", title: "배우", reason: "자신의 부족함을 인정하고 성장하는 자기 성찰적 인터뷰와 삶의 태도로 주목받는 배우입니다." },
      { name: "박서준", title: "배우", reason: "번아웃 이후 나이에 맞는 선택을 고민하며 자기 성찰적 커리어 관리를 실천하는 인물입니다." },
    ],
  },
  naturalist: {
    key: "naturalist",
    label: "자연친화 지능",
    emoji: "🌿",
    color: "#22C55E",
    summary: "자연의 언어를 이해하는 사람. 생명과 환경의 패턴을 읽고, 자연과 교감합니다.",
    detail: {
      core: "자연계의 동식물, 기후, 지형 등을 인식하고 분류하는 능력이 뛰어납니다. 자연 속의 미세한 변화를 감지하며, 생명체와 환경 사이의 관계를 직관적으로 이해합니다.",
      learningStyle: "직접 관찰하고, 분류하고, 비교하면서 가장 잘 배웁니다. 자연 속에서의 체험 학습이 효과적이며, 실물을 보고 만지며 배울 때 깊이 있는 이해에 도달합니다.",
      strength: "종 구별 능력, 환경 변화 감지, 패턴 인식, 생태계에 대한 직관적 이해가 강점입니다. 자연물의 질감, 향, 색의 미세한 차이를 잘 구분합니다.",
      dailyLife: "계절과 날씨의 작은 변화를 먼저 알아차리고, 주변의 나무나 꽃의 이름이 궁금해집니다. 자연 속에 있으면 에너지가 회복되고, 동식물을 돌보는 일에서 보람을 느낍니다.",
    },
    careers: ["생물학자", "수의사", "환경운동가", "농업 전문가", "조경사", "기상학자", "생태 교육가"],
    representatives: [
      { name: "최재천", title: "이화여대 석좌교수, 생명다양성재단 이사장", reason: "생태학과 공존의 가치를 대중에게 알리는 한국 대표 생물학자입니다." },
      { name: "황경택", title: "생태작가, 자연해설가", reason: "숲과 자연생태계를 관찰하고 만화와 글로 풀어내는 대표적 자연친화 인물입니다." },
      { name: "최열", title: "환경운동가, 환경재단 이사장", reason: "한국 환경운동의 선구자로 기후위기 대응과 환경 보전을 이끌어왔습니다." },
      { name: "빠니보틀", title: "여행 유튜버", reason: "전 세계의 자연과 문화를 탐험하며 자연에 대한 호기심을 불러일으키는 크리에이터입니다." },
      { name: "신혜우", title: "수의사, TV 동물농장 출연", reason: "동물 진료와 방송을 통해 생명 존중 의식을 대중에게 전하고 있습니다." },
      { name: "이상순", title: "음악가, 제주 이주민", reason: "제주에서 자연과 함께하는 삶을 선택하고, 텃밭 가꾸기와 자연 속 생활을 실천하고 있습니다." },
      { name: "성시경", title: "가수, 요리 유튜버", reason: "자연 식재료에 대한 깊은 관심과 감각으로 요리 콘텐츠를 통해 자연의 맛을 전달합니다." },
      { name: "유해진", title: "배우", reason: "'텐트 밖은 유럽' 등 캠핑 예능의 중심 인물로, 낚시와 캠핑을 즐기는 대표적 자연인 캐릭터입니다." },
      { name: "조윤희", title: "배우, 동물 보호 활동가", reason: "유기견 보호 봉사와 입양에 앞장서며 반려동물과 함께 생활하는 동물 사랑의 아이콘입니다." },
    ],
  },
};

export const questions: Question[] = [
  // 언어 지능 (Linguistic) — 출처: Gardner(1983) 하위능력 + MIDAS Rhetorical/Written/Expressive 하위척도
  { id: 1, intelligence: "linguistic", text: "상대를 설득할 때 적절한 단어를 골라 쓰는 데 신경을 많이 쓴다." },
  { id: 2, intelligence: "linguistic", text: "들은 이야기나 읽은 문장을 꽤 오래 기억하는 편이다." },
  { id: 3, intelligence: "linguistic", text: "복잡한 내용을 쉬운 말로 풀어 설명하는 것을 잘한다는 말을 듣는다." },
  { id: 4, intelligence: "linguistic", text: "같은 뜻이라도 표현에 따라 느낌이 달라지는 점이 흥미롭다." },
  { id: 5, intelligence: "linguistic", text: "글을 읽거나 쓸 때 시간이 빠르게 지나간다." },
  { id: 6, intelligence: "linguistic", text: "새로운 단어나 표현을 알게 되면 직접 사용해보고 싶어진다." },
  { id: 7, intelligence: "linguistic", text: "외국어의 단어나 문장 구조를 비교적 빨리 파악하는 편이다." },

  // 논리수학 지능 (Logical-Mathematical) — 출처: Gardner(1983) + MIDAS School Math/Logic Games/Problem-Solving
  { id: 8, intelligence: "logical", text: "어떤 결과를 보면 그 원인이 무엇인지 끝까지 추적해보고 싶다." },
  { id: 9, intelligence: "logical", text: "숫자나 데이터에서 규칙이나 패턴을 찾아내는 것이 재미있다." },
  { id: 10, intelligence: "logical", text: "누군가의 주장에서 논리적 허점이 보이면 바로 알아차린다." },
  { id: 11, intelligence: "logical", text: "일의 순서를 정하거나 규칙을 만들면 마음이 편해진다." },
  { id: 12, intelligence: "logical", text: "퍼즐, 추리, 전략 게임에 몰입하는 편이다." },
  { id: 13, intelligence: "logical", text: "궁금한 것이 있으면 직접 조건을 바꿔가며 확인해본다." },
  { id: 14, intelligence: "logical", text: "일상에서 암산이나 수량 어림을 자연스럽게 하는 편이다." },

  // 공간 지능 (Spatial) — 출처: Gardner(1983) Mental imagery/rotation + MIDAS Spatial Awareness/Art Design
  { id: 15, intelligence: "spatial", text: "글만 읽어도 머릿속에 장면이 선명하게 그려진다." },
  { id: 16, intelligence: "spatial", text: "물체를 다른 각도에서 보면 어떻게 보일지 쉽게 상상할 수 있다." },
  { id: 17, intelligence: "spatial", text: "방이나 공간의 가구 배치를 머릿속으로 미리 시뮬레이션해본다." },
  { id: 18, intelligence: "spatial", text: "말보다 그림이나 도표로 설명할 때 더 명확하게 전달할 수 있다." },
  { id: 19, intelligence: "spatial", text: "처음 가본 곳에서도 방향 감각을 잘 유지하는 편이다." },
  { id: 20, intelligence: "spatial", text: "색감, 비율, 구도 같은 시각적 균형이 맞지 않으면 바로 눈에 띈다." },
  { id: 21, intelligence: "spatial", text: "지도, 설계도, 다이어그램을 보면 빠르게 이해할 수 있다." },

  // 신체운동 지능 (Bodily-Kinesthetic) — 출처: Gardner(1983) + MIDAS Athletic/Dexterity/Working with Objects
  { id: 22, intelligence: "bodily", text: "달리기, 수영 등 몸 전체를 쓰는 활동에서 활력을 느낀다." },
  { id: 23, intelligence: "bodily", text: "작은 부품을 조립하거나 정밀한 손작업을 잘 해내는 편이다." },
  { id: 24, intelligence: "bodily", text: "다른 사람의 동작이나 자세를 보고 비교적 정확하게 따라 할 수 있다." },
  { id: 25, intelligence: "bodily", text: "말할 때 몸짓이나 제스처를 자연스럽게 많이 사용한다." },
  { id: 26, intelligence: "bodily", text: "내 몸의 자세나 균형 변화를 민감하게 알아차린다." },
  { id: 27, intelligence: "bodily", text: "손으로 물건을 만들거나 도구를 다루는 일에서 성취감을 느낀다." },
  { id: 28, intelligence: "bodily", text: "설명을 듣는 것보다 직접 몸으로 해봐야 제대로 이해가 된다." },

  // 음악 지능 (Musical) — 출처: Gardner(1983) pitch/rhythm/timbre + MIDAS Vocal/Appreciation/Composer
  { id: 29, intelligence: "musical", text: "노래를 한두 번만 들어도 멜로디를 따라 부를 수 있다." },
  { id: 30, intelligence: "musical", text: "음악이 들리면 자연스럽게 박자에 맞춰 몸이 움직인다." },
  { id: 31, intelligence: "musical", text: "같은 곡이라도 연주하는 악기에 따라 느낌이 다르다는 것을 잘 감지한다." },
  { id: 32, intelligence: "musical", text: "음악을 들으면 특정 감정이나 장면이 생생하게 떠오른다." },
  { id: 33, intelligence: "musical", text: "일상에서 자기도 모르게 흥얼거리거나 리듬을 타는 일이 잦다." },
  { id: 34, intelligence: "musical", text: "음이 살짝 어긋나거나 박자가 틀리면 바로 귀에 거슬린다." },
  { id: 35, intelligence: "musical", text: "상황이나 분위기에 딱 맞는 음악을 고르는 데 자신이 있다." },

  // 대인관계 지능 (Interpersonal) — 출처: Gardner(1983) + MIDAS Persuasion/Sensitivity/Social Leadership
  { id: 36, intelligence: "interpersonal", text: "상대가 말하지 않아도 표정이나 분위기로 감정 상태를 알아차린다." },
  { id: 37, intelligence: "interpersonal", text: "의견이 충돌하는 상황에서 양쪽의 입장을 조율하는 역할을 자주 맡는다." },
  { id: 38, intelligence: "interpersonal", text: "혼자보다 여럿이 함께 할 때 더 좋은 결과를 낸다고 느낀다." },
  { id: 39, intelligence: "interpersonal", text: "모임에서 자연스럽게 분위기를 이끌거나 의견을 정리하게 된다." },
  { id: 40, intelligence: "interpersonal", text: "주변 사람들이 고민이 있을 때 나를 먼저 찾아오는 편이다." },
  { id: 41, intelligence: "interpersonal", text: "상대에 따라 말투나 설명 방식을 자연스럽게 바꾸는 편이다." },
  { id: 42, intelligence: "interpersonal", text: "사람들과 어울리고 나면 에너지가 충전되는 느낌이 든다." },

  // 자기이해 지능 (Intrapersonal) — 출처: Gardner(1983) + MIDAS Personal Knowledge/Effectiveness
  { id: 43, intelligence: "intrapersonal", text: "내가 왜 그런 감정을 느끼는지 스스로 설명할 수 있다." },
  { id: 44, intelligence: "intrapersonal", text: "화가 나거나 불안할 때 나만의 방법으로 마음을 가라앉힐 수 있다." },
  { id: 45, intelligence: "intrapersonal", text: "하루를 돌아보며 내 행동이나 판단을 되짚어보는 습관이 있다." },
  { id: 46, intelligence: "intrapersonal", text: "내가 잘하는 것과 부족한 것을 비교적 정확하게 알고 있다." },
  { id: 47, intelligence: "intrapersonal", text: "중요한 결정을 내릴 때 남의 기대보다 나의 가치관을 먼저 생각한다." },
  { id: 48, intelligence: "intrapersonal", text: "외부의 보상이 없어도 스스로 목표를 세우고 꾸준히 실행하는 편이다." },
  { id: 49, intelligence: "intrapersonal", text: "혼자 생각을 정리하는 시간이 반드시 필요하다." },

  // 자연친화 지능 (Naturalist) — 출처: Gardner(1999) + MIDAS Animal Care/Plant Care/Science
  { id: 50, intelligence: "naturalist", text: "주변의 나무, 꽃, 새 등의 이름이나 종류를 구별할 수 있다." },
  { id: 51, intelligence: "naturalist", text: "계절, 날씨, 기온의 작은 변화를 민감하게 알아차린다." },
  { id: 52, intelligence: "naturalist", text: "자연 현상에서 규칙이나 원리를 찾으려는 습관이 있다." },
  { id: 53, intelligence: "naturalist", text: "환경 보호나 생태계 문제에 관심이 많고 실천하려 한다." },
  { id: 54, intelligence: "naturalist", text: "동물이나 식물을 돌보는 일에서 보람을 느낀다." },
  { id: 55, intelligence: "naturalist", text: "식재료, 흙, 나무 등 자연에서 온 것들의 질감이나 차이를 잘 구분한다." },
  { id: 56, intelligence: "naturalist", text: "자연 속에 있으면 머리가 맑아지고 에너지가 회복되는 것을 느낀다." },
];
