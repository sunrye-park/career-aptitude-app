import { type IntelligenceType } from "./questions";

export interface MixCareer {
  keys: [IntelligenceType, IntelligenceType, IntelligenceType];
  title: string;
  description: string;
  careers: string[];
}

// 조합 키를 정렬된 문자열로 변환하여 조회에 사용
export function getMixKey(a: IntelligenceType, b: IntelligenceType, c: IntelligenceType): string {
  return [a, b, c].sort().join("+");
}

// 8C3 = 56개 조합
const mixCareersData: MixCareer[] = [
  // === linguistic 포함 조합 (7C2 = 21개) ===
  { keys: ["linguistic", "logical", "spatial"], title: "전략적 시각 커뮤니케이터", description: "논리적 분석을 시각적으로 구조화하고, 이를 명확한 언어로 전달하는 능력의 조합입니다.", careers: ["UX 라이터", "데이터 저널리스트", "기술 문서 작성자", "인포그래픽 디자이너"] },
  { keys: ["linguistic", "logical", "bodily"], title: "실전형 교육 전문가", description: "체계적 논리와 언어적 전달력을 갖추고, 직접 시범을 보이며 가르치는 능력의 조합입니다.", careers: ["스포츠 해설가", "의학 교육자", "기술 트레이너", "과학 실험 교육가"] },
  { keys: ["linguistic", "logical", "musical"], title: "분석적 콘텐츠 크리에이터", description: "논리적 구조 위에 언어와 소리의 감각을 더해 매력적인 콘텐츠를 만드는 조합입니다.", careers: ["팟캐스트 PD", "음악 평론가", "교육 콘텐츠 기획자", "오디오북 프로듀서"] },
  { keys: ["linguistic", "logical", "interpersonal"], title: "설득의 전략가", description: "논리적 근거 위에 언어적 설득력과 대인 감각을 결합해 사람을 움직이는 조합입니다.", careers: ["변호사", "정책 컨설턴트", "협상 전문가", "로비스트", "PR 전략가"] },
  { keys: ["linguistic", "logical", "intrapersonal"], title: "사유하는 분석가", description: "깊은 자기 성찰을 논리적으로 구조화하고 언어로 표현하는 조합입니다.", careers: ["철학자", "논설위원", "학술 연구자", "비평가", "에세이스트"] },
  { keys: ["linguistic", "logical", "naturalist"], title: "과학 커뮤니케이터", description: "자연과 과학의 원리를 논리적으로 이해하고 대중이 이해할 수 있는 언어로 전달하는 조합입니다.", careers: ["과학 저널리스트", "다큐멘터리 작가", "환경 정책 분석가", "과학 유튜버"] },
  { keys: ["linguistic", "spatial", "bodily"], title: "체험형 스토리텔러", description: "공간감과 신체 표현을 활용해 생동감 있는 이야기를 만들어내는 조합입니다.", careers: ["연극 연출가", "여행 작가", "체험 전시 기획자", "VR 콘텐츠 기획자"] },
  { keys: ["linguistic", "spatial", "musical"], title: "멀티미디어 아티스트", description: "시각, 청각, 언어를 자유롭게 넘나들며 종합적인 예술 작품을 만드는 조합입니다.", careers: ["뮤지컬 연출가", "광고 크리에이티브 디렉터", "영화 각본가", "멀티미디어 아티스트"] },
  { keys: ["linguistic", "spatial", "interpersonal"], title: "비주얼 소통 전문가", description: "시각적 감각과 언어적 표현력으로 사람들과 효과적으로 소통하는 조합입니다.", careers: ["프레젠테이션 디자이너", "브랜드 매니저", "전시 큐레이터", "소셜미디어 매니저"] },
  { keys: ["linguistic", "spatial", "intrapersonal"], title: "내면을 시각화하는 창작자", description: "자기 내면의 세계를 시각적 이미지와 언어로 표현하는 조합입니다.", careers: ["소설가", "그래픽 노블 작가", "아트 디렉터", "개인 브랜딩 전문가"] },
  { keys: ["linguistic", "spatial", "naturalist"], title: "자연 이야기꾼", description: "자연의 아름다움을 시각적으로 포착하고 언어로 전달하는 조합입니다.", careers: ["자연 다큐 작가", "생태 일러스트레이터", "환경 매거진 편집장", "자연사 박물관 해설사"] },
  { keys: ["linguistic", "bodily", "musical"], title: "무대 위의 이야기꾼", description: "몸과 목소리, 언어를 동시에 활용해 무대에서 관객을 사로잡는 조합입니다.", careers: ["뮤지컬 배우", "래퍼", "성우", "연극배우", "MC"] },
  { keys: ["linguistic", "bodily", "interpersonal"], title: "현장형 리더", description: "현장에서 직접 뛰며 소통하고, 팀을 이끌어 성과를 만들어내는 조합입니다.", careers: ["스포츠 감독", "이벤트 기획자", "레크리에이션 강사", "군 장교"] },
  { keys: ["linguistic", "bodily", "intrapersonal"], title: "자기표현의 장인", description: "자기 내면을 몸과 언어로 진정성 있게 표현하는 조합입니다.", careers: ["자서전 작가", "요가 강사", "퍼포먼스 아티스트", "명상 지도자"] },
  { keys: ["linguistic", "bodily", "naturalist"], title: "체험 교육 전문가", description: "자연 속에서 직접 체험하며 이를 언어로 풀어내는 교육 능력의 조합입니다.", careers: ["숲 해설가", "생태 체험 교육자", "아웃도어 가이드", "농촌 체험 기획자"] },
  { keys: ["linguistic", "musical", "interpersonal"], title: "감성 소통의 달인", description: "음악적 감성과 언어적 표현력으로 사람들의 마음을 움직이는 조합입니다.", careers: ["싱어송라이터", "음악 치료사", "라디오 DJ", "웨딩 플래너"] },
  { keys: ["linguistic", "musical", "intrapersonal"], title: "내면의 소리를 쓰는 사람", description: "자기 내면의 감정을 음악과 언어로 예술적으로 승화시키는 조합입니다.", careers: ["작사가", "시인", "음악 칼럼니스트", "사운드 아티스트"] },
  { keys: ["linguistic", "musical", "naturalist"], title: "자연의 소리 전달자", description: "자연의 소리와 리듬을 포착하고, 이를 음악과 언어로 표현하는 조합입니다.", careers: ["환경 음악가", "자연 사운드 디자이너", "생태 팟캐스터", "힐링 음악 기획자"] },
  { keys: ["linguistic", "interpersonal", "intrapersonal"], title: "깊이 있는 소통 전문가", description: "자기 이해를 바탕으로 타인과 진정성 있는 소통을 이끌어내는 조합입니다.", careers: ["심리 상담사", "코칭 전문가", "인터뷰어", "리더십 트레이너"] },
  { keys: ["linguistic", "interpersonal", "naturalist"], title: "공동체 이야기꾼", description: "사람과 자연의 이야기를 엮어 공동체의 가치를 전달하는 조합입니다.", careers: ["지역 활동가", "사회적 기업가", "환경 교육 강사", "커뮤니티 매니저"] },
  { keys: ["linguistic", "intrapersonal", "naturalist"], title: "성찰하는 자연 작가", description: "자연 속에서의 성찰을 깊이 있는 언어로 풀어내는 조합입니다.", careers: ["자연 에세이스트", "명상 콘텐츠 작가", "웰니스 블로거", "환경 칼럼니스트"] },

  // === logical 포함 (linguistic 제외) 조합 (6C2 = 15개) ===
  { keys: ["logical", "spatial", "bodily"], title: "정밀 설계자", description: "논리적 사고와 공간 감각, 정교한 손기술을 결합해 정밀한 결과물을 만드는 조합입니다.", careers: ["외과의사", "로봇 엔지니어", "산업 디자이너", "항공 엔지니어"] },
  { keys: ["logical", "spatial", "musical"], title: "패턴의 마스터", description: "시각적·청각적·수학적 패턴을 동시에 인식하고 창조하는 조합입니다.", careers: ["게임 개발자", "사운드 엔지니어", "알고리즘 아티스트", "건축 음향 설계사"] },
  { keys: ["logical", "spatial", "interpersonal"], title: "전략적 디자인 리더", description: "논리적 분석과 시각적 감각으로 팀을 이끌며 문제를 해결하는 조합입니다.", careers: ["UX/UI 디렉터", "프로덕트 매니저", "경영 컨설턴트", "도시 계획가"] },
  { keys: ["logical", "spatial", "intrapersonal"], title: "독립적 시스템 설계자", description: "자기만의 기준으로 논리적이고 시각적으로 완성도 높은 시스템을 설계하는 조합입니다.", careers: ["소프트웨어 아키텍트", "건축가", "데이터 시각화 전문가", "독립 게임 개발자"] },
  { keys: ["logical", "spatial", "naturalist"], title: "자연과학 탐구자", description: "자연의 패턴을 논리적으로 분석하고 시각적으로 모델링하는 조합입니다.", careers: ["지질학자", "천문학자", "기후 데이터 분석가", "생태 지도 제작자"] },
  { keys: ["logical", "bodily", "musical"], title: "리듬과 정밀의 장인", description: "논리적 체계 위에 신체적 정밀함과 음악적 감각을 결합하는 조합입니다.", careers: ["악기 제작자", "사운드 테크니션", "스포츠 분석관", "댄스 안무가"] },
  { keys: ["logical", "bodily", "interpersonal"], title: "전술적 팀 리더", description: "논리적 전략과 신체적 실행력, 팀 관리 능력을 겸비한 조합입니다.", careers: ["스포츠 감독", "응급 구조 지휘관", "프로젝트 매니저", "군사 전략가"] },
  { keys: ["logical", "bodily", "intrapersonal"], title: "자기주도 실험가", description: "자기 페이스로 논리적 가설을 세우고 직접 실험하며 검증하는 조합입니다.", careers: ["실험 과학자", "발명가", "1인 메이커", "바이오해커"] },
  { keys: ["logical", "bodily", "naturalist"], title: "현장 과학자", description: "자연 현장에서 직접 데이터를 수집하고 논리적으로 분석하는 조합입니다.", careers: ["야외 생물학자", "고고학자", "해양 연구원", "산림 관리관"] },
  { keys: ["logical", "musical", "interpersonal"], title: "음악 비즈니스 전략가", description: "음악적 감각과 논리적 분석력으로 사람들과 협업하며 프로젝트를 이끄는 조합입니다.", careers: ["음악 프로듀서", "엔터 기획사 A&R", "음악 축제 기획자", "에듀테크 개발자"] },
  { keys: ["logical", "musical", "intrapersonal"], title: "분석적 음악 창작자", description: "논리적 구조와 내면의 감성을 결합해 독자적인 음악 세계를 만드는 조합입니다.", careers: ["작곡가", "전자음악 프로듀서", "음악 이론가", "사운드 디자이너"] },
  { keys: ["logical", "musical", "naturalist"], title: "자연의 소리 과학자", description: "자연의 소리 패턴을 과학적으로 분석하고 이해하는 조합입니다.", careers: ["음향생태학자", "동물행동학자", "환경 소음 분석가", "바이오어쿠스틱 연구원"] },
  { keys: ["logical", "interpersonal", "intrapersonal"], title: "통찰의 조언자", description: "자기 이해와 타인 이해를 논리적 프레임으로 통합하는 조합입니다.", careers: ["심리학 연구자", "경영 코치", "조직 개발 컨설턴트", "행동경제학자"] },
  { keys: ["logical", "interpersonal", "naturalist"], title: "지속가능 전략가", description: "사람과 자연의 균형을 논리적으로 설계하고 이해관계자를 조율하는 조합입니다.", careers: ["ESG 컨설턴트", "환경 정책 전문가", "지속가능경영 전략가", "사회적 기업가"] },
  { keys: ["logical", "intrapersonal", "naturalist"], title: "독립 연구자", description: "자연에 대한 호기심을 논리적으로 탐구하고 독립적으로 연구하는 조합입니다.", careers: ["생태학 연구원", "환경 데이터 사이언티스트", "독립 연구자", "자연사 연구자"] },

  // === spatial 포함 (linguistic, logical 제외) 조합 (5C2 = 10개) ===
  { keys: ["spatial", "bodily", "musical"], title: "종합 퍼포머", description: "공간, 신체, 소리를 동시에 활용하는 종합적 퍼포먼스 능력의 조합입니다.", careers: ["뮤지컬 배우", "서커스 아티스트", "무대 연출가", "뮤직비디오 감독"] },
  { keys: ["spatial", "bodily", "interpersonal"], title: "체험 공간 설계자", description: "사람들의 행동과 동선을 고려한 공간을 설계하고 운영하는 조합입니다.", careers: ["테마파크 디자이너", "스포츠 시설 기획자", "인테리어 디자이너", "체험관 설계자"] },
  { keys: ["spatial", "bodily", "intrapersonal"], title: "몰입형 창작자", description: "자기만의 세계관을 공간과 신체를 통해 구현하는 조합입니다.", careers: ["조각가", "도예가", "설치미술가", "1인 공방 운영자"] },
  { keys: ["spatial", "bodily", "naturalist"], title: "자연 공간 디자이너", description: "자연에 대한 이해를 바탕으로 공간을 디자인하고 직접 만드는 조합입니다.", careers: ["조경 디자이너", "정원사", "친환경 건축가", "생태 공원 설계사"] },
  { keys: ["spatial", "musical", "interpersonal"], title: "감각적 경험 디자이너", description: "시각과 청각을 결합해 사람들에게 감동적인 경험을 선사하는 조합입니다.", careers: ["공연 연출가", "이벤트 디자이너", "전시 기획자", "VJ/영상 아티스트"] },
  { keys: ["spatial", "musical", "intrapersonal"], title: "감성 예술가", description: "내면의 감정을 시각과 소리의 예술로 표현하는 조합입니다.", careers: ["뮤직비디오 감독", "미디어 아티스트", "앰비언트 음악가", "독립 영화감독"] },
  { keys: ["spatial", "musical", "naturalist"], title: "자연 감성 아티스트", description: "자연의 풍경과 소리에서 영감을 받아 예술 작품을 만드는 조합입니다.", careers: ["풍경 사진작가", "자연 영상 감독", "환경 미디어 아티스트", "사운드스케이프 디자이너"] },
  { keys: ["spatial", "interpersonal", "intrapersonal"], title: "공감 디자이너", description: "자기 이해와 타인 이해를 바탕으로 사람 중심의 디자인을 하는 조합입니다.", careers: ["서비스 디자이너", "UX 리서처", "공간 심리 컨설턴트", "힐링 공간 디자이너"] },
  { keys: ["spatial", "interpersonal", "naturalist"], title: "커뮤니티 공간 기획자", description: "사람과 자연이 어우러지는 공간을 기획하고 운영하는 조합입니다.", careers: ["커뮤니티 가든 기획자", "에코 리조트 디자이너", "마을 만들기 전문가", "친환경 공간 컨설턴트"] },
  { keys: ["spatial", "intrapersonal", "naturalist"], title: "자연 속 명상가", description: "자연의 아름다움을 시각적으로 포착하며 내면의 평화를 찾는 조합입니다.", careers: ["자연 사진작가", "명상 공간 디자이너", "자연 치유 프로그램 기획자", "생태 아티스트"] },

  // === bodily 포함 (linguistic, logical, spatial 제외) 조합 (4C2 = 6개) ===
  { keys: ["bodily", "musical", "interpersonal"], title: "퍼포먼스 리더", description: "신체와 음악적 감각으로 사람들을 이끌고 함께 움직이게 하는 조합입니다.", careers: ["댄스 강사", "피트니스 트레이너", "합창 지휘자", "리듬 체조 코치"] },
  { keys: ["bodily", "musical", "intrapersonal"], title: "내면을 춤추는 사람", description: "자기 내면의 감정을 몸과 음악으로 표현하는 조합입니다.", careers: ["현대무용가", "요가 강사", "무브먼트 테라피스트", "프리스타일 댄서"] },
  { keys: ["bodily", "musical", "naturalist"], title: "자연 리듬의 실천가", description: "자연의 리듬에 맞춰 몸을 움직이고 조화를 추구하는 조합입니다.", careers: ["태극권 사범", "야외 요가 강사", "자연 놀이 교육가", "에코 댄스 퍼포머"] },
  { keys: ["bodily", "interpersonal", "intrapersonal"], title: "몸으로 치유하는 사람", description: "자기 이해와 타인 이해를 바탕으로 신체적 치유를 실천하는 조합입니다.", careers: ["물리치료사", "스포츠 심리상담사", "재활 트레이너", "필라테스 강사"] },
  { keys: ["bodily", "interpersonal", "naturalist"], title: "아웃도어 커뮤니티 리더", description: "자연 속에서 사람들과 함께 몸을 움직이며 유대를 만드는 조합입니다.", careers: ["산악 가이드", "서핑 강사", "아웃도어 캠프 리더", "생태 체험 활동가"] },
  { keys: ["bodily", "intrapersonal", "naturalist"], title: "자연인 실천가", description: "자기만의 페이스로 자연 속에서 몸을 쓰며 살아가는 조합입니다.", careers: ["유기농 농부", "자급자족 실천가", "야생 생존 전문가", "자연 공방 운영자"] },

  // === musical 포함 (linguistic, logical, spatial, bodily 제외) 조합 (3C2 = 3개) ===
  { keys: ["musical", "interpersonal", "intrapersonal"], title: "감정의 통역사", description: "자기와 타인의 감정을 음악으로 연결하고 치유하는 조합입니다.", careers: ["음악 치료사", "사운드 힐러", "감정 코칭 전문가", "명상 음악가"] },
  { keys: ["musical", "interpersonal", "naturalist"], title: "자연과 사람을 잇는 음악가", description: "자연의 소리와 음악적 감성으로 사람들에게 치유의 경험을 선사하는 조합입니다.", careers: ["힐링 음악 기획자", "자연 축제 음악감독", "에코 뮤지션", "커뮤니티 음악 활동가"] },
  { keys: ["musical", "intrapersonal", "naturalist"], title: "고요한 소리의 탐구자", description: "자연 속에서 내면의 소리에 귀 기울이며 고유한 음악 세계를 만드는 조합입니다.", careers: ["앰비언트 작곡가", "필드 레코딩 아티스트", "자연 명상 음악가", "사운드 아트 작가"] },

  // === interpersonal 포함 (linguistic, logical, spatial, bodily, musical 제외) 조합 (2C2 = 1개) ===
  { keys: ["interpersonal", "intrapersonal", "naturalist"], title: "자연 속 소통 치유사", description: "자기 이해와 타인 이해를 바탕으로 자연 속에서 치유와 성장을 돕는 조합입니다.", careers: ["원예 치료사", "생태 심리 상담사", "자연 치유 프로그램 운영자", "웰니스 코치"] },
];

// 빠른 조회를 위한 맵
const mixMap = new Map<string, MixCareer>();
for (const mix of mixCareersData) {
  const key = getMixKey(...mix.keys);
  mixMap.set(key, mix);
}

export function getMixCareer(
  a: IntelligenceType,
  b: IntelligenceType,
  c: IntelligenceType
): MixCareer | undefined {
  return mixMap.get(getMixKey(a, b, c));
}
