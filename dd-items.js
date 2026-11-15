// DDチェックリストの標準項目
// 番号と英語の要件は 「Data Center Site Due Diligence Finding List」形式に合わせる。
// ch はストラクト（ビーコンサルティング）DD報告書の章：2 敷地概要／3 法チェック／4 インフラの確認／6 立地リスク
// lv：must＝不可偏離（満たさないと候補から外れる）、key＝重点確認、gen＝一般
// field：現地で確認・撮影できる項目
export const DD_CHAPTERS = [
  { ch: "2", ja: "敷地概要", en: "Site Information" },
  { ch: "3", ja: "法チェック", en: "Code & Regulations" },
  { ch: "4", ja: "インフラの確認", en: "Infrastructure" },
  { ch: "6", ja: "立地リスク", en: "Location Risk" },
];

const I = (id, ch, cat, sub, en, ja, th, lv, field) => ({ id, ch, cat, sub, en, ja, th: th || "", lv, field: !!field });

export const DD_ITEMS = [
  // 1. Site Information（敷地概要）
  I("1.1", "2", "Site Information", "Basic Information", "Site Name", "敷地の名称", "", "gen"),
  I("1.2", "2", "Site Information", "Basic Information", "Site Address", "所在地（地名地番・住居表示）", "", "gen"),
  I("1.3", "2", "Site Information", "Basic Information", "Site Coordinates", "敷地の座標", "撮影位置から入力できる", "gen", true),
  I("1.4", "2", "Site Information", "Basic Information", "Site Elevation", "敷地の標高・地盤高", "TP値で記載", "gen", true),
  I("1.5", "2", "Site Information", "Basic Information", "Site Area", "敷地面積", "", "gen"),
  I("1.6", "2", "Site Information", "Basic Information", "Construction Status", "現況（更地・既存建物あり 等）", "更地／躯体完了／設備完了／その他", "gen", true),
  I("1.7", "2", "Site Information", "Land Use", "Easements and Encumbrances", "地役権・抵当権など権利の制限", "", "key"),
  I("1.8", "2", "Site Information", "Land Use", "Land Use Zoning", "用途地域", "", "key"),
  I("J.1", "2", "Site Information", "Field Check", "Boundary markers", "境界杭・境界標の確認", "", "gen", true),
  I("J.2", "2", "Site Information", "Field Check", "Frontage road width", "前面道路の幅員・接道長さ", "測定値を記録", "gen", true),
  I("J.3", "2", "Site Information", "Field Check", "Level difference", "敷地内の高低差・隣地や道路との段差", "", "gen", true),
  I("J.4", "2", "Site Information", "Field Check", "Utility poles and overhead lines", "電柱・架空線（引込候補・支障）", "電柱番号を記録", "gen", true),
  I("J.5", "2", "Site Information", "Field Check", "Delivery route for heavy items", "大型車・トレーラーの搬入経路", "", "gen", true),
  I("J.6", "2", "Site Information", "Field Check", "Existing condition photos", "現況写真（全景・4方向）", "", "gen", true),

  // 2. Site Condition（立地リスク：外部要因）
  I("2.1", "6", "Site Condition", "External Factors", "Road access to site (2 diverse preferred)", "敷地への道路アクセス", "2方向以上が望ましい", "key", true),
  I("2.2", "6", "Site Condition", "External Factors", "Proximity to air transport infrastructure", "空港・航空機の進入経路", "2km以内／進入経路±30°", "key"),
  I("2.3", "6", "Site Condition", "External Factors", "Proximity to elevated roads, railways, subways", "高架道路・鉄道・地下鉄", "2km以内", "key", true),
  I("2.4", "6", "Site Condition", "External Factors", "Proximity to parking area", "駐車場", "500m以内", "key"),
  I("2.5", "6", "Site Condition", "External Factors", "Proximity to high voltage power lines and towers", "高圧送電線・鉄塔", "1km以内（電磁干渉）", "key", true),
  I("2.6", "6", "Site Condition", "External Factors", "Proximity to communication facilities", "通信施設（衛星アンテナ・放送局 等）", "1km以内（電磁干渉）", "key", true),
  I("2.7", "6", "Site Condition", "External Factors", "Proximity to rivers, floodways, reservoirs", "河川・放水路・貯水池", "河川1km・貯水池10km以内", "key", true),
  I("2.8", "6", "Site Condition", "External Factors", "Proximity to coastline", "海岸線", "10km以内", "key"),
  I("2.9", "6", "Site Condition", "External Factors", "Proximity to military / government facilities", "自衛隊・米軍・官公庁施設", "3km以内", "key"),
  I("2.10", "6", "Site Condition", "External Factors", "Proximity to dangerous goods, chemical, oil & gas facilities", "危険物倉庫・化学工場・石油ガス施設", "3km以内", "key", true),
  I("2.11", "6", "Site Condition", "External Factors", "Proximity to polluting factories", "汚染源となる工場", "3km以内", "key", true),
  I("2.12", "6", "Site Condition", "External Factors", "Proximity to power plant", "発電所", "4km以内", "key"),
  I("2.13", "6", "Site Condition", "External Factors", "Proximity to landfills", "処分場・埋立地", "2km以内", "key"),
  I("2.14", "6", "Site Condition", "External Factors", "Proximity to environmentally sensitive area", "環境保全上配慮が必要な区域", "2km以内", "key"),
  I("2.15", "6", "Site Condition", "External Factors", "Proximity to residential area or residential zoned land", "住宅地・住居系用途地域", "500m以内", "key", true),
  I("2.16", "6", "Site Condition", "External Factors", "Proximity to noise sensitive facilities", "騒音に配慮が必要な施設（学校・病院 等）", "2km以内", "key", true),
  I("2.17", "6", "Site Condition", "External Factors", "Proximity to critical infrastructure (water pipeline, substation)", "重要インフラ（水道管路・変電所 等）", "2km以内", "key", true),
  I("2.18", "6", "Site Condition", "External Factors", "Proximity to adverse source of air quality", "大気質の悪化要因（粉じん・排煙 等）", "2km以内", "key", true),
  I("2.19", "6", "Site Condition", "External Factors", "Proximity to nearby data center projects", "近隣のデータセンター", "2km以内", "key"),
  I("2.20", "6", "Site Condition", "External Factors", "Other external factors", "その他の外部要因", "", "key", true),
  // 2. Site Condition（立地リスク：敷地内）
  I("2.21", "6", "Site Condition", "Internal Factors", "Hydrological risk within the site", "敷地内の水文リスク（水路・地下水・断層・窪地）", "", "key", true),
  I("2.22", "6", "Site Condition", "Internal Factors", "Geological risk within the site", "地質リスク（軟弱粘土・雑多な埋土・廃棄物埋戻し）", "", "key", true),
  I("2.23", "6", "Site Condition", "Internal Factors", "Soil contamination within the site", "土壌汚染", "", "key", true),
  I("2.24", "6", "Site Condition", "Internal Factors", "Existing structures, buildings, residual foundations", "既存建物・構造物・残存基礎", "", "key", true),
  I("2.25", "6", "Site Condition", "Internal Factors", "Cemeteries, graveyards, tombs within the site", "墓地・墓所", "", "key", true),
  I("2.26", "6", "Site Condition", "Internal Factors", "Protected or endangered flora and fauna", "保護すべき動植物", "", "key", true),
  I("2.27", "6", "Site Condition", "Internal Factors", "Archaeological, heritage or cultural structures", "埋蔵文化財・文化財", "", "key"),
  I("2.28", "6", "Site Condition", "Internal Factors", "Ancestral domain within the site", "地域固有の権利（入会権 等）", "", "key"),
  I("2.29", "6", "Site Condition", "Internal Factors", "Planning encumbrances within the site", "敷地内の計画制限（都市計画道路・送電線・農地・緑地）", "", "key"),
  I("2.30", "6", "Site Condition", "Internal Factors", "Other internal factors", "その他の敷地内要因", "", "key", true),

  // 3. Risks（立地リスク：災害）
  I("3.1", "6", "Risks", "Natural Disaster", "Volcanic risk", "火山", "10km以内の活火山", "key"),
  I("3.2", "6", "Risks", "Natural Disaster", "Flood risk due to dam / dike / levee failure", "ダム・堤防決壊による浸水", "10km以内", "key"),
  I("3.3", "6", "Risks", "Natural Disaster", "Flood risk due to rain or storm", "豪雨・高潮による浸水（浸水履歴・想定浸水深）", "", "key", true),
  I("3.4", "6", "Risks", "Natural Disaster", "Tsunami risk", "津波", "津波の恐れがある海岸から10km以上", "key"),
  I("3.5", "6", "Risks", "Natural Disaster", "Seismic risk", "地震・活断層", "過去10年のM4.5以上", "key"),
  I("3.6", "6", "Risks", "Natural Disaster", "Typhoon / storm risk", "台風・暴風", "過去10年", "key"),
  I("3.7", "6", "Risks", "Natural Disaster", "Sandstorm risk", "砂塵（黄砂）", "", "key"),
  I("3.8", "6", "Risks", "Natural Disaster", "Wildfire risk", "林野火災", "", "key"),
  I("3.9", "6", "Risks", "Natural Disaster", "Snowstorm risk", "豪雪・吹雪", "", "key"),
  I("3.10", "6", "Risks", "Natural Disaster", "Lightning strike risk", "落雷", "", "key"),
  I("3.11", "6", "Risks", "Natural Disaster", "Other natural disaster risk", "その他の自然災害（液状化・土砂災害 等）", "", "key", true),
  I("3.12", "6", "Risks", "Manmade Hazard", "Manmade hazard", "人為的災害", "", "gen"),
  I("3.13", "6", "Risks", "Security", "Threat, vulnerability and risk assessment", "セキュリティ（周辺の脅威・脆弱性）", "", "key", true),

  // 4. Planning Requirements（法チェック）
  I("4.1", "3", "Planning Requirements", "Planning Parameter", "Height restriction", "高さ制限（斜線・絶対高さ・航空法）", "", "key"),
  I("4.2", "3", "Planning Requirements", "Planning Parameter", "Setback restriction", "壁面後退・セットバック・緑地帯", "", "key", true),
  I("4.3", "3", "Planning Requirements", "Planning Parameter", "Plot ratio", "建蔽率・容積率", "", "key"),
  I("4.4", "3", "Planning Requirements", "Planning Parameter", "Weather and climate (DB & WB temperature)", "気象条件（乾球・湿球温度）", "", "key"),
  I("4.5", "3", "Planning Requirements", "Restrictions", "Energy consumption restriction", "省エネ規制（省エネ法・建築物省エネ法）", "", "key"),
  I("4.6", "3", "Planning Requirements", "Restrictions", "PUE restrictions", "PUEの規制・目標", "", "key"),
  I("4.7", "3", "Planning Requirements", "Restrictions", "WUE restrictions", "WUEの規制・目標", "", "key"),
  I("4.8", "3", "Planning Requirements", "Restrictions", "High ODP / GWP refrigerant restriction", "冷媒の規制（フロン排出抑制法）", "", "key"),
  I("4.9", "3", "Planning Requirements", "Restrictions", "Noise and vibration restriction", "騒音・振動の規制（区域・規制値）", "現況の騒音値を記録", "key", true),
  I("4.10", "3", "Planning Requirements", "Restrictions", "Environmental pollution / emission control", "排出規制（大気汚染防止法・公害防止協定）", "", "key"),
  I("4.11", "3", "Planning Requirements", "Restrictions", "Generator operating hours restriction", "発電機の運転時間の制限", "", "key"),
  I("4.12", "3", "Planning Requirements", "Restrictions", "Road access, traffic requirement and restriction", "道路・交通の規制（大型車通行・出入口）", "", "key", true),
  I("4.13", "3", "Planning Requirements", "Restrictions", "Stormwater discharge restriction", "雨水排水の規制（調整池 等）", "", "key", true),
  I("4.14", "3", "Planning Requirements", "Restrictions", "Dangerous / flammable liquid storage restriction", "危険物貯蔵の制限（軽油・ガス）", "", "key"),
  I("4.15", "3", "Planning Requirements", "Restrictions", "Other site specific planning restrictions", "その他の制限（地区計画・景観・緑化・開発許可）", "", "key"),

  // 5. Utility（インフラの確認）
  I("5.1", "4", "Utility", "Power", "Redundant utility incoming power supply", "2回線受電の可否", "2回線（1+1以上）", "must"),
  I("5.2", "4", "Utility", "Power", "Supply from different substations or bus sections", "異なる変電所・母線からの受電", "", "key"),
  I("5.3", "4", "Utility", "Power", "Utility power available (MW)", "受電可能容量（MW）", "", "key"),
  I("5.4", "4", "Utility", "Power", "Electricity supply agreement signed", "電力供給の契約・確約", "", "key"),
  I("5.5", "4", "Utility", "Power", "Energization date", "受電開始時期", "", "key"),
  I("5.6", "4", "Utility", "Power", "On-site generation plant", "敷地内の発電設備（予備電源を除く）", "", "key", true),
  I("5.7", "4", "Utility", "Telecom / Fiber", "Is the site carrier neutral?", "キャリアニュートラルか", "", "must"),
  I("5.8", "4", "Utility", "Telecom / Fiber", "Is the park / region carrier neutral?", "工業団地・地域の通信独占契約の有無", "", "must"),
  I("5.9", "4", "Utility", "Telecom / Fiber", "At least two telecom entry points", "通信の引込点2か所以上", "2か所以上", "must", true),
  I("5.10", "4", "Utility", "Telecom / Fiber", "4 fiber paths not overlapping up to 3 km", "光ファイバー4経路（3kmまで重複なし）", "", "key", true),
  I("5.11", "4", "Utility", "Telecom / Fiber", "Is the site a carrier hotel?", "キャリアホテルか", "", "gen"),
  I("5.12", "4", "Utility", "Telecom / Fiber", "Near a carrier hotel or exchange?", "近くのキャリアホテル・通信局舎", "", "gen"),
  I("5.13", "4", "Utility", "Telecom / Fiber", "Available telecom carriers", "利用可能な通信事業者", "", "gen"),
  I("5.14", "4", "Utility", "Water", "Utility water supply (two preferred)", "上水の供給（2系統が望ましい）", "1系統以上", "key", true),
  I("5.15", "4", "Utility", "Water", "Water available (MLD)", "供給可能水量（ML/日）", "", "key"),
  I("5.16", "4", "Utility", "Water", "Water supply agreement signed", "給水の確約", "", "key"),
  I("5.17", "4", "Utility", "Water", "Water supply turned on", "給水開始時期", "", "key"),
  I("5.18", "4", "Utility", "Water", "Alternative water supply", "代替水源（工業用水・地下水・中水 等）", "", "gen", true),
  I("5.19", "4", "Utility", "Sewerage and Drainage", "Sewerage and drainage connection", "下水・排水の接続", "", "must", true),
  I("5.20", "4", "Utility", "Sewerage and Drainage", "Hydrology study and drainage masterplan", "排水計画（団地・地域）", "", "key"),
  I("5.21", "4", "Utility", "Sewerage and Drainage", "100-year drainage design", "100年確率の排水設計", "", "key"),
  I("5.22", "4", "Utility", "Utility Heating", "Utility heating", "地域熱供給", "", "gen"),
  I("5.23", "4", "Utility", "Others", "Other utilities (city gas etc.)", "その他のインフラ（都市ガス 等）", "", "gen", true),
];

// リスクマトリクス：影響度 A〜E × 発生可能性 5〜1 → 高・中・低
const MATRIX = { A: "HHHMM", B: "HHMMM", C: "HMMML", D: "MMMML", E: "MMLLL" };
export const SEVERITY = [["A", "致命的"], ["B", "重大"], ["C", "中程度"], ["D", "軽微"], ["E", "無視できる"]];
export const LIKELIHOOD = [[5, "ほぼ確実"], [4, "頻繁"], [3, "時々"], [2, "まれ"], [1, "ほとんどない"]];
export function riskLevel(likelihood, severity) {
  const row = MATRIX[severity];
  const l = Number(likelihood);
  if (!row || !(l >= 1 && l <= 5)) return "";
  return { H: "高", M: "中", L: "低" }[row[5 - l]];
}
