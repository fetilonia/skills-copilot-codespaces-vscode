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
const IMG_Q27 = "https://i.imgur.com/4eYdZpB.png"; // Auto-enrollment, 그룹 할당 화면
const IMG_Q29 = "https://i.imgur.com/YdjJJln.png"; // 테넌트 구성 정보 도식
const IMG_Q30 = "https://i.imgur.com/hxeqNrb.png"; // 답안 영역
const IMG_Q35 = "https://i.imgur.com/MdgmtwL.png"; // 답안 영역
const IMG_Q36 = "https://i.imgur.com/Ua06Lx9.png"; // MFA 등록/사용 조건 표 이미지가 있다면
const IMG_Q37 = "https://i.imgur.com/IxNTvIB.png"; // MFA 등록/사용 조건 표 이미지가 있다면
const IMG_Q39a = "https://i.imgur.com/0PBmeXF.png"; // Private Store 표 이미지가 있다면
const IMG_Q39b = "https://i.imgur.com/PlzWCuW.png"; // Private Store 표 이미지가 있다면
const IMG_Q41 = "https://i.imgur.com/uffMKYj.png";
const IMG_Q42a = "https://i.imgur.com/38TSbNR.png";
const IMG_Q42b = "https://i.imgur.com/3ejR499.png";
const IMG_Q46 = "https://i.imgur.com/0RMmoDM.png";
const IMG_Q48 = "https://i.imgur.com/06ErVJY.png";
const IMG_Q49a = "https://i.imgur.com/2Zv4byy.png";
const IMG_Q49b = "https://i.imgur.com/A9vbGWw.png";
const IMG_Q51 = "https://i.imgur.com/9fnY80n.png";
const IMG_Q52 = "https://i.imgur.com/bxemHWp.png";
const IMG_Q54 = "https://i.imgur.com/gWdaJgo.png";
const IMG_Q58 = "https://i.imgur.com/DwKQvCU.png"; // 58번 스팸 정책/관리자 화면 등
const IMG_Q59a = "https://i.imgur.com/G7ufBzA.png"; // 59번 Org settings 스크린샷 등
const IMG_Q59b = "https://i.imgur.com/SN7FsqZ.png"; // 59번 Org settings 스크린샷 등
const IMG_Q64_1 = "https://i.imgur.com/FGbKv7q.png"; // Compliance policies table (exhibit)
const IMG_Q64_2 = "https://i.imgur.com/LExblKQ.png"; // Devices table (exhibit)
const IMG_Q64_3 = "https://i.imgur.com/kEjkhli.png";
const IMG_Q65_1 = "https://i.imgur.com/2lo8HuW.png"; // Policy priority/group exhibit
const IMG_Q65_2 = "https://i.imgur.com/a4QK2Jh.png"; // Users/groups exhibit
const IMG_Q65_3 = "https://i.imgur.com/4P6D6lP.png"; // Yes/No matrix (if any)
const IMG_Q66_1 = "https://i.imgur.com/0maCayx.png"; // If an exhibit was provided for schedule/result
const IMG_Q66_2 = "https://i.imgur.com/vqZcWez.png"; // If an exhibit was provided for schedule/result
const IMG_Q66_3 = "https://i.imgur.com/kOeLEf5.png"; // If an exhibit was provided for schedule/result
const IMG_Q67_1 = "https://i.imgur.com/oGgOwIk.png"; // Devices table (Windows, Android, macOS, iOS)
const IMG_Q70_1 = "https://i.imgur.com/wl8u51E.png"; // Policy table exhibit
const IMG_Q71_1 = "https://i.imgur.com/JIV3kaK.png"; // Data Transfer settings exhibit
const IMG_Q71_2 = "https://i.imgur.com/TqtkMz7.png"; // Data Transfer settings exhibit
const IMG_Q72_1 = "https://i.imgur.com/EoPbood.png"; // Groups table exhibit
const IMG_Q74_1 = "https://i.imgur.com/avQoatk.png"; // (optional) choices screenshot
const IMG_Q75_1 = "https://i.imgur.com/0o0XK9b.png"; // Users table exhibit
const IMG_Q75_2 = "https://i.imgur.com/0BcwbUV.png"; // Tenant/domain exhibit
const IMG_Q77_1 = "https://i.imgur.com/0nT5nYU.png"; // (optional) policies page
const IMG_Q78_1 = "https://i.imgur.com/ofEpUDO.png"; // Users tables exhibit
const IMG_Q78_2 = "https://i.imgur.com/CoD4SdY.png"; // Users tables exhibit



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
    },
    {
        id: 31,
        title: "도메인 추가 시 필요한 DNS 레코드 식별",
        promptHtml: `
      <p>When adding a custom domain to Microsoft 365, which DNS record type is required to verify ownership?</p>
    `,
        type: "single",
        options: [
            "A. MX",
            "B. CNAME",
            "C. Text (TXT)",
            "D. NS"
        ],
        correctAnswers: ["C. Text (TXT)"],
        explanationHtml: `
      <h3>Explanation</h3>
      <p>도메인 소유권 검증은 TXT 레코드로 수행하는 것이 표준입니다.</p>
      <p><a href="https://learn.microsoft.com/microsoft-365/admin/setup/add-domain#step-3-add-a-txt-or-mx-record-to-verify-you-own-the-domain" target="_blank">Add a custom domain (TXT verify)</a></p>
    `
    },

    // 숫자: 32 → @Pilot Project 의 기본 인증 전략
    {
        id: 32,
        title: "Pilot Project 의 기본 인증 전략",
        promptHtml: `
      <p>You need a simple pilot authentication strategy without federation. Which should you use?</p>
    `,
        type: "single",
        options: [
            "A. Federation with AD FS",
            "B. Pass-through Authentication",
            "C. Password Hash Synchronization",
            "D. Cloud-only accounts"
        ],
        correctAnswers: ["C. Password Hash Synchronization"],
        explanationHtml: `
      <h3>Explanation</h3>
      <p>PHS는 간단한 파일럿에 적합하고 고가용성 요구가 낮은 환경에서 빠르게 적용할 수 있습니다.</p>
      <p><a href="https://learn.microsoft.com/entra/identity/hybrid/connect/whatis-azure-ad-connect" target="_blank">Choose an authentication method</a></p>
    `
    },

    // 숫자: 33 → @Admin2 전용 알림 및 기능 업데이트 제한 설정
    {
        id: 33,
        title: "Admin2 전용 알림 및 기능 업데이트 제한 설정",
        promptHtml: `
      <p>Configure service health notifications and limit access to pre-release features so that only Admin2 receives and reviews them.</p>
    `,
        type: "pair",
        pairLabels: ["To configure the notifications", "To limit access to new features"],
        pairOptions: [
            "Organization information",
            "Service Health",
            "Message center preferences",
            "Release preferences"
        ],
        pairAnswer: ["Organization information", "Release preferences"],
        explanationHtml: `
      <h3>Explanation</h3>
      <p>조직 정보에서 알림 수신자를 구성하고, Release preferences에서 대상(예: Targeted release)을 제한합니다.</p>
      <p><a href="https://learn.microsoft.com/microsoft-365/admin/manage/change-release-options" target="_blank">Release preferences</a><br>
      <a href="https://learn.microsoft.com/microsoft-365/admin/manage/manage-email-notifications" target="_blank">Manage admin email notifications</a></p>
    `
    },

    // 숫자: 34 → @Seattle Users OU에 대한 변경사항 지원 방법
    {
        id: 34,
        title: "Seattle Users OU 변경 지원을 위한 AAD Connect 구성",
        promptHtml: `
      <p>To sync changes for the Seattle Users OU, which action should you take in Azure AD Connect?</p>
    `,
        type: "single",
        options: [
            "A. From Azure AD Connect wizard, select Customize synchronization options",
            "B. Enable seamless SSO",
            "C. Reinstall Azure AD Connect",
            "D. Force full password sync"
        ],
        correctAnswers: ["A. From Azure AD Connect wizard, select Customize synchronization options"],
        explanationHtml: `
      <h3>Explanation</h3>
      <p>OU 범위 수정을 위해서는 AAD Connect 마법사에서 동기화 옵션 커스터마이즈로 OU 선택을 조정합니다.</p>
      <p><a href="https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-install-custom" target="_blank">Customize sync options</a></p>
    `
    },

    // 숫자: 35 → @인시던트와 권고 사항 접근 가능 관리자 계정 선택
    {
        id: 35,
        title: "Service Health 인시던트/권고 접근 가능한 관리자",
        promptHtml: `
      <p>Select which admins can review Service Health incidents and advisories, and the blade to use.</p>
      ${IMG_Q35 ? `<p><img src="${IMG_Q35}" referrerpolicy="no-referrer" style="max-width:100%;height:auto;border:1px solid #e5e7eb;border-radius:8px;"></p>` : ""}

    `,
        type: "pair",
        pairLabels: ["Users", "Blade"],
        pairOptions: [
            "Admin1 and Admin2",
            "Admin1 and Admin3",
            "Service Health",
            "Message center"
        ],
        pairAnswer: ["Admin1 and Admin3", "Service Health"],
        explanationHtml: `
      <h3>Explanation</h3>
      <p>요구 조건에 따라 지정된 관리자만 Service Health 블레이드에서 상태를 검토합니다.</p>
      <p><a href="https://learn.microsoft.com/microsoft-365/admin/manage/service-health" target="_blank">Check service health</a></p>
    `
    },

    // 숫자: 36 → @MFA 등록·사용 조건 평가
    {
        id: 36,
        title: "MFA 등록·사용 조건 평가",
        promptHtml: `
      <p>For each statement, select <strong>Yes</strong> if true. Otherwise, select <strong>No</strong>.</p>
      ${IMG_Q36 ? `<p><img src="${IMG_Q36}" referrerpolicy="no-referrer" style="max-width:100%;height:auto;border:1px solid #e5e7eb;border-radius:8px;"></p>` : ""}
    `,
        statements: [
            "Users have 14 days to register for MFA after first sign-in when Security Defaults are enabled.",
            "Users must use the Microsoft Authenticator app only to complete MFA.",
            "After registration, MFA is required for every sign-in."
        ],
        options: ["Yes", "No"],
        correctAnswers: ["Yes", "No", "No"],
        explanationHtml: `
      <h3>Explanation</h3>
      <p>Security Defaults는 최초 로그인 이후 14일 내 등록을 요구하며, 인증 수단은 다양하고(앱 필수 아님), 모든 로그인마다 MFA가 요구되지는 않습니다.</p>
      <p><a href="https://learn.microsoft.com/entra/fundamentals/concept-fundamentals-security-defaults" target="_blank">Security defaults</a></p>
    `
    },

    // 숫자: 37 → @SSPR 활성화용 설정 구성
    {
        id: 37,
        title: "SSPR 활성화용 설정 구성",
        promptHtml: `
      <p>You need to enable SSPR so users can reset their passwords to on-premises AD. Choose the tool and the action.</p>
      ${IMG_Q37 ? `<p><img src="${IMG_Q37}" referrerpolicy="no-referrer" style="max-width:100%;height:auto;border:1px solid #e5e7eb;border-radius:8px;"></p>` : ""}
    `,
        type: "pair",
        pairLabels: ["Tool", "Action"],
        pairOptions: [
            "Azure AD Connect",
            "Microsoft 365 admin center",
            "Enable password writeback",
            "Enable self-service portal"
        ],
        pairAnswer: ["Azure AD Connect", "Enable password writeback"],
        explanationHtml: `
      <h3>Explanation</h3>
      <p>온프레미스 쓰기반환이 필요하므로 Azure AD Connect에서 Password writeback을 활성화합니다.</p>
      <p><a href="https://learn.microsoft.com/entra/identity/authentication/concept-sspr-writeback" target="_blank">SSPR password writeback</a></p>
    `
    },

    // 숫자: 38 → @PIM을 사용한 JIT 액세스
    {
        id: 38,
        title: "PIM을 사용한 JIT 액세스",
        promptHtml: `
      <p>Provide just-in-time access to critical administrative roles with least privilege. What should you use?</p>
    `,
        type: "single",
        options: [
            "A. Access reviews",
            "B. Azure AD Privileged Identity Management (PIM)",
            "C. Conditional Access App Control",
            "D. Security defaults"
        ],
        correctAnswers: ["B. Azure AD Privileged Identity Management (PIM)"],
        explanationHtml: `
      <h3>Explanation</h3>
      <p>PIM은 JIT 활성화/승인/만료를 제공하여 최소 권한 원칙을 지원합니다.</p>
      <p><a href="https://learn.microsoft.com/entra/id-governance/privileged-identity-management/pim-configure" target="_blank">What is PIM</a></p>
    `
    },

    // 숫자: 39 → @Private Store 접근 권한 평가
    {
        id: 39,
        title: "Private Store 접근 권한 평가",
        promptHtml: `
      <p>For each statement, select <strong>Yes</strong> if true. Otherwise, select <strong>No</strong>. (App availability set to Specific groups → Group3)</p>
      ${IMG_Q39a ? `<p><img src="${IMG_Q39a}" referrerpolicy="no-referrer" style="max-width:100%;height:auto;border:1px solid #e5e7eb;border-radius:8px;"></p>` : ""}
      ${IMG_Q39b ? `<p><img src="${IMG_Q39b}" referrerpolicy="no-referrer" style="max-width:100%;height:auto;border:1px solid #e5e7eb;border-radius:8px;"></p>` : ""}
    `,
        statements: [
            "User1 can install the app from the private store.",
            "User2 can install the app from the private store.",
            "User3 can install the app from the private store."
        ],
        options: ["Yes", "No"],
        correctAnswers: ["No", "No", "Yes"],
        explanationHtml: `
      <h3>Explanation</h3>
      <p>앱 가용성을 특정 그룹(Group3)에 한정하면 해당 그룹 구성원만 설치 가능합니다.</p>
      <p><a href="https://learn.microsoft.com/microsoft-store/microsoft-store-for-business-overview" target="_blank">Private store (deprecated overview)</a></p>
    `
    },

    // 숫자: 40 → @AD 에 정의된 로그인 제한 시간을 반영하는 AADC 로그인 방법
    {
        id: 40,
        title: "AD 로그인 제한 시간 준수 인증 방식",
        promptHtml: `
      <p>Which authentication method enforces on‑premises AD logon hour restrictions?</p>
    `,
        type: "single",
        options: [
            "A. Pass-through authentication",
            "B. Password Hash Synchronization",
            "C. Federation with AD FS",
            "D. Cloud-only authentication"
        ],
        correctAnswers: ["A. Pass-through authentication"],
        explanationHtml: `
      <h3>Explanation</h3>
      <p>PTA는 인증을 온프레미스 DC에 위임하므로 로그온 시간 제한 등 AD 정책을 그대로 강제할 수 있습니다.</p>
      <p><a href="https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-pta" target="_blank">About PTA</a></p>
    `
    },
    {
        id: 41,
        title: "ASR(Attack Surface Reduction) 정책 지원 대상 OS",
        promptHtml: `<p>Select the supported operating systems for ASR policies.</p>
        ${IMG_Q41 ? `<p><img src="${IMG_Q41}" referrerpolicy="no-referrer" style="max-width:100%;height:auto;border:1px solid #e5e7eb;border-radius:8px;"></p>` : ""}
        `,
        type: "single",
        options: [
            "A. Device1 only",
            "B. Device2 only",
            "C. Device2, Device3",
            "D. All devices"
        ],
        correctAnswers: ["C. Device2, Device3"],
        explanationHtml: `
      <h3>Explanation</h3>
      <p>ASR은 지원 OS/에디션에서만 적용됩니다.</p>
      <p><a href="dataSourceUrl">Attack surface reduction rules</a></p>
    `
    },

    // 숫자: 42 — 보존정책 설정 문장 완성
    {
        id: 42,
        title: "보존 정책(Records) 적용 결과 문장 완성",
        promptHtml: `<p>Complete the sentences about a 7‑year retention policy and exception behavior.</p>
        ${IMG_Q42a ? `<p><img src="${IMG_Q42a}" referrerpolicy="no-referrer" style="max-width:100%;height:auto;border:1px solid #e5e7eb;border-radius:8px;"></p>` : ""}
        ${IMG_Q42b ? `<p><img src="${IMG_Q42b}" referrerpolicy="no-referrer" style="max-width:100%;height:auto;border:1px solid #e5e7eb;border-radius:8px;"></p>` : ""}
        `,
        type: "pair",
        pairLabels: ["Retention duration", "Exception note"],
        pairOptions: [
            "deleted seven years after they were created",
            "retained seven years after they were created",
            "some data may be deleted immediately",
            "never deleted"
        ],
        pairAnswer: [
            "deleted seven years after they were created",
            "some data may be deleted immediately"
        ],
        explanationHtml: `
      <h3>Explanation</h3>
      <p>보존 정책은 대상/조건에 따라 즉시 삭제되는 항목도 있을 수 있습니다.</p>
      <p><a href="1983">Learn about retention policies</a></p>
    `
    },

    // 숫자: 43 — MDCA 앱 모니터링 및 제어
    {
        id: 43,
        title: "Microsoft Defender for Cloud Apps로 세션 모니터링/제어",
        promptHtml: `<p>Which components do you use to monitor and control a sanctioned app session?</p>`,
        type: "pair",
        pairLabels: ["Feature", "Policy type"],
        pairOptions: [
            "Conditional Access App Control",
            "App connector",
            "A session policy",
            "A file policy"
        ],
        pairAnswer: ["Conditional Access App Control", "A session policy"],
        explanationHtml: `
      <h3>Explanation</h3>
      <p>CA App Control과 세션 정책으로 실시간 세션 제어를 구성합니다.</p>
      <p><a href="1984">Use Conditional Access App Control</a></p>
    `
    },

    // 숫자: 44 — MDE 네트워크 스캐너 등록 후 작업
    {
        id: 44,
        title: "MDE 네트워크 스캐너 등록 후 다음 단계",
        promptHtml: `<p>After installing and registering a network scanner, what should you do next?</p>`,
        type: "single",
        options: [
            "A. Connect to Intune",
            "B. Apply for Threat Experts",
            "C. Create an assessment job",
            "D. Download onboarding package"
        ],
        correctAnswers: ["C. Create an assessment job"],
        explanationHtml: `
      <h3>Explanation</h3>
      <p>Assessment job에서 IP 범위/주기를 정의합니다.</p>
      <p><a href="https://learn.microsoft.com/defender-cloud-apps/governance-actions">Create assessment jobs</a></p>
    `
    },

    // 숫자: 45 — Intune BitLocker Profile 배포
    {
        id: 45,
        title: "BitLocker 구성 배포 방식",
        promptHtml: `<p>To enforce BitLocker at scale with Intune, what should you create?</p>`,
        type: "single",
        options: [
            "A. Attack surface reduction policy",
            "B. Compliance policy",
            "C. Endpoint security baseline (macOS)",
            "D. a device configuration profile"
        ],
        correctAnswers: ["D. a device configuration profile"],
        explanationHtml: `
      <h3>Explanation</h3>
      <p>BitLocker는 구성 프로필(또는 Endpoint security 구성)로 적용합니다.</p>
      <p><a href="1985">Configure BitLocker with Intune</a></p>
    `
    },

    // 숫자: 46 — Intune Google Play 앱 배포 순서
    {
        id: 46,
        title: "Managed Google Play 앱 배포 준비 순서",
        promptHtml: `<p>Arrange the steps to deploy a managed Google Play app via Intune.</p>
        ${IMG_Q46 ? `<p><img src="${IMG_Q46}" referrerpolicy="no-referrer" style="max-width:100%;height:auto;border:1px solid #e5e7eb;border-radius:8px;"></p>` : ""}
        `,
        type: "sequence",
        sequenceOptions: [
            "Create a Google account",
            "Link the account to Intune",
            "Add the app",
            "Assign the app"
        ],
        sequenceAnswer: [
            "Create a Google account",
            "Link the account to Intune",
            "Add the app",
            "Assign the app"
        ],
        explanationHtml: `
      <h3>Explanation</h3>
      <p>Android Enterprise 바인딩 → 앱 추가 → 할당 순입니다.</p>
      <p><a href="1986">Connect Managed Google Play</a></p>
    `
    },

    // 숫자: 47 — 관리자별 AuditLog 보존기간
    {
        id: 47,
        title: "감사 로그 보존 기간",
        promptHtml: `<p>Select the retention period for each administrator’s audit events.</p>`,
        type: "pair",
        pairLabels: ["Admin1", "Admin2"],
        pairOptions: ["30 days", "90 days", "180 days", "365 days"],
        pairAnswer: ["90 days", "180 days"],
        explanationHtml: `
      <h3>Explanation</h3>
      <p>테넌트/라이선스/정책 설정에 따른 보존 기간입니다.</p>
      <p><a href="1987">Audit log retention</a></p>
    `
    },

    // 숫자: 48 — 위험한 사용자 분류 유형
    {
        id: 48,
        title: "Identity Protection 위험 분류 매핑",
        promptHtml: `<p>Map each policy to its risk detection focus.</p>
        ${IMG_Q48 ? `<p><img src="${IMG_Q48}" referrerpolicy="no-referrer" style="max-width:100%;height:auto;border:1px solid #e5e7eb;border-radius:8px;"></p>` : ""}
        `,
        type: "pair",
        pairLabels: ["Sign-in risk policy", "User risk policy"],
        pairOptions: [
            "Atypical travel",
            "Leaked credentials",
            "Malware linked IP",
            "Anonymous IP"
        ],
        pairAnswer: ["Atypical travel", "Leaked credentials"],
        explanationHtml: `
      <h3>Explanation</h3>
      <p>로그인 위험은 행태 기반(예: 비정상 위치), 사용자 위험은 자격 증명 유출 등 사용자 상태입니다.</p>
      <p><a href="1988">Risk detections</a></p>
    `
    },

    // 숫자: 49 — 그룹에 할당해야 하는 역할
    {
        id: 49,
        title: "그룹별 최소 권한 역할 할당",
        promptHtml: `
      <p>Assign the least‑privileged roles to meet each group’s tasks.</p>
      ${IMG_Q49a ? `<p><img src="${IMG_Q49a}" referrerpolicy="no-referrer" style="max-width:100%;height:auto;border:1px solid #e5e7eb;border-radius:8px;"></p>` : ""}
      ${IMG_Q49b ? `<p><img src="${IMG_Q49b}" referrerpolicy="no-referrer" style="max-width:100%;height:auto;border:1px solid #e5e7eb;border-radius:8px;"></p>` : ""}
    `,
        type: "pair",
        pairLabels: ["Group1 role", "Group2 role"],
        pairOptions: [
            "Billing Administrator",
            "User Administrator",
            "Global Administrator",
            "Service Support Administrator",
            "Reports Reader"
        ],
        pairAnswer: ["Billing Administrator", "User Administrator"],
        explanationHtml: `
      <h3>Explanation</h3>
      <p>청구/사용자 관리 요구에 맞춰 최소 권한을 매핑합니다.</p>
      <p><a href="1989">Microsoft 365 admin roles</a></p>
    `
    },

    // 숫자: 50 — SSPR 수행 전 정의해야 할 정보
    {
        id: 50,
        title: "SSPR 사전 등록 정보 매핑",
        promptHtml: `<p>Which information must be configured for each user before they can perform SSPR?</p>`,
        type: "pair",
        pairLabels: ["User1 (Global Administrator)", "User2 (Billing Administrator)", "User3 (None)"],
        pairOptions: [
            "Security questions only",
            "Mobile phone only",
            "Mobile phone + email",
            "None"
        ],
        pairAnswer: [
            "Security questions only",
            "Security questions only",
            "Security questions only"
        ],
        explanationHtml: `
      <h3>Explanation</h3>
      <p>정책에 따라 요구되는 인증 방법 수/유형을 충족해야 합니다.</p>
      <p><a href="1990">SSPR authentication methods</a></p>
    `
    },

    // 숫자: 51 — 최소 관리로 iOS 앱 배포
    {
        id: 51,
        title: "최소한의 관리 경험으로 모바일 디바이스 앱 배포(iOS)",
        promptHtml: `<p>Which enrollment should you use to minimize admin effort for iOS corporate devices?</p>
        `,
        type: "single",
        options: [
            "A. Automated Device Enrollment (ADE)",
            "B. User-enrolled",
            "C. Device Enrollment Manager",
            "D. Company Portal only"
        ],
        correctAnswers: ["A. Automated Device Enrollment (ADE)"],
        explanationHtml: `
      <h3>Explanation</h3>
      <p>ADE(DEP)는 기업 소유 iOS의 대량 등록/자동화에 적합합니다.</p>
      <p><a href="1991">Automated Device Enrollment</a></p>
    `
    },

    // 숫자: 52 — EMS 라이선스 사용 현황 내보내기
    {
        id: 52,
        title: "EMS 라이선스 사용 현황 내보내기",
        promptHtml: `<p>Select the location and option to export tenant users/license usage.</p>
        ${IMG_Q52 ? `<p><img src="${IMG_Q52}" referrerpolicy="no-referrer" style="max-width:100%;height:auto;border:1px solid #e5e7eb;border-radius:8px;"></p>` : ""}
        `,
        type: "pair",
        pairLabels: ["Settings", "Option"],
        pairOptions: ["Licenses", "Billing", "Export users", "Export licenses"],
        pairAnswer: ["Licenses", "Export users"],
        explanationHtml: `
      <h3>Explanation</h3>
      <p>라이선스 페이지에서 사용자 목록을 내보내 사용 현황을 분석합니다.</p>
      <p><a href="1992">Export users and licenses</a></p>
    `
    },

    // 숫자: 53 — VPP(ABM) 연동 추적
    {
        id: 53,
        title: "Volume‑Purchased App 추적",
        promptHtml: `<p>Which portal do you integrate to track and sync volume‑purchased iOS apps with Intune?</p>`,
        type: "single",
        options: [
            "A. Apple Configurator",
            "B. Apple Business Manager",
            "C. Apple School Manager",
            "D. Volume Purchasing Program (legacy)"
        ],
        correctAnswers: ["B. Apple Business Manager"],
        explanationHtml: `
      <h3>Explanation</h3>
      <p>현행 VPP 기능은 ABM/ASM에 통합되어 Intune과 동기화됩니다.</p>
      <p><a href="1993">Connect ABM to Intune</a></p>
    `
    },

    // 숫자: 54 — Intune 디바이스 등록 제한
    {
        id: 54,
        title: "Intune 디바이스 등록 제한 구성",
        promptHtml: `<p>Which restriction types control who can enroll devices and how many devices they can enroll?</p>
        ${IMG_Q54 ? `<p><img src="${IMG_Q54}" referrerpolicy="no-referrer" style="max-width:100%;height:auto;border:1px solid #e5e7eb;border-radius:8px;"></p>` : ""}
        `,
        type: "multi",
        multiOptions: [
            "Device type restrictions",
            "Device limit restrictions",
            "Configuration profiles",
            "MAM app protection"
        ],
        multiAnswer: ["Device type restrictions", "Device limit restrictions"],
        explanationHtml: `
      <h3>Explanation</h3>
      <p>플랫폼 제한과 사용자별 등록 가능 대수 제한으로 통제합니다.</p>
      <p><a href="1994">Enrollment restrictions</a></p>
    `
    },

    // 숫자: 55 — 그룹 라이선스 자동 할당
    {
        id: 55,
        title: "그룹 기반 라이선스 자동 할당",
        promptHtml: `<p>To auto‑assign licenses through group membership, what should you modify?</p>`,
        type: "single",
        options: [
            "A. Microsoft 365 admin center → Billing",
            "B. Intune user groups",
            "C. From the Microsoft Entra admin center, modify the settings of the group",
            "D. Azure AD Connect sync scope"
        ],
        correctAnswers: ["C. From the Microsoft Entra admin center, modify the settings of the group"],
        explanationHtml: `
      <h3>Explanation</h3>
      <p>그룹 기반 라이선스는 Entra(Azure AD)에서 그룹 속성으로 구성합니다.</p>
      <p><a href="1995">Group-based licensing</a></p>
    `
    },

    // 숫자: 56 — 지점 사용자만 MFA 적용
    {
        id: 56,
        title: "지점 사용자만 MFA 적용",
        promptHtml: `<p>Which solution should you use to require MFA only for branch users?</p>`,
        type: "single",
        options: [
            "A. Password protection",
            "B. Intune device configuration",
            "C. Intune compliance policy",
            "D. Azure AD conditional access"
        ],
        correctAnswers: ["D. Azure AD conditional access"],
        explanationHtml: `
      <h3>Explanation</h3>
      <p>그룹/위치 조건으로 분기 적용이 가능하기 때문입니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/entra/identity/conditional-access/overview">Conditional Access MFA</a></p>
    `
    },

    // 숫자: 57 — User1이 Compliance 평가 생성
    {
        id: 57,
        title: "사용자 컴플라이언스 평가 생성 권한",
        promptHtml: `<p>Can User1 create a compliance assessment per the scenario?</p>`,
        type: "single",
        options: ["A. Yes", "B. No"],
        correctAnswers: ["A. Yes"],
        explanationHtml: `
      <h3>Explanation</h3>
      <p>요건을 충족하는 역할/범위가 부여되어 있습니다.</p>
      <p><a href="1996">Compliance permissions</a></p>
    `
    },

    // 숫자: 58 — 대량 발송 차단 해제 관리자 식별
    {
        id: 58,
        title: "대량 메일 발송 차단 해제 담당자 및 구성 위치",
        promptHtml: `
      <p>Identify the administrators who can unblock users after outbound spam limit is exceeded and where to configure thresholds.</p>
      ${IMG_Q58 ? `<p><img src="${IMG_Q58}" referrerpolicy="no-referrer" style="max-width:100%;height:auto;border:1px solid #e5e7eb;border-radius:8px;"></p>` : ""}
    `,
        type: "pair",
        pairLabels: ["Administrators", "Configure"],
        pairOptions: [
            "Admin1 and Admin2 only",
            "Admin1 and Admin3 only",
            "Anti-spam",
            "Safe Attachments",
            "Safe Links"
        ],
        pairAnswer: ["Admin1 and Admin2 only", "Anti-spam"],
        explanationHtml: `
      <h3>Explanation</h3>
      <p>발신 스팸 정책에서 한도/차단 해제를 관리합니다.</p>
      <p><a href="1997">Outbound spam policy</a></p>
    `
    },

    // 숫자: 59 — 사용자 이름/Teams 모바일 사용량 표시
    {
        id: 59,
        title: "Org settings에서 사용자 이름/Teams 모바일 사용량 표시",
        promptHtml: `
      <p>Select the two locations in Org settings to show user names and Teams mobile usage.</p>
      ${IMG_Q59a ? `<p><img src="${IMG_Q59a}" referrerpolicy="no-referrer" style="max-width:100%;height:auto;border:1px solid #e5e7eb;border-radius:8px;"></p>` : ""}
      ${IMG_Q59b ? `<p><img src="${IMG_Q59b}" referrerpolicy="no-referrer" style="max-width:100%;height:auto;border:1px solid #e5e7eb;border-radius:8px;"></p>` : ""}
    `,
        type: "multi",
        multiOptions: [
            "Reports in Org settings",
            "Security in Org settings",
            "Microsoft Teams in Org settings",
            "Privacy in Org settings"
        ],
        multiAnswer: ["Reports in Org settings", "Microsoft Teams in Org settings"],
        explanationHtml: `
      <h3>Explanation</h3>
      <p>사용자/활동 보고 및 Teams 사용량 노출 설정은 각각 Reports, Teams 섹션에서 조정합니다.</p>
      <p><a href="1998">Reports settings</a></p>
    `
    },

    // 숫자: 60 — 관리자 역할 권한 비교
    {
        id: 60,
        title: "관리자 역할/권한 비교 위치",
        promptHtml: `<p>Where do you compare Microsoft Entra admin roles and permissions?</p>`,
        type: "single",
        options: [
            "A. Microsoft 365 admin center",
            "B. Exchange admin center",
            "C. Microsoft Defender portal",
            "D. the Microsoft Entra admin center"
        ],
        correctAnswers: ["D. the Microsoft Entra admin center"],
        explanationHtml: `
      <h3>Explanation</h3>
      <p>역할 정의/권한 비교는 Entra(Azure AD) 관리자 센터가 기준입니다.</p>
      <p><a href="1999">Entra roles and permissions</a></p>
    `
    },
    // 61 — Company Portal에 헬프데스크 번호 추가
    {
        id: 61,
        title: "Company Portal에 헬프데스크 번호 추가",
        promptHtml: `
      <p><strong>Original English Question</strong><br>
      You have a Microsoft 365 tenant that uses Microsoft Endpoint Manager for device management.<br>
      You need to add the <strong>phone number of the help desk</strong> to the <strong>Company Portal app</strong>.<br>
      What should you do?
      </p>
    `,
        type: "single",
        options: [
            "A. From Customization in the Microsoft Endpoint Manager admin center, modify the support information for the tenant.",
            "B. From the Microsoft Endpoint Manager admin center, create an app configuration policy.",
            "C. From the Microsoft 365 admin center, modify Organization information.",
            "D. From the Microsoft 365 admin center, modify Help desk information."
        ],
        correctAnswers: ["A. From Customization in the Microsoft Endpoint Manager admin center, modify the support information for the tenant."],
        explanationHtml: `
      <h3>Explanation</h3>
      Company Portal의 지원 정보는 Intune → Tenant administration → Customization → Support information에서 구성합니다.
      <p><a href="https://learn.microsoft.com/mem/intune/apps/company-portal-app#customize-the-company-portal-app">Customize the Intune Company Portal</a></p>
    `
    },

    // 62 — macOS Defender ATP config profile
    {
        id: 62,
        title: "Mac용 Defender ATP 구성 프로필 생성",
        promptHtml: `
      <p><strong>Original English Question</strong><br>
      You have a Microsoft 365 E5 subscription.<br>
      All users have Mac computers. All the computers are enrolled in Microsoft Endpoint Manager and onboarded to <strong>Microsoft Defender Advanced Threat Protection (Defender ATP)</strong>.<br>
      You need to configure Microsoft Defender ATP on the computers.<br>
      What should you create from the Endpoint Management admin center?
      </p>
    `,
        type: "single",
        options: [
            "A. a device configuration profile",
            "B. an update policy for iOS",
            "C. a Microsoft Defender ATP baseline profile",
            "D. a mobile device management (MDM) security baseline profile"
        ],
        correctAnswers: ["A. a device configuration profile"],
        explanationHtml: `
      <h3>Explanation</h3>
      macOS의 MDE 설정은 Device configuration profile로 배포합니다(보안 기준 Baseline은 Windows 전용).
      <p><a href="https://learn.microsoft.com/microsoft-365/security/defender-endpoint/mac-install-with-intune">Deploy MDE on macOS with Intune</a></p>
    `
    },

    // 63 — Incidents page source
    {
        id: 63,
        title: "Microsoft 365 보안 센터 Incident 원본 식별",
        promptHtml: `
      <p><strong>Original English Question</strong><br>
      You have a Microsoft 365 tenant.<br>
      You plan to manage incidents in the tenant by using the <strong>Microsoft 365 Security Center</strong>.<br>
      Which Microsoft service source will appear on the <strong>Incidents page</strong> of the Microsoft 365 Security Center?
      </p>
    `,
        type: "single",
        options: [
            "A. Microsoft Cloud App Security",
            "B. Azure Sentinel",
            "C. Azure Web Application Firewall",
            "D. Azure Defender"
        ],
        correctAnswers: ["A. Microsoft Cloud App Security"],
        explanationHtml: `
      <h3>Explanation</h3>
      Microsoft 365 Defender 인시던트는 MDE/MDO/MDI/MDCA(Defender for Cloud Apps)에서 생성됩니다.
      <p><a href="https://learn.microsoft.com/microsoft-365/security/defender/incidents-overview">Incidents in Microsoft 365 Defender</a></p>
    `
    },

    // 64 — Compliance evaluation (Yes/No)
    {
        id: 64,
        title: "각 디바이스의 정책별 준수 여부 판정",
        promptHtml: `
      <p><strong>Original English Question</strong><br>
      You have a Microsoft 365 tenant that contains the <strong>compliance policies</strong> shown in the first table and the <strong>devices</strong> shown in the second table.</p>
      ${IMG_Q64_1 ? `<p><img src="${IMG_Q64_1}" referrerpolicy="no-referrer" style="max-width:100%"></p>` : ""}
      ${IMG_Q64_2 ? `<p><img src="${IMG_Q64_2}" referrerpolicy="no-referrer" style="max-width:100%"></p>` : ""}
      <p>For each of the following statements, select <strong>Yes</strong> if the statement is true. Otherwise, select <strong>No.</strong> (Each correct selection is worth one point.)</p>
      ${IMG_Q64_3 ? `<p><img src="${IMG_Q64_3}" referrerpolicy="no-referrer" style="max-width:100%"></p>` : ""}
    `,
        statements: [
            "Device1 is marked as compliant.",
            "Device2 is marked as compliant.",
            "Device3 is marked as compliant."
        ],
        options: ["Yes", "No"],
        correctAnswers: ["No", "No", "No"],
        explanationHtml: `
      <h3>Explanation</h3>
      여러 규정 준수 정책이 적용되면 가장 제한적인 조건까지 모두 충족해야 Compliant입니다.
      <p><a href="https://learn.microsoft.com/mem/intune/protect/compliance-policy-create-windows">Device compliance policy overview</a></p>
    `
    },

    // 65 — Enrollment restrictions (Yes/No)
    {
        id: 65,
        title: "사용자별 등록 제한 정책 적용 판정",
        promptHtml: `
      <p><strong>Original English Question</strong><br>
      You have several devices enrolled in Microsoft Endpoint Manager.<br>
      You have an Azure AD tenant with users (User1, User2, User3) and device type enrollment restrictions with priorities and group assignments.</p>
      ${IMG_Q65_1 ? `<p><img src="${IMG_Q65_1}" style="max-width:100%"></p>` : ""}
      ${IMG_Q65_2 ? `<p><img src="${IMG_Q65_2}" style="max-width:100%"></p>` : ""}
      ${IMG_Q65_3 ? `<p><img src="${IMG_Q65_3}" style="max-width:100%"></p>` : ""}
      <p>For each statement, select <strong>Yes</strong> if the device can be enrolled, otherwise <strong>No.</strong></p>
    `,
        statements: [
            "User1 can enroll Windows devices in Endpoint Manager.",
            "User2 can enroll Android devices in Endpoint Manager.",
            "User3 can enroll iOS devices in Endpoint Manager."
        ],
        options: ["Yes", "No"],
        correctAnswers: ["No", "No", "No"],
        explanationHtml: `
      <h3>Explanation</h3>
      우선순위(작은 숫자 우선)와 허용 플랫폼을 기준으로 평가합니다.
      <p><a href="https://learn.microsoft.com/mem/intune/enrollment/enrollment-restrictions-set">Set enrollment restrictions</a></p>
    `
    },

    // 66 — App deployment result (Yes/No)
    {
        id: 66,
        title: "앱 배포 결과: 설치/표시 여부 판단",
        promptHtml: `
      <p><strong>Original English Question</strong><br>
      You have a Microsoft 365 E5 subscription that uses Microsoft intune. The subscription contains the resources shown in the following table.<br>
      ${IMG_Q66_1 ? `<p><img src="${IMG_Q66_1}" style="max-width:100%"></p>` : ""}
      User1 is the owner of Device1. IT Certification Guaranteed, The Easy Way!  You add Microsoft 365 Apps Windows 10 and later app types to Intune as shown in the following table.<br>
      ${IMG_Q66_2 ? `<p><img src="${IMG_Q66_2}" style="max-width:100%"></p>` : ""}
      On Thursday, you review the results of the app deployments.
      ${IMG_Q66_3 ? `<p><img src="${IMG_Q66_3}" style="max-width:100%"></p>` : ""}
      </p>
    `,
        statements: [
            "Word is installed on Device1.",
            "App3 is displayed in the Company Portal.",
            "Excel is installed on Device1."
        ],
        options: ["Yes", "No"],
        correctAnswers: ["Yes", "Yes", "Yes"],
        explanationHtml: `
      <h3>Explanation</h3>
      사용자 대상 Required/Available, 장치 대상 Required 동작에 따라 결과가 결정됩니다.
      <p><a href="https://learn.microsoft.com/mem/intune/apps/apps-deploy">Assign and monitor apps</a></p>
    `
    },

    // 67 — Microsoft 365 Apps deployable devices
    {
        id: 67,
        title: "M365 Apps 배포 대상",
        promptHtml: `
      <p><strong>Original English Question</strong><br>
      You have a Microsoft 365 E5 tenant that contains four devices enrolled in Microsoft Intune as shown in the table (Windows 10, Android, macOS, iOS).<br>
      You plan to deploy <strong>Microsoft 365 Apps for enterprise</strong> by using Microsoft Endpoint Manager.<br>
      To which devices can you deploy Microsoft 365 Apps for enterprise?</p>
      ${IMG_Q67_1 ? `<p><img src="${IMG_Q67_1}" style="max-width:100%"></p>` : ""}
    `,
        type: "single",
        options: [
            "A. Device1 only",
            "B. Device1 and Device3 only",
            "C. Device2 and Device4 only",
            "D. Device1, Device2, and Device3 only",
            "E. Device1, Device2, Device3, and Device4"
        ],
        correctAnswers: ["B. Device1 and Device3 only"],
        explanationHtml: `
      <h3>Explanation</h3>
      Microsoft 365 Apps는 Windows 10/11 및 macOS에 배포합니다.
      <p><a href="https://learn.microsoft.com/deployoffice/microsoft-365-apps-intune">Deploy Microsoft 365 Apps with Intune</a></p>
    `
    },

    // 68 — Auto-onboard to MDE (Yes/No)
    {
        id: 68,
        title: "Intune 등록 시 Defender 자동 온보딩 방식 검증",
        promptHtml: `
      <p><strong>Original English Question</strong><br>
      You integrate Microsoft Defender for Endpoint (MDE) with Microsoft Intune.<br>
      You need to ensure that devices automatically <strong>onboard to Defender for Endpoint</strong> when they are enrolled in Intune.<br>
      <strong>Solution:</strong> You create a <strong>compliance policy.</strong><br>
      Does this meet the goal?</p>
    `,
        type: "single",
        options: ["A. Yes", "B. No"],
        correctAnswers: ["B. No"],
        explanationHtml: `
      <h3>Explanation</h3>
      자동 온보딩은 구성 프로필(Endpoint protection → Microsoft Defender for Endpoint)로 구성합니다.
      <p><a href="https://learn.microsoft.com/microsoft-365/security/defender-endpoint/intune-device-onboarding">Configure Intune to onboard to MDE</a></p>
    `
    },

    // 69 — Minimum CA policies
    {
        id: 69,
        title: "조건부 액세스 정책 최소 개수 산정",
        promptHtml: `
      <p><strong>Original English Question</strong><br>
      You have a Microsoft 365 E5 subscription.<br>
      You need to create <strong>Conditional Access</strong> policies to meet the following requirements: (five items listed).<br>
      What is the <strong>minimum number of Conditional Access policies</strong> required?</p>
    `,
        type: "single",
        options: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7", "F. 8"],
        correctAnswers: ["B. 4"],
        explanationHtml: `
      <h3>Explanation</h3>
      MFA+Compliant(1), 지역 차단(1), R&D 플랫폼 차단(1), 특정 앱 제한(1) → 4개.
      <p><a href="https://learn.microsoft.com/azure/active-directory/conditional-access/overview">Conditional Access overview</a></p>
    `
    },

    // 70 — Baseline precedence
    {
        id: 70,
        title: "MDATP Baseline 정책 적용 우선순위 분석",
        promptHtml: `
      <p><strong>Original English Question</strong><br>
      You have a Windows 10 device (Device1) and multiple policies configuring the same ASR setting.<br>
      Which policy settings are applied to Device1?</p>
      ${IMG_Q70_1 ? `<p><img src="${IMG_Q70_1}" style="max-width:100%"></p>` : ""}
    `,
        type: "single",
        options: [
            "A. only the settings of Policy1",
            "B. only the settings of Policy2",
            "C. only the settings of Policy3",
            "D. no settings"
        ],
        correctAnswers: ["B. only the settings of Policy2"],
        explanationHtml: `
      <h3>Explanation</h3>
      Security Baseline은 일반 구성 프로필보다 높은 우선순위로 적용됩니다.
      <p><a href="https://learn.microsoft.com/mem/intune/protect/security-baselines">Security baselines in Intune</a></p>
    `
    },

    // 71 — APP Data Transfer (pair)
    {
        id: 71,
        title: "Android App Protection Policy의 데이터 이동 제한 해석",
        promptHtml: `
      <p><strong>Original English Question</strong><br>
      You create an Android app protection policy named <strong>Policy1</strong>, targeted to all Microsoft apps and assigned to all users.<br>
      Policy1 has the <strong>Data Transfer</strong> settings shown in the exhibit.<br>
      ${IMG_Q71_1 ? `<p><img src="${IMG_Q71_1}" style="max-width:100%"></p>` : ""}
      Use the drop-down menus to complete each statement based on the information presented.</p>
      ${IMG_Q71_2 ? `<p><img src="${IMG_Q71_2}" style="max-width:100%"></p>` : ""}
    `,
        type: "pair",
        pairLabels: [
            "From OneDrive, a user can copy files to …",
            "A user can copy and paste text from … to a Microsoft Word document stored in OneDrive"
        ],
        pairOptions: [
            "Microsoft SharePoint Online",
            "Only managed apps",
            "Only unmanaged apps",
            "Local storage"
        ],
        pairAnswer: [
            "Microsoft SharePoint Online",
            "Only managed apps"
        ],
        explanationHtml: `
      <h3>Explanation</h3>
      Save copies = Block + SharePoint Online 허용, Copy/Paste = Policy managed apps with paste in.
      <p><a href="https://learn.microsoft.com/mem/intune/apps/app-protection-policy-settings-android#data-transfer">App protection policy data transfer (Android)</a></p>
    `
    },

    // 72 — Security Baseline target groups
    {
        id: 72,
        title: "Security Baseline 프로필 할당 가능한 그룹 유형 식별",
        promptHtml: `
      <p><strong>Original English Question</strong><br>
      You have a Microsoft 365 tenant that contains the groups shown in the table.<br>
      You plan to create a new Windows 10 Security Baseline profile.<br>
      To which groups can you assign the profile?</p>
      ${IMG_Q72_1 ? `<p><img src="${IMG_Q72_1}" style="max-width:100%"></p>` : ""}
    `,
        type: "single",
        options: [
            "A. Group3 only",
            "B. Group1 and Group3 only",
            "C. Group2 and Group3 only",
            "D. Group1, Group2, and Group3"
        ],
        correctAnswers: ["A. Group3 only"],
        explanationHtml: `
      <h3>Explanation</h3>
      Intune 프로필은 Security 그룹(디바이스/사용자 포함 가능)에만 할당할 수 있습니다.
      <p><a href="https://learn.microsoft.com/azure/active-directory/fundamentals/active-directory-groups-create-azure-portal">Assign policies to groups</a></p>
    `
    },

    // 73 — Who ran eDiscovery searches
    {
        id: 73,
        title: "eDiscovery 검색 수행 관리자 조회 방법",
        promptHtml: `
      <p><strong>Original English Question</strong><br>
      You have a Microsoft 365 subscription.<br>
      You need to identify which administrative users performed <strong>eDiscovery searches</strong> during the past week.<br>
      What should you do from the <strong>Security &amp; Compliance admin center</strong>?</p>
    `,
        type: "single",
        options: [
            "A. Perform a content search",
            "B. Create a supervision policy",
            "C. Create an eDiscovery case",
            "D. Perform an audit log search"
        ],
        correctAnswers: ["D. Perform an audit log search"],
        explanationHtml: `
      <h3>Explanation</h3>
      관리자 활동은 Purview의 Audit 로그에서 확인합니다.
      <p><a href="https://learn.microsoft.com/purview/audit-log-search">Search the audit log</a></p>
    `
    },

    // 74 — OneDrive hold URL
    {
        id: 74,
        title: "User1의 OneDrive 위치에 대한 eDiscovery Hold URL 구성",
        promptHtml: `
      <p><strong>Original English Question</strong><br>
      You have a Microsoft 365 subscription linked to an Azure AD tenant named <strong>contoso.onmicrosoft.com</strong>.<br>
      A user named <strong>User1</strong> stores documents in Microsoft OneDrive.<br>
      You need to place the contents of User1’s OneDrive account on an <strong>eDiscovery hold</strong>.<br>
      Which URL should you use for the hold?</p>
      ${IMG_Q74_1 ? `<p><img src="${IMG_Q74_1}" style="max-width:100%"></p>` : ""}
    `,
        type: "single",
        options: [
            "onedrive.live.com/personal/User1",
            "contoso.sharepoint.com/personal/User1_contoso_onmicrosoft_com",
            "contoso.onmicrosoft.com/users/User1",
            "contoso-my.sharepoint.com/personal/User1_contoso_onmicrosoft_com"
        ],
        correctAnswers: ["contoso-my.sharepoint.com/personal/User1_contoso_onmicrosoft_com"],
        explanationHtml: `
      <h3>Explanation</h3>
      조직용 OneDrive의 표준 경로는 {tenant}-my.sharepoint.com/personal/{UPN_underscore} 입니다.
      <p><a href="https://learn.microsoft.com/purview/ediscovery-content-search#content-locations">Content locations on hold</a></p>
    `
    },

    // 75 — UPN suffix fix (Yes/No)
    {
        id: 75,
        title: "User2의 Azure AD 인증 실패 원인 해결 방법 평가",
        promptHtml: `
      <p><strong>Original English Question</strong><br>
      Your network contains an on-premises Active Directory domain named <strong>contoso.com</strong>.<br>
      The domain contains the users shown in the table. [Exhibit]<br>
      ${IMG_Q75_1 ? `<p><img src="${IMG_Q75_1}" style="max-width:100%"></p>` : ""}
      The domain syncs to an Azure AD tenant named <strong>contoso.com</strong> (as shown in the exhibit). [Exhibit]<br>
      ${IMG_Q75_2 ? `<p><img src="${IMG_Q75_2}" style="max-width:100%"></p>` : ""}
      User2 fails to authenticate to Azure AD when signing in as <strong>user2@fabrikam.com</strong>.<br>
      You need to ensure that User2 can access Azure AD resources.<br>
      <strong>Solution:</strong> From the on-premises Active Directory domain, set User2’s <strong>UPN suffix</strong> to <strong>@contoso.com</strong>, and instruct User2 to sign in as <strong>user2@contoso.com</strong>.<br>
      Does this meet the goal?</p>
    `,
        type: "single",
        options: ["A. Yes", "B. No"],
        correctAnswers: ["A. Yes"],
        explanationHtml: `
      <h3>Explanation</h3>
      테넌트에 검증된 도메인으로 UPN을 정정하면 동기화 및 인증이 정상 작동합니다.
      <p><a href="https://learn.microsoft.com/azure/active-directory/hybrid/plan-connect-userprincipalname">Plan UPN with Entra Connect</a></p>
    `
    },

    // 76 — Attack simulation training
    {
        id: 76,
        title: "사용자 대상 사회공학적 보안 교육 자동화 설정",
        promptHtml: `
      <p><strong>Original English Question</strong><br>
      You have a Microsoft 365 subscription and use Microsoft Defender for Office 365.<br>
      You need to recommend a solution to <strong>educate users</strong> on topics related to <strong>social engineering risks</strong>.<br>
      The users must receive a <strong>weekly reminder</strong> to complete a learning task.<br>
      What should you use in the Microsoft Defender portal?</p>
    `,
        type: "single",
        options: ["A. Campaigns", "B. Attack simulation training", "C. Threat tracker", "D. Learning hub"],
        correctAnswers: ["B. Attack simulation training"],
        explanationHtml: `
      <h3>Explanation</h3>
      Attack simulation training은 과제와 반복 알림을 제공합니다.
      <p><a href="https://learn.microsoft.com/microsoft-365/security/office-365-security/attack-simulation-training">Attack simulation training (MDO)</a></p>
    `
    },

    // 77 — Outbound cap + hash block
    {
        id: 77,
        title: "발송 제한 및 파일 해시 차단을 위한 위협 보호 정책",
        promptHtml: `
      <p><strong>Original English Question</strong><br>
      You have a Microsoft 365 E5 subscription.<br>
      You need to configure threat protection for Microsoft 365 to meet the following requirements:<br>
      - Limit a user named <strong>User1</strong> from sending more than <strong>30 email messages per day</strong>.<br>
      - Prevent the delivery of a specific <strong>file based on file hash</strong>.<br>
      Which two <strong>threat policies</strong> should you configure in Microsoft Defender for Office 365?</p>
      ${IMG_Q77_1 ? `<p><img src="${IMG_Q77_1}" style="max-width:100%"></p>` : ""}
    `,
        type: "multi",
        multiOptions: [
            "Anti-spam policy",
            "Anti-phishing policy",
            "Safe Attachments policy",
            "Tenant Allow/Block List"
        ],
        multiAnswer: ["Anti-spam policy", "Tenant Allow/Block List"],
        explanationHtml: `
      <h3>Explanation</h3>
      Outbound limit은 Anti-spam, 파일 해시 차단은 Tenant Allow/Block List입니다.
      <p><a href="https://learn.microsoft.com/microsoft-365/security/office-365-security/configure-the-outbound-spam-policy">Outbound spam policy</a><br>
      <a href="https://learn.microsoft.com/microsoft-365/security/office-365-security/tenant-allow-block-list-about">Tenant Allow/Block List (files)</a></p>
    `
    },

    // 78 — AAD Connect mapping (Yes/No)
    {
        id: 78,
        title: "Azure AD Connect 동기화 시 사용자 매핑 판별",
        promptHtml: `
      <p><strong>Original English Question</strong><br>
      Your network contains an Active Directory Domain Services (AD DS) domain. The domain contains a server named Server1 that runs Windows Server.</br>
      The domain contains the users shown in the following table.<br>
      ${IMG_Q78_1 ? `<p><img src="${IMG_Q78_1}" style="max-width:100%"></p>` : ""}
      You have a Microsoft 365 subscription that contains the following user accounts
      ${IMG_Q78_2 ? `<p><img src="${IMG_Q78_2}" style="max-width:100%"></p>` : ""}
    `,
        statements: [
            "User1 syncs with user1@contoso.com.",
            "User2 syncs with user2@contoso.com.",
            "User3 is created as a new user in Microsoft 365."
        ],
        options: ["Yes", "No"],
        correctAnswers: ["Yes", "No", "Yes"],
        explanationHtml: `
      <h3>Explanation</h3>
      .local UPN은 onmicrosoft.com 기본 도메인으로 변환되어 동기화됩니다.
      <p><a href="https://learn.microsoft.com/azure/active-directory/hybrid/plan-connect-design-concepts#userprincipalname-considerations">UPN and non-routable domains</a></p>
    `
    },

    // 79 — Prevent bulk sending block recurrence
    {
        id: 79,
        title: "대량 메일 발송으로 인한 사용자 차단 방지 설정",
        promptHtml: `
      <p><strong>Original English Question</strong><br>
      You have a Microsoft 365 E5 subscription that uses Microsoft Defender for Office 365 and contains a user named <strong>User1</strong>.<br>
      User1 emails a product catalog in the PDF format to 300 vendors.<br>
      Only 200 vendors receive the email message, and User1 is blocked from sending email until the next day.<br>
      You need to prevent this issue from reoccurring.<br>
      What should you configure?</p>
    `,
        type: "single",
        options: [
            "A. anti-spam policies",
            "B. Safe Attachments policies",
            "C. anti-phishing policies",
            "D. anti-malware policies"
        ],
        correctAnswers: ["A. anti-spam policies"],
        explanationHtml: `
      <h3>Explanation</h3>
      Outbound spam policy에서 발신 한도/차단 해제를 조정합니다.
      <p><a href="https://learn.microsoft.com/microsoft-365/security/office-365-security/configure-the-outbound-spam-policy">Outbound spam policy</a></p>
    `
    },

    // 80 — MDCA role for policy/alerts
    {
        id: 80,
        title: "Cloud App Security 정책 생성 및 경고 관리 권한 검증",
        promptHtml: `
      <p><strong>Original English Question</strong><br>
      You have an Azure AD tenant that contains a user named <strong>User1</strong>.<br>
      Your company purchases a Microsoft 365 subscription.<br>
      You need to ensure that User1 is assigned the required role to <strong>create file policies and manage alerts</strong> in the <strong>Cloud App Security admin center</strong>.<br>
      <strong>Solution:</strong> From the Azure Active Directory admin center, you assign the <strong>Compliance Administrator</strong> role to User1.<br>
      Does this meet the goal?</p>
    `,
        type: "single",
        options: ["A. Yes", "B. No"],
        correctAnswers: ["B. No"],
        explanationHtml: `
      <h3>Explanation</h3>
      MDCA(Defender for Cloud Apps) 정책/경고 관리는 Security Administrator 또는 Global Administrator로 수행합니다.
      <p><a href="https://learn.microsoft.com/defender-cloud-apps/manage-admins#roles-and-permissions">Roles and permissions in Defender for Cloud Apps</a></p>
    `
    }
] // ref: 
