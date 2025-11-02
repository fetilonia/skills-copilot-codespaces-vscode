// questions.js (batch 1–10)
// 이미지가 필요한 문제의 경우, i.imgur.com 등의 "직접 이미지 링크"로 교체하세요.
const IMG_Q2_A = "https://i.imgur.com/XjDrp3h.png";   // https://www.notion.so/29adbd591ead802a836bd45d47be7082에 표시된 이미지 1[^]
const IMG_Q6 = "https://i.imgur.com/ayPIsLw.png";     //  표 이미지[^]
const IMG_Q7 = "https://i.imgur.com/xmXtPD1.png";     //  스크린샷[^]
const IMG_Q12 = "https://i.imgur.com/LAipH86.png"; // 조건부 액세스 추가 설정 스크린샷[^‣]
const IMG_Q13 = "https://i.imgur.com/YeajSdH.png"; // eDiscovery 순서 다이어그램[^‣]
const IMG_Q19 = "https://i.imgur.com/bdJ7Njk.png"; // MCAS Data Sources/Log Collectors 구성도[^‣]
const IMG_Q20 = "https://i.imgur.com/TRUPAeg.png"; // 정보 거버넌스 정책 요약 이미지[^‣]
const IMG_Q21 = "https://i.imgur.com/iAVgxxI.png"; // Endpoint protection 지원 표 이미지
const IMG_Q23 = "https://i.imgur.com/YcM9G08.png"; // Auto-enrollment, 그룹 할당 화면
const IMG_Q29 = "https://i.imgur.com/YdjJJln.png"; // 테넌트 구성 정보 도식
const IMG_Q30 = "https://i.imgur.com/hxeqNrb.png"; // 답안 영역



// 공통 헬퍼
function choicePromptHtml(stem, img = null) {
    return `
    <p>${stem}</p>
    ${img ? `<p><img src="${img}" referrerpolicy="no-referrer" style="max-width:100%;height:auto;border:1px solid #e5e7eb;border-radius:8px;"></p>` : ""}
  `;
}

window.questions = [
    // 1
    {
        id: 1,
        title: "MAM 정책으로 비준수 디바이스 차단",
        promptHtml: choicePromptHtml(
            "You need to meet the compliance requirements for the Windows 10 devices. What should you create from the Intune admin center? (One choice)"
        ),
        options: [
            "A. a device compliance policy",
            "B. a device configuration profile",
            "C. an application policy",
            "D. an app configuration policy"
        ],
        correctAnswers: ["C. an application policy"],
        type: "single",
        explanationHtml: `
      <h3>Explanation</h3>
      <ul>
        <li>요구사항은 앱 수준 보호 기반의 접근 제어로, WIP/MAM 범주의 정책이 필요합니다.</li>
        <li>Device compliance/configuration은 OS/디바이스 수준 제어로 문제 목표와 불일치.</li>
      </ul>
    `
    }, // ref: 

    // 2
    {
        id: 2,
        title: "Intune 설정 프로필 구성",
        promptHtml: choicePromptHtml(
            "You need to meet the technical requirements and planned changes for Intune. Select the appropriate options. (Hotspot style, two selections)",
            IMG_Q2_A
        ),
        pairLabels: ["Azure AD 설정 항목", "Intune 설정 항목"],
        pairOptions: [
            "Mobility (MDM and MAM)",
            "Company branding",
            "Device enrollment",
            "Compliance policies",
            "Endpoint security"
        ],
        pairAnswer: ["Mobility (MDM and MAM)", "Device enrollment"],
        type: "pair",
        explanationHtml: `
      <h3>Explanation</h3>
      <ul>
        <li>자동 등록은 Azure AD의 Mobility(MDM and MAM)에서 Intune과 연결합니다.</li>
        <li>Intune 측에서는 Device enrollment 범주에서 DEM 등 등록 구성을 수행합니다.</li>
      </ul>
    `
    }, // ref:  

    // 3
    {
        id: 3,
        title: "Co-management용 장치 컬렉션 지정 필요",
        promptHtml: choicePromptHtml(
            "You added Device1 and installed the ConfigMgr client. Solution: create a device configuration profile from the admin center. Does this meet the goal?"
        ),
        options: ["A. Yes", "B. No"],
        correctAnswers: ["B. No"],
        type: "single",
        explanationHtml: `
      <h3>Explanation</h3>
      <ul>
        <li>Co-management 활성화에는 ConfigMgr의 Co-management 설정과 Auto-enrollment가 필요합니다.</li>
        <li>단순한 Intune device configuration profile 생성은 등록/연동을 대체하지 못합니다.</li>
      </ul>
    `
    }, // ref: 

    // 4
    {
        id: 4,
        title: "Microsoft Store 생성 가능한 사용자 식별",
        promptHtml: choicePromptHtml(
            "You need to create the Microsoft Store for Business. Which user can create the store? (One choice)"
        ),
        options: ["A. User2", "B. User3", "C. User4", "D. User5"],
        correctAnswers: ["C. User4"],
        type: "single",
        explanationHtml: `
      <h3>Explanation</h3>
      <p>초기 스토어 생성은 Global Administrator 권한이 필요합니다. 시나리오에서 User4가 해당.</p>
    `
    }, // ref: 

    // 5
    {
        id: 5,
        title: "Azure ATP/Defender for Identity Sensor 설치 서버",
        promptHtml: choicePromptHtml(
            "On which server should you install the Azure ATP/Defender for Identity sensor? (One choice)"
        ),
        options: ["A. Server1", "B. Server2", "C. Server3", "D. Server4", "E. Server5"],
        correctAnswers: ["A. Server1"],
        type: "single",
        explanationHtml: `
      <h3>Explanation</h3>
      <p>Port mirroring 없이 배포하려면 DC에 Lightweight Sensor를 설치해야 하므로 Server1이 정답입니다.</p>
    `
    }, // ref: 

    // 6
    {
        id: 6,
        title: "각 오피스 PC의 Microsoft 지원 기간 식별",
        promptHtml: choicePromptHtml(
            "As of March, how long will the computers in each office remain supported? Select the correct duration per office.",
            IMG_Q6
        ),
        pairLabels: ["Seattle", "New York"],
        pairOptions: ["12 months", "18 months", "24 months", "30 months"],
        pairAnswer: ["24 months", "18 months"],
        type: "pair",
        explanationHtml: `
      <h3>Explanation</h3>
      <ul>
        <li>H2(9월) 배포의 Enterprise는 30개월, 시나리오 적용 결과 Seattle=24m, New York(3월)=18m로 매핑됩니다.</li>
      </ul>
    `
    }, // ref: 

    // 7
    {
        id: 7,
        title: "Co-management와 자동 등록 설정 필요",
        promptHtml: choicePromptHtml(
            "Meet the Intune requirements for Windows 10 devices. Choose the correct configuration areas.",
            IMG_Q7
        ),
        pairLabels: ["Azure AD 설정", "Intune 설정"],
        pairOptions: [
            "Mobility (MDM and MAM)",
            "User settings",
            "Device enrollment",
            "Apps",
            "Compliance"
        ],
        pairAnswer: ["Mobility (MDM and MAM)", "Device enrollment"],
        type: "pair",
        explanationHtml: `
      <h3>Explanation</h3>
      <p>Azure AD의 MDM/MAM에 Intune을 연결하고, Intune의 Device enrollment에서 등록 정책을 구성합니다.</p>
    `
    }, // ref: 

    // 8
    {
        id: 8,
        title: "DEM 1인당 1,000대 → 4명 필요",
        promptHtml: choicePromptHtml(
            "What is the minimum number of dedicated support technicians required? (One choice)"
        ),
        options: ["A. 1", "B. 4", "C. 7", "D. 31"],
        correctAnswers: ["B. 4"],
        type: "single",
        explanationHtml: `
      <h3>Explanation</h3>
      <p>DEM 계정은 1인당 1,000대 등록 가능. 총 4,000대라면 4명이 필요합니다.</p>
    `
    }, // ref: 

    // 9
    {
        id: 9,
        title: "파일럿 지정만으로 Co-management 불가",
        promptHtml: choicePromptHtml(
            "Solution: Define a ConfigMgr device collection as the pilot and add Device1. Does this meet the goal?"
        ),
        options: ["A. Yes", "B. No"],
        correctAnswers: ["B. No"],
        type: "single",
        explanationHtml: `
      <h3>Explanation</h3>
      <p>파일럿 지정은 필요하지만, Intune 자동 등록(Cloud attach/Auto-enrollment)까지 구성해야 공동 관리가 완성됩니다.</p>
    `
    }, // ref: 

    // 10
    {
        id: 10,
        title: "Defender Identity Sensor 설치 대상",
        promptHtml: choicePromptHtml(
            "On which server should you use the Defender for Identity sensor? (One choice)"
        ),
        options: ["A. Server1", "B. Server2", "C. Server3", "D. Server4", "E. Server5"],
        correctAnswers: ["A. Server1"],
        type: "single",
        explanationHtml: `
      <h3>Explanation</h3>
      <p>Port mirroring 없이 배포 조건 → 도메인 컨트롤러(DC)에서 Lightweight Sensor.</p>
    `
    },
    {
        id: 11,
        title: "User1이 디바이스 등록을 수행할 방법 식별",
        promptHtml: `
      <p>You need to allow User1 to enroll multiple devices in Intune for the office rollout. What should you do?</p>
    `,
        options: [
            "A. Grant Global Administrator to User1",
            "B. Add User1 to Intune Administrators",
            "C. From Intune admin center, add User1 as a Device Enrollment Manager",
            "D. Enable Windows Autopilot for User1"
        ],
        correctAnswers: ["C. From the Intune admin center, add User1 as a Device Enrollment Manager"],
        type: "single",
        explanationHtml: `
      <h3>Explanation</h3>
      <p>대량 등록 시 DEM(Device Enrollment Manager) 역할을 부여해 등록 권한을 부여합니다.</p>
    `
    }, // ref: 

    // 12
    {
        id: 12,
        title: "조건부 액세스 정책 구성 시 추가 설정",
        promptHtml: `
      <p>You need to complete the Conditional Access configuration for Exchange access by compliant devices only. Select the additional settings to configure.</p>
      ${IMG_Q12 ? `<p><img src="${IMG_Q12}" referrerpolicy="no-referrer" style="max-width:100%;height:auto;border:1px solid #e5e7eb;border-radius:8px;"></p>` : ""}
    `,
        multiLabels: ["Include conditions", "Grant controls"],
        multiOptions: [
            "Device platform", "Sign-in risk", "Client apps", "Locations",
            "Require device to be marked as compliant", "Require MFA"
        ],
        // expect two correct items across the sets; UI는 체크박스 형태로 구현했다고 가정
        multiAnswer: ["Device platform", "Require device to be marked as compliant"],
        type: "multi",
        explanationHtml: `
      <h3>Explanation</h3>
      <p>플랫폼 조건으로 범위를 한정하고, Grant에서 “Require device to be marked as compliant”를 요구해야 합니다.</p>
    `
    }, // ref: 

    // 13
    {
        id: 13,
        title: "법무 부서 요구사항 충족을 위한 eDiscovery 작업 순서",
        promptHtml: `
      <p>Legal must place a hold on all User1’s Microsoft 365 content. Put the steps in order.</p>
      ${IMG_Q13 ? `<p><img src="${IMG_Q13}" referrerpolicy="no-referrer" style="max-width:100%;height:auto;border:1px solid #e5e7eb;border-radius:8px;"></p>` : ""}
    `,
        sequenceOptions: [
            "Create a new eDiscovery case",
            "Add User1’s mailbox and OneDrive to the case",
            "Apply a hold to the case",
            "Export search results"
        ],
        sequenceAnswer: [
            "Create a new eDiscovery case",
            "Add User1’s mailbox and OneDrive to the case",
            "Apply a hold to the case"
        ],
        type: "sequence",
        explanationHtml: `
      <h3>Explanation</h3>
      <p>케이스 생성 → 위치 추가 → 케이스 Hold 적용이 기본 순서입니다.</p>
    `
    }, // ref: 

    // 14
    {
        id: 14,
        title: "EU PII 데이터의 장기 보존을 위한 정책 유형",
        promptHtml: `
      <p>You must preserve EU PII documents and emails for 10 years. What should you create?</p>
    `,
        options: [
            "A. a retention policy from the Security & Compliance admin center",
            "B. an alert policy",
            "C. a DLP policy",
            "D. a sensitivity label policy"
        ],
        correctAnswers: ["A. a retention policy from the Security & Compliance admin center"],
        type: "single",
        explanationHtml: `
      <h3>Explanation</h3>
      <p>장기 보존 요구는 Retention Policy로 충족합니다.</p>
    `
    }, // ref: 

    // 15
    {
        id: 15,
        title: "뉴욕 감사자가 확인해야 할 보고서",
        promptHtml: `
      <p>Auditors in New York must review messages containing sensitive PII that were sent or received. Which report should they use?</p>
    `,
        options: [
            "A. Top Senders and Recipients",
            "B. Message Trace",
            "C. DLP Incidents",
            "D. Malware Detections"
        ],
        correctAnswers: ["C. DLP Incidents"],
        type: "single",
        explanationHtml: `
      <h3>Explanation</h3>
      <p>DLP Incidents는 정책 위반 사건을 기준으로 PII 포함 메시지의 송수신을 검토하는 데 적합합니다.</p>
    `
    }, // ref: 

    // 16
    {
        id: 16,
        title: "대량 문서 다운로드 탐지 구성",
        promptHtml: `
      <p>You need to detect large-volume document downloads across cloud apps. What should you create?</p>
    `,
        options: [
            "A. a DLP policy",
            "B. a file policy in MCAS",
            "C. an alert policy in Compliance Center",
            "D. an activity policy in Microsoft Cloud App Security"
        ],
        correctAnswers: ["D. an activity policy in Microsoft Cloud App Security"],
        type: "single",
        explanationHtml: `
      <h3>Explanation</h3>
      <p>행위 기반(다운로드 건수/시간 조건) 탐지는 MCAS Activity Policy로 구성합니다.</p>
    `
    }, // ref: 

    // 17
    {
        id: 17,
        title: "보안 관리자 요구사항 충족 솔루션",
        promptHtml: `
      <p>You need a solution to evaluate risky sign-ins and enforce policies. What should you include?</p>
    `,
        options: [
            "A. Azure AD Privileged Identity Management",
            "B. Azure AD Identity Protection",
            "C. Conditional Access App Control",
            "D. Microsoft Sentinel"
        ],
        correctAnswers: ["B. Azure AD Identity Protection"],
        type: "single",
        explanationHtml: `
      <h3>Explanation</h3>
      <p>위험 기반 정책과 위험 감지(사용자/로그인)는 Identity Protection의 영역입니다.</p>
    `
    }, // ref: 

    // 18
    {
        id: 18,
        title: "미국 PII 보호를 위한 정책 구성",
        promptHtml: `
      <p>You must protect US PII and allow intra-office exceptions. What should you create?</p>
    `,
        options: [
            "A. a data loss prevention (DLP) policy that contains a domain exception",
            "B. a sensitivity label policy",
            "C. an auto-labeling policy",
            "D. an alert policy"
        ],
        correctAnswers: ["A. a data loss prevention (DLP) policy that contains a domain exception"],
        type: "single",
        explanationHtml: `
      <h3>Explanation</h3>
      <p>DLP 정책에서 조건과 예외(동일 오피스/도메인)를 정의해 요구사항을 충족합니다.</p>
    `
    }, // ref: 

    // 19
    {
        id: 19,
        title: "MCAS 로그 분석 최소 구성",
        promptHtml: `
      <p>You need the minimum configuration to ingest logs from multiple SIEMs into Microsoft Cloud App Security for analysis. Specify counts.</p>
      ${IMG_Q19 ? `<p><img src="${IMG_Q19}" referrerpolicy="no-referrer" style="max-width:100%;height:auto;border:1px solid #e5e7eb;border-radius:8px;"></p>` : ""}
    `,
        pairLabels: ["Number of Data Sources", "Number of Log Collectors"],
        pairOptions: ["1", "2", "3", "4"],
        pairAnswer: ["3", "1"],
        type: "pair",
        explanationHtml: `
      <h3>Explanation</h3>
      <p>여러 SIEM → 각각을 Data Source로 연결하고, 단일 Log Collector로 수집하여 최소 구성을 만족합니다.</p>
    `
    }, // ref: 

    // 20
    {
        id: 20,
        title: "정보 거버넌스 정책 유형 및 개수",
        promptHtml: `
      <p>You must configure information governance for SPO/OneDrive/Teams according to the plan. Choose policy type and count.</p>
      ${IMG_Q20 ? `<p><img src="${IMG_Q20}" referrerpolicy="no-referrer" style="max-width:100%;height:auto;border:1px solid #e5e7eb;border-radius:8px;"></p>` : ""}
    `,
        pairLabels: ["Policy Type", "Number of Policies"],
        pairOptions: ["Retention Policy", "Retention Label Policy", "1", "2", "3", "4"],
        pairAnswer: ["Retention Policy", "2"],
        type: "pair",
        explanationHtml: `
      <h3>Explanation</h3>
      <p>요구에 따라 위치 범위별로 Retention Policy를 분리해 2개로 구성합니다.</p>
    `
    },
    {
        id: 21,
        title: "엔드포인트 보호 프로필 지원 장치 및 프로필 수 식별",
        promptHtml: `
      <p>You plan to deploy an Endpoint protection template profile. Select supported devices and how many profiles are required.</p>
      ${IMG_Q21 ? `<p><img src="${IMG_Q21}" referrerpolicy="no-referrer" style="max-width:100%;height:auto;border:1px solid #e5e7eb;border-radius:8px;"></p>` : ""}
    `,
        pairLabels: ["Supported devices", "Number of required profiles"],
        pairOptions: [
            // 장치 선택지는 구현 시 UI에서 다중선택로 렌더링해도 되고, 본 예시는 답만 채점에 사용
            "Device1 only", "Device1 and Device2 only", "Device1, Device2, Device3", "All devices",
            "1", "2", "3"
        ],
        pairAnswer: ["Device1 and Device2 only", "1"],
        type: "pair",
        explanationHtml: `
      <h3>Explanation</h3>
      <p>Endpoint protection 템플릿이 지원되는 플랫폼만 대상이며, 요구 조건상 단일 프로필로 충족됩니다.</p>
    `
    }, // ref: 21

    // 22
    {
        id: 22,
        title: "Safe Attachments 정책 동작 모드 선택",
        promptHtml: `
      <p>Emails with attachments must be delivered immediately with placeholder until scanning completes. Which Safe Attachments action should you choose?</p>
    `,
        options: [
            "A. Off",
            "B. Monitor",
            "C. Replace",
            "D. Dynamic Delivery"
        ],
        correctAnswers: ["D. Dynamic Delivery"],
        type: "single",
        explanationHtml: `
      <h3>Explanation</h3>
      <p>Dynamic Delivery는 본문은 즉시 전달하고 첨부파일은 플레이스홀더로 대체해 스캔 완료 후 교체합니다.</p>
    `
    }, // ref: 22

    // 23
    {
        id: 23,
        title: "Intune 자동 등록 구성 및 그룹 할당",
        promptHtml: `
      <p>All Windows 10 devices in Seattle must auto-enroll to Intune. Select the correct setting and the assigned group.</p>
      ${IMG_Q23 ? `<p><img src="${IMG_Q23}" referrerpolicy="no-referrer" style="max-width:100%;height:auto;border:1px solid #e5e7eb;border-radius:8px;"></p>` : ""}
    `,
        pairLabels: ["What to configure", "Assigned group"],
        pairOptions: [
            "MDM user Scope", "MAM user Scope", "Company branding",
            "Seattle UserGroup1", "Seattle UserGroup2", "All users"
        ],
        pairAnswer: ["MDM user Scope", "Seattle UserGroup2"],
        type: "pair",
        explanationHtml: `
      <h3>Explanation</h3>
      <p>Auto-enrollment은 Azure AD의 MDM user scope로 제어하며, 대상 그룹으로 Seattle 전용 그룹을 할당합니다.</p>
    `
    }, // ref: 23

    // 24
    {
        id: 24,
        title: "DLP 정책 생성 시 최초 구성 항목",
        promptHtml: `
      <p>When creating a DLP policy, what should you configure first?</p>
    `,
        options: [
            "A. Sensitive info types",
            "B. Locations",
            "C. Incident reports",
            "D. User notifications"
        ],
        correctAnswers: ["A. Sensitive info types"],
        type: "single",
        explanationHtml: `
      <h3>Explanation</h3>
      <p>DLP는 보호할 민감 정보 유형을 기반으로 정책 규칙이 정의됩니다.</p>
    `
    }, // ref: 24

    // 25
    {
        id: 25,
        title: "웹용 Office에서 민감도 레이블 사용 활성화",
        promptHtml: `
      <p>Users must be able to apply sensitivity labels in Office for the web. What should you enable?</p>
    `,
        options: [
            "A. Publish sensitivity labels only",
            "B. Enable sensitivity labels for Office files in SharePoint and OneDrive",
            "C. Auto-labeling policies only",
            "D. Unified labeling client"
        ],
        correctAnswers: ["B. Enable sensitivity labels for Office files in SharePoint and OneDrive"],
        type: "single",
        explanationHtml: `
      <h3>Explanation</h3>
      <p>웹 앱에서 레이블을 적용하려면 SPO/OneDrive 파일에 대한 레이블 사용을 활성화해야 합니다.</p>
    `
    }, // ref: 25

    // 26
    {
        id: 26,
        title: "정책 미할당 장치의 상태 표시",
        promptHtml: `
      <p>Devices without an assigned compliance policy must show Not Compliant. What should you modify?</p>
    `,
        options: [
            "A. Device configuration profile",
            "B. Conditional Access policy",
            "C. Endpoint security policy",
            "D. Compliance policy settings"
        ],
        correctAnswers: ["D. Compliance policy settings"],
        type: "single",
        explanationHtml: `
      <h3>Explanation</h3>
      <p>기본 규정 준수 동작은 Compliance policy settings에서 “No policy = Not compliant”로 지정합니다.</p>
    `
    }, // ref: 26

    // 27
    {
        id: 27,
        title: "User2의 감사 로그 검토 권한 구성",
        promptHtml: `
      <p>Grant User2 permissions to review audit logs per the plan. Choose the role group and the tool.</p>
      ${IMG_Q27 ? `<p><img src="${IMG_Q27}" referrerpolicy="no-referrer" style="max-width:100%;height:auto;border:1px solid #e5e7eb;border-radius:8px;"></p>` : ""}
    `,
        pairLabels: ["Role group", "Tool"],
        pairOptions: [
            "Compliance Management", "Security Reader", "View-Only Audit Logs",
            "Exchange admin center", "Microsoft 365 Defender", "Compliance portal"
        ],
        pairAnswer: ["Compliance Management", "Exchange admin center"],
        type: "pair",
        explanationHtml: `
      <h3>Explanation</h3>
      <p>요구된 Exchange/SharePoint/Azure AD 관리자 활동 검토 권한에 맞춰 적절한 역할과 도구를 지정합니다.</p>
    `
    }, // ref: 27

    // 28
    {
        id: 28,
        title: "DLP 정책 알림 설정 위치",
        promptHtml: `
      <p>Where do you configure notifications that appear when DLP policies are triggered?</p>
    `,
        options: [
            "A. Exchange admin center",
            "B. Microsoft 365 Defender",
            "C. Security portal alerts",
            "D. Microsoft 365 Compliance Center → Endpoint DLP settings"
        ],
        correctAnswers: ["D. Microsoft 365 Compliance Center → Endpoint DLP settings"],
        type: "single",
        explanationHtml: `
      <h3>Explanation</h3>
      <p>엔드포인트 DLP 알림과 사용자 경고는 Compliance Center의 Endpoint DLP 설정에서 구성합니다.</p>
    `
    }, // ref: 28

    // 29
    {
        id: 29,
        title: "테넌트 구성정보 분석",
        promptHtml: `
      <p>Identify the correct values for authentication location and account location.</p>
      ${IMG_Q29 ? `<p><img src="${IMG_Q29}" referrerpolicy="no-referrer" style="max-width:100%;height:auto;border:1px solid #e5e7eb;border-radius:8px;"></p>` : ""}
      ${IMG_Q30 ? `<p><img src="${IMG_Q30}" referrerpolicy="no-referrer" style="max-width:100%;height:auto;border:1px solid #e5e7eb;border-radius:8px;"></p>` : ""}
    `,
        pairLabels: ["Authentication location", "Account location"],
        pairOptions: [
            "In the cloud only", "On-premises only", "Hybrid",
            "Only on-premises", "In the cloud", "Both"
        ],
        pairAnswer: ["In the cloud only", "Only on-premises"],
        type: "pair",
        explanationHtml: `
      <h3>Explanation</h3>
      <p>주어진 구성 설명에 따라 인증과 계정 원천 위치를 각각 식별합니다.</p>
    `
    }, // ref: 29

    // 30
    {
        id: 30,
        title: "User1의 보안 정책 관리 권한 할당",
        promptHtml: `
      <p>You need to grant User1 permissions to manage security policies per requirements. Which role should you assign?</p>
    `,
        options: [
            "A. Global Reader",
            "B. Compliance Administrator",
            "C. Security Administrator",
            "D. SharePoint Administrator"
        ],
        correctAnswers: ["C. Security Administrator"],
        type: "single",
        explanationHtml: `
      <h3>Explanation</h3>
      <p>보안 정책 전반을 관리하려면 Security Administrator가 최소 권한으로 적합합니다.</p>
    `
    } // ref: 30
] // ref: 
