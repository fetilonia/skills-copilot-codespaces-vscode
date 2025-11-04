// questions.js (batch 1–10)
// 이미지가 필요한 문제의 경우, i.imgur.com 등의 "직접 이미지 링크"로 교체하세요.
const IMG_Q2_1 = "https://i.imgur.com/XjDrp3h.png";   // https://www.notion.so/29adbd591ead802a836bd45d47be7082에 표시된 이미지 1[^]
const IMG_Q8_1 = "https://i.imgur.com/hbrJ45l.png"
const IMG_Q6_1 = "https://i.imgur.com/ayPIsLw.png";     //  표 이미지[^]
const IMG_Q7_1 = "https://i.imgur.com/xmXtPD1.png";     //  스크린샷[^]
const IMG_Q12_1 = "https://i.imgur.com/LAipH86.png"; // 조건부 액세스 추가 설정 스크린샷[^‣]
const IMG_Q13_1 = "https://i.imgur.com/YeajSdH.png"; // eDiscovery 순서 다이어그램[^‣]
const IMG_Q19_1 = "https://i.imgur.com/bdJ7Njk.png"; // MCAS Data Sources/Log Collectors 구성도[^‣]
const IMG_Q20_1 = "https://i.imgur.com/TRUPAeg.png"; // 정보 거버넌스 정책 요약 이미지[^‣]
const IMG_Q21_1 = "https://i.imgur.com/iAVgxxI.png"; // Endpoint protection 지원 표 이미지
const IMG_Q23_1 = "https://i.imgur.com/YcM9G08.png"; // Auto-enrollment, 그룹 할당 화면
const IMG_Q27_1 = "https://i.imgur.com/4eYdZpB.png"; // Auto-enrollment, 그룹 할당 화면
const IMG_Q29_1 = "https://i.imgur.com/YdjJJln.png"; // 테넌트 구성 정보 도식
const IMG_Q29_2 = "https://i.imgur.com/tvWKGJ5.png";
const IMG_Q30_1 = "https://i.imgur.com/hxeqNrb.png"; // 답안 영역
const IMG_Q33_1 = "https://i.imgur.com/d0zieV6.png"; // 답안 영역
const IMG_Q35_1 = "https://i.imgur.com/MdgmtwL.png"; // 답안 영역
const IMG_Q36_1 = "https://i.imgur.com/Ua06Lx9.png"; // MFA 등록/사용 조건 표 이미지가 있다면
const IMG_Q37_1 = "https://i.imgur.com/IxNTvIB.png"; // MFA 등록/사용 조건 표 이미지가 있다면
const IMG_Q39_1 = "https://i.imgur.com/0PBmeXF.png"; // Private Store 표 이미지가 있다면
const IMG_Q39_2 = "https://i.imgur.com/PlzWCuW.png"; // Private Store 표 이미지가 있다면
const IMG_Q41_1 = "https://i.imgur.com/uffMKYj.png";
const IMG_Q42_1 = "https://i.imgur.com/38TSbNR.png";
const IMG_Q42_2 = "https://i.imgur.com/3ejR499.png";
const IMG_Q43_1 = "https://i.imgur.com/zxIsKGi.png";
const IMG_Q46_1 = "https://i.imgur.com/0RMmoDM.png";
const IMG_Q47_1 = "https://i.imgur.com/bvW8fz4.png";
const IMG_Q47_2 = "https://i.imgur.com/kmBIYhq.png";
const IMG_Q48_1 = "https://i.imgur.com/06ErVJY.png";
const IMG_Q49_1 = "https://i.imgur.com/2Zv4byy.png";
const IMG_Q49_2 = "https://i.imgur.com/A9vbGWw.png";
const IMG_Q50_1 = "https://i.imgur.com/bdpIKhN.png";
const IMG_Q50_2 = "https://i.imgur.com/6OXnnfI.png";
const IMG_Q51_1 = "https://i.imgur.com/9fnY80n.png";
const IMG_Q52_1 = "https://i.imgur.com/bxemHWp.png";
const IMG_Q54_1 = "https://i.imgur.com/gWdaJgo.png";
const IMG_Q58_1 = "https://i.imgur.com/gRoY3HI.png"; // 58번 스팸 정책/관리자 화면 등
const IMG_Q58_2 = "https://i.imgur.com/DwKQvCU.png"; // 58번 스팸 정책/관리자 화면 등
const IMG_Q59_1 = "https://i.imgur.com/G7ufBzA.png"; // 59번 Org settings 스크린샷 등
const IMG_Q59_2 = "https://i.imgur.com/SN7FsqZ.png"; // 59번 Org settings 스크린샷 등
const IMG_Q60_1 = "https://i.imgur.com/aNBxfQb.png"; // 59번 Org settings 스크린샷 등
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
const IMG_Q81_1 = "https://i.imgur.com/4YciLI5.png"; // PowerShell flow exhibit
const IMG_Q84_1 = "https://i.imgur.com/aYEBKSX.png"; // Compliance policy screenshot #1
const IMG_Q84_2 = "https://i.imgur.com/lasyJzv.png"; // Compliance policy screenshot #2
const IMG_Q86_1 = "https://i.imgur.com/H9XrUao.png"; // Auto retention policies exhibit
const IMG_Q86_2 = "https://i.imgur.com/eyOBtJP.png"; // Auto retention policies exhibit
const IMG_Q88_1 = "https://i.imgur.com/JME4VDw.png"; // Auto retention policies exhibit
const IMG_Q89_1 = "https://i.imgur.com/AZnXKYH.png"; // Policies table
const IMG_Q89_2 = "https://i.imgur.com/GRsmGY3.png"; // Devices compliance results
const IMG_Q89_3 = "https://i.imgur.com/bVjtRsI.png"; // Devices compliance results
const IMG_Q90_1 = "https://i.imgur.com/4yXN9SN.png"; // Users/roles table
const IMG_Q90_2 = "https://i.imgur.com/D5YJf0x.png"; // Users/roles table
const IMG_Q91_1 = "https://i.imgur.com/tZw4rAh.png"; // Locations exhibit
const IMG_Q93_1 = "https://i.imgur.com/ORTbu2r.png"; // Users/domains table
const IMG_Q94_1 = "https://i.imgur.com/TiQI4OP.png"; // Cloud Apps Settings screen
const IMG_Q95_1 = "https://i.imgur.com/JAAhgCZ.png"; // Devices table for onboarding
const IMG_Q95_2 = "https://i.imgur.com/knLHQmV.png"; // Devices table for onboarding
const IMG_Q96_1 = "https://i.imgur.com/ZbnSKG2.png"; // Users/Roles/Device groups tables
const IMG_Q96_2 = "https://i.imgur.com/baHmk0X.png"; // Users/Roles/Device groups tables
const IMG_Q96_3 = "https://i.imgur.com/JgDOlch.png"; // Users/Roles/Device groups tables
const IMG_Q96_4 = "https://i.imgur.com/f3OgMQT.png"; // Users/Roles/Device groups tables
const IMG_Q97_1 = "https://i.imgur.com/hfl9L28.png"; // Mails with PCL table
const IMG_Q98_1 = "https://i.imgur.com/wqhvGMG.png"; // BYOD vs Company-owned diagram
const IMG_Q100_1 = "https://i.imgur.com/CTR03cC.png"; // MCAS App discovery policy screen
const IMG_Q103_1 = "https://i.imgur.com/j7YXQNw.png"; // MCAS App discovery policy screen
const IMG_Q103_2 = "https://i.imgur.com/litbpoO.png"; // MCAS App discovery policy screen
const IMG_Q104_1 = "https://i.imgur.com/iL0kq6B.png"; // devices/groups/rule exhibit
const IMG_Q104_2 = "https://i.imgur.com/FAKrCeu.png"; // devices/groups/rule exhibit
const IMG_Q104_3 = "https://i.imgur.com/SSYc9v6.png"; // devices/groups/rule exhibit
const IMG_Q104_4 = "https://i.imgur.com/3BLElOx.png"; // devices/groups/rule exhibit
const IMG_Q106_1 = "https://i.imgur.com/MCdTSFV.png"; // SPO roles/files exhibit
const IMG_Q106_2 = "https://i.imgur.com/NABeUVw.png"; // SPO roles/files exhibit
const IMG_Q106_3 = "https://i.imgur.com/33SA3Vz.png"; // SPO roles/files exhibit
const IMG_Q110_1 = "https://i.imgur.com/7pZDbiJ.png"; // Exchange+DLP overlap exhibit
const IMG_Q111_1 = "https://i.imgur.com/mwEVY8s.png"; // Exchange+DLP overlap exhibit
const IMG_Q115_1 = "https://i.imgur.com/lKrJvcK.png"; // auto-label scope tables
const IMG_Q115_2 = "https://i.imgur.com/sRvQItN.png"; // auto-label scope tables
const IMG_Q115_3 = "https://i.imgur.com/ZxTXaZ7.png"; // auto-label scope tables
const IMG_Q116_1 = "https://i.imgur.com/InNvEiU.png"; // incident notification rules + logs
const IMG_Q116_2 = "https://i.imgur.com/HI6F182.png"; // incident notification rules + logs
const IMG_Q116_3 = "https://i.imgur.com/33FUxTQ.png"; // incident notification rules + logs
const IMG_Q117_1 = "https://i.imgur.com/ZgAL35e.png"; // IdFix screenshot
const IMG_Q118_1 = "https://i.imgur.com/5pq1nQu.png"; // two retention policies table
const IMG_Q120_1 = "https://i.imgur.com/V6qFASg.png"; // MEM Office policies exhibits
const IMG_Q120_2 = "https://i.imgur.com/XMvMhBu.png"; // MEM Office policies exhibits
const IMG_Q120_3 = "https://i.imgur.com/zD72jZH.png"; // MEM Office policies exhibits
const IMG_Q120_4 = "https://i.imgur.com/UQY3Lkz.png"; // MEM Office policies exhibits
const IMG_Q123_1 = "https://i.imgur.com/zZFLXo9.png"; // Azure ATP/MDI sensor settings exhibit
const IMG_Q124_1 = "https://i.imgur.com/CWLlck1.png"; // MDI users/roles table exhibit
const IMG_Q125_1 = "https://i.imgur.com/izyE04y.png"; // Servers table + step picker exhibit
const IMG_Q125_2 = "https://i.imgur.com/iMy7rLk.png"; // Servers table + step picker exhibit
const IMG_Q126_1 = "https://i.imgur.com/6qUwL3d.png"; // Groups table exhibit
const IMG_Q127_1 = "https://i.imgur.com/LtIsuhH.png";
const IMG_Q127_2 = "https://i.imgur.com/VAmSMf6.png";
const IMG_Q127_3 = "https://i.imgur.com/aO7Qz2u.png";
const IMG_Q128_1 = "https://i.imgur.com/VNnuCWe.png"; // Anti-phishing policy UI exhibit
const IMG_Q131_1 = "https://i.imgur.com/s88WSeu.png"; // Users/domains/exhibit for UPN login
const IMG_Q131_2 = "https://i.imgur.com/A2fd2Nw.png"; // Users/domains/exhibit for UPN login
const IMG_Q131_3 = "https://i.imgur.com/fYl5GAz.png"; // Users/domains/exhibit for UPN login
const IMG_Q136_1 = "https://i.imgur.com/ZfSY3vg.png"; // ESP users/devices tables
const IMG_Q136_2 = "https://i.imgur.com/fzTshAI.png"; // ESP users/devices tables
const IMG_Q136_3 = "https://i.imgur.com/E6hdBMa.png"; // ESP users/devices tables
const IMG_Q138_1 = "https://i.imgur.com/eJjj7V0.png"; // ESP users/devices tables
const IMG_Q143_1 = "https://i.imgur.com/XGGd7Ua.png"; // Intune MDM/MAM + devices exhibits
const IMG_Q145_1 = "https://i.imgur.com/LE8oEXy.png"; // Intune MDM/MAM + devices exhibits
const IMG_Q145_2 = "https://i.imgur.com/43yVtUg.png"; // Intune MDM/MAM + devices exhibits
const IMG_Q145_3 = "https://i.imgur.com/e89AHS4.png"; // Intune MDM/MAM + devices exhibits
const IMG_Q146_1 = "https://i.imgur.com/OJZTfNg.png"; // MDE devices/alerts/exhibits
const IMG_Q146_2 = "https://i.imgur.com/CIoKppO.png"; // MDE devices/alerts/exhibits
const IMG_Q146_3 = "https://i.imgur.com/Sa9sMmc.png"; // MDE devices/alerts/exhibits
const IMG_Q147_1 = "https://i.imgur.com/3BjElSb.png"; // Users + named locations + policy exhibits
const IMG_Q147_2 = "https://i.imgur.com/Hu8eCla.png"; // Users + named locations + policy exhibits
const IMG_Q147_3 = "https://i.imgur.com/TZaereR.png"; // Users + named locations + policy exhibits
const IMG_Q149_1 = "https://i.imgur.com/vEjL2vv.png"; // Office policies priority + settings exhibits
const IMG_Q149_2 = "https://i.imgur.com/DPxOlQp.png"; // Office policies priority + settings exhibits
const IMG_Q149_3 = "https://i.imgur.com/q38u0Tk.png"; // Office policies priority + settings exhibits
const IMG_Q149_4 = "https://i.imgur.com/2dSAa8F.png"; // Office policies priority + settings exhibits
const IMG_Q151_1 = "https://i.imgur.com/YfKVkAK.png"; // SSPR + Password writeback exhibits (if any)
const IMG_Q152_1 = "https://i.imgur.com/Bn4otGr.png"; // Users table / settings exhibit
const IMG_Q153_1 = "https://i.imgur.com/imEEwSq.png"; // ESP profile + assignments + devices exhibits
const IMG_Q153_2 = "https://i.imgur.com/PKDNwz8.png"; // ESP profile + assignments + devices exhibits
const IMG_Q153_3 = "https://i.imgur.com/kcgkWOv.png"; // ESP profile + assignments + devices exhibits
const IMG_Q153_4 = "https://i.imgur.com/yL2bny1.png"; // ESP profile + assignments + devices exhibits
const IMG_Q154_1 = "https://i.imgur.com/LAlKiGZ.png"; // Published labels list exhibit
const IMG_Q155_1 = "https://i.imgur.com/LAlKiGZ.png"; // Type restrictions & device limits exhibits
const IMG_Q158_1 = "https://i.imgur.com/xmprltp.png"; // Devices table exhibit
const IMG_Q159_1 = "https://i.imgur.com/yTztOg8.png";
const IMG_Q160_1 = "https://i.imgur.com/6qdTW3y.png"; // Devices table exhibit
const IMG_Q163_1 = "https://i.imgur.com/y9PsQm0.png"; // Dynamic group rule UI exhibit
const IMG_Q163_2 = "https://i.imgur.com/qgjPggL.png"; // Dynamic group rule UI exhibit
const IMG_Q164_1 = "https://i.imgur.com/boeXJhG.png"; // DLP rules/files/answers exhibits
const IMG_Q164_2 = "https://i.imgur.com/yULalHu.png"; // DLP rules/files/answers exhibits
const IMG_Q164_3 = "https://i.imgur.com/a6GSrBU.png"; // DLP rules/files/answers exhibits
const IMG_Q165_1 = "https://i.imgur.com/i0BK4p7.png"; // Users/roles + RBAC enable UI exhibit
const IMG_Q165_2 = "https://i.imgur.com/UUVcs4g.png"; // Users/roles + RBAC enable UI exhibit
const IMG_Q169_1 = "https://i.imgur.com/N4bksRF.png";
const IMG_Q169_2 = "https://i.imgur.com/Oxaz4Co.png";
const IMG_Q170_1 = "https://i.imgur.com/686bwxi.png"; 
const IMG_Q170_2 = "https://i.imgur.com/W6RwvBG.png"; 
const IMG_Q170_3 = "https://i.imgur.com/4FF31Nu.png"; 
const IMG_Q170_4 = "https://i.imgur.com/d4nJ6aX.png"; 
const IMG_Q170_5 = "https://i.imgur.com/fMbDpBo.png"; 
const IMG_Q173_1 = "https://i.imgur.com/BEVZSIA.png"; 
const IMG_Q175_1 = "https://i.imgur.com/aWZu5ek.png"; 
const IMG_Q177_1 = "https://i.imgur.com/lt6rbNu.png"; 
const IMG_Q180_1 = "https://i.imgur.com/kjq8jSA.png"; 
const IMG_Q180_2 = "https://i.imgur.com/gxPYKfH.png"; 
const IMG_Q181_1 = "https://i.imgur.com/PhCVJHE.png"; 
const IMG_Q182_1 = "https://i.imgur.com/5sJ9Kd0.png"; 
const IMG_Q183_1 = "https://i.imgur.com/Kebqh3U.png"; 
const IMG_Q184_1 = "https://i.imgur.com/pIFvGOq.png"; 
const IMG_Q185_1 = "https://i.imgur.com/AyWuNCF.png"; 


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
    promptHtml: `
      <p>You need to meet the compliance requirements for the Windows 10 devices.<br>
      What should you create from the Intune admin center?</p>
    `,
    type: "single",
    options: [
      "A. a device compliance policy",
      "B. a device configuration profile",
      "C. an application policy",
      "D. an app configuration policy"
    ],
    correctAnswers: ["C. an application policy"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>요구는 디바이스 전역 설정이 아니라 앱 보호 범주로 해석됩니다.</p>
      <p>앱 보호(예: WIP/MAM-WE 등)는 Application policy로 배포합니다.</p>
      <p>Device compliance/profile은 각각 준수 평가와 OS 설정 배포 목적입니다.</p>
      <p>앱 구성 정책은 앱 설정 전달용으로 보호 수준 통제와 다릅니다.</p>
      <p>배포 전 대상 그룹과 플랫폼 필터를 점검하세요.</p>
      <p>정책 충돌은 리포트와 디바이스 진단으로 확인할 수 있습니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/information-protection/windows-information-protection/create-wip-policy-using-intune-azure#create-a-wip-policy">Create and deploy Windows Information Protection (Intune)</a></p>
    `
  },

  // 2 (pair)
  {
    id: 2,
    title: "Intune 설정 프로필 구성",
    promptHtml: `
      <p>You need to meet the technical requirements and planned changes for Intune.<br>
      What should you do?<br>
      To answer, select the appropriate options in the answer area.<br>
      NOTE: Each correct selection is worth one point.</p>
      ${IMG_Q2_1 ? `<p><img src="${IMG_Q2_1}" style="max-width:100%"></p>` : ""}
    `,
    type: "pair",
    pairLabels: ["Azure AD side setting", "Intune side setting"],
    pairOptionsLeft: [
      "Device settings",
      "Mobility (MDM and MAM)",
      "Organizational relationships",
      "User settings"
    ],
    pairOptionsRight: [
      "Device compliance",
      "Device configure",
      "Device enrollment",
      "Mobile Device Management Authority"
    ],
    pairAnswer: ["Mobility (MDM and MAM)", "Device enrollment"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>자동 등록은 Azure AD의 Mobility(MDM and MAM)에서 Intune을 연결해야 동작합니다.</p>
      <p>Intune 쪽에서는 Enroll devices 하위의 Device enrollment에서 사용자 범위를 지정합니다.</p>
      <p>MAM scope는 앱 보호 대상으로 자동 등록 트리거와 무관합니다.</p>
      <p>파일럿 그룹으로 시작해 점진 확대를 권장합니다.</p>
      <p>라이선스와 플랫폼 지원 상태를 사전 확인하세요.</p>
      <p>문서의 단계별 스크린을 참고하면 실수가 줄어듭니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/mem/intune/enrollment/windows-enrollment-methods#configure-automatic-enrollment">Set up automatic enrollment in Intune</a></p>
    `
  },

  // 3
  {
    id: 3,
    title: "Co-management용 장치 컬렉션 지정 필요",
    promptHtml: `
      <p>Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it.<br>
      Your network contains an Active Directory domain named contoso.com that is synced to Microsoft Azure Active Directory (Azure AD).<br>
      You manage Windows 10 devices by using Microsoft System Center Configuration Manager (Current Branch).<br>
      You configure a pilot for co-management.<br>
      You add a new device named Device1 to the domain. You install the Configuration Manager client on Device1.<br>
      You need to ensure that you can manage Device1 by using Microsoft Intune and Configuration Manager.<br>
      Solution: You create a device configuration profile from the Device Management admin center.<br>
      Does this meet the goal?</p>
    `,
    type: "single",
    options: ["A. Yes", "B. No"],
    correctAnswers: ["B. No"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>공동 관리는 SCCM Co-management 구성 + Auto-enrollment가 핵심입니다.</p>
      <p>Intune 구성 프로필만으로는 클라이언트를 공동 관리 상태로 전환할 수 없습니다.</p>
      <p>파일럿 컬렉션 지정과 Auto-enroll existing clients를 함께 활성화해야 합니다.</p>
      <p>그 후 워크로드 전환을 단계적으로 적용하십시오.</p>
      <p>클라이언트 조인/등록 상태는 dsregcmd와 CoMgmt 상태로 검증합니다.</p>
      <p>문서의 마법사 지침을 따라 설정해야 누락이 없습니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/intune/configmgr/comanage/tutorial-co-manage-clients">Enable co-management for existing clients</a></p>
    `
  },

  // 4
  {
    id: 4,
    title: "Microsoft Store 생성 가능한 사용자 식별",
    promptHtml: `
      <p>You need to create the Microsoft Store for Business.<br>
      Which user can create the store?</p>
    `,
    type: "single",
    options: ["A. User2", "B. User3", "C. User4", "D. User5"],
    correctAnswers: ["C. User4"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>스토어 최초 생성은 Global Administrator만 수행할 수 있습니다.</p>
      <p>생성 이후에는 스토어/구매자 역할로 위임이 가능합니다.</p>
      <p>문항 전제에서 Global Administrator는 User4입니다.</p>
      <p>생성은 테넌트 단위 1회이며 이후 테넌트에 종속됩니다.</p>
      <p>Intune과 동기화하여 앱 배포 파이프라인을 구성합니다.</p>
      <p>변경된 Store 정책은 릴리스 노트를 주기적으로 확인하세요.</p>
      <p><a href="https://learn.microsoft.com/ko-kr/lifecycle/announcements/microsoft-store-for-business-education-retiring">Roles and permissions for Store for Business</a></p>
    `
  },

  // 5
  {
    id: 5,
    title: "Azure ATP Sensor 설치 서버 식별",
    promptHtml: `
      <p>On which server should you install the Azure ATP sensor?</p>
    `,
    type: "single",
    options: ["A. Server1", "B. Server2", "C. Server3", "D. Server4", "E. Server5"],
    correctAnswers: ["A. Server1"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Port mirroring 없이 배포하려면 DC에 Lightweight Sensor를 설치합니다.</p>
      <p>시나리오에서 DC는 Server1이므로 해당 서버가 정답입니다.</p>
      <p>Standalone Sensor는 별도 서버 + 미러링이 필요합니다.</p>
      <p>설치 후 센서는 Kerberos/NTLM/LDAP 트래픽을 수집합니다.</p>
      <p>리소스/권한·네트워크 전제조건을 확인하십시오.</p>
      <p>업그레이드/패치 주기 또한 운영 기준에 맞춰야 합니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/defender-for-identity/architecture?utm_source=chatgpt.com#defender-for-identity-components">Defender for Identity sensor installation</a></p>
    `
  },

  // 6 (pair)
  {
    id: 6,
    title: "각 오피스 PC의 Microsoft 지원 기간 식별",
    promptHtml: `
      <p>As of March, how long will the computers in each office remain supported by Microsoft?<br>
      To answer, select the appropriate options in the answer area.<br>
      NOTE: Each correct selection is worth one point.</p>
      ${IMG_Q6_1 ? `<p><img src="${IMG_Q6_1}" style="max-width:100%"></p>` : ""}
    `,
    type: "pair",
    pairLabels: ["Seattle support period (months)", "New York support period (months)"],
    pairOptionsLeft: ["18 months", "24 months", "30 months"],
    pairOptionsRight: ["12 months", "18 months", "24 months", "30 months"],
    pairAnswer: ["24 months", "18 months"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Enterprise 기준 H2 배포는 30개월, H1 배포는 18개월 지원이 일반 원칙입니다.</p>
      <p>문항 전제에 따라 사무소별 배포 시기가 다르며 그에 따른 월수가 제시됩니다.</p>
      <p>뉴욕은 3월(H1) → 18개월, 다른 사무소는 9월(H2) 배포로 더 깁니다.</p>
      <p>실무에서는 최신 Windows lifecycle 표를 확인해야 합니다.</p>
      <p>장기 운용 장비는 LTSC 채널을 고려할 수 있습니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/lifecycle/faq/windows#what-is-the-servicing-timeline-for-a-version--feature-update--of-windows-10-">Windows lifecycle fact sheet</a></p>
    `
  },

  // 7 (pair)
  {
    id: 7,
    title: "Co-management와 자동 등록 설정 필요",
    promptHtml: `
      <p>You need to meet the Intune requirements for the Windows 10 devices.<br>
      What should you do?<br>
      To answer, select the appropriate options in the answer area.<br>
      NOTE: Each correct selection is worth one point.</p>
      ${IMG_Q7_1 ? `<p><img src="${IMG_Q7_1}" style="max-width:100%"></p>` : ""}
    `,
    type: "pair",
    pairLabels: ["Azure AD configuration item", "Intune configuration item"],
    pairOptionsLeft: ["Mobility (MDM and MAM)", "Conditional Access", "User settings"],
    pairOptionsRight: ["Device enrollment", "Compliance policies", "Endpoint security"],
    pairAnswer: ["Mobility (MDM and MAM)", "Device enrollment"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Azure AD의 Mobility(MDM and MAM)에서 Intune 연결을 활성화해야 자동 등록 경로가 열립니다.</p>
      <p>Intune의 Device enrollment에서 사용자 범위를 Some/All로 지정합니다.</p>
      <p>이 조합이 Co-management의 전제 조건을 만족합니다.</p>
      <p>필요하다면 DEM 계정으로 대량 등록을 병행할 수 있습니다.</p>
      <p>테넌트 라이선스가 적절히 할당되었는지 확인하세요.</p>
      <p><a href="https://learn.microsoft.com/en-us/mem/intune/enrollment/windows-enrollment-methods#configure-automatic-enrollment">Automatic enrollment in Intune</a></p>
    `
  },

  // 8
  {
    id: 8,
    title: "DEM 1인당 1,000대 → 최소 인원 산출",
    promptHtml: `
      <p>You need to ensure that the support technicians can meet the technical requirement for the Montreal office mobile devices.<br>
      ${IMG_Q7_1 ? `<p><img src="${IMG_Q7_1}" style="max-width:100%"></p>` : ""}
      What is the minimum of dedicated support technicians required?</p>
    `,
    type: "single",
    options: ["A. 1", "B. 4", "C. 7", "D. 31"],
    correctAnswers: ["B. 4"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Device Enrollment Manager(DEM) 계정은 사용자당 최대 1,000대 등록이 가능합니다.</p>
      <p>약 4,000대가 필요하므로 최소 4명이 필요합니다.</p>
      <p>등록 후 장치 소유권/그룹 태깅으로 정책을 분배하세요.</p>
      <p>등록 제한 및 플랫폼 제한과의 충돌을 점검해야 합니다.</p>
      <p>대량 등록 절차는 스크립트와 체크리스트로 표준화하세요.</p>
      <p><a href="call_anyAgVpQt0SRB0uJMaJNgqXr">Device Enrollment Manager limits</a></p>
    `
  },

  // 9
  {
    id: 9,
    title: "파일럿 지정만으로 Co-management 불가",
    promptHtml: `
      <p>Note: This question is part of a series of questions that present the same scenario...<br>
      You configure a pilot for co-management.<br>
      You add Device1 and install the Configuration Manager client.<br>
      Solution: Define a Configuration Manager device collection as the pilot collection and add Device1 to the collection.<br>
      Does this meet the goal?</p>
    `,
    type: "single",
    options: ["A. Yes", "B. No"],
    correctAnswers: ["B. No"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>파일럿 컬렉션 지정은 필요하지만 단독으로 충분하지 않습니다.</p>
      <p>Co-management 마법사에서 Intune 자동 등록을 활성화해야 합니다.</p>
      <p>장치가 Azure AD/Intune에 등록되어야 양쪽 관리가 가능합니다.</p>
      <p>워크로드 이동을 단계적으로 전환하십시오.</p>
      <p>상태는 CoMgmt/Company portal에서 확인합니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/intune/configmgr/comanage/tutorial-co-manage-clients">Enable co-management (pilot collections)</a></p>
    `
  },

  // 10
  {
    id: 10,
    title: "Defender Identity Sensor 설치 대상",
    promptHtml: `
      <p>On which server should you use the Defender for Identity sensor?</p>
    `,
    type: "single",
    options: ["A. Server1", "B. Server2", "C. Server3", "D. Server4", "E. Server5"],
    correctAnswers: ["A. Server1"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>미러링을 피하려면 DC에 Lightweight Sensor를 설치합니다.</p>
      <p>문항의 DC는 Server1로 설정되어 있습니다.</p>
      <p>Standalone Sensor는 별도 서버 + 포트 미러링이 필요합니다.</p>
      <p>센서 서비스/계정 권한을 문서대로 구성하세요.</p>
      <p>설치 로그는 문제 해결에 유용합니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/defender-for-identity/architecture?utm_source=chatgpt.com#defender-for-identity-components">Defender for Identity sensors</a></p>
    `
  },

  // 11
  {
    id: 11,
    title: "User1이 디바이스 등록을 수행할 방법",
    promptHtml: `
      <p>You need to ensure that User1 can enroll the devices to meet the technical requirements.<br>
      What should you do?</p>
    `,
    type: "single",
    options: [
      "A. From the Azure Active Directory admin center, assign User1 the Cloud Device Administrator role.",
      "B. From the Azure Active Directory admin center, configure the Maximum number of devices per user setting.",
      "C. From the Intune admin center, add User1 as a Device Enrollment Manager (DEM).",
      "D. From the Intune admin center, configure the Enrollment restrictions."
    ],
    correctAnswers: ["C. From the Intune admin center, add User1 as a Device Enrollment Manager (DEM)."],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>다수 장치를 대신 등록하려면 DEM 권한이 필요합니다.</p>
      <p>DEM 사용자는 최대 1,000대를 등록할 수 있습니다.</p>
      <p>Cloud Device Administrator는 등록 한도를 해제하지 않습니다.</p>
      <p>Enrollment restrictions는 허용 플랫폼/소유권 제한 용도입니다.</p>
      <p>Intune → Enroll devices → Device enrollment managers에서 사용자 추가.</p>
      <p>등록 후 정책 할당과 소유권 태그를 구성하세요.</p>
      <p><a href="https://www.notion.so/28ddbd591ead8027b332c595bff1e2d4">Add Device Enrollment Managers</a></p>
    `
  },

  // 12 (pair)
  {
    id: 12,
    title: "Conditional Access Policy 추가 설정 식별",
    promptHtml: `
      <p>You need to configure a conditional access policy to meet the compliance requirements.<br>
      You add Exchange Online as a cloud app.<br>
      Which two additional settings should you configure in Policy1?<br>
      NOTE: Each correct selection is worth one point.</p>
      ${IMG_Q12_1 ? `<p><img src="${IMG_Q12_1}" style="max-width:100%"></p>` : ""}
    `,
    type: "pair",
    pairLabels: ["Conditions", "Grant controls"],
    pairOptionsLeft: ["Device platform", "Client apps", "Locations"],
    pairOptionsRight: ["Require multi-factor authentication", "Require device to be marked as compliant", "Block access"],
    pairAnswer: ["Device platform", "Require device to be marked as compliant"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>규정 준수를 강제하려면 플랫폼 조건과 준수 장치 요구를 함께 설정해야 합니다.</p>
      <p>Exchange Online을 앱으로 지정한 뒤 Conditions에서 Device platform을 선택합니다.</p>
      <p>Grant에서는 Require device to be marked as compliant를 활성화합니다.</p>
      <p>MFA 요구는 별도 보안 시나리오입니다.</p>
      <p>Report-only로 검증 후 Enforce로 전환하세요.</p>
      <p><a href="https://learn.microsoft.com/en-us/microsoft-365/enterprise/view-service-health?view=o365-worldwide">Conditional Access overview</a></p>
    `
  },

  // 13 (sequence)
  {
    id: 13,
    title: "법무 부서 요구사항 충족을 위한 작업 순서",
    promptHtml: `
      <p>You need to meet the requirement for the legal department.<br>
      Which three actions should you perform in sequence from the Security & Compliance admin center?<br>
      To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>
      ${IMG_Q13_1 ? `<p><img src="${IMG_Q13_1}" style="max-width:100%"></p>` : ""}
    `,
    type: "sequence",
    sequenceOptions: [
      "Create a new eDiscovery case",
      "Add User1’s mailbox and OneDrive content to the case",
      "Apply a hold to the case",
      "Create a DLP policy",
      "Enable audit (standard)"
    ],
    sequenceAnswer: [
      "Create a new eDiscovery case",
      "Add User1’s mailbox and OneDrive content to the case",
      "Apply a hold to the case"
    ],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>사용자 데이터 보존은 eDiscovery 케이스에서 Hold로 구성됩니다.</p>
      <p>“케이스 생성 → 대상 리포지토리 추가 → Hold 적용” 순입니다.</p>
      <p>DLP는 유출 방지 목적이므로 보존 요구와 다릅니다.</p>
      <p>Hold가 설정되면 삭제되어도 보존 사본이 유지됩니다.</p>
      <p>권한을 최소한으로 제한해 접근을 관리하세요.</p>
      <p>케이스 감사 로그로 추적 가능성을 확보하십시오.</p>
      <p><a href="https://learn.microsoft.com/en-us/microsoft-365/compliance/data-loss-prevention-policies#create-dlp-rules">eDiscovery and holds</a></p>
    `
  },

  // 14
  {
    id: 14,
    title: "EU PII 데이터 보존을 위한 정책 유형",
    promptHtml: `
      <p>You need to meet the technical requirement for the EU PII data.<br>
      What should you create?</p>
    `,
    type: "single",
    options: [
      "A. a retention policy from the Security & Compliance admin center",
      "B. a retention policy from the Exchange admin center",
      "C. a data loss prevention (DLP) policy from the Exchange admin center",
      "D. a data loss prevention (DLP) policy from the Security & Compliance admin center"
    ],
    correctAnswers: ["A. a retention policy from the Security & Compliance admin center"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>요구는 “장기간 보존”이며 메일과 문서를 모두 포함합니다.</p>
      <p>전사 범위 보존은 Purview(S&C) Retention policy로 구성합니다.</p>
      <p>Exchange 전용 보존은 범위가 제한됩니다.</p>
      <p>DLP는 유출 방지 정책으로 보존 요구와 다릅니다.</p>
      <p>자동 적용 레이블과의 결합도 고려할 수 있습니다.</p>
      <p>정책 충돌과 우선순위를 사전 점검하세요.</p>
      <p><a href="https://learn.microsoft.com/en-us/microsoft-365/compliance/data-loss-prevention-policies">Microsoft Purview retention overview</a></p>
    `
  },
  // 16
  {
    id: 16,
    title: "대량 문서 다운로드 탐지를 위한 정책",
    promptHtml: `
      <p>You need to meet the technical requirement for large-volume document retrieval.<br>
      What should you create?</p>
    `,
    type: "single",
    options: [
      "A. a data loss prevention (DLP) policy from the Security & Compliance admin center",
      "B. an alert policy from the Security & Compliance admin center",
      "C. a file policy from Microsoft Cloud App Security",
      "D. an activity policy from Microsoft Cloud App Security"
    ],
    correctAnswers: ["D. an activity policy from Microsoft Cloud App Security"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>대량 다운로드는 사용자 “활동” 기반 탐지가 적합합니다.</p>
      <p>MDCA(Defender for Cloud Apps)의 Activity policy로 시간/건수 기준을 설정합니다.</p>
      <p>탐지 시 관리자 알림과 자동 대응(계정 일시중단 등)을 연계할 수 있습니다.</p>
      <p>File policy는 파일 속성/공유 상태 평가 중심입니다.</p>
      <p>보정 기간·임계값은 운영 패턴에 맞게 조정하세요.</p>
      <p><a href="https://learn.microsoft.com/en-us/defender-cloud-apps/session-policy-aad#block-specific-activities">Activity policy for mass download</a></p>
    `
  },

  // 17
  {
    id: 17,
    title: "보안 관리자 솔루션·기술 요구사항 충족",
    promptHtml: `
      <p>You need to recommend a solution for the security administrator.<br>
      The solution must meet the technical requirements.<br>
      What should you include in the recommendation?</p>
    `,
    type: "single",
    options: [
      "A. Microsoft Azure Active Directory (Azure AD) Privileged Identity Management",
      "B. Microsoft Azure Active Directory (Azure AD) Identity Protection",
      "C. Microsoft Azure Active Directory (Azure AD) Conditional Access policies",
      "D. Microsoft Azure Active Directory (Azure AD) Authentication methods"
    ],
    correctAnswers: ["B. Microsoft Azure Active Directory (Azure AD) Identity Protection"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>요구는 로그인 위험 보고 + 위험 기반 MFA입니다.</p>
      <p>Identity Protection은 Risky users/sign-ins 리포트와 위험 정책을 제공합니다.</p>
      <p>조건부 액세스만으로는 위험 탐지 기능이 없습니다.</p>
      <p>PIM/Authentication methods는 목적이 다릅니다.</p>
      <p>High/Medium/Low 위험 수준에 따라 MFA 또는 차단을 자동 적용합니다.</p>
      <p>운영 시 명시적 제외/포함 위치를 정비하세요.</p>
      <p><a href="https://learn.microsoft.com/en-us/entra/id-protection/howto-identity-protection-configure-risk-policies">Identity Protection overview</a></p>
    `
  },

  // 18
  {
    id: 18,
    title: "미국 PII 데이터 보호를 위한 정책 구성",
    promptHtml: `
      <p>You need to protect the U.S. PII data to meet the technical requirements.<br>
      What should you create?</p>
    `,
    type: "single",
    options: [
      "A. a data loss prevention (DLP) policy that contains a domain exception",
      "B. a Security & Compliance retention policy that detects content containing sensitive data",
      "C. a Security & Compliance alert policy that contains an activity",
      "D. a data loss prevention (DLP) policy that contains a user override"
    ],
    correctAnswers: ["A. a data loss prevention (DLP) policy that contains a domain exception"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>내부 도메인 간 전송만 허용하고 외부 송신은 차단해야 합니다.</p>
      <p>DLP 정책에서 민감정보(U.S. PII) + 도메인 예외 조건을 함께 구성합니다.</p>
      <p>Alert/Retention은 차단을 보장하지 않습니다.</p>
      <p>User override는 우회 허용이므로 요구와 상충됩니다.</p>
      <p>정책 팁·알림으로 사용자 인지를 높이세요.</p>
      <p>오탐 튜닝은 샘플/활동 보고서를 기반으로 반복합니다.</p>
      <p><a href="https://api.securitycenter.microsoft.com/.default'">Create DLP policies with exceptions</a></p>
    `
  },

  // 19 (pair)
  {
    id: 19,
    title: "Cloud App Security 로그 분석: 최소 데이터 소스/수집기",
    promptHtml: `
      <p>You need to meet the technical requirement for log analysis.<br>
      What is the minimum number of data sources and log collectors you should create from Microsoft Cloud App Security?<br>
      NOTE: Each correct selection is worth one point.</p>
      ${IMG_Q19_1 ? `<p><img src="${IMG_Q19_1}" style="max-width:100%"></p>` : ""}
    `,
    type: "pair",
    pairLabels: ["Data Sources", "Log Collectors"],
    pairOptionsLeft: ["1", "2", "3", "4"],
    pairOptionsRight: ["0", "1", "2", "3"],
    pairAnswer: ["3", "1"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>서로 다른 SIEM 원본이 3개이므로 Data source는 3개가 필요합니다.</p>
      <p>단일 Log collector가 동일 네트워크의 여러 원본을 수집할 수 있습니다.</p>
      <p>네트워크 대역폭·보존 기간·파서 구성을 함께 검토하세요.</p>
      <p>업로드 실패 대비 재전송/버퍼 전략을 준비합니다.</p>
      <p>보안 권한과 접근 제어도 함께 설계해야 합니다.</p>
      <p><a href="https://login.microsoftonline.com/$TenantId/oauth2/v2.0/token">Connect logs to Defender for Cloud Apps</a></p>
    `
  },

  // 20 (pair)
  {
    id: 20,
    title: "정보 거버넌스 정책 유형 및 개수",
    promptHtml: `
      <p>You need to configure the information governance settings to meet the technical requirements.<br>
      Which type of policy should you configure, and how many policies should you configure?</p>
      ${IMG_Q20_1 ? `<p><img src="${IMG_Q20_1}" style="max-width:100%"></p>` : ""}
    `,
    type: "pair",
    pairLabels: ["Policy Type", "Number of Policies"],
    pairOptionsLeft: ["Retention", "Label", "AUto-labeling"],
    pairOptionsRight: ["1", "2", "3"],
    pairAnswer: ["Retention", "2"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>SharePoint/OneDrive는 하나의 보존 정책에 함께 지정할 수 있습니다.</p>
      <p>Teams 채널 메시지는 별도의 보존 정책이 필요합니다.</p>
      <p>따라서 최소 2개의 Retention Policy가 요구됩니다.</p>
      <p>보존 기간·범위·예외를 명확히 정의하세요.</p>
      <p>중복 정책 충돌을 피하도록 우선순위를 관리합니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/microsoft-365/admin/add-users/about-admin-roles">Retention policies across workloads</a></p>
    `
  },
  {
    id: 21,
    title: "Identify supported devices and number of endpoint protection profiles",
    promptHtml: `
      <p>You plan to implement the endpoint protection device configuration profiles to support the planned changes.<br>
      You need to identify which devices will be supported, and how many profiles you should implement.<br>
      What should you identify? To answer, select the appropriate options in the answer area.<br>
      Select the appropriate options.</p>
      ${IMG_Q21_1 ? `<p><img src="${IMG_Q21_1}" style="max-width:100%"></p>` : ""}
    `,
    type: "pair",
    pairLabels: ["Supported devices", "Number of required profiles"],
    pairOptionsLeft: [
      "Device1 only",
      "Device1 and Device2 only",
      "Device1 and Device3 only",
      "Device1, Device2, and Device3",
      "Device1, Device4, and Device5",
      "Device1, Device2, Device3, Device4, and Device5"
    ],
    pairOptionsRight: ["1", "2", "3", "4", "5"],
    pairAnswer: ["Device1 and Device2 only", "1"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>엔드포인트 보호 프로필은 문제에서 제시된 특정 플랫폼 조합만 지원하는 전제가 있습니다.</p>
      <p>따라서 Device1과 Device2가 지원 대상이며, 나머지는 해당 프로필의 지원 범위를 벗어납니다.</p>
      <p>동일 구성을 여러 장치에 배포할 때는 하나의 프로필을 생성해 그룹 대상 지정으로 재사용하는 것이 운영상 간결합니다.</p>
      <p>프로필을 과도하게 쪼개면 충돌 분석과 변경 관리가 복잡해집니다.</p>
      <p>배포 후 Intune 리포트에서 정책 충돌과 성공률을 점검하세요.</p>
      <p>장치 필터(Platform/OS 버전)와 스코프 태그도 정책 일관성에 영향을 줍니다.</p>
      <p><a href="https://learn.microsoft.com/mem/intune/protect/device-protect">Microsoft Intune device protection overview</a></p>
    `
  },

  // 22 — Safe Attachments
  {
    id: 22,
    title: "Choose the Safe Attachments delivery mode",
    promptHtml: `
      <p> You need to create the Safe Attachments policy to meet the technical requirements.<br>
      Which option should you select?</p>
    `,
    type: "single",
    options: [
      "A. Replace",
      "B. Enable redirect",
      "C. Block",
      "D. Dynamic Delivery"
    ],
    correctAnswers: ["D. Dynamic Delivery"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Dynamic Delivery는 메일 본문을 즉시 제공하면서 첨부 파일을 격리 검사 후 자동으로 본문에 다시 연결합니다.</p>
      <p>사용자 경험을 해치지 않으면서 보안 검사를 수행해야 할 때 권장되는 방식입니다.</p>
      <p>Block은 메시지 전체를 차단하여 본문도 지연됩니다.</p>
      <p>Replace는 악성 발견 시 안전한 링크로 치환하는 동작에 초점이 있습니다.</p>
      <p>Monitor는 관찰 모드로 정책 효과를 강제하지 않습니다.</p>
      <p>정책 우선순위와 프리셋 보안 정책과의 관계를 함께 고려하십시오.</p>
      <p><a href="https://learn.microsoft.com/microsoft-365/security/office-365-security/safe-attachments-policies">Safe Attachments policies</a></p>
    `
  },

  // 23 — pair
  {
    id: 23,
    title: "Configure Intune auto-enrollment and assign the correct group",
    promptHtml: `
      <p>You need to configure automatic enrollment in Intune. The solution must meet the technical requirements.<br>
      What should you configure, and to which group should you assign the configurations? To answer,<br>
      select the appropriate options in the answer area.</p>
      ${IMG_Q23_1 ? `<p><img src="${IMG_Q23_1}" style="max-width:100%"></p>` : ""}
    `,
    type: "pair",
    pairLabels: ["What to configure", "Assigned group"],
    pairOptionsLeft: [
      "MDM user Scope",
      "MAM user Scope",
      "Conditional Access"
    ],
    pairOptionsRight: [
      "Seattle UserGroup1",
      "Seattle UserGroup2",
      "All users"
    ],
    pairAnswer: ["MDM user Scope", "Seattle UserGroup2"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Azure AD의 MDM user scope 설정이 자동 등록의 트리거입니다.</p>
      <p>MAM user scope는 앱 보호 대상 범위이며 자동 등록과 목적이 다릅니다.</p>
      <p>요구된 시나리오에서는 특정 사용자 그룹(Seattle UserGroup2)에 한정하여 점진적으로 적용하는 구성이 적절합니다.</p>
      <p>스코프를 All로 두면 파일럿 없이 전면 적용되어 위험이 커질 수 있습니다.</p>
      <p>설정 후 AAD 조인 시 디바이스가 자동으로 Intune에 등록되는지 확인하세요.</p>
      <p>등록 실패는 라이선스·조건부 액세스·플랫폼 제한과도 연관될 수 있습니다.</p>
      <p><a href="https://learn.microsoft.com/mem/intune/enrollment/windows-enroll">Set up automatic MDM enrollment</a></p>
    `
  },

  // 24
  {
    id: 24,
    title: "Identify the first component when creating a DLP policy",
    promptHtml: `
      <p> You need to create the DLP policy to meet the technical requirements. What should you configure first?</p>
    `,
    type: "single",
    options: [
      "A. Sensitive info types",
      "B. the Insider risk management settings",
      "C. the event types",
      "D. the sensitibity labels"
    ],
    correctAnswers: ["A. Sensitive info types"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>DLP 정책은 무엇을 탐지할지(민감정보 형식)를 먼저 정의하는 것으로 시작합니다.</p>
      <p>그 다음 위치(Exchange, SharePoint, OneDrive, Teams 등)를 선택하고, 탐지 조건과 임계값을 지정합니다.</p>
      <p>동작(차단, 팁 표시, 사용자 알림)과 예외는 탐지 정의 이후에 설정합니다.</p>
      <p>조직별 맞춤 민감정보 형식을 만들 수도 있습니다.</p>
      <p>시뮬레이션/감사 모드로 먼저 영향도를 확인하는 것이 안전합니다.</p>
      <p>정책 우선순위에 따라 충돌 시 상위 정책이 선행될 수 있습니다.</p>
      <p><a href="https://learn.microsoft.com/microsoft-365/compliance/data-loss-prevention-policies">Create DLP policies</a></p>
    `
  },

  // 25
  {
    id: 25,
    title: "Enable labeling for Office files in SharePoint and OneDrive",
    promptHtml: `
      <p>You plan to use sensitivity labels on Office files stored in SharePoint Online and OneDrive, including Office on the web.<br>
      What should you configure?</p>
    `,
    type: "single",
    options: [
      "A. Assign the Global reader role to User1",
      "B. Enable sensitivity labels for Office files in SharePoint Online and OneDrive",
      "C. Configure an auto-labeling policy to apply the sensitivity labels.",
      "D. Assign the Office apps admin role to User1."
    ],
    correctAnswers: ["B. Enable sensitivity labels for Office files in SharePoint Online and OneDrive"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>웹용 Office 및 SPO/OneDrive의 파일에서 민감도 레이블을 사용하려면 해당 기능을 명시적으로 활성화해야 합니다.</p>
      <p>활성화 후 파일 재색인 과정이 필요할 수 있어 일시적 지연이 발생할 수 있습니다.</p>
      <p>이 설정은 AIP UL 클라이언트 기반이 아닌 Microsoft 365 네이티브 라벨링 경로입니다.</p>
      <p>IB나 전송 규칙은 콘텐츠 레이블링 요구와 목적이 다릅니다.</p>
      <p>성능 영향과 영향 범위를 고려해 단계적으로 적용하세요.</p>
      <p>적용 후 Audit/Activity Explorer로 동작을 검증합니다.</p>
      <p><a href="https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files">Enable sensitivity labels for Office files in SharePoint and OneDrive</a></p>
    `
  },

  // 26
  {
    id: 26,
    title: "Mark devices without compliance policies as Not compliant",
    promptHtml: `
      <p> You need to configure the compliance settings to meet the technical requirements.<br>
      What should you do in the Microsoft Endpoint Manager admin center?<br>
      What should you modify?</p>
    `,
    type: "single",
    options: [
      "A. From Compliance policies, modify the Notifications settings.",
      "B. From Locations, create a new location for noncompliant devices.",
      "C. From Retire Noncompliant Devices, select Clear All Devices Retire State.",
      "D. Modify the Compliance policy settings"
    ],
    correctAnswers: ["D. Modify the Compliance policy settings"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Intune의 “Compliance policy settings”에는 “No compliance policy assigned”일 때의 기본 평가 값을 정의하는 옵션이 있습니다.</p>
      <p>이를 Not compliant로 설정하면 정책이 없는 장치도 비준수로 분류됩니다.</p>
      <p>이 설정은 테넌트 전역 동작에 영향을 주므로 변경 전 고지와 영향 검토가 필요합니다.</p>
      <p>컴플라이언스 상태는 조건부 액세스의 준수 요구와 직결됩니다.</p>
      <p>BYOD 시나리오에서는 임시 예외나 디바이스 범주화를 검토하세요.</p>
      <p>변경 후 보고서와 필터로 누락 장치가 없는지 확인합니다.</p>
      <p><a href="https://learn.microsoft.com/mem/intune/protect/compliance-policy-create-windows">Device compliance policy settings</a></p>
    `
  },

  // 27 — pair
  {
    id: 27,
    title: "Grant permissions so User2 can review audit logs",
    promptHtml: `
      <p>You need to ensure that User2 can review the audit logs. The solutions must meet the technical requirements.<br>
      To which role group should you add User2, and what should you use? To answer,<br>
      select the appropriate options in the answer area.<br>
      Which role group and tool should you use?</p>
      ${IMG_Q27_1 ? `<p><img src="${IMG_Q27_1}" style="max-width:100%"></p>` : ""}
    `,
    type: "pair",
    pairLabels: ["Role group", "Tool"],
    pairOptionsLeft: [
      "Compliance Management",
      "Data Investigator",
      "Reviewer",
      "Global Reader"
    ],
    pairOptionsRight: [
      "Exchange admin center",
      "Microsoft 365 Defender portal",
      "Microsoft Purview portal",
      "SharePoint admin"
    ],
    pairAnswer: ["Compliance Management", "Exchange admin center"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Exchange 관련 감사 로그 검토 권한은 EAC의 RBAC 역할 중 Compliance Management가 가장 직접적입니다.</p>
      <p>Organization Management는 과도한 권한이 포함될 수 있어 최소 권한 원칙에 반합니다.</p>
      <p>Security Administrator는 Entra/보안 정책 관점으로 EAC 세부 감사 권한과 다릅니다.</p>
      <p>감사 용도를 넘는 광범위 권한을 부여하지 않도록 주의하세요.</p>
      <p>필요 시 맞춤 역할 그룹을 작성해 필요한 권한만 포함할 수 있습니다.</p>
      <p>권한 변경은 감사 로깅으로 추적되도록 유지하세요.</p>
      <p><a href="https://learn.microsoft.com/exchange/permissions-exo/permissions-exo">Exchange Online permissions</a></p>
    `
  },

  // 28
  {
    id: 28,
    title: "Configure Endpoint DLP settings for policy notifications",
    promptHtml: `
      <p>You create the planned DLP policies.<br>
      You need to configure notifications to meet the technical requirements.<br>
      What should you do?</p>
    `,
    type: "single",
    options: [
      "A. From the Microsoft 365 security center, configure an alert policy",
      "B. From the Microsoft Endpoint Manager admin center, configure a custom notification",
      "C. From the Microsoft 365 admin center, configure a Briefing email.",
      "D. From the Microsoft 365 compliance center, configure the Endpoint DLP settings."
    ],
    correctAnswers: ["D. From the Microsoft 365 Compliance Center, configure the Endpoint DLP settings"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Endpoint DLP 정책, 보호 동작, 사용자 알림은 Purview(Compliance Center)에서 관리됩니다.</p>
      <p>디바이스 온보딩 신호는 Defender for Endpoint와 통합되지만 정책 소스는 Purview입니다.</p>
      <p>Windows/macOS 각각 지원 버전과 전제 조건을 충족해야 정책이 동작합니다.</p>
      <p>정책 팁과 재정의 흐름을 사용자 교육과 함께 배포하세요.</p>
      <p>감사 전용 모드로 먼저 영향도를 검증할 수 있습니다.</p>
      <p>작동 로그는 활동 탐색기와 엔드포인트 경고로 교차 점검합니다.</p>
      <p><a href="https://learn.microsoft.com/purview/endpoint-dlp-use">Configure Endpoint DLP settings</a></p>
    `
  },

  // 29 — pair
  {
    id: 29,
    title: "Analyze tenant configuration boxes",
    promptHtml: `
      <p>You create the Microsoft 365 tenant.<br>
      You implement Azure AD Connect as shown in the following exhibit<br>
      ${IMG_Q29_1 ? `<p><img src="${IMG_Q29_1}" style="max-width:100%"></p>` : ""}
      Complete the following statements by selecting the appropriate options for each box.</p>
      ${IMG_Q29_2 ? `<p><img src="${IMG_Q29_2}" style="max-width:100%"></p>` : ""}
    `,
    type: "pair",
    pairLabels: ["Box 1 (authentication location)", "Box 2 (account location)"],
    pairOptions: [
      "In the cloud only",
      "On-premises only",
      "Only on-premises"
    ],
    pairAnswer: ["In the cloud only", "Only on-premises"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>문항의 테넌트 구성 요약은 인증 위치와 계정 원본 위치를 각각 구분하여 제시합니다.</p>
      <p>인증은 클라우드 전용으로 처리되고, 계정은 온프레미스에서만 호스트되는 조건으로 해석됩니다.</p>
      <p>이는 하이브리드 동기화 구조에서 일반적으로 나타나는 “클라우드 인증 + 온프레미스 계정 원본” 패턴입니다.</p>
      <p>Pass-through 또는 Federation 여부에 따라 인증 경로가 달라질 수 있습니다.</p>
      <p>향후 클라우드 전환 단계에서 계정 원본을 클라우드로 전환할 계획을 수립할 수 있습니다.</p>
      <p>구성 변경은 사용자 영향이 크므로 사전 공지와 롤백 계획이 필수입니다.</p>
      <p><a href="https://learn.microsoft.com/entra/hybrid/whatis-hybrid-identity">Hybrid identity considerations</a></p>
    `
  },

  // 30
  {
    id: 30,
    title: "Assign the correct role to allow User1 to manage security policies",
    promptHtml: `
      <p>You need to assign permissions so that User1 can manage the required security policies.<br>
      Which role should you assign?</p>
    `,
    type: "single",
    options: [
      "A. Global Reader",
      "B. Security Reader",
      "C. Security Administrator",
      "D. Reports Reader"
    ],
    correctAnswers: ["C. Security Administrator"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>보안 정책을 생성·편집하려면 관리자 권한이 필요한데, Security Administrator가 그 목적에 부합합니다.</p>
      <p>Security Reader/Global Reader는 읽기 전용으로 변경 권한이 없습니다.</p>
      <p>Reports Reader는 리포트 열람 권한에 초점이 있어 정책 관리 목적과 다릅니다.</p>
      <p>최소 권한 원칙을 따르되 운영 필요 권한은 충분히 부여해야 합니다.</p>
      <p>역할 변경 후 전파까지 일정 시간이 걸릴 수 있습니다.</p>
      <p>정책 변경은 감사 로깅으로 추적되도록 유지하세요.</p>
      <p><a href="https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference">Microsoft Entra role permissions</a></p>
    `
  },

  // 31
  {
    id: 31,
    title: "Identify the required DNS record type when adding a domain",
    promptHtml: `
      <p> You are evaluating the required processes for Project1.<br>
      You need to recommend which DNS record must be created while adding a domain name for the project.<br>
      Which DNS record should you recommend?</p>
    `,
    type: "single",
    options: [
      "A. MX",
      "B. CNAME",
      "C. Text (TXT)",
      "D. SRV"
    ],
    correctAnswers: ["C. Text (TXT)"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>도메인 소유권 검증은 TXT 레코드를 통해 수행하는 것이 표준입니다.</p>
      <p>일부 환경에서는 MX도 허용되지만 권장 방식은 TXT입니다.</p>
      <p>DNS 전파 지연으로 검증까지 시간이 걸릴 수 있습니다.</p>
      <p>검증 완료 후 메일/Skype/Teams 레코드 안내에 따라 추가 설정을 적용합니다.</p>
      <p>여러 테넌트에서 같은 도메인을 검증할 수 없으니 중복 사용을 피하십시오.</p>
      <p>TTL을 일시적으로 낮춰 전파 시간을 줄일 수 있습니다.</p>
      <p><a href="https://learn.microsoft.com/microsoft-365/admin/setup/add-domain">Add and verify a domain</a></p>
    `
  },

  // 32
  {
    id: 32,
    title: "Select the default authentication strategy for the pilot",
    promptHtml: `
      <p>You need to ensure that all the sales department users can authenticate successfully during Project1 and Project2.<br>
      Which authentication strategy should you implement for the pilot projects?</p>
    `,
    type: "single",
    options: [
      "A. pass-through authentication",
      "B. pass-through authentication and seamless SSO",
      "C. Password Hash Synchronization",
      "D. password hash synchronization and seamless SSO"
    ],
    correctAnswers: ["C. Password Hash Synchronization"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Password Hash Synchronization(PHS)은 구축과 운영 복잡도가 낮아 파일럿에 적합합니다.</p>
      <p>에이전트 가용성 의존도가 있는 PTA나 AD FS보다 장애 영향이 작습니다.</p>
      <p>필요 시 Seamless SSO를 결합하여 사용자 경험을 개선할 수 있습니다.</p>
      <p>보안 요건에 따라 위험 기반 MFA와 조건부 액세스를 추가하십시오.</p>
      <p>하이브리드 환경에서는 PHS가 일반적인 기본 선택입니다.</p>
      <p>전환 시 암호 정책 차이와 동기화 주기를 검토합니다.</p>
      <p><a href="https://learn.microsoft.com/entra/identity/hybrid/connect/choose-ad-authn">Choose the right authentication method</a></p>
    `
  },

  // 33 — pair
  {
    id: 33,
    title: "Configure admin notifications and limit feature updates",
    promptHtml: `
      <p>You need to configure the Office 365 service status notifications and limit access to the service and feature updates.<br>
      The solution must meet the technical requirements.<br>
      What should you configure in the Microsoft 365 admin center? To answer, select the appropriate options in the answer area.<br>
      NOTE: Each correct selection is worth one point.</p>
      ${IMG_Q33_1 ? `<p><img src="${IMG_Q33_1}" style="max-width:100%"></p>` : ""}
    `,
    type: "pair",
    pairLabels: ["To configure the notifications", "To limit access to feature updates"],
    pairOptionsLeft: [
      "Organization information",
      "Release preferences",
      "Message center preferences"
    ],
    pairOptionsRight: [
      "Organization information",
      "Release preferences",
      "Message center preferences"
    ],
    pairAnswer: ["Organization information", "Release preferences"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>테넌트 수준의 연락처·알림 수신 구성은 Organization information에서 관리합니다.</p>
      <p>기능 업데이트 채널 설정(대상 출시 미리보기 등)은 Release preferences에서 제어합니다.</p>
      <p>Message center는 알림 종류 세분화에는 유용하지만 문제의 요구와 정확히 일치하지 않습니다.</p>
      <p>대상 출시를 그룹 기반으로 제한하면 영향 반경을 줄일 수 있습니다.</p>
      <p>변경 사항은 조직 전반에 영향을 주므로 공지와 파일럿을 권장합니다.</p>
      <p>감사 로그로 구성 변경을 추적하면 운영 통제가 수월합니다.</p>
      <p><a href="https://learn.microsoft.com/microsoft-365/admin/manage/release-options">Set up the release preferences</a></p>
    `
  },

  // 34
  {
    id: 34,
    title: "Support changes for the Seattle Users OU",
    promptHtml: `
      <p> You need to configure Azure AD Connect to support the planned changes for the Montreal Users and Seattle Users OUs.<br>
      What should you do?</p>
    `,
    type: "single",
    options: [
      "A. From the Microsoft Azure AD Connect wizard, select Customize synchronization options.",
      "B. From PowerShell, run the Add-ADSyncConnectorAttnbuteinclusion cmdlet.",
      "C. From PowerShell, run the start-ADSyncSyncCycle cmdlet.",
      "D. From the Microsoft Azure AD Connect wizard, select Manage federation."
    ],
    correctAnswers: ["A. From the Microsoft Azure AD Connect wizard, select Customize synchronization options."],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>OU 변경을 반영하려면 Azure AD Connect에서 동기화 범위(OU 필터)를 조정해야 합니다.</p>
      <p>마법사의 Customize synchronization options에서 해당 OU를 포함하도록 업데이트합니다.</p>
      <p>암호 동기화는 OU 범위 문제를 해결하지 못합니다.</p>
      <p>ABP나 테넌트 재생성은 요구와 무관하거나 과도한 조치입니다.</p>
      <p>변경 후 초기 동기화를 실행하여 빠르게 반영하세요.</p>
      <p>Connect Health에서 에러/경고를 점검하면 안정성이 높아집니다.</p>
      <p><a href="https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-sync-configure-filtering">Configure filtering in Azure AD Connect</a></p>
    `
  },

  // 35
  {
    id: 35,
    title: "Select which admins can access incidents and advisories",
    promptHtml: `
      <p> You need to ensure that the Microsoft 365 incidents and advisories are reviewed monthly.<br>
      Which users can review the incidents and advisories, and which blade should the users use?<br>
      To answer, select the appropriate options in the answer area.<br>
      NOTE: Each correct selection is worth one point.</p>
    `,
    type: "pair",
    pairLabels: ["Users who can access", "Blade/portal"],
    pairOptionsLeft: [
      "Admin1 only",
      "Admin1 and Admin3 only",
      "Admin1, Admin2, and Admin3 only",
      "Admin1, Admin2, Admin3, and Admin4"
    ],
    pairOptionsRight: [
      "Service Health",
      "Reports",
      "Message Center"
    ],
    pairAnswer: ["Admin1 and Admin3 only", "Service Health"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>서비스 상태와 권고는 Microsoft 365 관리 센터의 Service health 블레이드에서 제공합니다.</p>
      <p>해당 정보에 접근 가능한 역할만 목록에 포함됩니다.</p>
      <p>Message center는 변경 공지 중심으로, 사건/권고의 실시간 상태와 목적이 다릅니다.</p>
      <p>Defender 포털의 인시던트는 보안 경보 관점입니다.</p>
      <p>역할 부여는 최소 권한 원칙을 준수해야 합니다.</p>
      <p>필요 시 Service Support Administrator를 활용하세요.</p>
      <p><a href="https://learn.microsoft.com/microsoft-365/admin/service-health/service-health-overview">Service health overview</a></p>
    `
  },

  // 36 — yn
  {
    id: 36,
    title: "Evaluate MFA registration and usage requirements",
    promptHtml: `
      <p>You are evaluating the use of multi-factor authentication (MFA).<br>
      For each of the following statements, select Yes if the statement is true. Otherwise, select No.<br>
      NOTE: Each correct selection is worth one point.</p>
      ${IMG_Q36_1 ? `<p><img src="${IMG_Q36_1}" style="max-width:100%"></p>` : ""}
    `,
    statements: [
      "Users will have 14 days to register for MFA after they sign in for the first time.",
      "Users must use the Microsoft Authenticator app to complete MFA.",
      "After registering, users must use MFA for every sign-in"
    ],
    options: ["Yes", "No"],
    correctAnswers: ["Yes", "No", "No"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>민감 리소스 접근 보호를 위해 MFA 등록과 강제가 필요합니다.</p>
      <p>게스트가 항상 예외인 것은 아니며 조건부 액세스 정책에 따라 MFA가 요구될 수 있습니다.</p>
      <p>관리자 역할은 보안 강화를 위해 오히려 MFA 요구가 강력히 권장됩니다.</p>
      <p>사용자·앱·위치·디바이스 준수 상태 등 조건으로 MFA를 세분화할 수 있습니다.</p>
      <p>등록 경험은 등록 캠페인/보안 기본값/CA 정책으로 설계합니다.</p>
      <p>리스크 기반 MFA를 함께 활용하면 보안과 사용성을 균형 있게 유지할 수 있습니다.</p>
      <p><a href="https://learn.microsoft.com/entra/identity/conditional-access/howto-conditional-access-policy-all-users-mfa">Require MFA for all users</a></p>
    `
  },

  // 37
  {
    id: 37,
    title: "Configure settings to enable SSPR with on-premises writeback",
    promptHtml: `
      <p> You need to ensure that Admin4 can use SSPR.<br>
      Which tool should you use. and which action should you perform? To answer, select the appropriate options m the answer area.<br>
      NOTE: Each correct selection is worth one point.</p>
    `,
    type: "pair",
    pairLabels: ["Tool", "Action"],
    pairOptionsLeft: [
      "Azure AD Connect",
      "Synchronization Rules Editor",
      "Microsoft Entra admin center"
    ],
    pairOptionsRight: [
      "Enable app registrations",
      "Enable password writeback",
      "Enable password has synchronization",
      "Disable password hash synchronization"
    ],
    pairAnswer: ["Azure AD Connect", "Enable password writeback"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>하이브리드 환경에서 SSPR 결과를 온프레미스 AD로 되쓰기 하려면 Azure AD Connect에서 Password writeback을 활성화해야 합니다.</p>
      <p>이 기능은 클라우드에서 변경된 암호를 디렉터리로 안전하게 반영합니다.</p>
      <p>Entra 관리 센터에서는 SSPR 정책과 포털 경험을 구성합니다만, 되쓰기는 AAD Connect 구성 항목입니다.</p>
      <p>권한 계정과 네트워크 요구사항을 충족해야 합니다.</p>
      <p>테스트 사용자로 먼저 검증 후 전체 적용하세요.</p>
      <p>감사 로그를 통해 변경 이력을 추적할 수 있도록 설정합니다.</p>
      <p><a href="https://learn.microsoft.com/entra/identity/authentication/howto-password-writeback">Enable password writeback</a></p>
    `
  },

  // 38
  {
    id: 38,
    title: "Use PIM for just-in-time privileged access",
    promptHtml: `
      <p>You need to configure just in time access to meet the technical requirements. <br>
      What should you use?</p>
    `,
    type: "single",
    options: [
      "A. entitlement management",
      "B. Azure AD Privileged Identity Management (PIM)",
      "C. access reviews",
      "D. Azure AD Identity Protection"
    ],
    correctAnswers: ["B. Azure AD Privileged Identity Management (PIM)"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>PIM은 상승된 권한을 필요 시점에만 활성화하는 JIT 모델을 제공합니다.</p>
      <p>승인·만료·감사 및 알림 흐름을 포함해 권한 남용 위험을 줄입니다.</p>
      <p>Conditional Access나 Identity Protection은 보완적 기능이며 JIT 권한 부여 자체를 대체하지 않습니다.</p>
      <p>역할 활성화 사유·티켓 번호를 요구하도록 정책화할 수 있습니다.</p>
      <p>감사 추적은 규정 준수 증적에도 중요합니다.</p>
      <p>운영 전 파일럿과 비상 계정 정책을 준비하세요.</p>
      <p><a href="https://learn.microsoft.com/entra/identity/privileged-identity-management/pim-configure">What is PIM</a></p>
    `
  },

  // 39 — yn (matrix)
  {
    id: 39,
    title: "Evaluate Private Store access permissions",
    promptHtml: `
      <p> You have a Microsoft 365 E5 tenant that contains the users shown in the following table.<br>
      ${IMG_Q39_1 ? `<p><img src="${IMG_Q39_1}" style="max-width:100%"></p>` : ""}
      You perform the following actions:<br>
      Provision the private store in Microsoft Store for Business.<br>
      Add an app named App1 to the private store.<br>
      Set Private store availability for App1 to Specific groups, and then select Group3.<br>
      For each of the following statements, select Yes if the statement is true. Otherwise, select No.<br>
      NOTE: Each correct selection is worth one point.</p>
      ${IMG_Q39_2 ? `<p><img src="${IMG_Q39_2}" style="max-width:100%"></p>` : ""}
    `,
    statements: [
      "User1 can install App1 from the private store.",
      "User2 can install App1 from the private store.",
      "User3 can install App1 from the private store."
    ],
    options: ["Yes", "No"],
    correctAnswers: ["No", "No", "Yes"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Private Store는 조직 사용자에게만 제공되며 외부 사용자는 접근할 수 없습니다.</p>
      <p>또한 스코프가 특정 그룹으로 제한되면 해당 그룹의 사용자만 접근 가능합니다.</p>
      <p>조직 전체 공개로 설정하지 않는 한 전체 사용자가 자동으로 포함되지는 않습니다.</p>
      <p>그룹 기반 타겟팅은 애플리케이션 가시성 관리에 유용합니다.</p>
      <p>배포 전에 파일럿 그룹으로 테스트하여 카탈로그 노출을 검증하세요.</p>
      <p>역할과 지역 정책 변화에 따른 제한 사항도 주기적으로 검토하십시오.</p>
      <p><a href="https://learn.microsoft.com/microsoft-store/distribute-apps-from-your-private-store">Distribute apps via private store</a></p>
    `
  },

  // 40
  {
    id: 40,
    title: "Select an authentication method that honors on-prem sign-in hours restrictions",
    promptHtml: `
      <p>Your network contains an on-premises Active Directory domain named contoso.com.<br>
      For all user accounts, the Logon Hours settings are configured to prevent sign-ins outside of business hours.<br>
      You plan to sync contoso.com to an Azure AD tenant.<br>
      You need to recommend a solution to ensure that the logon hour restrictions apply when synced users sign in to Azure AD.<br>
      What should you include in the recommendation?</p>
    `,
    type: "single",
    options: [
      "A. Pass-through authentication",
      "B. conditional access policies",
      "C. password synchronization",
      "D. Azure AD Identity Protection policies"
    ],
    correctAnswers: ["A. Pass-through authentication"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Pass-through Authentication(PTA)은 인증을 온프레미스 AD로 위임하여 도메인 규칙(예: 로그인 시간 제한)을 그대로 적용할 수 있습니다.</p>
      <p>Password Hash Synchronization은 클라우드에서 인증이 처리되어 온프레 정책을 직접 반영하지 못합니다.</p>
      <p>AD FS 페더레이션도 온프레미스 정책을 반영할 수 있으나 인프라 복잡도가 더 큽니다.</p>
      <p>PTA 에이전트의 가용성과 네트워크 경로를 모니터링해야 합니다.</p>
      <p>고가용성을 위해 여러 에이전트를 배치하여 단일 실패 지점을 제거하세요.</p>
      <p>리스크 기반 MFA와 병행하면 보안 수준을 높일 수 있습니다.</p>
      <p><a href="https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-pta">Pass-through authentication</a></p>
    `
  },
  // 41
  {
    id: 41,
    title: "ASR 지원 대상 OS",
    promptHtml: `
      <p>You have a Microsoft 365 E5 tenant that contains the devices shown in the following table.<br>
      ${IMG_Q41_1 ? `<p><img src="${IMG_Q41_1}" style="max-width:100%"></p>` : ""}
      You plan to implement attack surface reduction (ASR) rules. Which devices will support the ASR rules?</p>
    `,
    type: "single",
    options: [
      "A. Device 1, Device2, and Device3 only",
      "B. Device3 only",
      "C. Device2 and Device3 only",
      "D. Device1, Device2, Devices and Device4"
    ],
    correctAnswers: ["C. Device2 and Device3 only"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>ASR 규칙은 Windows 10 Pro/Enterprise(1709+) 및 Windows 11에서 지원됩니다.</p>
      <p>표의 macOS나 Ubuntu 같은 비 Windows 플랫폼은 ASR 규칙 대상이 아닙니다.</p>
      <p>따라서 Windows 10 Pro와 Enterprise를 실행하는 Device2와 Device3만 지원합니다.</p>
      <p>Defender for Endpoint 에이전트가 있어도 OS가 비지원이면 ASR은 적용되지 않습니다.</p>
      <p>정책 배포 전 장치 플랫폼 필터와 버전을 검증하세요.</p>
      <p>운영 중에는 ASR 감사 모드로 영향도를 먼저 확인하는 것이 안전합니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction?utm_source=chatgpt.com#attack-surface-reduction-features-across-windows-versions">Attack surface reduction rules — supported OS</a></p>
    `
  },

  // 42 — pair (drop-down statements)
  {
    id: 42,
    title: "보존정책 설정 내용 문장 완성",
    promptHtml: `
      <p>You have a Microsoft 365 tenant.<br>
      You plan to create a retention policy as shown in the exhibit.<br>
      ${IMG_Q42_1 ? `<p><img src="${IMG_Q42_1}" style="max-width:100%"></p>` : ""}
      Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.<br>
      NOTE: Each correct selection is worth one point.</p>
      ${IMG_Q42_2 ? `<p><img src="${IMG_Q42_2}" style="max-width:100%"></p>` : ""}
    `,
    type: "pair",
    pairLabels: [
      "Microsoft SharePoint files that are affected by the policy will be",
      "Once the policy is created,"
    ],
    pairOptionsLeft: [
      "recoverable for up to seven years",
      "deleted seven years after they were created",
      "retained for only seven years from when they were created"
    ],
    pairOptionsRight: [
      "some data may be deleted immediately",
      "data will be retained for a minimum of seven years",
      "users will be prevented from permanently deleting email messages for seven years"
    ],
    pairAnswer: [
      "deleted seven years after they were created",
      "some data may be deleted immediately"
    ],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>보존 정책이 “Delete items at end of retention period”로 설정되면 지정된 기준에 따라 기간 종료 시 삭제됩니다.</p>
      <p>지문은 “7년”과 “생성 시점”을 기준으로 삭제를 수행하는 구성을 전제합니다.</p>
      <p>이미 임계값을 초과한 콘텐츠는 정책이 적용되자마자 즉시 삭제될 수 있습니다.</p>
      <p>보존 기간 동안에는 사용자가 수동으로 제거하더라도 정책에 의해 보호됩니다.</p>
      <p>범위에는 Exchange, SharePoint, OneDrive, Groups 등이 포함될 수 있습니다.</p>
      <p>광범위 정책은 단계적 적용과 커뮤니케이션이 중요합니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/lifecycle/faq/windows">Microsoft Purview retention policies</a></p>
    `
  },

  // 43 — pair
  {
    id: 43,
    title: "MDCA 앱 모니터링 및 제어",
    promptHtml: `
      <p>You have a Microsoft 365 E5 subscription and use Microsoft Defender for Cloud Apps.<br>
      You have a cloud app named App1.<br>
      You need to implement a security solution for App1 that meets the following requirements:<br>
      - Enables the real-time monitoring of user activities<br>
      - Blocks specific activities as needed<br>
      What should you include in the solution for each requirement?<br>
      NOTE: Each correct selection is worth one point.</p>
      ${IMG_Q43_1 ? `<p><img src="${IMG_Q43_1}" style="max-width:100%"></p>` : ""}
    `,
    type: "pair",
    pairLabels: [
      "Enables the real-time monitoring of user activities",
      "Blocks specific activities as needed"
    ],
    pairOptionsLeft: [
      "Conditional Access App Control",
      "Microsoft Purview Information Protection",
      "Some metrics"
    ],
    pairOptionsRight: [
      "A file policy",
      "A session policy",
      "An access policy"
    ],
    pairAnswer: [
      "Conditional Access App Control",
      "A session policy"
    ],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Conditional Access App Control은 세션을 프록시로 중계해 실시간 모니터링을 제공합니다.</p>
      <p>특정 동작 차단은 세션 정책(Session policy)에서 다운로드·업로드·복사 등 행위를 제어합니다.</p>
      <p>Access policy는 SSO/접근 컨텍스트 중심이고, Discovery는 Shadow IT 가시화용입니다.</p>
      <p>파일 속성 제어는 File policy가 적합하므로 동작 차단 요구와는 다른 목적입니다.</p>
      <p>적용 전 앱이 세션 컨트롤 지원인지 카탈로그에서 확인하세요.</p>
      <p>감사 모드로 정책 효과를 먼저 점검하면 운영 리스크를 줄일 수 있습니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/defender-cloud-apps/session-policy-aad#block-specific-activities">Use Conditional Access App Control and session policies</a></p>
    `
  },

  // 44
  {
    id: 44,
    title: "MDE 네트워크 스캐너 등록 후 작업",
    promptHtml: `
      <p>You have a Microsoft 365 E5 subscription that uses Microsoft Defender for Endpoint.<br>
      You plan to perform device discovery and authenticated scans of network devices.<br>
      You install and register the network scanner on a device named Device1.<br>
      What should you do next?</p>
    `,
    type: "single",
    options: [
      "A. Connect Defender for Endpoint to Microsoft Intune.",
      "B. Apply for Microsoft Threat Experts - Targeted Attack Notifications.",
      "C. Create an assessment job.",
      "D. Download and run an onboarding package."
    ],
    correctAnswers: ["C. Create an assessment job."],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>네트워크 스캐너를 설치·등록했다면 다음 단계는 스캔 정의를 생성하는 것입니다.</p>
      <p>Assessment job에서 IP 범위, 인증 방식, 주기 등을 지정합니다.</p>
      <p>Intune 연결이나 Threat Experts 신청은 검색 작업과 무관합니다.</p>
      <p>온보딩 패키지는 스캐너 사전 단계로 이미 완료된 상태입니다.</p>
      <p>스캔 자격 증명은 최소 권한으로 별도 보관이 권장됩니다.</p>
      <p>초기 실행은 소규모 범위로 검증 후 확장하세요.</p>
      <p><a href="2611">Defender for Endpoint device discovery</a></p>
    `
  },

  // 45
  {
    id: 45,
    title: "Intune BitLocker Profile 배포",
    promptHtml: `
      <p>You have a Microsoft 365 tenant.<br>
      You plan to enable BitLocker Disk Encryption (BitLocker) automatically for all Windows 10 devices that enroll in Microsoft Intune.<br>
      What should you use?</p>
    `,
    type: "single",
    options: [
      "A. an attack surface reduction (ASR) policy",
      "B. an app configuration policy",
      "C. a device compliance policy",
      "D. a device configuration profile"
    ],
    correctAnswers: ["D. a device configuration profile"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>BitLocker 자동 활성화는 Endpoint security의 Disk encryption(구성 프로필)을 사용합니다.</p>
      <p>준수 정책은 상태를 평가할 뿐 활성화를 수행하지 않습니다.</p>
      <p>ASR은 Defender 보안 규칙이며 목적이 다릅니다.</p>
      <p>앱 구성 정책은 앱 설정 전달 영역입니다.</p>
      <p>복구 키 저장 위치와 사용자 경험(프롬프트) 옵션을 함께 정의하세요.</p>
      <p>배포 전 모델·펌웨어의 TPM 요건을 점검하세요.</p>
      <p><a href="2612">Intune BitLocker policy</a></p>
    `
  },

  // 46 — sequence style prompt but we provide pair? It’s a sequence; however UI는 드래그앤드롭 요구가 명시됨.
  {
    id: 46,
    title: "Intune Google Play 앱 배포 준비 순서",
    promptHtml: `
      <p>You have a Microsoft 365 E5 tenant that contains 500 Android devices enrolled in Microsoft Intune.<br>
      You need to use Microsoft Endpoint Manager to deploy a managed Google Play app to the devices.<br>
      Which four actions should you perform in sequence? (Each correct selection is worth one point.)</p>
      ${IMG_Q46_1 ? `<p><img src="${IMG_Q46_1}" style="max-width:100%"></p>` : ""}
    `,
    type: "sequence",
    sequenceOptions: [
      "Create an app configuration policy",
      "Link the account to Intune",
      "Create a Microsoft account",
      "configure a mobile device management(MDM) push certificate",
      "Add the app",
      "Create a Google account",
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
      <p>Android Enterprise 통합을 위해 관리용 Google 계정을 준비해야 합니다.</p>
      <p>그 계정을 Intune과 연동한 후 Managed Google Play에서 앱을 추가합니다.</p>
      <p>마지막으로 사용자·디바이스 그룹에 할당해 배포합니다.</p>
      <p>구성 프로필/준수 정책은 배포 보조 수단이지 필수 순서 항목이 아닙니다.</p>
      <p>스토어 연결 후 동기화까지 시간이 걸릴 수 있습니다.</p>
      <p>배포 전 소수 그룹 파일럿을 권장합니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/mem/intune/enrollment/device-enrollment-program-enroll-ios">Connect Managed Google Play and deploy apps</a></p>
    `
  },

  // 47 — pair
  {
    id: 47,
    title: "관리자별 AuditLog 보존기간",
    promptHtml: `
      <p>You have a Microsoft 365 E5 subscription that contains two users named Admin1 and Admin2.<br>
      All users are assigned a Microsoft 365 Enterprise E5 license and auditing is turned on.<br>
      You create the audit retention policy shown in the exhibit. (Click the Exhibit tab.)<br>
      ${IMG_Q47_1 ? `<p><img src="${IMG_Q47_1}" style="max-width:100%"></p>` : ""}
      After Policy1 is created, the following actions are performed:<br>
      Admin1 creates a user named User1.<br>
      Admin2 creates a user named User2.<br>
      How long will the audit events for the creation of User1 and User2 be retained? To answer, select the appropriate options in the answer area.<br>
      NOTE: Each correct selection is worth one point.</p>
    `,
    type: "pair",
    pairLabels: [
      "User1 (created by Admin1)",
      "User2 (created by Admin2)"
    ],
    pairOptions: ["0 days", "30 days", "90 days", "180 days", "365 days"],
    pairAnswer: ["90 days", "180 days"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>감사 보존 정책에 포함된 사용자(Admin1)의 이벤트는 정책의 기간(예: 90일)을 따릅니다.</p>
      <p>정책에 포함되지 않은 사용자(Admin2)의 이벤트는 테넌트 기본 보존 기간(E5는 180일)을 적용합니다.</p>
      <p>사용자 기준 정책은 활동 수행 주체를 기준으로 판단됩니다.</p>
      <p>여러 정책이 있을 경우 가장 구체적인 것이 우선합니다.</p>
      <p>감사 설정이 켜져 있어야 보존 정책이 적용됩니다.</p>
      <p>감사 데이터는 규정 준수와 조사 활동의 핵심 증적입니다.</p>
      <p><a href="2613">Audit (Standard/Premium) retention</a></p>
    `
  },

  // 48 — pair
  {
    id: 48,
    title: "위험한 사용자 분류 유형",
    promptHtml: `
      <p>You have a Microsoft 365 E5 subscription.<br>
      You plan to implement Identity Protection by configuring a sign-in risk policy and a user risk policy.<br>
      Which type of risk is detected by each policy?<br>
      NOTE: Each correct selection is worth one point.</p>
      ${IMG_Q48_1 ? `<p><img src="${IMG_Q48_1}" style="max-width:100%"></p>` : ""}
    `,
    type: "pair",
    pairLabels: [
      "Sign-in risk policy",
      "User risk policy"
    ],
    pairOptionsLeft: [
      "Atypical travel",
      "Leaked credentials",
      "Possible attempt to access Primary Refresh Token(PRT)"
    ],
    pairOptionsRight: [
      "Leaked credentials",
      "Malicious IP address",
      "Supicious browser"
    ],
    pairAnswer: [
      "Atypical travel",
      "Leaked credentials"
    ],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Sign-in risk는 개별 로그인 시도 자체의 이상 징후(예: Atypical travel)를 평가합니다.</p>
      <p>User risk는 계정이 이미 침해되었을 가능성(예: Leaked credentials)을 의미합니다.</p>
      <p>이 두 정책은 각각 다른 시점의 위험 신호를 다룹니다.</p>
      <p>정책 조합으로 위험 기반 MFA·차단을 자동화할 수 있습니다.</p>
      <p>제외 위치·신뢰 IP를 적절히 관리하여 오탐을 줄이세요.</p>
      <p>감사와 경보 흐름을 운영 팀에 연계하는 것이 좋습니다.</p>
      <p><a href="https://www.notion.so/29bdbd591ead8090b636f4d868ad8ef5">Microsoft Entra ID Protection — risks</a></p>
    `
  },

  // 49 — pair
  {
    id: 49,
    title: "그룹에 할당해야 하는 역할",
    promptHtml: `
      <p>You have a Microsoft 365 E5 subscription that contains two groups named Group1 and Group2.<br>
      You need to ensure that each group can perform the tasks shown in the following table.<br>
      ${IMG_Q49_1 ? `<p><img src="${IMG_Q49_1}" style="max-width:100%"></p>` : ""}
      The solution must use the principle of least privilege.<br>
      Which role should you assign to each group? To answer, drag the appropriate roles to the correct groups.<br>
      Each role may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.<br>
      NOTE: Each correct selection is worth one point.</p>
      ${IMG_Q49_2 ? `<p><img src="${IMG_Q49_2}" style="max-width:100%"></p>` : ""}
    `,
    type: "pair",
    pairLabels: ["Group1", "Group2"],
    pairOptions: [
      "Billing Administrator",
      "User Administrator",
      "Global Administrator",
      "License Administrator",
      "Service Support Administrator",
      "Helpdesk Administrator"
    ],
    pairAnswer: [
      "Billing Administrator",
      "User Administrator"
    ],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Group1의 과업(구독/구매/서비스 요청/서비스 상태)은 재무·구독 관리 범주로 Billing Administrator가 적합합니다.</p>
      <p>Group2의 과업(사용자 추가/라이선스 할당/암호 정책)은 계정 관리 범주로 User Administrator가 적합합니다.</p>
      <p>최소 권한 원칙에 따라 Global Administrator는 피합니다.</p>
      <p>역할은 그룹 기반으로 부여하고 주기적으로 리뷰하세요.</p>
      <p>역할 변경은 감사 로그로 추적 가능해야 합니다.</p>
      <p>업무 분리(Segregation of Duties)도 고려하십시오.</p>
      <p><a href="https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference">Microsoft Entra role permissions</a></p>
    `
  },

  // 50
  {
    id: 50,
    title: "SSPR 수행 전 정의해야 할 정보",
    promptHtml: `
      <p>You have an Azure AD tenant that contains the users shown in the following table.<br>
      ${IMG_Q50_1 ? `<p><img src="${IMG_Q50_1}" style="max-width:100%"></p>` : ""}
      You enable Self-Service Password Reset (SSPR) for all users.<br>
      You set Number of methods required to reset to 1, and Methods available to users to Security questions only.<br>
      What information must be configured for each user before the user can perform a self-service password reset?<br>
      To answer, select the appropriate options in the answer area.<br>
      NOTE: Each correct selection is worth one point.</p>
      ${IMG_Q50_2 ? `<p><img src="${IMG_Q50_2}" style="max-width:100%"></p>` : ""}
    `,
    type: "pair",
    pairLabels: [
      "User1",
      "User2",
      "User3"
    ],
    pairOptions: [
      "Security questions only",
      "Email Address only",
      "Phone number only",
      "Phone number and email address"
    ],
    pairAnswer: [
      "Security questions only",
      "Security questions only",
      "Security questions only"
    ],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>사용 가능한 방법이 “Security questions only”로 제한되어 있으면 모든 사용자는 해당 방법을 등록해야 합니다.</p>
      <p>관리자 역할 보유 여부와 무관하게 정책은 전역으로 동일하게 적용됩니다.</p>
      <p>따라서 각 사용자는 보안 질문을 등록해야 비밀번호 재설정이 가능합니다.</p>
      <p>추가 인증 방법을 허용하려면 정책에서 허용하도록 변경해야 합니다.</p>
      <p>등록 캠페인 기능을 사용해 미등록 사용자에게 알림을 보낼 수 있습니다.</p>
      <p>등록 현황은 보고서에서 추적 가능합니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/entra/identity/authentication/howto-sspr-deployment">Enable SSPR methods</a></p>
    `
  },

  // 51
  {
    id: 51,
    title: "최소한의 관리 경험으로 모바일 디바이스 앱 배포",
    promptHtml: `
      <p>You have a Microsoft 365 E5 tenant.<br>
      You plan to deploy 1,000 new iOS devices to users. The devices will be shipped directly from the supplier to the users.<br>
      You need to recommend a Microsoft Intune enrollment option that meets the following requirements:<br>
      - Minimizes user interaction<br>
      - Minimizes administrative effort<br>
      - Automatically installs corporate apps<br>
      What should you recommend?</p>
    `,
    type: "single",
    options: [
      "A. Automated Device Enrollment (ADE)",
      "B. Bring your own device (BYOD) user and device enrollment",
      "C. Apple Configurator enrollment"
    ],
    correctAnswers: ["A. Automated Device Enrollment (ADE)"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>ADE는 제로터치 등록을 제공해 공급사→사용자 직배송 시 자동 등록·앱 설치가 가능합니다.</p>
      <p>BYOD는 사용자 개입이 많고 제로터치가 아닙니다.</p>
      <p>Apple Configurator는 물리 연결이 필요해 대량 배포에 부적합합니다.</p>
      <p>ABM 연동이 선행되어야 하며 감독 모드 설정도 가능합니다.</p>
      <p>프로파일·앱·구성은 사전에 자동 지정합니다.</p>
      <p>디바이스 도착 즉시 정책이 적용되어 표준화된 경험을 제공합니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/mem/intune/enrollment/device-enrollment-program-enroll-ios">iOS/iPadOS Automated Device Enrollment</a></p>
    `
  },

  // 52 — pair
  {
    id: 52,
    title: "EMS License 사용 현황 내보내기",
    promptHtml: `
      <p>You have a Microsoft 365 subscription.<br>
      You need to identify all users that have an Enterprise Mobility + Security (EMS) plan, and then provide a list of the users in CSV format.<br>
      Which settings should you use in the Microsoft 365 admin center, and which option should you select?<br>
      NOTE: Each correct selection is worth one point.</p>
      ${IMG_Q52_1 ? `<p><img src="${IMG_Q52_1}" style="max-width:100%"></p>` : ""}
    `,
    type: "pair",
    pairLabels: ["Settings", "Option"],
    pairOptionsLeft: [
      "Billing accounts",
      "Bills & payments",
      "Licenses",
      "Your products",

    ],
    pairOptionsRight: [
      "Export users",
      "Show history list",
      "View apps and services with this subscription"
    ],
    pairAnswer: ["Licenses", "Export users"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>EMS 라이선스 보유자 목록은 Billing → Licenses에서 해당 구독을 선택 후 추출할 수 있습니다.</p>
      <p>“Export users”를 사용하면 해당 라이선스를 가진 사용자 목록 CSV가 생성됩니다.</p>
      <p>Active users에서의 내보내기는 필터 작업이 번거롭습니다.</p>
      <p>제품·세부 정보 내보내기는 사용자 매핑과 목적이 다릅니다.</p>
      <p>정기 보고가 필요하면 Graph API로 자동화할 수 있습니다.</p>
      <p>개인정보 표시 정책도 함께 확인하세요.</p>
      <p><a href="https://learn.microsoft.com/en-us/microsoft-365/admin/activity-reports/activity-reports?view=o365-worldwide#show-user-group-or-site-details-in-the-reports">View and manage usage and licensing reports</a></p>
    `
  },

  // 53
  {
    id: 53,
    title: "Volume-Purchased App Intune 추적 방법",
    promptHtml: `
      <p>You have a Microsoft 365 tenant that contains 1,000 iOS devices enrolled in Microsoft Intune.<br>
      You plan to purchase volume-purchased apps and deploy the apps to the devices.<br>
      You need to track used licenses and manage the apps by using Intune.<br>
      What should you use to purchase the apps?</p>
    `,
    type: "single",
    options: [
      "A. Microsoft Store for Business",
      "B. Apple Business Manager",
      "C. Apple iTunes Store",
      "D. Apple Configurator"
    ],
    correctAnswers: ["B. Apple Business Manager"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>ABM은 VPP를 포함해 Intune과 연동되는 라이선스 동기화·회수 기능을 제공합니다.</p>
      <p>iTunes Store는 개인 구매에 가깝고 중앙 추적이 어렵습니다.</p>
      <p>MSfB는 Windows 앱용입니다.</p>
      <p>Apple Configurator는 개별 장치 초기화 도구로 라이선스 추적과 무관합니다.</p>
      <p>ABM과 Intune 연결 후 앱·라이선스가 자동 동기화됩니다.</p>
      <p>대량 배포 시 그룹 할당과 자동 업데이트 설정을 병행하세요.</p>
      <p><a href="https://learn.microsoft.com/en-us/mem/intune/apps/vpp-apps-ios">Connect Intune to Apple Business Manager</a></p>
    `
  },

  // 54 — pair
  {
    id: 54,
    title: "Intune 디바이스 등록 제한 설정",
    promptHtml: `
      <p>You have a Microsoft 365 E5 tenant that uses Microsoft Intune.<br>
      You need to configure Intune to meet the following requirements:<br>
      - Prevent users from enrolling personal devices.<br>
      - Ensure that users can enroll a maximum of 10 devices.<br>
      What should you use for each requirement?<br>
      NOTE: Each correct selection is worth one point.</p>
      ${IMG_Q54_1 ? `<p><img src="${IMG_Q54_1}" style="max-width:100%"></p>` : ""}
    `,
    type: "pair",
    pairLabels: [
      "Prevent users from enrolling personal devices",
      "Ensure that users can enroll a maximum of 10 devices"
    ],
    pairOptions: [
      "Conditional access policies",
      "Device categories",
      "Device limit restrictions",
      "Device type restrictions"
    ],
    pairAnswer: [
      "Device type restrictions",
      "Device limit restrictions"
    ],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>개인용 등록 차단은 Device type restrictions에서 Personal enrollment를 Block으로 설정합니다.</p>
      <p>사용자별 등록 대수는 Device limit restrictions에서 설정합니다.</p>
      <p>제한 정책은 우선순위가 있으므로 대상 충돌을 피해야 합니다.</p>
      <p>BYOD 정책과 사용자 안내를 병행해야 혼선을 줄일 수 있습니다.</p>
      <p>변경 후 등록 실패 사유를 보고서로 확인하세요.</p>
      <p>필요 시 그룹 별 상이한 제한을 구성할 수 있습니다.</p>
      <p><a href="2614">Set enrollment restrictions</a></p>
    `
  },

  // 55
  {
    id: 55,
    title: "그룹 라이선스 자동 할당",
    promptHtml: `
      <p>You have a Microsoft 365 E5 subscription that is linked to a Microsoft Entra tenant named contoso.com.<br>
      You purchase 100 Microsoft 365 Business Voice add-on licenses.<br>
      You need to ensure that the members of a group named Voice are assigned a Microsoft 365 Business Voice add-on license automatically.<br>
      What should you do?</p>
    `,
    type: "single",
    options: [
      "A. From the Microsoft 365 admin center, modify the settings of the Voice group.",
      "B. From the Licenses page of the Microsoft 365 admin center, assign the licenses.",
      "C. From the Microsoft Entra admin center, modify the settings of the Voice group."
    ],
    correctAnswers: ["C. From the Microsoft Entra admin center, modify the settings of the Voice group."],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>자동 라이선스 할당은 Entra ID의 Group-based licensing로 구성합니다.</p>
      <p>그룹에 라이선스를 연결하면 구성원에게 자동 전파됩니다.</p>
      <p>Microsoft 365 admin center의 수동 할당은 자동화되지 않습니다.</p>
      <p>스코프와 충돌 라이선스 조합을 점검해야 합니다.</p>
      <p>사용자 이동 시 라이선스 회수도 자동 적용됩니다.</p>
      <p>감사 목적의 활동 로그를 활성화하세요.</p>
      <p><a href="https://learn.microsoft.com/en-us/entra/identity/users/licensing-groups-assign">Group-based licensing in Entra ID</a></p>
    `
  },

  // 56
  {
    id: 56,
    title: "지점 사용자만 MFA 적용",
    promptHtml: `
      <p>Your company has three main offices and one branch office. The branch office is used for research.<br>
      The company plans to implement a Microsoft 365 tenant and to deploy multi-factor authentication (MFA).<br>
      You need to recommend a Microsoft 365 solution to ensure that MFA is enforced only for users in the branch office.<br>
      What should you include in the recommendation?</p>
    `,
    type: "single",
    options: [
      "A. Azure AD password protection",
      "B. a Microsoft Intune device configuration profile",
      "C. a Microsoft Intune device compliance policy",
      "D. Azure AD conditional access"
    ],
    correctAnswers: ["D. Azure AD conditional access"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>특정 사용자/위치에만 MFA를 적용하려면 조건부 액세스 정책이 필요합니다.</p>
      <p>지점 IP 범위를 Named location으로 정의해 타깃팅할 수 있습니다.</p>
      <p>암호 보호·디바이스 정책은 인증 흐름 제어가 아닙니다.</p>
      <p>정책은 Report-only로 검증 후 Enforce로 전환하세요.</p>
      <p>예외 사용자나 비상 계정을 고려해야 합니다.</p>
      <p>신뢰 위치 관리와 병행하면 오탐을 줄일 수 있습니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/entra/identity/conditional-access/overview">Require MFA with Conditional Access</a></p>
    `
  },

  // 57
  {
    id: 57,
    title: "User1이 Compliance 평가 생성",
    promptHtml: `
      <p>You have a Microsoft 365 E5 subscription that contains a user named User1.<br>
      You need to enable User1 to create Compliance Manager assessments.<br>
      Solution: From the Microsoft 365 compliance center, you add User1 to the Compliance Manager Assessors role group.<br>
      Does this meet the goal?</p>
    `,
    type: "single",
    options: [
      "A. Yes",
      "B. No"
    ],
    correctAnswers: ["A. Yes"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Compliance Manager Assessors 역할은 평가 생성과 편집 권한을 포함합니다.</p>
      <p>따라서 User1에 해당 역할을 부여하면 목표를 충족합니다.</p>
      <p>Contributors/Readers는 각각 작업·읽기 권한에 국한됩니다.</p>
      <p>역할 변경 후 권한 전파 시간에 유의하세요.</p>
      <p>평가 생성 후 개선 조치와 증적 업로드 흐름을 정의해야 합니다.</p>
      <p>역할 부여·해제는 감사 로그를 남기십시오.</p>
      <p><a href="https://learn.microsoft.com/en-us/purview/compliance-manager#key-elements-controls-assessments-regulations-improvement-actions">Compliance Manager roles and permissions</a></p>
    `
  },

  // 58 — pair
  {
    id: 58,
    title: "메일 1000건 초과 시 차단 해제 관리자 식별",
    promptHtml: `
      <p>You have a Microsoft 365 E5 subscription that contains a user named User1 and the administrators shown in the following table.<br>
      ${IMG_Q58_1 ? `<p><img src="${IMG_Q58_1}" style="max-width:100%"></p>` : ""}
      User1 reports that after sending 1,000 email messages in the morning, the user is blocked from sending additional emails.<br>
      You need to identify the following:</p>
      ${IMG_Q58_2 ? `<p><img src="${IMG_Q58_2}" style="max-width:100%"></p>` : ""}
    `,
    type: "pair",
    pairLabels: [
      "Administrators who can unblock User1",
      "What to configure"
    ],
    pairOptionsLeft: [
      "Admin1 only",
      "Admin2 only",
      "Admin1 and Admin2 only",
      "Admin1 and Admin3 only",
      "Admin1, Admin2, and Admin3"
    ],
    pairOptionsRight: [
      "Anti-spam",
      "Anti-phishing",
      "Anti-malware",
      "Advanced delivery",
      "Enhanced filtering"
    ],
    pairAnswer: [
      "Admin1 and Admin2 only",
      "Anti-spam"
    ],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>하루 1,000건 초과 발송 제한은 Outbound anti-spam 정책이 관여합니다.</p>
      <p>차단 해제 권한은 Exchange Administrator 또는 Security Administrator에게 있습니다.</p>
      <p>따라서 표에서 해당 역할을 가진 관리자가 해제할 수 있습니다.</p>
      <p>2,000건 이상 발송을 허용하려면 Outbound 정책의 rate limit를 조정합니다.</p>
      <p>Safe Attachments/Links/Anti-phishing은 발송 한도와 무관합니다.</p>
      <p>발신자 평판 악화 방지를 위해 예외는 최소화해야 합니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/defender-office-365/outbound-spam-restore-restricted-users#what-do-you-need-to-know-before-you-begin">Configure outbound spam policies</a></p>
    `
  },

  // 59 — pair
  {
    id: 59,
    title: "사용자 이름 표시 및 Teams 모바일 사용량 표시 설정",
    promptHtml: `
      <p>You have a Microsoft 365 subscription.<br>
      From the Microsoft 365 admin center, you open the Microsoft 365 Apps usage report as shown in the exhibit.<br>
      ${IMG_Q59_1 ? `<p><img src="${IMG_Q59_1}" style="max-width:100%"></p>` : ""}
      You need to ensure that the report meets the following requirements:<br>
      - The Username column must display the actual name of each user.<br>
      - Usage of the Microsoft Teams mobile app must be displayed.<br>
      What should you modify for each requirement?<br>
      NOTE: Each correct selection is worth one point.</p>
      ${IMG_Q59_2 ? `<p><img src="${IMG_Q59_2}" style="max-width:100%"></p>` : ""}
    `,
    type: "pair",
    pairLabels: [
      "Display actual Username",
      "Display Teams mobile usage"
    ],
    pairOptionsLeft: [
      "Privacy settings in Org profile",
      "Reports in Org settings",
      "The membership of the Reports Reader role"
    ],
    pairOptionsRight: [
      "Microsoft Teams in Org settings",
      "The columns in the report",
      "The Teams license assignment"
    ],
    pairAnswer: [
      "Reports in Org settings",
      "Microsoft Teams in Org settings"
    ],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>사용자 식별 정보 표시 해제는 Org settings의 Reports에서 설정합니다.</p>
      <p>Teams 모바일 사용량 노출은 Org settings의 Microsoft Teams 보고 설정이 필요합니다.</p>
      <p>개인정보 보호 기본값 때문에 이름이 해시 처리될 수 있습니다.</p>
      <p>보고 범위 변경은 적용까지 시간이 걸릴 수 있습니다.</p>
      <p>감사 요구사항을 고려해 식별 정보 공개 여부를 결정하세요.</p>
      <p>필요 시 Power BI용 Usage 데이터 연결을 활용할 수 있습니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/microsoft-365/admin/activity-reports/activity-reports?view=o365-worldwide#show-user-group-or-site-details-in-the-reports">Usage reports settings</a></p>
    `
  },

  // 60
  {
    id: 60,
    title: "관리자 역할 권한 비교",
    promptHtml: `
      <p>You have an Azure AD tenant that contains the users shown in the following table.<br>
      ${IMG_Q60_1 ? `<p><img src="${IMG_Q60_1}" style="max-width:100%"></p>` : ""}
      You need to compare the permissions of each role. The solution must minimize administrative effort.<br>
      Which portal should you use?</p>
    `,
    type: "single",
    options: [
      "A. the Microsoft Purview compliance portal",
      "B. the Microsoft 365 admin center",
      "C. the Microsoft 365 Defender portal",
      "D. the Microsoft Entra admin center"
    ],
    correctAnswers: ["D. the Microsoft Entra admin center"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Entra admin center는 역할을 나란히 비교하는 기능을 제공해 관리 노력을 최소화합니다.</p>
      <p>Microsoft 365 admin center는 고수준 역할만 표시합니다.</p>
      <p>Purview/Defender 포털은 각 제품 영역 권한 중심으로 제한적입니다.</p>
      <p>역할 비교 후 최소 권한 원칙에 맞게 재할당하세요.</p>
      <p>역할 변경은 감사 추적으로 기록해야 합니다.</p>
      <p>정기적인 접근 검토(Access reviews)를 권장합니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/manage-roles-portal">View and compare roles in Entra ID</a></p>
    `
  },
  // 61 — Company Portal에 헬프데스크 번호 추가
  {
    id: 61,
    title: "Company Portal에 헬프데스크 번호 추가",
    promptHtml: `
      <p>You have a Microsoft 365 tenant that uses Microsoft Endpoint Manager for device management.<br>
      You need to add the phone number of the help desk to the Company Portal app. <br>
      What should you do?</p>
    `,
    type: "single",
    options: [
      "A. From Customization in the Microsoft Endpoint Manager admin center, modify the support information for the tenant.",
      "B. From Azure Active Directory, configure Organization branding.",
      "C. From Intune device compliance policies, edit the actions for noncompliance.",
      "D. From Microsoft Store for Business, set the support contact details."
    ],
    correctAnswers: ["A. From Customization in the Microsoft Endpoint Manager admin center, modify the support information for the tenant."],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Company Portal에 표시되는 지원 정보(도움말 링크, 전화, 이메일)는 MEM(Endpoint Manager) 콘솔의 Customization(브랜딩) 영역에서 관리합니다.</p>
      <p>조직 브랜딩(Azure AD)은 로그인 화면/Access Panel 등에 반영되는 요소로 Company Portal 지원 정보와는 다릅니다.</p>
      <p>규정 준수 정책의 조치는 비준수 시 알림/차단 등에 관한 설정으로, 지원 연락처를 기본 UI에 노출하지 않습니다.</p>
      <p>Store for Business는 Windows 앱 배포/구매 관련이며 Company Portal의 전사 지원 정보 제어 범위가 아닙니다.</p>
      <p>브랜딩 변경은 즉시 반영되지 않을 수 있으니 포털/앱 캐시를 새로 고침하여 확인하세요.</p>
      <p>테넌트 수준 설정이므로 불필요한 개인 정보(개인 전화번호 등) 노출을 지양하세요.</p>
      <p><a href="https://learn.microsoft.com/mem/intune/protect/device-protect">Customize the Company Portal apps, Company Portal website, and Intune app</a></p>
    `
  },

  // 62
  {
    id: 62,
    title: "Mac용 Defender ATP 구성 프로필 생성",
    promptHtml: `
      <p> You have a Microsoft 365 E5 subscription.<br>
      All users have Mac computers. All the computers are enrolled in Microsoft Endpoint Manager and onboarded to Microsoft Defender Advanced Threat Protection (Microsoft Defender ATP).<br>
      You need to configure Microsoft Defender ATP on the computers.<br>
      What should you create from the Endpoint Management admin center?</p>
    `,
    type: "single",
    options: [
      "A. a device configuration profile",
      "B. a device compliance policy",
      "C. a shell script profile only",
      "D. a custom OMA-URI policy"
    ],
    correctAnswers: ["A. a device configuration profile"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>macOS 디바이스에 Defender for Endpoint(구 ATP) 관련 설정을 배포하려면 Intune의 Device configuration profile을 사용합니다.</p>
      <p>구성 프로필에서 엔드포인트 보안/일반 구성 템플릿을 이용해 정책을 지정할 수 있습니다.</p>
      <p>준수 정책은 상태 평가에 초점을 두며, 기능 구성 자체를 대체하지 않습니다.</p>
      <p>일부 고급 항목은 커스텀/스크립트가 필요할 수 있으나 일반 정책의 기본 경로는 구성 프로필입니다.</p>
      <p>온보딩/오프보딩 패키지 적용 절차를 먼저 완료해야 정책이 정상 반영됩니다.</p>
      <p>프로필/스코프 태그/플랫폼 필터 충돌을 사전에 점검하세요.</p>
      <p><a href="https://www.notion.so/29bdbd591ead80e5b51ddeab9ff1bda9">Deploy Microsoft Defender for Endpoint on macOS with Intune</a></p>
    `
  },

  // 63
  {
    id: 63,
    title: "Microsoft 365 보안 센터 Incident 원본 식별",
    promptHtml: `
      <p>You have a Microsoft 365 E5 subscription.<br>
      You plan to manage incidents in the tenant by using the Microsoft 365 security center.<br>
      Which Microsoft service source will appear on the Incidents page of the Microsoft 365 security center?</p>
    `,
    type: "single",
    options: [
      "A. Microsoft Cloud App Security",
      "B. Azure Sentinel",
      "C. Azure Web Application Firewall",
      "D. Microsoft Defender for Cloud (Azure Defender)"
    ],
    correctAnswers: ["A. Microsoft Cloud App Security"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Microsoft 365 Defender 인시던트는 Defender 스택(Defender for Office 365, Endpoint, Identity, Cloud Apps 등)에서 집계됩니다.</p>
      <p>Defender for Cloud(Apps, 구 MCAS)의 경고는 M365 Defender 인시던트로 상호 연계되어 보안 워크플로를 통합합니다.</p>
      <p>Azure Sentinel(지금은 Microsoft Sentinel)은 Azure 포털 중심의 SIEM으로, M365 Security Center 인시던트와 별도 관리 흐름입니다.</p>
      <p>Azure WAF나 Defender for Cloud의 일부 경고는 Azure 생태계 관점에서 관리되며, M365 Defender와 도메인이 다릅니다.</p>
      <p>조직은 M365 Defender를 엔드유저/생산성 영역, Sentinel을 중앙 SIEM으로 보완적으로 운용합니다.</p>
      <p>인시던트 상관 규칙/자동화(Logic Apps)도 병행 고려하세요.</p>
      <p><a href="https://www.notion.so/29bdbd591ead807b8ea9ef04e5466bea">Incidents in Microsoft 365 Defender</a></p>
    `
  },

  // 64 — yn matrix
  {
    id: 64,
    title: "각 디바이스의 정책별 준수 여부 판정",
    promptHtml: `
      <p> You have a Microsoft 365 tenant that contains the compliance policies shown in the following table.<br>
      ${IMG_Q64_1 ? `<p><img src="${IMG_Q64_1}" style="max-width:100%"></p>` : ""}
      The tenant contains the devices shown in the following table.<br>
      ${IMG_Q64_2 ? `<p><img src="${IMG_Q64_2}" style="max-width:100%"></p>` : ""}
      For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>
      ${IMG_Q64_3 ? `<p><img src="${IMG_Q64_3}" style="max-width:100%"></p>` : ""}
    `,
    statements: [
      "Device A is marked as compliant.",
      "Device B is marked as compliant.",
      "Device C is marked as compliant."
    ],
    options: ["Yes", "No"],
    correctAnswers: ["No", "No", "No"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Intune 준수 판단은 디바이스에 적용된 모든 컴플라이언스 정책을 충족해야 ‘Compliant’로 표시됩니다.</p>
      <p>하나라도 필수 조건을 만족하지 못하면 그 디바이스는 ‘Not compliant’가 됩니다.</p>
      <p>또한 “정책 미할당 시 기본 상태” 설정에 따라 미정책 장치도 비준수로 분류될 수 있습니다.</p>
      <p>플랫폼 필터/대상 그룹이 상이하면 정책 적용 결과가 달라지므로 표의 조건을 그대로 해석해야 합니다.</p>
      <p>정책 충돌은 디바이스 리포트와 Troubleshoot + support에서 교차 확인하세요.</p>
      <p>조건부 액세스에서 ‘Require device to be marked as compliant’를 사용 중이면 접근에 직접 영향합니다.</p>
      <p><a href="https://learn.microsoft.com/mem/intune/protect/compliance-policy-create-windows">How compliance status is calculated in Intune</a></p>
    `
  },

  // 65 — yn matrix
  {
    id: 65,
    title: "사용자별 등록 제한 정책 적용 판정",
    promptHtml: `
      <p> You have several devices enrolled in Microsoft Endpoint Manager.<br>
      You have a Microsoft Azure Active Directory (Azure AD) tenant that includes the users shown in the following table.<br>
      ${IMG_Q65_1 ? `<p><img src="${IMG_Q65_1}" style="max-width:100%"></p>` : ""}
      The device type restrictions in Endpoint Manager are configured as shown in the following table.
      ${IMG_Q65_2 ? `<p><img src="${IMG_Q65_2}" style="max-width:100%"></p>` : ""}
      Select Yes if the restriction applies; otherwise, select No.</p>
      ${IMG_Q65_3 ? `<p><img src="${IMG_Q65_3}" style="max-width:100%"></p>` : ""}
    `,
    statements: [
      "Restriction A applies to User1.",
      "Restriction B applies to User2.",
      "Restriction C applies to User3."
    ],
    options: ["Yes", "No"],
    correctAnswers: ["No", "No", "No"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Enrollment restrictions는 우선순위가 낮은 숫자(가장 높은 우선순위)가 먼저 평가되며, 일치하는 첫 정책이 적용됩니다.</p>
      <p>사용자가 여러 그룹에 속해도 가장 높은 우선순위 정책 하나만 효력을 갖습니다.</p>
      <p>테넌트 기본 정책(Default)이 마지막에 적용되어 누락을 방지합니다.</p>
      <p>표의 매핑에 따르면 각 사용자에게 제시된 제한은 실제 최종 일치 정책과 달라 적용되지 않습니다.</p>
      <p>문제 해결 시 사용자 ID로 “What if” 평가를 수행해 우선순위를 검증하세요.</p>
      <p>BYOD 차단/허용과 디바이스 한도 정책은 각각 별도 탭에서 관리합니다.</p>
      <p><a href="https://www.notion.so/29bdbd591ead806296cae7beeccf1be7">Set enrollment restrictions and priorities</a></p>
    `
  },

  // 66 — yn matrix (앱 배포 결과)
  {
    id: 66,
    title: "앱 배포 결과: 설치/표시 여부 판단",
    promptHtml: `
      <p> You have a Microsoft 365 E5 subscription that uses Microsoft intune. The subscription contains the resources shown in the following table.<br>
      ${IMG_Q66_1 ? `<p><img src="${IMG_Q66_1}" style="max-width:100%"></p>` : ""}
      User1 is the owner of Device1.<br> 
      You add Microsoft 365 Apps Windows 10 and later app types to Intune as shown in the following table.<br>
      On Thursday, you review the results of the app deployments.<br>
      ${IMG_Q66_2 ? `<p><img src="${IMG_Q66_2}" style="max-width:100%"></p>` : ""}
      For each of the following statements, select Yes if the statement is true. Otherwise, select No.<br>
      NOTE: Each correct selection is worth one point.</p>
      ${IMG_Q66_3 ? `<p><img src="${IMG_Q66_3}" style="max-width:100%"></p>` : ""}
    `,
    statements: [
      "Word is installed on Device1",
      "App3 is displayed in the Company Portal.",
      "Excel is installed on Device1"
    ],
    options: ["Yes", "No"],
    correctAnswers: ["Yes", "Yes", "Yes"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>앱 할당 상태는 Required/Available/Uninstall과 플랫폼 호환성, 필터, 요구 조건에 따라 결정됩니다.</p>
      <p>Required는 대상에 자동 설치, Available은 포털 표시 후 사용자가 선택 설치, Uninstall은 제거 동작입니다.</p>
      <p>전시 표에서 세 앱 모두 조건을 충족하여 설치/표시 요건이 충족된 상태로 해석됩니다.</p>
      <p>장치/사용자 대상 혼용 시 우선순위 및 충돌 규칙을 고려해야 합니다.</p>
      <p>앱 보호 정책/구성 프로필과의 상호 영향도 점검하세요.</p>
      <p>배포 실패는 Company Portal 로그와 디바이스 관리 에이전트에서 추가 진단이 가능합니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/mem/intune/apps/app-protection-policy">Assign apps to groups with Intune</a></p>
    `
  },

  // 67
  {
    id: 67,
    title: "M365 Apps 배포 대상",
    promptHtml: `
      <p>You have a Microsoft 365 E5 tenant that contains four devices enrolled in Microsoft Intune as shown in the table.<br>
      ${IMG_Q67_1 ? `<p><img src="${IMG_Q67_1}" style="max-width:100%"></p>` : ""}
      You plan to deploy Microsoft 365 Apps for enterprise by using Microsoft Endpoint Manager.<br>
      To which devices can you deploy Microsoft 365 Apps for enterprise?</p>
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
      <p>Intune의 “Microsoft 365 Apps” 앱 유형은 Windows 10/11과 macOS용 패키지를 제공합니다.</p>
      <p>모바일(iOS/Android)은 Word/Excel/Outlook 등 개별 모바일 앱 관리이며 “Microsoft 365 Apps for enterprise”와 다릅니다.</p>
      <p>따라서 Windows 10 장치(Device1)와 macOS(Device3)에만 배포 대상입니다.</p>
      <p>앱 패키지 유형을 잘못 선택하면 설치가 진행되지 않으므로 플랫폼 별 템플릿을 구분하세요.</p>
      <p>설치 채널/업데이트 채널도 정책에 맞게 구성해야 합니다.</p>
      <p>오프라인 미디어 사용 시 키/활성화 정책을 사전에 검토하세요.</p>
      <p><a href="https://www.notion.so/29bdbd591ead80d29d0fd02692cd9a27">Deploy Microsoft 365 Apps with Intune (Windows/macOS)</a></p>
    `
  },

  // 68
  {
    id: 68,
    title: "Intune 등록 시 Defender 자동 온보딩 방식 검증",
    promptHtml: `
      <p>You have a Microsoft 365 E5 subscription.<br>
      You integrate Microsoft Defender for Endpoint with Microsoft Intune.<br>
      You need to ensure that devices automatically onboard to Defender for Endpoint when they are enrolled in Intune.<br>
      Solution: You create a compliance policy.<br>
      Does this meet the goal?</p>
    `,
    type: "single",
    options: [
      "A. Yes",
      "B. No"
    ],
    correctAnswers: ["B. No"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Intune 등록만으로 Defender for Endpoint 온보딩이 자동 수행되지는 않습니다.</p>
      <p>Windows/Mac/iOS/Android 각각에 대해 온보딩 프로파일이나 Connector(Defender for Endpoint와의 연결) 구성이 필요합니다.</p>
      <p>Windows는 보통 Endpoint security(Endpoint detection and response) 프로필로 온보딩을 배포합니다.</p>
      <p>구성 누락 시 보안 센터에 장치가 나타나지 않거나 신호가 수집되지 않습니다.</p>
      <p>테넌트 연결(Connector) 및 라이선스 유효성도 확인해야 합니다.</p>
      <p>온보딩 상태는 보안 포털 장치 목록과 Intune 리포트에서 교차 검증하세요.</p>
      <p><a href="call_pI03XtkBpVWx6GdGeffMx0RN">Connect Microsoft Defender for Endpoint and Intune</a></p>
    `
  },

  // 69
  {
    id: 69,
    title: "조건부 액세스 정책 최소 개수 산정",
    promptHtml: `
      <p>You have the following requirements for Conditional Access policies:<br>
      - Block sign-in for all users outside US/Canada.<br>
      - Block Android and iOS sign-in for R&amp;D department.<br>
      - Allow only Finance department to access App1 (block others).<br>
      What is the minimum number of Conditional Access policies required?</p>
    `,
    type: "single",
    options: [
      "A. 3",
      "B. 4",
      "C. 5",
      "D. 6",
      "E. 7",
      "F. 8"
    ],
    correctAnswers: ["B. 4"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>서로 다른 조건/대상/동작 조합은 하나의 정책으로 완전히 병합하기 어렵습니다.</p>
      <p>지리적 차단, 모바일 플랫폼 차단(특정 부서), 특정 앱에 대한 부서 허용 등의 요구로 최소 4개가 필요합니다.</p>
      <p>동일 범위를 동시에 적용 가능한 항목은 하나로 통합해 수를 최소화합니다.</p>
      <p>정책 수가 늘수록 평가 순서/예외/보고서 전환을 주의해야 합니다.</p>
      <p>Report-only 모드로 효과를 검증한 뒤 Enforce 전환을 권장합니다.</p>
      <p>네임드 위치/디바이스 준수 요구와의 조합도 함께 고려하세요.</p>
      <p><a href="https://learn.microsoft.com/en-us/microsoft-365/enterprise/view-service-health?view=o365-worldwide">Plan Conditional Access policies</a></p>
    `
  },

  // 70
  {
    id: 70,
    title: "MDATP Baseline 정책 적용 우선순위 분석",
    promptHtml: `
      <p>You have a Microsoft 365 tenant that contains a Windows 10 device named Device1 and the Microsoft Endpoint Manager policies shown in the following table.<br>
      ${IMG_Q70_1 ? `<p><img src="${IMG_Q70_1}" style="max-width:100%"></p>` : ""}
      Each policy includes a configuration for “Block execution of potentially obfuscated scripts (js/vbs/ps).”</p>
    `,
    type: "single",
    options: [
      "A. the settings of Policy1 and Policy2 merged",
      "B. only the settings of Policy2",
      "C. only the settings of the policy with the oldest assignment",
      "D. the most restrictive setting across all policies"
    ],
    correctAnswers: ["B. only the settings of Policy2"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>프로필 충돌 시 Intune은 우선순위(정책 평가 순서)에 따라 하나의 결과만 적용합니다.</p>
      <p>동일한 설정에 대해 병합 적용이 이루어지지 않으며, 마지막에 승리(last writer wins) 또는 우선순위가 높은 정책이 적용됩니다.</p>
      <p>보안 기준(Baseline)은 템플릿 단위로 설계되어 병합을 가정하지 않습니다.</p>
      <p>대상 분리를 통해 충돌을 줄이는 것이 운영상 안전합니다.</p>
      <p>정책 보고서에서 Resultant settings를 확인해 실제 적용값을 검증하세요.</p>
      <p>플랫폼/OS 버전, 디바이스 필터와의 조합도 영향을 미칠 수 있습니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/mem/intune/apps/app-protection-policy">Security baselines in Intune</a></p>
    `
  },

  // 71 — APP Data Transfer (pair)
  {
    id: 71,
    title: "Android App Protection Policy의 데이터 이동 제한 해석",
    promptHtml: `
      <p>You have a Microsoft 365 E5 subscription that contains 200 Android devices enrolled in Microsoft Intune.<br>
      You create an Android app protection policy named Policy! that is targeted to all Microsoft apps and assigned to all users.<br>
      Policy! has the Data protection settings shown in the following exhibit.</p>
      ${IMG_Q71_1 ? `<p><img src="${IMG_Q71_1}" style="max-width:100%"></p>` : ""}
      Use the drop-down menus to select 'he answer choice that completes each statement based on the information presented in the graphic.<br>
      ${IMG_Q71_2 ? `<p><img src="${IMG_Q71_2}" style="max-width:100%"></p>` : ""}
    `,
    type: "pair",
    pairLabels: [
      "A user ca copy files from Microsoft OneDrive to [anser choice] only.",
      "A user can copy and paste text from [answer choice] to a Microsoft Word document stored in Microsoft OneDrive."
    ],
    pairOptionsLeft: [
      "OneDrive",
      "Local Storage",
      "Microsoft SharePoint Online",
      "Microsoft SharePoint Online and OneDrive",
      "From managed apps only"
    ],
    pairOptionsRight: [
      "any apps",
      "only managed apps",
      "only unmanaged apps"
    ],
    pairAnswer: [
      "Microsoft SharePoint Online",
      "only managed apps"
    ],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>APP(앱 보호 정책)의 “Data Transfer”와 “Cut/Copy/Paste”는 서로 독립적으로 제어됩니다.</p>
      <p>OneDrive/SharePoint와 같은 관리되는 저장소에서의 전송을 허용하되, 비관리 앱으로의 클립보드 이동은 제한하는 것이 일반적인 보안 요구입니다.</p>
      <p>따라서 데이터 원본은 “From OneDrive - Microsoft SharePoint Online”로 지정하고, 복사/붙여넣기는 “Only between managed apps”로 제한합니다.</p>
      <p>이렇게 하면 조직 데이터가 개인 앱으로 유출되는 경로를 차단할 수 있습니다.</p>
      <p>iOS/iPadOS 정책도 유사하지만 플랫폼별 옵션 명칭이 다를 수 있습니다.</p>
      <p>적용 후 회사 포털 로그와 앱 진단에서 정책 적용 여부를 확인하세요.</p>
      <p><a href="https://learn.microsoft.com/microsoft-365/compliance/sensitivity-labels-sharepoint-onedrive-files">App protection policy settings — Data transfer and clipboard</a></p>
    `
  },

  // 72
  {
    id: 72,
    title: "Security Baseline 프로필 할당 가능한 그룹 유형 식별",
    promptHtml: `
      <p> You have a Microsoft 365 tenant that contains the groups shown in the following table.<br>
      ${IMG_Q72_1 ? `<p><img src="${IMG_Q72_1}" style="max-width:100%"></p>` : ""}
      You plan to create a new Windows 10 Security Baseline profile.<br>
      To which groups can you assign to the profile?</p>
    `,
    type: "single",
    options: [
      "A. Group3 only",
      "B. Group2 and Group3 only",
      "C. Group1 and Group3 only",
      "D. Group1, Group2, and Group3"
    ],
    correctAnswers: ["A. Group3 only"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Intune의 구성/보안 프로필은 Azure AD 보안 그룹(동적 포함)만을 대상으로 지정할 수 있습니다.</p>
      <p>Distribution group이나 Mail-enabled security group은 디바이스를 포함하지 못하므로 정책 대상이 될 수 없습니다.</p>
      <p>따라서 보안 그룹만 유효하며, 표의 Group3이 해당합니다.</p>
      <p>대상을 사용자/디바이스 어느 쪽으로 구성할지에 따라 배포 스코프가 달라집니다.</p>
      <p>정책 충돌을 줄이기 위해 스코프 태그/필터와 함께 설계하세요.</p>
      <p>동적 쿼리 사용 시 평가 지연을 고려해야 합니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/microsoft-365/admin/create-groups/compare-groups?view=o365-worldwide#mail-enabled-security-groups">Compare Microsoft 365 groups and Azure AD security groups</a></p>
    `
  },

  // 73
  {
    id: 73,
    title: "eDiscovery 검색 수행 관리자 조회 방법",
    promptHtml: `
      <p> You have a Microsoft 365 subscription.<br>
      You need to identify which administrative users performed eDiscovery searches during the past week.<br>
      What should you do from the Security & Compliance admin center?</p>
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
      <p>누가 eDiscovery 검색을 실행했는지 확인하려면 감사 로그에서 활동을 조회해야 합니다.</p>
      <p>Content Search 결과나 내보내기에는 수행자 메타데이터가 직접 노출되지 않을 수 있습니다.</p>
      <p>감사 로그는 활동 유형, 시간, 수행자, 대상 등을 포함합니다.</p>
      <p>감사(표준/프리미엄) 사용 설정이 선행되어야 이벤트가 저장됩니다.</p>
      <p>필요 시 Graph 또는 Search-UnifiedAuditLog로 자동화합니다.</p>
      <p>보존 기간을 넘어선 이벤트는 조회할 수 없습니다.</p>
      <p><a href="https://www.notion.so/29bdbd591ead80f3a44cfff649c2eca4">Search the audit log in Microsoft Purview</a></p>
    `
  },

  // 74 — 선택지 기반(정답 URL 포함)
  {
    id: 74,
    title: "User1의 OneDrive 위치에 대한 eDiscovery Hold URL 구성",
    promptHtml: `
      <p>You have a Microsoft 365 subscription that links to an Azure Active Directory (Azure AD) tenant named contoso.onmicrosoft.com.<br>
      A user named User1 stores documents in Microsoft OneDrive.<br>
      You need to place the contents of User1's OneDrive account on an eDiscovery hold.<br>
      Which URL should you use for the eDiscovery hold? To answer, select the appropriate options in the answer area.<br>
      NOTE: Each correct selection is worth one point.</p>
      ${IMG_Q74_1 ? `<p><img src="${IMG_Q74_1}" style="max-width:100%"></p>` : ""}
    `,
    type: "single",
    pairLabels: [
      "https://",
      "UserIndicator"
    ],
    pairOptionsLeft: [
      "onedrive.live.com/",
      "contoso.onmicrosoft.com/",
      "contoso.sharepoint.com/",
      "contoso-my.sharepoint.com/"
    ],
    pairOptionsRight: [
      "User1",
      "Sites/User1",
      "contoso_onmicrosoft_com/User1",
      "personal/User1_contoso_onmicrosoft_com"
    ],
    correctAnswers: ["contoso-my.sharepoint.com/", "personal/User1_contoso_onmicrosoft_com"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>OneDrive for Business 보존/보류에서 사용자 사이트 URL은 “contoso-my.sharepoint.com/personal/UPN_의 밑줄_버전” 패턴을 사용합니다.</p>
      <p>테넌트 도메인이 “-my”인 점과 개인 사이트의 “/personal/” 경로가 핵심입니다.</p>
      <p>팀/사이트 컬렉션의 “/sites/” 경로는 사용자의 개인 원드라이브가 아닙니다.</p>
      <p>Graph 드라이브 엔드포인트는 eDiscovery 보류 대상 URL 형식이 아닙니다.</p>
      <p>UPN의 @ 기호는 밑줄로 치환되어 URL을 구성합니다.</p>
      <p>대상 사용자가 아직 개인 사이트를 프로비저닝하지 않았다면 보류 적용이 지연될 수 있습니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/microsoft-365/compliance/data-loss-prevention-policies#create-dlp-rules">Place content locations on hold for eDiscovery</a></p>
    `
  },

  // 75 — Yes/No(제안 충족 여부)
  {
    id: 75,
    title: "User2의 Azure AD 인증 실패 원인 해결 방법 평가",
    promptHtml: `
      <p> Your network contains an on-premises Active Directory domain named contoso.com.<br>
      The domain contains the users shown in the following table.<br>
      ${IMG_Q75_1 ? `<p><img src="${IMG_Q75_1}" style="max-width:100%"></p>` : ""}
      The domain syncs to an Azure AD tenant named contoso.com as shown in the exhibit. (Click the Exhibit tab.)</p>
      ${IMG_Q75_2 ? `<p><img src="${IMG_Q75_2}" style="max-width:100%"></p>` : ""}
    `,
    type: "single",
    options: ["A. Yes", "B. No"],
    correctAnswers: ["A. Yes"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>자격 증명 관련 오류나 위험 기반 차단이 원인인 경우 암호 재설정과 위험 상태 해소가 효과적일 수 있습니다.</p>
      <p>Identity Protection에서 사용자/로그인 위험 상태를 해제하면 정책으로 인한 차단이 제거됩니다.</p>
      <p>동시에 암호를 재설정하면 유출/오염된 크리덴셜을 폐기할 수 있습니다.</p>
      <p>다만 다른 조건(예: 위치 기반 차단, 디바이스 비준수)이 원인일 경우 추가 조치가 필요합니다.</p>
      <p>Sign-in logs에서 실패 원인 코드를 확인해 재현을 방지하세요.</p>
      <p>조건부 액세스 예외나 명명된 위치 업데이트가 요구될 수 있습니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/entra/id-protection/howto-identity-protection-configure-risk-policies">Microsoft Entra ID Protection — remediate risk</a></p>
    `
  },

  // 76
  {
    id: 76,
    title: "사용자 대상 사회공학적 보안 교육 자동화 설정",
    promptHtml: `
      <p> You have a Microsoft 365 subscription and use Microsoft Defender for Office 365.<br>
      You need to recommend a solution to educate users on topics that relate to social engineering risks.<br>
      The users must receive a weekly reminder to complete a learning task.<br>
      What should you use in the Microsoft Defender portal?</p>
    `,
    type: "single",
    options: [
      "A. Campaigns",
      "B. Attack simulation training",
      "C. Threat tracker",
      "D.  Learning hub"
    ],
    correctAnswers: ["B. Attack simulation training"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Defender for Office 365의 Attack simulation training은 피싱 시뮬레이션과 훈련 할당을 자동화합니다.</p>
      <p>사용자가 링크를 클릭하는 등 실패 행동을 보이면 지정된 교육이 자동 배정됩니다.</p>
      <p>Safe Links/ASR/라벨링은 각각 다른 보안 범주로, 사용자 교육 자동 할당과 직접 관련이 없습니다.</p>
      <p>템플릿/대상 그룹을 정의해 정기적 캠페인을 운영하세요.</p>
      <p>피드백과 지표(실패율, 재발율)를 분석하여 교육 콘텐츠를 개선합니다.</p>
      <p>필요 시 Power Automate로 후속 조치를 연계할 수 있습니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/defender-office-365/outbound-spam-restore-restricted-users#what-do-you-need-to-know-before-you-begin">Attack simulation training in Microsoft Defender for Office 365</a></p>
    `
  },

  // 77 — multi (두 항목 선택)
  {
    id: 77,
    title: "메일 발송 제한 및 특정 파일 해시 차단을 위한 위협 보호 정책 구성",
    promptHtml: `
      <p> You have a Microsoft 365 E5 subscription.<br>
      You need to configure threat protection tor Microsoft 365 to meet the following requirements:<br>
      &nbsp;* Limit a user named User 1 from sending more than 30 email messages per day.<br>
      &nbsp;* Prevent the delivery of a specific file based on the file hash.<br>
      Which two threat policies should you configure in Microsoft Defender for Office 365? To answer<br>
      select the appropriate threat policies in the answer area.<br>
      NOTE: Each correct selection is worth one point.</p>
      ${IMG_Q77_1 ? `<p><img src="${IMG_Q77_1}" style="max-width:100%"></p>` : ""}
    `,
    type: "multi",
    multiOptions: [
      "Anti-phishing policy",
      "Anti-spam policy",
      "Anti-malware policy",
      "Safe Attachments policy",
      "Safe Links policy",
      "Tenant Allow/Block List",
      "Email authentication settings",
      "DKIM",
      "Advanced delivery",
      "Enhanced filtering",
      "Quarantine policies"
    ],
    multiAnswer: [
      "Anti-spam policy",
      "Tenant Allow/Block List"
    ],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>하루 1,000건 발송 제한은 Outbound anti-spam 정책의 레이트 리밋과 관련이 있습니다.</p>
      <p>특정 파일 해시 차단은 테넌트 Allow/Block List에 해시를 등록하여 모든 워크로드에서 차단하도록 구성합니다.</p>
      <p>Anti-phishing은 발신자 사칭 탐지, Safe Attachments는 동적 격리/검사 정책으로 목적이 다릅니다.</p>
      <p>과도한 예외는 악용 위험을 키우므로 최소화하세요.</p>
      <p>변경 사항은 이메일 전송 품질과 사용자 경험에 직접적 영향을 줍니다.</p>
      <p>조치 후 메시지 추적/경고를 모니터링하여 효과를 검증합니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/defender-office-365/outbound-spam-restore-restricted-users#what-do-you-need-to-know-before-you-begin">Configure anti-spam and Tenant Allow/Block List</a></p>
    `
  },

  // 78 — yn matrix (사용자 매핑)
  {
    id: 78,
    title: "Azure AD Connect 동기화 시 사용자 매핑 판별",
    promptHtml: `
      <p> Your network contains an Active Directory Domain Services (AD DS) domain.<br>
      The domain contains a server named Server1 that runs Windows Server.<br>
      The domain contains the users shown in the following table.<br>
      ${IMG_Q78_1 ? `<p><img src="${IMG_Q78_1}" style="max-width:100%"></p>` : ""}
      You have a Microsoft 365 subscription that contains the following user accounts:</p>
      ${IMG_Q78_2 ? `<p><img src="${IMG_Q78_2}" style="max-width:100%"></p>` : ""}
    `,
    statements: [
      "User1 syncs with user1@contoso.com",
      "User2 syncs with user1@contoso.com",
      "User3 created as a new user in Microsoft 365"
    ],
    options: ["Yes", "No"],
    correctAnswers: ["Yes", "No", "Yes"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>AAD Connect 특성 흐름은 우선순위와 방향(입력/출력), 변환 규칙에 따라 평가됩니다.</p>
      <p>표 기준으로 1과 3은 지원되는 흐름/변환이지만 2는 조건이나 방향이 맞지 않아 올바르지 않습니다.</p>
      <p>동기화 규칙 편집기에서 규칙 충돌 및 precedence를 확인하세요.</p>
      <p>커스텀 규칙 추가 시 Out-of-box 규칙과 중복되지 않도록 주의해야 합니다.</p>
      <p>캐시된 동기화가 남아있을 수 있으니 초기 동기화로 재검증하는 것이 좋습니다.</p>
      <p>Health 에이전트 경고를 참고해 오류를 조기에 발견하세요.</p>
      <p><a href="https://learn.microsoft.com/en-us/entra/identity/hybrid/connect/how-to-connect-sync-configure-filtering#organizational-unitbased-filtering">Troubleshoot Azure AD Connect sync — attribute flows</a></p>
    `
  },

  // 79
  {
    id: 79,
    title: "대량 메일 발송으로 인한 사용자 차단 방지 설정",
    promptHtml: `
      <p>You have a Microsoft 365 E5 subscription that uses Microsoft Defender for Office 365 and contains a user named User1.<br>
      User1 emails a product catalog in the PDF format to 300 vendors.<br>
      Only 200 vendors receive the email message, and User1 is blocked from sending email until the next day.<br>
      You need to prevent this issue from reoccurring.<br>
      What should you configure?</p>
    `,
    type: "single",
    options: [
      "A. anti-spam policies",
      "B. anti-phishing policies",
      "C. Safe Attachments policies",
      "D. quarantine policies"
    ],
    correctAnswers: ["A. anti-spam policies"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>발송 레이트 한도와 자동 차단은 Outbound anti-spam 정책에서 제어합니다.</p>
      <p>필요 시 특정 사용자/그룹에 대한 예외 또는 상향된 레이트를 구성할 수 있습니다.</p>
      <p>과도한 완화는 실제 스팸 발송 리스크를 높일 수 있으므로 최소화해야 합니다.</p>
      <p>정책 변경 후 메시지 추적과 보안 경고를 모니터링하세요.</p>
      <p>안티피싱/세이프어태치먼트는 다른 위협 벡터에 대한 방어입니다.</p>
      <p>사용자 교육과 DKIM/DMARC/SPF 설정도 함께 점검하십시오.</p>
      <p><a href="https://www.notion.so/29bdbd591ead8018bf4cdc0b817d7b2d">Outbound anti-spam policy overview</a></p>
    `
  },

  // 80 — Yes/No(권한 검증)
  {
    id: 80,
    title: "Cloud App Security 정책 생성 및 경고 관리 권한 검증",
    promptHtml: `
      <p> You have an Azure Active Directory (Azure AD) tenant that contains a user named User1.<br>
      Your company purchases a Microsoft 365 subscription.<br>
      You need to ensure that User1 is assigned the required role to create file policies and manage alerts in the Cloud App Security admin center.<br>
      Solution: From the Azure Active Directory admin center, you assign the Compliance administrator role to User1.<br>
      Does this meet the goal?</p>
    `,
    type: "single",
    options: ["A. Yes", "B. No"],
    correctAnswers: ["B. No"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Security Reader는 읽기 전용 역할로 정책 생성/수정이나 경고 해제 작업 권한이 없습니다.</p>
      <p>Defender for Cloud Apps에서 정책 생성과 경고 관리를 하려면 App/Cloud App Security Administrator 또는 Security Administrator 등의 쓰기 권한이 필요합니다.</p>
      <p>역할을 과도하게 부여하지 않도록 최소 권한 원칙을 지키세요.</p>
      <p>역할 변경 후 전파 시간이 필요할 수 있습니다.</p>
      <p>활동은 감사 로그로 추적 가능한 상태를 유지해야 합니다.</p>
      <p>정책 관리와 보안 운영 절차를 분리하여 권한 남용을 방지하세요.</p>
      <p><a href="https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/manage-roles-portal">Microsoft Entra roles and Defender for Cloud Apps permissions</a></p>
    `
  },
  {
    id: 81,
    title: "PowerShell로 라이선스 할당 (Microsoft Bookings 제외)",
    promptHtml: `

      You have a Microsoft 365 subscription.<br>
      A user named user1@contoso.com was recently provisioned.<br>
      You need to use PowerShell to assign a Microsoft Office 365 E3 license to User1. <strong>Microsoft Bookings must NOT be enabled.</strong><br>
      How should you complete the command? (Select the appropriate options.)
      </p>
      ${IMG_Q81_1 ? `<p><img src="${IMG_Q81_1}" style="max-width:100%"></p>` : ""}
    `,
    type: "pair",
    pairLabels: ["Connect", "Find SKU", "Assign license"],
    pairOptions: [
      "Connect-MgGraph",
      "Connect-ExchangeOnline",
      "Get-MgSubscribedSku",
      "Get-AzureADSubscribedSku",
      "Set-MgUserLicense",
      "Set-AzureADUserLicense"
    ],
    pairAnswer: ["Connect-MgGraph", "Get-MgSubscribedSku", "Set-MgUserLicense"],
    explanationHtml: `
      <h3>Explanation</h3>
      Graph PowerShell에서 Connect‑MgGraph → Get‑MgSubscribedSku → Set‑MgUserLicense 순으로 수행하며 DisabledPlans에 MICROSOFTBOOKINGS를 포함해 비활성화합니다.
      <p><a href="https://learn.microsoft.com/graph/api/user-assignlicense">Assign licenses (Set‑MgUserLicense)</a></p>
    `
  },

  // 82 — Windows version check (Device Manager? → No)
  {
    id: 82,
    title: "Windows 버전 확인 방법 검증",
    promptHtml: `

      You have a computer that runs <strong>Windows 10</strong>.<br>
      You need to verify which version of Windows 10 is installed.<br>
      <strong>Solution:</strong> From <strong>Device Manager</strong>, you view the computer properties.<br>
      Does this meet the goal?</p>
    `,
    type: "single",
    options: ["A. Yes", "B. No"],
    correctAnswers: ["B. No"],
    explanationHtml: `
      <h3>Explanation</h3>
      OS 버전은 winver, Settings → System → About, 또는 msinfo32에서 확인합니다.
      <p><a href="https://learn.microsoft.com/windows/client-management/windows-version-and-build-numbers">Find Windows version and build</a></p>
    `
  },

  // 83 — MDCA syslog auto upload components
  {
    id: 83,
    title: "Defender for Cloud Apps Syslog 자동 업로드 구성 요소",
    promptHtml: `

      You plan to ingest <strong>syslog data</strong> from a supported firewall device to <strong>Microsoft Defender for Cloud Apps</strong>.<br>
      You need to configure <strong>automatic log upload</strong>.<br>
      Which two components should you configure for the <strong>log collector</strong>? Each correct answer presents a complete solution.</p>
    `,
    type: "multi",
    multiOptions: [
      "A. a connection string",
      "B. the receiver type",
      "C. the data source",
      "D. the username and password",
      "E. the host IP address or FQDN"
    ],
    multiAnswer: ["B. the receiver type", "C. the data source"],
    explanationHtml: `
      <h3>Explanation</h3>
      자동 업로드용 Log collector에는 <strong>Receiver type</strong>과 <strong>Data source</strong>를 설정합니다.
      <p><a href="https://learn.microsoft.com/defender-cloud-apps/discovery-docker-windows">Configure automatic log upload</a></p>
    `
  },

  // 84 — Compliance policy outcomes (threat level + rooted)
  {
    id: 84,
    title: "Intune 컴플라이언스 정책: 위협 수준 및 Rooted 디바이스 처리",
    promptHtml: `

      You configure a <strong>device compliance policy</strong> as shown in the exhibit.<br>
      Complete each statement based on the information presented.</p>
      ${IMG_Q84_1 ? `<p><img src="${IMG_Q84_1}" style="max-width:100%"></p>` : ""}
      ${IMG_Q84_2 ? `<p><img src="${IMG_Q84_2}" style="max-width:100%"></p>` : ""}
    `,
    type: "pair",
    pairLabels: [
      "When a device reports a medium threat level, the device will …",
      "Rooted devices will …"
    ],
    pairOptions: [
      "be marked as compliant",
      "be marked as noncompliant",
      "be allowed to access company resources",
      "be prevented from accessing company resources"
    ],
    pairAnswer: [
      "be marked as noncompliant",
      "be prevented from accessing company resources"
    ],
    explanationHtml: `
      <h3>Explanation</h3>
      허용 임계가 Low이면 Medium은 비준수이며, Rooted/Jailbroken은 차단됩니다.
      <p><a href="https://learn.microsoft.com/mem/intune/protect/compliance-policy-create-android-for-work#device-health">Device compliance settings (Android)</a></p>
    `
  },

  // 85 — MDE streamlined connectivity (proxy)
  {
    id: 85,
    title: "Defender for Endpoint 프록시 연결 단순화",
    promptHtml: `

      Devices will connect to Microsoft Defender for Endpoint <strong>through a proxy</strong>.<br>
      You must use <strong>consolidated URLs</strong> and <strong>static IP ranges</strong> for MDE connectivity.<br>
      What should you do?</p>
    `,
    type: "single",
    options: [
      "A. Enable device discovery",
      "B. Use the streamlined connectivity type",
      "C. Use the standard connectivity type",
      "D. Configure a device group"
    ],
    correctAnswers: ["B. Use the streamlined connectivity type"],
    explanationHtml: `
      <h3>Explanation</h3>
      Streamlined connectivity는 통합 URL과 고정 IP 범위를 제공합니다.
      <p><a href="https://learn.microsoft.com/defender-endpoint/streamlined-connectivity">Streamlined connectivity for MDE</a></p>
    `
  },

  // 86 — Teams auto retention priorities (two statements)
  {
    id: 86,
    title: "Teams 이벤트 보존 정책 우선순위",
    promptHtml: `

      You have three <strong>auto retention policies</strong> as shown in the exhibit.<br> 
      ${IMG_Q86_1 ? `<p><img src="${IMG_Q86_1}" style="max-width:100%"></p>` : ""}
      Complete each statement based on the graphic.</p>
      ${IMG_Q86_2 ? `<p><img src="${IMG_Q86_2}" style="max-width:100%"></p>` : ""}
    `,
    type: "pair",
    pairLabels: [
      "If User1 creates a team in Microsoft Teams, the event is …",
      "If User2 adds a channel in Microsoft Teams, the event is …"
    ],
    pairOptions: [
      "retained for three months",
      "retained for six months",
      "retained for one year"
    ],
    pairAnswer: [
      "retained for six months",
      "retained for one year"
    ],
    explanationHtml: `
      <h3>Explanation</h3>
      낮은 숫자 Priority가 더 높음. 조건 매칭에 따라 6개월, 12개월 정책이 우선합니다.
      <p><a href="https://learn.microsoft.com/microsoft-365/compliance/retention-policies">Retention policies</a></p>
    `
  },

  // 87 — Insider Risk least-privilege role
  {
    id: 87,
    title: "Insider Risk 관리 최소 권한 역할",
    promptHtml: `

      Ensure User1 can review alerts, manage cases, create notice templates, and review emails via <strong>Content Explorer</strong>, using least privilege. Which role group should you add User1 to?</p>
    `,
    type: "single",
    options: [
      "A. Insider Risk Management",
      "B. Insider Risk Management Analysts",
      "C. Insider Risk Management Investigators",
      "D. Insider Risk Management Admin"
    ],
    correctAnswers: ["C. Insider Risk Management Investigators"],
    explanationHtml: `
      <h3>Explanation</h3>
      Investigators는 Alerts/Cases/Notice templates/Content Explorer 접근을 모두 제공합니다.
      <p><a href="https://learn.microsoft.com/microsoft-365/compliance/insider-risk-management-permissions">Insider Risk permissions</a></p>
    `
  },

  // 88 — iOS MDM push certificate (sequence)
  {
    id: 88,
    title: "iOS 디바이스 등록을 위한 MDM 인증서 구성 순서",
    promptHtml: `

      You need to create an <strong>iOS/iPadOS enrollment profile</strong> in Intune. Arrange the three actions in the correct order.</p>
      ${IMG_Q88_1 ? `<p><img src="${IMG_Q88_1}" style="max-width:100%"></p>` : ""}
    `,
    type: "sequence",
    sequenceOptions: [
      "From Microsoft Endpoint Manager admin center, download a certificate signing request.",
      "Create a certificate from the Apple Push Certificates Portal.",
      "Upload an Apple MDM push certificate to Microsoft Endpoint Manager."
    ],
    sequenceAnswer: [
      "From Microsoft Endpoint Manager admin center, download a certificate signing request.",
      "Create a certificate from the Apple Push Certificates Portal.",
      "Upload an Apple MDM push certificate to Microsoft Endpoint Manager."
    ],
    explanationHtml: `
      <h3>Explanation</h3>
      CSR 다운로드 → Apple Push Certificates Portal에서 인증서 생성 → Intune에 업로드.
      <p><a href="https://learn.microsoft.com/mem/intune/enrollment/ios-enroll">Set up iOS/iPadOS device management</a></p>
    `
  },

  // 89 — Overall device compliance logic (three statements)
  {
    id: 89,
    title: "장치 준수 상태 계산 방식",
    promptHtml: `

      You have device compliance policies shown in a table<br>
      ${IMG_Q89_1 ? `<p><img src="${IMG_Q89_1}" style="max-width:100%"></p>` : ""}
      device compliance states per policy shown in another table.<br>
      ${IMG_Q89_2 ? `<p><img src="${IMG_Q89_2}" style="max-width:100%"></p>` : ""}
      Select Yes/No for each statement about overall device compliance.</p>
      ${IMG_Q89_3 ? `<p><img src="${IMG_Q89_3}" style="max-width:100%"></p>` : ""}
    `,
    type: "statements",
    statements: [
      "If any policy is Not Compliant, the overall device compliance is Not Compliant.",
      "If all assigned policies are Compliant, the overall device compliance is Compliant.",
      "If at least one policy is In grace period and none are Not Compliant, the overall device compliance is In grace period."
    ],
    options: ["Yes", "No"],
    correctAnswers: ["Yes", "Yes", "Yes"],
    explanationHtml: `
      <h3>Explanation</h3>
      Intune의 종합 규칙에 따른 결과입니다. (정책 미할당은 기본 Compliant 설정을 별도로 변경 가능)
      <p><a href="https://learn.microsoft.com/mem/intune/protect/device-compliance-get-started">Evaluate device compliance</a></p>
    `
  },

  // 90 — Connect Health tasks to users (pair)
  {
    id: 90,
    title: "Microsoft Entra Connect Health 작업별 사용자",
    promptHtml: `

      Identify which users can perform: (1) View sync errors in Microsoft Entra Connect Health. (2) Configure Microsoft Entra Connect Health settings. Each correct selection is worth one point.</p>
      ${IMG_Q90_1 ? `<p><img src="${IMG_Q90_1}" style="max-width:100%"></p>` : ""}
    `,
    type: "pair",
    pairLabels: [
      "View sync errors in Microsoft Entra Connect Health",
      "Configure Microsoft Entra Connect Health settings"
    ],
    pairOptions: ["User1", "User2", "User3"],
    pairAnswer: ["User2", "User1"], // per provided mapping
    explanationHtml: `
      <h3>Explanation</h3>
      Contributor는 보기와 설정 변경 권한을 모두 가집니다.
      <p><a href="https://learn.microsoft.com/azure/active-directory/hybrid/how-to-connect-health-operations">Connect Health roles</a></p>
    `
  },

  // 91 — DLP locations for Teams sharing
  {
    id: 91,
    title: "Teams에서 외부 공유 차단 정책 위치",
    promptHtml: `

      You create a DLP policy to prevent users from using Microsoft Teams to share internal documents with external users.<br>
      To which two locations should you apply the policy? Each correct selection is worth one point.</p>
      ${IMG_Q91_1 ? `<p><img src="${IMG_Q91_1}" style="max-width:100%"></p>` : ""}
    `,
    type: "multi",
    multiOptions: [
      "Exchange email",
      "SharePoint sites",
      "OneDrive accounts",
      "Teams chat and channel messages"
    ],
    multiAnswer: ["SharePoint sites", "OneDrive accounts"],
    explanationHtml: `
      <h3>Explanation</h3>
      Teams 파일은 채널→SharePoint, 개인/미팅→OneDrive에 저장·공유됩니다.
      <p><a href="https://learn.microsoft.com/microsoft-365/compliance/dlp-microsoft-teams">Use DLP with Microsoft Teams</a></p>
    `
  },

  // 92 — Retention label immediate processing
  {
    id: 92,
    title: "Retention 라벨 즉시 적용 PowerShell",
    promptHtml: `

      You created a retention label published to all locations. Ensure User1 can label emails with the label as soon as possible. Which cmdlet should you run?</p>
    `,
    type: "single",
    options: [
      "A. Start-MpScan",
      "B. Start-Process",
      "C. Start-ManagedFolderAssistant",
      "D. Start-AppBackgroundTask"
    ],
    correctAnswers: ["C. Start-ManagedFolderAssistant"],
    explanationHtml: `
      <h3>Explanation</h3>
      Managed Folder Assistant를 수동 실행해 보존 정책/라벨 처리를 즉시 트리거합니다.
      <p><a href="https://learn.microsoft.com/powershell/module/exchange/start-managedfolderassistant">Start-ManagedFolderAssistant</a></p>
    `
  },

  // 93 — DLP internal/external recipients
  {
    id: 93,
    title: "DLP 내부/외부 판정 및 전송 가능 사용자",
    promptHtml: `

      A DLP policy blocks emailing PII to users outside your organization. To which users can <strong>User1</strong> send documents that contain PII?</p>
      ${IMG_Q93_1 ? `<p><img src="${IMG_Q93_1}" style="max-width:100%"></p>` : ""}
    `,
    type: "single",
    options: [
      "A. User2 only",
      "B. User2 and User3 only",
      "C. User2, User3, and User4 only",
      "D. User2, User3, User4, and User5"
    ],
    correctAnswers: ["B. User2 and User3 only"],
    explanationHtml: `
      <h3>Explanation</h3>
      내부(verified/accepted domain) 사용자에게는 허용, 외부(guest/외부 도메인)는 차단.
      <p><a href="https://learn.microsoft.com/microsoft-365/compliance/dlp-learn-about-dlp">Learn about DLP</a></p>
    `
  },

  // 94 — MDCA: monitor group activities (two settings)
  {
    id: 94,
    title: "Defender for Cloud Apps 그룹 활동 모니터링 설정",
    promptHtml: `

      You connect a cloud app that contains a group named <em>Group1</em> to Microsoft Defender for Cloud Apps.<br>
      You need to configure the Cloud apps settings to monitor all activities performed by the members of <em>Group1</em>.<br>
      Which two settings should you configure? Each correct selection is worth one point.</p>
      ${IMG_Q94_1 ? `<p><img src="${IMG_Q94_1}" style="max-width:100%"></p>` : ""}
    `,
    type: "multi",
    multiOptions: [
      "User groups",
      "IP ranges",
      "SIEM agents",
      "Preview features",
      "Cloud Discovery snapshot reports"
    ],
    multiAnswer: ["User groups", "SIEM agents"],
    explanationHtml: `
      <h3>Explanation</h3>
      그룹 단위 모니터링은 User groups를 활성화하고, 활동 로그 수집/연동은 SIEM agents로 수행합니다.
      <p><a href="https://learn.microsoft.com/defender-cloud-apps/general-setup">Configure settings in Defender for Cloud Apps</a></p>
    `
  },

  // 95 — MDE onboarding + policy needed
  {
    id: 95,
    title: "MDE 온보딩 가능한 장치와 필요한 정책",
    promptHtml: `

      ${IMG_Q95_1 ? `<p><img src="${IMG_Q95_1}" style="max-width:100%"></p>` : ""}
      You plan to use risk levels in Microsoft Defender for Endpoint to identify whether a device is compliant and block noncompliant devices.<br>
      Identify which devices can be onboarded to MDE, and which Endpoint security policies must be configured. Each correct selection is worth one point.</p>
      ${IMG_Q95_2 ? `<p><img src="${IMG_Q95_2}" style="max-width:100%"></p>` : ""}
    `,
    type: "pair",
    pairLabels: [
      "Devices that can be onboarded to MDE",
      "Policies required to onboard"
    ],
    pairOptions: [
      "Device1, Device2, Device3, and Device4",
      "Device1 and Device3 only",
      "A device configuration profile only",
      "Compliance + Conditional Access policies"
    ],
    pairAnswer: [
      "Device1, Device2, Device3, and Device4",
      "A device configuration profile only"
    ],
    explanationHtml: `
      <h3>Explanation</h3>
      Windows 10/11, iOS, Android, (downlevel Windows via MMA) 모두 온보딩 가능. 온보딩 자체엔 구성 프로필이 필요합니다.
      <p><a href="https://learn.microsoft.com/defender-endpoint/configure-endpoints">Onboard devices to MDE</a></p>
    `
  },

  // 96 — MDE roles/device groups (three statements)
  {
    id: 96,
    title: "Defender for Endpoint 역할/장치 그룹별 권한 평가",
    promptHtml: `

       You have an Azure AD tenant that contains the users shown in the following table<br>
      ${IMG_Q96_1 ? `<p><img src="${IMG_Q96_1}" style="max-width:100%"></p>` : ""}
       Your company uses Microsoft Defender for Endpoint. Microsoft Defender for Endpoint contains the  roles shown in the following table.<br>
       ${IMG_Q96_2 ? `<p><img src="${IMG_Q96_2}" style="max-width:100%"></p>` : ""}
       Microsoft Defender for Endpoint contains the device groups shown in the following table<br>
       ${IMG_Q96_3 ? `<p><img src="${IMG_Q96_3}" style="max-width:100%"></p>` : ""}
       For each of the following statements, select Yes if the statement is true. Otherwise, select No. <br>
       NOTE; Each correct selection is worth one point.<br>
       ${IMG_Q96_4 ? `<p><img src="${IMG_Q96_4}" style="max-width:100%"></p>` : ""}
    `,
    type: "statements",
    statements: [
      "User1 can run an antivirus scan on Device2.",
      "User2 can collect an investigation package from Device2.",
      "User3 can isolate Device1."
    ],
    options: ["Yes", "No"],
    correctAnswers: ["No", "No", "Yes"],
    explanationHtml: `
      <h3>Explanation</h3>
      스캔/격리/조사 패키지는 관리자급 역할 필요. User3이 관리자 역할로 허용됩니다.
      <p><a href="https://learn.microsoft.com/defender-endpoint/rbac">RBAC in Microsoft Defender for Endpoint</a></p>
    `
  },

  // 97 — Anti-phishing threshold (PCL >= 4 at level 3)
  {
    id: 97,
    title: "PCL(Phishing Confidence Level) 기반 탐지 임계값",
    promptHtml: `

      You create an anti-phishing policy with <strong>Phishing email threshold: 3 – More Aggressive</strong>. User1 receives the messages shown in a table.<br>
      Which messages are phishing email?</p>
      ${IMG_Q97_1 ? `<p><img src="${IMG_Q97_1}" style="max-width:100%"></p>` : ""}
    `,
    type: "single",
    options: [
      "A. Mail4 only",
      "B. Mail3 and Mail4 only",
      "C. Mail2, Mail3, and Mail4 only",
      "D. Mail1, Mail2, Mail3, and Mail4"
    ],
    correctAnswers: ["C. Mail2, Mail3, and Mail4 only"],
    explanationHtml: `
      <h3>Explanation</h3>
      Threshold 3은 PCL ≥ 4를 피싱으로 처리합니다.
      <p><a href="https://learn.microsoft.com/microsoft-365/security/office-365-security/anti-spam-stamps#x-ms-exchange-organization-pcl">PCL header</a> ·
      <a href="https://learn.microsoft.com/microsoft-365/security/office-365-security/anti-phishing-policies-about#advanced-settings">Phishing thresholds</a></p>
    `
  },

  // 98 — Android personal vs company-owned risk/access control
  {
    id: 98,
    title: "Android 개인/회사 기기별 위협 수준 식별 및 Exchange 접근 제어",
    promptHtml: `

      Users access tenant resources using both <strong>personal and company‑owned Android devices</strong>. Only devices with <strong>medium or lower threat level</strong> may access Exchange Online.<br>
      Recommend a solution to identify threat level and control access for each device type. Each correct selection is worth one point.</p>
      ${IMG_Q98_1 ? `<p><img src="${IMG_Q98_1}" style="max-width:100%"></p>` : ""}
    `,
    type: "pair",
    pairLabels: ["Company-owned Android devices", "Personal (BYOD) Android devices"],
    pairOptions: [
      "A compliance policy",
      "An app protection policy",
      "An app configuration policy",
      "A device configuration profile"
    ],
    pairAnswer: ["A compliance policy", "An app protection policy"],
    explanationHtml: `
      <h3>Explanation</h3>
      등록(회사 소유)은 컴플라이언스, BYOD는 앱 보호 정책으로 위협 기반 접근을 제어합니다.
      <p><a href="https://learn.microsoft.com/mem/intune/protect/advanced-threat-protection">Integrate MDE with Intune</a></p>
    `
  },

  // 99 — Identify recently updated services/apps
  {
    id: 99,
    title: "최근 업데이트된 Microsoft 365 서비스/앱 식별",
    promptHtml: `

      You suspect several Microsoft 365 applications or services were recently updated. Identify which were updated. Each correct selection is worth one point.</p>
    `,
    type: "multi",
    multiOptions: [
      "A. Service health in Microsoft 365 admin center",
      "B. Message center in Microsoft 365 admin center",
      "C. Products blade in Microsoft 365 admin center",
      "D. Messages in Microsoft 365 Admin mobile app"
    ],
    multiAnswer: ["B. Message center in Microsoft 365 admin center", "D. Messages in Microsoft 365 Admin mobile app"],
    explanationHtml: `
      <h3>Explanation</h3>
      최신 변경/신기능 공지는 Message center와 관리자 앱 메시지에서 확인합니다.
      <p><a href="https://learn.microsoft.com/microsoft-365/admin/manage/message-center">Message center</a></p>
    `
  },

  // 100 — Block unsanctioned apps risk score ≤ 4
  {
    id: 100,
    title: "위험 점수 4 이하 앱 자동 차단 정책 구성",
    promptHtml: `
      After integrating Microsoft Defender for Cloud Apps with Microsoft Defender for Endpoint, create a policy to block users from accessing discovered apps with <strong>risk score ≤ 4</strong>.<br>
      Which two settings should you configure? Each correct selection is worth one point.</p>
      ${IMG_Q100_1 ? `<p><img src="${IMG_Q100_1}" style="max-width:100%"></p>` : ""}
    `,
    type: "multi",
    multiOptions: [
      "App discovery policy",
      "Activity policy",
      "Tag app as sanctioned",
      "Tag app as unsanctioned",
      "File policy"
    ],
    multiAnswer: ["App discovery policy", "Tag app as unsanctioned"],
    explanationHtml: `
      <h3>Explanation</h3>
      App discovery policy 조건에 Risk score ≤ 4를 설정하고, Governance action으로 Unsanctioned 태그를 적용하면 MDE Network protection이 차단합니다.
      <p><a href="https://learn.microsoft.com/defender-cloud-apps/wdatp-integration">Block apps with MDCA + MDE</a></p>
    `
  },
  {
    id: 101,
    title: "Preservation Lock 적용 후 변경 가능한 항목",
    promptHtml: `
      <p>You have a Microsoft 365 subscription that uses Security & Compliance retention policies.
      You implement a preservation lock on a retention policy that is assigned to all executive users.
      Which two actions can you perform on the retention policy?
      Each correct answer presents a complete solution.
      NOTE: Each correct selection is worth one point.</p>
    `,
    type: "multi",
    multiOptions: [
      "A. Add locations to the policy",
      "B. Reduce the duration of the policy",
      "C. Remove locations from the policy",
      "D. Extend the duration of the policy",
      "E. Disable the policy"
    ],
    multiAnswer: [
      "A. Add locations to the policy",
      "D. Extend the duration of the policy"
    ],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Preservation Lock은 정책의 불변성을 강제하므로 삭제·비활성화·기간 단축·위치 제거는 금지됩니다.</p>
      <p>다만 위치 추가와 보존 기간 연장은 허용됩니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/microsoft-365/compliance/preservation-lock">Preservation lock in Microsoft Purview</a></p>
    `
  },

  // 102 — Microsoft Store for Business role
  {
    id: 102,
    title: "Microsoft Store for Business 내 앱 구매·배포·Private Store 관리 역할",
    promptHtml: `
      <p>You have a Microsoft 365 tenant that is signed up for Microsoft Store for Business and contains a user named User1.
      You need to ensure that User1 can assign licenses, procure apps, and manage Private Store availability for all items.
      The solution must use the principle of least privilege. Which role should you assign?</p>
    `,
    type: "single",
    options: [
      "A. Basic Purchaser",
      "B. Device Guard signer",
      "C. Admin",
      "D. Purchaser"
    ],
    correctAnswers: ["C. Admin"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Admin만이 라이선스 할당, 앱 구매, Private Store 가시성 관리를 모두 수행할 수 있습니다.</p>
      <p>Purchaser는 스토어 가시성 관리를 할 수 없습니다. Basic Purchaser는 본인 구매만 가능합니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/microsoft-store/microsoft-store-for-business-overview">Manage roles in Microsoft Store for Business</a></p>
    `
  },

  // 103 — Retention label vs Exchange retention policy
  {
    id: 103,
    title: "Retention Label과 Exchange Retention Policy의 사용자별 할당",
    promptHtml: `
      <p>You have a Microsoft 365 E5 subscription that contains the users shown in a table.
      ${IMG_Q103_1 ? `<p><img src="${IMG_Q103_1}" style="max-width:100%"></p>` : ""}
      A Microsoft 365 retention label (Retention1) is published to Exchange email.
      An Exchange Online retention policy containing a tag (Retention2) is applied to all mailboxes.
      Which users can assign Retention1 and Retention2 to their emails?</p>
      ${IMG_Q103_2 ? `<p><img src="${IMG_Q103_2}" style="max-width:100%"></p>` : ""}
    `,
    type: "pair",
    pairLabels: ["Retention1 (label) can be assigned by", "Retention2 (tag) can be assigned by"],
    pairOptions: [
      "User1, User2, User3, and User4",
      "User4 only"
    ],
    pairAnswer: [
      "User1, User2, User3, and User4",
      "User4 only"
    ],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>게시된 Microsoft 365 보존 라벨은 게시 범위 사용자 모두가 수동 적용할 수 있습니다.</p>
      <p>Exchange Retention Tag는 정책 내 Personal tag가 없으면 기본적으로 수동 지정할 수 없습니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/microsoft-365/compliance/retention">Retention labels vs retention policies</a> · <a href="https://learn.microsoft.com/en-us/exchange/security-and-compliance/messaging-records-management/retention-tags-and-policies">Retention tags in Exchange Online</a></p>
    `
  },

  // 104 — MDE email notifications by group rules
  {
    id: 104,
    title: "Defender for Endpoint 그룹 규칙별 경고 메일 수신 여부",
    promptHtml: `
      <p>You have a Microsoft 365 E5 subscription that uses Microsoft Defender for Endpoint and contains devices/groups/rules as shown.
      ${IMG_Q104_1 ? `<p><img src="${IMG_Q104_1}" style="max-width:100%"></p>` : ""}
      Defender for Endpoint has the device groups shown in the following table.
    ${IMG_Q104_2 ? `<p><img src="${IMG_Q104_2}" style="max-width:100%"></p>` : ""}
      You create an incident email notification rule configured as shown in the following table
      ${IMG_Q104_3 ? `<p><img src="${IMG_Q104_3}" style="max-width:100%"></p>` : ""}
      For each statement, select Yes if true; otherwise No.</p>
      ${IMG_Q104_4 ? `<p><img src="${IMG_Q104_4}" style="max-width:100%"></p>` : ""}
    `,
    type: "statements",
    statements: [
      "If a high-severity incidient is triggered for Dvice1, an incident email notification will be sent.",
      "If a low-severity incident is triggered for Computer1, an incident notification email will be sent.",
      "If a low-secerity incident is triggered for Device3, an incident notification email will be sent."
    ],
    options: ["Yes", "No"],
    correctAnswers: ["Yes", "No", "Yes"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>장치 그룹 매칭 결과가 규칙의 범위에 포함되면 알림이 발송됩니다.</p>
      <p>Ungrouped 장치나 범위를 벗어난 장치는 알림 대상이 아닙니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/defender-xdr/m365d-notifications-incidents">Get incident notifications by email (MDE)</a></p>
    `
  },

  // 105 — Regulatory record option prerequisite
  {
    id: 105,
    title: "Regulatory record 옵션 표시의 전제 조건",
    promptHtml: `
      <p>You plan to enable users to mark content as regulatory records.
      Ensure the option is visible when creating retention labels. What should you do first?</p>
    `,
    type: "single",
    options: [
      "A. Configure custom detection rules",
      "B. Create an Exact Data Match (EDM) schema",
      "C. Run the Set-RegulatoryComplianceUI cmdlet",
      "D. Run the Set-LabelPolicy cmdlet"
    ],
    correctAnswers: ["C. Run the Set-RegulatoryComplianceUI cmdlet"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Regulatory record UI는 기본 숨김이며 PowerShell로 기능을 먼저 활성화해야 합니다.</p>
      <p>LabelPolicy나 EDM은 표시 전제와 무관합니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/purview/declare-records#how-to-display-the-option-to-mark-content-as-a-regulatory-record">Display option to mark content as a regulatory record</a></p>
    `
  },

  // 106 — SPO DLP access outcomes
  {
    id: 106,
    title: "SharePoint DLP 정책 시 사용자별 파일 접근",
    promptHtml: `
      <p>From the Microsoft 365 compliance center, you configure a data loss prevention (DLP) policy for a Microsoft SharePoint Online site named Site1. Site1 contains the roles shown in the following table.
      ${IMG_Q106_1 ? `<p><img src="${IMG_Q106_1}" style="max-width:100%"></p>` : ""}
      Prvi creates the files shown in the exhibit. (Click the Exhibit tab.
      ${IMG_Q106_2 ? `<p><img src="${IMG_Q106_2}" style="max-width:100%"></p>` : ""}
      Which files can User1 and User2 open based on the exhibit?</p>
      ${IMG_Q106_3 ? `<p><img src="${IMG_Q106_3}" style="max-width:100%"></p>` : ""}
    `,
    type: "pair",
    pairLabels: ["User1 can open", "User2 can open"],
    pairOptions: [
      "File1.docx only",
      "File1.docx and File2.docx only",
      "File1.docx, File2.docx, and File3.docx",
    ],
    pairAnswer: [
      "File1.docx and File2.docx only",
      "File1.docx only"
    ],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Site member는 내부 사용자로, 정책이 완전 차단하지 않으면 내부 접근이 허용됩니다.</p>
      <p>Visitor는 읽기 전용이지만 정책 차단 문서는 열람 불가합니다.</p>
      <p><a href="https://learn.microsoft.com/microsoft-365/compliance/dlp-microsoft-teams">Use DLP policies in SharePoint/OneDrive</a></p>
    `
  },

  // 107 — Balanced protection profile goal?
  {
    id: 107,
    title: "균형 보호 프로필 적용 정책 목표 충족 여부",
    promptHtml: `
      <p>You need to apply a balanced baseline protection across spam, phishing, and malware.
      Solution: Create an anti-phishing policy. Does this meet the goal?</p>
    `,
    type: "single",
    options: ["A. Yes", "B. No"],
    correctAnswers: ["B. No"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>균형 보호는 Defender for Office 365의 Preset Security Policies에서 구성합니다.</p>
      <p>단일 안티피싱 정책만으로는 스팸·맬웨어를 포괄하지 못합니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/defender-office-365/preset-security-policies">Configure preset security policies (MDO)</a></p>
    `
  },

  // 108 — SharePoint site retention + sharing control
  {
    id: 108,
    title: "SharePoint 사이트 10년 보존 + 외부 공유 제한",
    promptHtml: `
      <p>A SharePoint site (Site1) must retain all data for 10 years and prevent external sharing.
      Which two items should you create and apply?</p>
    `,
    type: "multi",
    multiOptions: [
      "A. a retention policy",
      "B. a sensitive info type",
      "C. a data loss prevention (DLP) policy",
      "D. a sensitivity label",
      "E. a retention label",
      "F. a retention label policy"
    ],
    multiAnswer: ["A. a retention policy", "D. a sensitivity label"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>사이트 전체 보존은 Retention policy가 효율적입니다.</p>
      <p>외부 공유 차단은 컨테이너(사이트/팀)용 Sensitivity label로 제어합니다.</p>
      <p><a href="https://learn.microsoft.com/microsoft-365/compliance/retention-policies">Retention policies</a> · <a href="https://www.notion.so/29cdbd591ead80289e5ddf9daa0d4517">Sensitivity labels for sites</a></p>
    `
  },

  // 109 — MDO admin permission check
  {
    id: 109,
    title: "Defender for Office 365 관리 권한 검증",
    promptHtml: `
      <p>You create an account (SecAdmin1) to manage Defender for Office 365 policies across Teams/SharePoint/OneDrive.
      Solution: Assign the Exchange Administrator role. Does this meet the goal?</p>
    `,
    type: "single",
    options: ["A. Yes", "B. No"],
    correctAnswers: ["B. No"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>MDO 전반 관리는 Security Administrator 또는 Global Administrator가 필요합니다.</p>
      <p>Exchange Admin은 Exchange 워크로드에 국한됩니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/defender-office-365/mdo-portal-permissions">MDO roles and permissions</a></p>
    `
  },

  // 110 — Exchange + Compliance DLP overlap
  {
    id: 110,
    title: "Exchange 및 Compliance DLP 중복 적용 결과",
    promptHtml: `
      <p> In the Exchange admi n center, you have a data loss prevention (DLP) policy named Policy1 that has the following configurations:
      Block emails that contain financial data. Display the following policy tip text: Message blocked.
      From the Security & Compliance admin center, you create a DLP policy named Policy2 that has the following configurations:
      Use the following location: Exchange email.
      Display the following policy tip text: Message contains sensitive data. 
      When a user sends an email, notify the user if the email contains health records.
      What is the result of the DLP policies when the user sends an email? To answer, drag the appropriate
      results to the correct scenarios. Each result may be used once, more than once, or not at all. You may
      need to drag the split bar between panes or scroll to view content.</p>
      ${IMG_Q110_1 ? `<p><img src="${IMG_Q110_1}" style="max-width:100%"></p>` : ""}
    `,
    type: "pair",
    pairLabels: [
      "When the user sends an email that contains financial data and health records:",
      "When the user sends an email that contains only financial data:"
    ],
    pairOptions: [
      "The email will be blocked, and the user will receive the policy tip: Message blocked.",
      "The email will be blocked, and the user will receive the policy tip: Message contains sensitive data.",
      "The email will be allowed, and the user will receive the policy tip: Message blocked.",
      "The email will be allowed, and the user will receive the policy tip: Message contains sensitive data.",
      "The email  will be allowed, and a message policy tip: will NOT be displayed."
    ],
    pairAnswer: [
      "The email will be blocked, and the user will receive the policy tip: Message blocked.",
      "The email will be blocked, and the user will receive the policy tip: Message blocked."
    ],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>메일 흐름 규칙과 DLP는 서로 다른 엔진으로 동작하지만, 결과적으로 더 제한적인 조치가 우선합니다.</p>
      <p>차단 동작이 적용되면서 사용자에게 정책 팁도 표시될 수 있습니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/microsoft-365/compliance/dlp-learn-about-dlp?view=o365-worldwide">DLP policy actions and locations</a></p>
    `
  },

  // 111 — Allowed UPN domains
  {
    id: 111,
    title: "도메인 상태별 UPN 사용 가능 도메인",
    promptHtml: `
      <p>You have a Microsoft 365 subscription that contains multiple domains.<br>
      You need to determine which domain name suffixes can be used when creating new users.<br>
      Available options include combinations of *onmicrosoft.com*, *subdomains*, and *custom verified domains*.</p>
      ${IMG_Q111_1 ? `<p><img src="${IMG_Q111_1}" style="max-width:100%"></p>` : ""}
    `,
    type: "single",
    options: [
      "A. only Sub1.contoso221018.onmicrosoft.com",
      "B. only contoso.com and Sub1.contoso221018.onmicrosoft.com",
      "C. only contoso221018.onmicrosoft.com, Sub.contoso221018.onmicrosoft.com, and Sub2.contoso221018.onmicrosoft.com"
      "D. all the domains in the subscription"
    ],
    correctAnswers: ["B. onlycontoso.com and Sub1.contoso221018.onmicrosoft.com"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>UPN에 사용하려면 verified 혹은 기본(onmicrosoft.com) 도메인이어야 합니다.</p>
      <p>Incomplete setup 상태의 도메인은 사용할 수 없습니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/microsoft-365/admin/setup/add-domain">Add your custom domain to Microsoft 365</a></p>
    `
  },

  // 112 — PHS + Seamless SSO
  {
    id: 112,
    title: "하이브리드: 최소 프롬프트 + Identity Protection 지원",
    promptHtml: `
      <p>Implement a hybrid configuration that minimizes sign-in prompts and supports Azure AD Identity Protection.
      Which two Azure AD Connect options should you select?</p>
    `,
    type: "multi",
    multiOptions: [
      "A. Password Hash Synchronization",
      "B. Password writeback",
      "C. Directory extension attribute sync",
      "D. Enable single sign-on",
      "E. Pass-through authentication"
    ],
    multiAnswer: ["A. Password Hash Synchronization", "D. Enable single sign-on"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Identity Protection은 클라우드 인증(PHS)에서만 리스크 평가가 가능합니다.</p>
      <p>Seamless SSO로 사용자 프롬프트를 최소화합니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/entra/identity/hybrid/connect/how-to-connect-password-hash-synchronization">Implement password hash synchronization</a></p>
    `
  },

  // 113 — Safe Links configuration analyzer
  {
    id: 113,
    title: "현재 Safe Links와 권장 설정 비교 도구",
    promptHtml: `
      <p>You need to compare your current Safe Links settings to Microsoft-recommended configurations. What should you use?</p>
    `,
    type: "single",
    options: [
      "A. Microsoft Purview",
      "B. Azure AD Identity Protection",
      "C. Microsoft Secure Score",
      "D. the configuration analyzer"
    ],
    correctAnswers: ["D. the configuration analyzer"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Configuration Analyzer는 조직의 설정을 표준/엄격 프리셋과 직접 비교합니다.</p>
      <p>Secure Score는 포괄 지표로 세부 정책 비교에는 적합하지 않습니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/microsoft-365/security/office-365-security/configuration-analyzer?view=o365-worldwide">Use the configuration analyzer (MDO)</a></p>
    `
  },

  // 114 — DLP Set headers location
  {
    id: 114,
    title: "‘Set headers’ DLP 동작 적용 위치",
    promptHtml: `
      <p>You need to create a DLP policy that uses the Set headers action. To which location can the policy be applied?</p>
    `,
    type: "single",
    options: [
      "A. OneDrive accounts",
      "B. Exchange email",
      "C. Teams chat and channel messages",
      "D. SharePoint sites"
    ],
    correctAnswers: ["B. Exchange email"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Set/Remove headers는 Exchange 위치에서만 지원됩니다.</p>
      <p>SharePoint/OneDrive/Teams에는 해당 동작이 존재하지 않습니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/microsoft-365/compliance/dlp-learn-about-dlp?view=o365-worldwide">DLP actions by location</a></p>
    `
  },

  // 115 — Auto-label scope (Yes/No)
  {
    id: 115,
    title: "SIT 기반 Auto-label 정책 적용 범위",
    promptHtml: `
      <p> You have a Microsoft 365 E5 tenant that contains a Microsoft SharePoint Online site named Site1. 
      Site1 contains the files shown in the following table
      ${IMG_Q115_1 ? `<p><img src="${IMG_Q115_1}" style="max-width:100%"></p>` : ""}  
      You create a sensitivity label named Sensitivity1 and an auto-label policy that has the following configurations:
      Name: AutoLabel1
      Label to auto-apply: Sensitivity1
      Rules for SharePoint Online sites: Rule1-SPO
      Choose locations where you want to apply the label: Site1
      Rule1-SPO is configured as shown in the following exhibit.
      ${IMG_Q115_2 ? `<p><img src="${IMG_Q115_2}" style="max-width:100%"></p>` : ""}  
      For each location below, select Yes/No for automatic labeling.</p>
      ${IMG_Q115_3 ? `<p><img src="${IMG_Q115_3}" style="max-width:100%"></p>` : ""}  
    `,
    type: "statements",
    statements: [
      "Exchange mailboxes",
      "SharePoint and OneDrive",
      "Office desktop files at rest (scanner/preview)"
    ],
    options: ["Yes", "No"],
    correctAnswers: ["No", "Yes", "Yes"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>자동 라벨은 SPO/OneDrive 및 파일 스캐너 대상에서 우선 제공됩니다.</p>
      <p>메일은 자동 라벨 정책의 직접 대상이 아니며 다른 보호 기능을 사용합니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/purview/apply-sensitivity-label-automatically">Automatically apply sensitivity labels</a></p>
    `
  },

  // 116 — Incident notification rule (Yes/No)
  {
    id: 116,
    title: "Microsoft 365 Defender Incident Notification Rule 판정",
    promptHtml: `
      <p>You have a Microsoft 365 E5 subscription that contains the devices shown in the following table.
      ${IMG_Q116_1 ? `<p><img src="${IMG_Q116_1}" style="max-width:100%"></p>` : ""}
      At 08:00. you create an incident notification rule that has the following configurations:
      * Name: Notification!
      * Notification settings
      o Notify on alert seventy: Low
      o Device group scope: All (3)
      o Details: First notification per incident  
      * Recipients: Userl@contoso.com, User2@contoso.com
      At 08:02. you create an incident notification rule that has the following configurations:
      * Name: Notification
      * Notification settings
      o Notify on alert severity: Low. Medium
      o Device group scope: DevtceGroup1, DeviceGroup2
      * Recipients: Userl@contoso.com
      in Microsoft 365 Defender, alerts are logged as shown in the following table.
      ${IMG_Q116_2 ? `<p><img src="${IMG_Q116_2}" style="max-width:100%"></p>` : ""}
      For each statement shown, select Yes/No based on the logs.</p>
      ${IMG_Q116_3 ? `<p><img src="${IMG_Q116_3}" style="max-width:100%"></p>` : ""}
    `,
    type: "statements",
    statements: [
      "User1 will receive two notifications for the 08:05 alert.",
      "User2 will receive a notification for the 08:07 alert.",
      "User1 will receive a notification for the 08:20 alert."
    ],
    options: ["Yes", "No"],
    correctAnswers: ["No", "No", "No"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>규칙은 인시던트당 첫 알림만 발송하므로 중복 발송되지 않습니다.</p>
      <p>설정된 심각도 범위(여기서는 High 제외) 밖이면 알림이 전송되지 않습니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/microsoft-365/security/defender/incident-notification-rules">Create incident notification rules (M365 Defender)</a></p>
    `
  },

  // 117 — IdFix + minimum privilege
  {
    id: 117,
    title: "디렉터리 동기화 전 사전 검증: 도구/권한",
    promptHtml: `
      <p>Your on-premises AD will be synchronized to Microsoft 365.
      Identify the tool to detect issues before sync and the minimum group membership required.</p>
      ${IMG_Q117_1 ? `<p><img src="${IMG_Q117_1}" style="max-width:100%"></p>` : ""}
    `,
    type: "pair",
    pairLabels: ["Tool", "Required group membership"],
    pairOptions: [
      "IdFix",
      "Synchronization Service Manager",
      "Domain Admins",
      "Domain Users"
    ],
    pairAnswer: ["IdFix", "Domain Users"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>IdFix는 동기화 오류(중복/무효 문자 등)를 사전 탐지하는 공식 권장 도구입니다.</p>
      <p>읽기 권한(일반 Domain Users)만으로 실행할 수 있어 최소 권한 원칙에 부합합니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/troubleshoot/entra/entra-id/user-prov-sync/objects-dont-sync-ad-sync-tool#run-idfix-to-check-for-duplicates-missing-attributes-and-rule-violations">Run IdFix before directory sync</a></p>
    `
  },

  // 118 — Retention policy conflict result
  {
    id: 118,
    title: "두 보존 정책 조합 시 최종 삭제 시점",
    promptHtml: `
      <p>You have two retention policies applied to the same SharePoint site.
      File1.docx was created on January 1, 2022 and last modified on January 31, 2022.
      When will File1.docx be deleted automatically?</p>
      ${IMG_Q118_1 ? `<p><img src="${IMG_Q118_1}" style="max-width:100%"></p>` : ""}
    `,
    type: "single",
    options: [
      "A. January 1, 2023",
      "B. January 1, 2024",
      "C. January 31, 2023",
      "D. January 31, 2024",
      "E. Never"
    ],
    correctAnswers: ["D. January 31, 2024"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>여러 정책이 동시에 적용되면 더 긴 보존 기간이 우선합니다.</p>
      <p>삭제 트리거는 삭제 동작을 가진 정책에서 오지만, 보존 기간은 더 긴 정책을 따릅니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/microsoft-365/compliance/retention-policies">Retention policies precedence</a></p>
    `
  },

  // 119 — Enable unified labeling for M365 groups
  {
    id: 119,
    title: "Microsoft 365 그룹 Unified Labeling 활성화",
    promptHtml: `
      <p>You need to enable unified labeling for Microsoft 365 groups.
      Which cmdlet should you run?</p>
    `,
    type: "single",
    options: [
      "A. Set-UnifiedGroup",
      "B. Set-LabelPolicy",
      "C. Execute-AzureAdLabelSync",
      "D. New-AzureADDirectorySetting"
    ],
    correctAnswers: ["D. New-AzureADDirectorySetting"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Group.Unified 디렉터리 설정에서 EnableMIPLabels를 켜야 합니다.</p>
      <p>이를 위해 New-AzureADDirectorySetting으로 DirectorySetting을 생성/적용합니다.</p>
    `
  },

  // 120 — Policy precedence outcomes per user
  {
    id: 120,
    title: "정책 우선순위 기반 사용자별 결과",
    promptHtml: `
      <p> You have a Microsoft 365 subscription that contains three groups named All users, Sales team, and Office users, and two users shown in the following table.
      ${IMG_Q120_1 ? `<p><img src="${IMG_Q120_1}" style="max-width:100%"></p>` : ""}
       In Microsoft Endpoint Manager, you have the Policies for Office apps settings shown in the following exhibit.
      ${IMG_Q120_2 ? `<p><img src="${IMG_Q120_2}" style="max-width:100%"></p>` : ""} 
      The policies use the settings shown in the following table.
      ${IMG_Q120_3 ? `<p><img src="${IMG_Q120_3}" style="max-width:100%"></p>` : ""}
       What is the default share folder location for User1 and the default Office theme for User2? To answer, select the appropriate options in the answer area.
      </p>
      ${IMG_Q120_1 ? `<p><img src="${IMG_Q120_1}" style="max-width:100%"></p>` : ""}

    `,
    type: "pair",
    pairLabels: [
      "Default shared folder (User1)",
      "Default Office theme (User2)"
    ],
    // 좌/우 콤보를 서로 다른 셋업으로
    pairOptionsLeft: [
      "Default Shared Folder (User1): https://sharepoint.contoso.com/addins_all_users_",
      "Default Shared Folder (User1): https://sharepoint.contoso.com/addins_office_users",
      "Default Shared Folder (User1): https://sharepoint.contoso.com/addins_sales_team_users"
    ],
    pairOptionsRight: [
      "Default Office Theme (User2): White",
      "Default Office Theme (User2): Dark",
      "Default Office Theme (User2): Colorful"
    ],
    pairAnswer: [
      "Default Shared Folder (User1): https://sharepoint.contoso.com/addins_sales_team_users_",
      "Default Office Theme (User2): White"
    ],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Endpoint Manager 정책은 숫자가 낮을수록 우선순위가 높습니다.</p>
      <p>동일 사용자가 여러 그룹에 속하면 가장 높은 우선순위 정책이 최종값을 결정합니다.</p>
    `
  },
  // 121
  {
    id: 121,
    title: "동기화된 사용자 계정의 보안 인증 방식 검토",
    promptHtml: `
      <p>Your network contains an Active Directory forest.
      You deploy Microsoft 365.
      You plan to implement directory synchronization.
      You need to recommend a security solution for the synchronized identities. The solution must meet the following requirements:
      - Users must be able to authenticate successfully to Microsoft 365 services if Active Directory becomes unavailable.
      - User passwords must be 10 characters or more.
      Solution: Implement password hash synchronization and configure password protection in the Azure AD tenant.
      Does this meet the goal?</p>
    `,
    type: "single",
    options: ["A. Yes", "B. No"],
    correctAnswers: ["B. No"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>PHS는 온프레미스 AD가 다운되어도 클라우드에서 인증을 처리할 수 있게 하므로 첫 번째 요구사항(가용성)은 충족합니다.</p>
      <p>하지만 동기화된 계정의 암호 길이·복잡도는 원칙적으로 온프레미스 AD의 도메인 정책이 결정합니다.</p>
      <p>Azure AD Password Protection은 금지 단어와 유사성 규칙을 적용하지만, 기존 동기화 암호의 최소 길이를 대체 강제하지는 않습니다.</p>
      <p>따라서 “최소 10자” 조건을 반드시 보장하려면 온프레미스 AD의 암호 정책을 조정해야 합니다.</p>
      <p>요구사항 2개를 동시에 만족시키는 조합으로는 PHS + 온프레미스 암호 정책 강화가 정답에 가깝습니다.</p>
      <p>문제의 제안(PHS + Password Protection)만으로는 길이 보장을 담보하지 못하므로 목표를 충족하지 않습니다.</p>
      <p><a href="https://learn.microsoft.com/azure/active-directory/hybrid/whatis-hybrid-identity">하이브리드 인증 방법 선택</a> · <a href="https://learn.microsoft.com/azure/active-directory/authentication/concept-password-ban-banned-passwords">Azure AD Password Protection 개요</a></p>
    `
  },

  // 122
  {
    id: 122,
    title: "Windows 버전 확인 방법",
    promptHtml: `
      <p>You have a computer that runs Windows 10.
      You need to verify which version of Windows 10 is installed.
      Solution: At a command prompt, you run the winver.exe command.
      Does this meet the goal?</p>
    `,
    type: "single",
    options: ["A. Yes", "B. No"],
    correctAnswers: ["A. Yes"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>winver.exe는 현재 OS의 에디션, 버전(예: 22H2), 빌드 번호를 즉시 표시합니다.</p>
      <p>요구사항은 “설치된 버전 확인”이므로 GUI 다이얼로그를 여는 winver가 정확한 해법입니다.</p>
      <p>대안으로 설정 &gt; 시스템 &gt; 정보 또는 msinfo32도 가능하지만 문제의 솔루션은 충분합니다.</p>
      <p>커널 버전만 보여 주는 ver 명령만으로는 세부 버전 식별이 부족할 수 있습니다.</p>
      <p>시험 관점에서 winver는 가장 간단하고 명확한 근거를 제공합니다.</p>
      <p>따라서 정답은 Yes입니다.</p>
      <p><a href="https://support.microsoft.com/windows/which-version-of-windows-operating-system-am-i-running">Windows 버전 확인 공식 안내</a></p>
    `
  },

  // 123
  {
    id: 123,
    title: "Azure ATP Sensor 자동 업데이트 소요시간",
    promptHtml: `
      <p>You implement Microsoft Azure Advanced Threat Protection (Azure ATP).
      You have an Azure ATP sensor configured as shown in the following exhibit.</p>
      ${IMG_Q123_1 ? `<p><img src="${IMG_Q123_1}" style="max-width:100%"></p>` : ""}
      <p>How long after the Azure ATP cloud service is updated will the sensor update?</p>
    `,
    type: "single",
    options: ["A. 20 hours", "B. 12 hours", "C. 7 hours", "D. 48 hours"],
    correctAnswers: ["C. 7 hours"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>자동 업데이트가 켜진 상태에서 MDI(구 Azure ATP) 센서는 클라우드 서비스 업데이트 후 약 7시간 내에 최신 버전으로 업데이트됩니다.</p>
      <p>이 동작은 서비스 정책으로 문서화되어 있으며 지연 업데이트(Delayed update)가 꺼져 있을 때 기본 적용됩니다.</p>
      <p>따라서 보기 중 7시간이 정답입니다.</p>
      <p>운영 중에는 센서 상태 페이지에서 버전과 보류 업데이트 여부를 확인할 수 있습니다.</p>
      <p>업데이트 실패 시 서비스 계정 권한, 프록시 및 네트워크 경로를 점검해야 합니다.</p>
      <p>대규모 배포에서는 점진적 반영에 시간 차가 있을 수 있으나 표준 정답은 7시간입니다.</p>
      <p><a href="https://learn.microsoft.com/defender-for-identity/manage-updates">Defender for Identity 센서 업데이트 정책</a></p>
    `
  },

  // 124
  {
    id: 124,
    title: "Security Administrator의 MDI 센서 구성 권한",
    promptHtml: `
      <p>You have a Microsoft Azure Active Directory (Azure AD) tenant named Contoso.com.
      You create a Microsoft Defender for Identity instance named Contoso.
      The tenant contains the users shown in the following table.</p>
      ${IMG_Q124_1 ? `<p><img src="${IMG_Q124_1}" style="max-width:100%"></p>` : ""}
      <p>You need to modify the configuration of the Defender for Identity sensors.
      Solution: You instruct User3 to modify the Defender for Identity sensor configuration.
      Does this meet the goal?</p>
    `,
    type: "single",
    options: ["A. Yes", "B. No"],
    correctAnswers: ["A. Yes"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Azure AD Security Administrator는 MDI에서 Defender for Identity Administrator 권한이 자동 매핑됩니다.</p>
      <p>따라서 Sensor configuration, Directory service account, NNR, Honeytoken 등 주요 설정을 변경할 수 있습니다.</p>
      <p>글로벌 관리자까지 필요하지 않으며 역할 기반 접근 제어 원칙에 부합합니다.</p>
      <p>문항의 User3가 Security Administrator를 보유하므로 제시된 해결책은 타당합니다.</p>
      <p>역할 부여 변경 시에는 보안 포털 권한 전파에 시간이 소요될 수 있습니다.</p>
      <p>운영에서는 최소 권한 원칙을 유지하고 감사 로그를 활성화하는 것이 좋습니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/defender-for-identity/role-groups">MDI 역할 및 권한 매핑</a></p>
    `
  },

  // 125 (Drag & Drop)
  {
    id: 125,
    title: "FSRM과 Azure Information Protection 연동 구성 순서",
    promptHtml: `
      <p>Your network contains an on-premises Active Directory domain that syncs to Azure Active Directory (Azure AD). The domain contains the servers shown in the following table.</p>
      ${IMG_Q125_1 ? `<p><img src="${IMG_Q125_1}" style="max-width:100%"></p>` : ""}
      <p>You use Azure Information Protection.
      You install Microsoft Word on all the devices.
      You plan to configure policies to meet the following requirements:
        * Word files created by using Windows devices must be encrypted automatically.
        * If an Android device becomes jailbroken, access to corporate data must be blocked from Word.
        * For iOS devices, users must be prevented from using native or third-party mail clients to connect to Microsoft 365.
      Which type of polio/ should you configure for each device? To answer, drag the appropriate policy
      types to the correct devices. Each policy type may be used once, more than once, or not at all. You
      may need to drag the split bar between panes or scroll to view content.
      NOTE: Each correct selection is worth one point</p>
      ${IMG_Q125_2 ? `<p><img src="${IMG_Q125_2}" style="max-width:100%"></p>` : ""}
    `,
    type: "sequence",
    sequenceOptions: [
      "Install the Microsoft Rights Management connector on Server2",
      "Install a certificate on Server1",
      "Run GenConnectorConfig.ps1 on Server1"
    ],
    sequenceAnswer: [
      "Install the Microsoft Rights Management connector on Server2",
      "Install a certificate on Server1",
      "Run GenConnectorConfig.ps1 on Server1"
    ],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>RMS Connector를 별도 서버에 설치해 온프레미스 서비스(FSRM 등)와 Azure RMS 간 중계 경로를 마련합니다.</p>
      <p>FSRM 서버(Server1)에 TLS 인증서를 배치해 커넥터와의 보안 통신을 준비합니다.</p>
      <p>GenConnectorConfig.ps1을 실행해 FSRM이 커넥터 URL 및 인증 매개변수를 인식하도록 설정합니다.</p>
      <p>이 순서를 지키지 않으면 정책 배포나 보호 요청이 실패할 수 있습니다.</p>
      <p>배포 후 FSRM 분류/작업에서 AIP 레이블을 사용해 보호 정책을 적용할 수 있습니다.</p>
      <p>대규모 환경에선 고가용성 커넥터(이중화)와 인증서 수명 주기 관리도 고려합니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/azure/information-protection/deploy-rms-connector">Azure RMS 커넥터 배포 가이드</a></p>
    `
  },

  // 126
  {
    id: 126,
    title: "Sensitivity Label 게시 가능 그룹 유형 식별",
    promptHtml: `
      <p>You have a Microsoft 365 E5 subscription that contains the groups shown in the following table.</p>
      ${IMG_Q126_1 ? `<p><img src="${IMG_Q126_1}" style="max-width:100%"></p>` : ""}
      <p>You plan to publish a sensitivity label named Label1.
      To which groups can you publish Label1?</p>
    `,
    type: "single",
    options: [
      "A. Group1 only",
      "B. Group1 and Group2 only",
      "C. Group1 and Group4 only",
      "D. Group1, Group2, and Group3 only",
      "E. Group1, Group2, Group3, and Group4"
    ],
    correctAnswers: ["D. Group1, Group2, and Group3 only"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>라벨 정책 대상은 메일 사용이 가능한 그룹(Microsoft 365 그룹, 메일 사용 보안 그룹, 배포 그룹)입니다.</p>
      <p>메일 주소가 없는 일반 보안 그룹(Group4)은 정책 대상이 아닙니다.</p>
      <p>따라서 표의 조합에서 Group1/2/3만 게시 가능입니다.</p>
      <p>배포 시 필요 권한은 Information Protection Administrator 등이며, 정책 전파에는 시간이 걸릴 수 있습니다.</p>
      <p>정책 필터로 사용자/그룹 범위를 세분화할 수 있습니다.</p>
      <p>컨테이너 레이블(Teams/사이트) 적용 여부와도 구분해 해석해야 합니다.</p>
      <p><a href="https://learn.microsoft.com/purview/sensitivity-labels-teams-groups-sites">민감도 레이블 게시 방법</a></p>
    `
  },

  // 127
  {
    id: 127,
    title: "조건부 액세스 정책 및 MFA 차단 상태별 접근 가능 여부",
    promptHtml: `
      <p>You have a Microsoft 365 subscription that contains the users shown in the following table.
      ${IMG_Q127_1 ? `<p><img src="${IMG_Q127_1}" style="max-width:100%"></p>` : ""}
      You have the named locations shown in the following table.
      ${IMG_Q127_2 ? `<p><img src="${IMG_Q127_2}" style="max-width:100%"></p>` : ""}
      You create a conditional access policy that has the following configurations:
      - Users or workload identities: Include Group1, Exclude Group2
      - Cloud apps or actions: Include all cloud apps
      - Conditions: Include Any location, Exclude Montreal
      - Access control: Grant access, Require multi-factor authentication
      User1 is on the multi-factor authentication (MFA) blocked users list.
      For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>
      ${IMG_Q127_3 ? `<p><img src="${IMG_Q127_3}" style="max-width:100%"></p>` : ""}
    `,
    statements: [
      "User1 (133.107.10.20) can access.",
      "User1 (193.77.10.15) can access.",
      "User2 (193.77.10.15) can access."
    ],
    options: ["Yes", "No"],
    correctAnswers: ["Yes", "No", "Yes"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>정책에서 제외된 위치(Montreal)는 정책 적용을 받지 않으므로 MFA 요구가 발생하지 않습니다.</p>
      <p>Toronto는 정책 적용 대상이므로 MFA가 필요하고, MFA 차단 사용자(User1)는 인증에 실패합니다.</p>
      <p>User2는 Group2에 포함되어 정책에서 제외되므로 접근이 허용됩니다.</p>
      <p>조건부 액세스는 Include와 Exclude 구성이 동시에 있을 때 Exclude가 우선합니다.</p>
      <p>또한 사용자 차단, 디바이스 규정 준수, 세션 제어 등 다른 신호와 조합되어 최종 결정이 내려집니다.</p>
      <p>따라서 세 시나리오의 결과는 각각 Yes, No, Yes가 됩니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/entra/identity/conditional-access/concept-conditional-access-conditions">Conditional Access 평가 로직</a></p>
    `
  },

  // 128 (Pair)
  {
    id: 128,
    title: "Anti‑phishing 정책: CEO 사칭 차단과 정상 메일 최소 방해",
    promptHtml: `
      <p>You have a Microsoft 365 subscription.
      You deploy the anti-phishing policy shown in the following exhibit.</p>
      <p>Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.
      NOTE: Each correct selection is worth one point.</p>
      ${IMG_Q128_1 ? `<p><img src="${IMG_Q128_1}" style="max-width:100%"></p>` : ""}
    `,
    type: "pair",
    pairLabels: [
      "CEO 사칭 메일 차단을 위해 설정할 항목",
      "정상적인 파트너 메일 교환 방해 최소화를 위한 항목"
    ],
    pairOptionsLeft: [
      "Enable domains to protect",
      "Enable mailbox intelligence",
      "Turn on user impersonation protection for specific users"
    ],
    pairOptionsRight: [
      "Add trusted senders and domains",
      "Quarantine the message",
      "Redirect the message to another mailbox"
    ],
    pairAnswer: [
      "Enable domains to protect",
      "Add trusted senders and domains"
    ],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>사칭 방어의 핵심은 보호할 도메인/사용자 범위를 명시하여 탐지 범위를 정확히 지정하는 것입니다.</p>
      <p>파트너와의 정상 메일 교환에서 오탐을 줄이려면 신뢰 발신자/도메인 목록을 구성해 예외를 정의합니다.</p>
      <p>이 조합은 공격 차단과 사용성 균형을 동시에 달성합니다.</p>
      <p>격리나 리디렉션만으로는 오탐을 구조적으로 줄이지 못합니다.</p>
      <p>실제 운영에서는 인텔리전스 옵션과 함께 사칭 대상 리스트를 주기적으로 점검해야 합니다.</p>
      <p>해당 기능들은 Defender for Office 365의 안티피싱 정책에서 구성합니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/microsoft-365/security/office-365-security/anti-phishing-policies">안티피싱 정책 구성</a></p>
    `
  },

  // 129
  {
    id: 129,
    title: "App1에만 MFA 요구",
    promptHtml: `
      <p>You have a Microsoft 365 subscription.
      You register two applications named App1 and App2 to Azure AD.
      You need to ensure that users who connect to App1 require multi-factor authentication (MFA). MFA is required only for App1.
      What should you do?</p>
    `,
    type: "single",
    options: [
      "A. From the Microsoft Entra admin center, create a conditional access policy",
      "B. From the Microsoft 365 admin center, configure the Modern authentication settings.",
      "C. From the Enterprise applications blade of the Microsoft Entra admin center, configure the Users settings.",
      "D. From Multi-Factor Authentication, configure the service settings."
    ],
    correctAnswers: ["A. From the Microsoft Entra admin center, create a conditional access policy"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>앱 단위 MFA는 조건부 액세스에서 Cloud apps or actions에 App1을 지정하고 Grant에서 MFA를 요구하는 방식으로 구현합니다.</p>
      <p>Security defaults는 테넌트 전역이며, MFA 서비스 설정이나 엔터프라이즈 앱 사용자 설정은 앱별 MFA 강제를 제공하지 않습니다.</p>
      <p>App2는 정책에서 제외하여 영향이 없도록 구성할 수 있습니다.</p>
      <p>배포 시에는 정책을 Report-only로 검증 후 Enforce로 전환하는 것을 권장합니다.</p>
      <p>사용자 경험을 위해 등록 상태, 인증자 앱 알림, 조건 캐싱을 함께 점검하세요.</p>
      <p><a href="https://learn.microsoft.com/en-us/entra/identity/conditional-access/plan-conditional-access">조건부 액세스로 MFA 요구</a></p>
    `
  },

  // 130
  {
    id: 130,
    title: "심각도 높은 인시던트 발생 시 관리자 알림",
    promptHtml: `
      <p>You have a Microsoft 365 E5 subscription.
      You need to be alerted when Microsoft 365 Defender detects high-severity incidents.
      What should you use?</p>
    `,
    type: "single",
    options: [
      "A. a custom detection rule",
      "B. a threat policy",
      "C. an alert policy",
      "D. a notification rule"
    ],
    correctAnswers: ["C. an alert policy"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Alert policy는 조건과 심각도 기준을 충족할 때 경고를 생성하고 지정된 수신자에게 알림을 전송합니다.</p>
      <p>High‑severity Incident를 트리거로 메일 또는 기타 채널을 통한 알림을 구성할 수 있습니다.</p>
      <p>Threat policy나 custom detection rule 자체는 관리 알림 전파를 보장하지 않습니다.</p>
      <p>Notification rule은 보조 채널 설정이지만, 기본 트리거 정책은 Alert policy가 맡습니다.</p>
      <p>운영에서는 중복 알림과 빈도를 제어하고, 조치 플레이북과 연계해 대응 시간을 단축합니다.</p>
      <p>감사와 규정 준수를 위해 알림 구독자 목록과 보존 기간을 관리하는 것이 좋습니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/microsoft-365/compliance/alert-policies">Alert policy 만들기 및 관리</a></p>
    `
  },
  {
    id: 131,
    title: "Azure AD 로그인 가능한 UPN 판별",
    promptHtml: `
      <p>Your network contains an on-premises Active Directory forest named contoso.com.
      The forest contains the following domains:
      - Contoso.com
      - East.contoso.com
      The forest contains the users shown in the following table.
       ${IMG_Q131_1 ? `<p><img src="${IMG_Q131_1}" style="max-width:100%"></p>` : ""}
      The forest syncs to an Azure AD tenant named contoso.com as shown in the exhibit.
      ${IMG_Q131_2 ? `<p><img src="${IMG_Q131_2}" style="max-width:100%"></p>` : ""}
      For each of the following statements, select Yes if the statement is true. Otherwise, select No.
      NOTE: Each correct selection is worth one point.</p>
      ${IMG_Q131_3 ? `<p><img src="${IMG_Q131_3}" style="max-width:100%"></p>` : ""}
     
    `,
    statements: [
      "User1 can authenticate using user1@contoso.com.",
      "User2 can authenticate using user2@contoso.com.",
      "User3 can authenticate using user3@contoso.com."
    ],
    options: ["Yes", "No"],
    correctAnswers: ["Yes", "No", "No"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Azure AD에 로그인하려면 사용자의 UPN 접미사가 테넌트에 검증된(verified) 도메인 중 하나와 일치해야 합니다.</p>
      <p>contoso.com은 테넌트 기본 도메인으로 인증이 가능하지만, 하위 도메인 east.contoso.com은 별도 검증이 없으면 허용되지 않습니다.</p>
      <p>동일하게 외부 도메인(fabrikam.com 등)도 테넌트에 추가/검증하지 않았다면 로그인에 사용할 수 없습니다.</p>
      <p>패스스루 인증(PTA), PHS 여부와 무관하게 UPN 도메인은 Azure AD의 검증 상태를 충족해야 합니다.</p>
      <p>따라서 User1은 Yes, User2와 User3은 No가 됩니다.</p>
      <p>운영에서는 Azure AD Connect 구성 전 UPN 접미사 표준화와 도메인 검증을 먼저 완료해야 문제를 줄일 수 있습니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/entra/identity/hybrid/connect/plan-connect-userprincipalname">Azure AD Connect: UPN 접미사 문제 해결</a></p>
    `
  },

  // 132 — Change domain verification email address
  {
    id: 132,
    title: "도메인 소유권 검증 이메일 주소 변경 방법",
    promptHtml: `
      <p>You have a Microsoft 365 subscription.
      You add a domain named contoso.com.
      When you attempt to verify the domain, you are prompted to send a verification email to admin@contoso.com.
      You need to change the email address used to verify the domain.
      What should you do?</p>
    `,
    type: "single",
    options: [
      "A. From the Microsoft 365 admin center, change the global administrator of the Microsoft 365 subscription.",
      "B. Add a TXT record to the DNS zone of the domain.",
      "C. From the domain registrar, modify the contact information of the domain.",
      "D. Modify the NS records for the domain."
    ],
    correctAnswers: ["C. From the domain registrar, modify the contact information of the domain."],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>이메일 기반 도메인 검증은 WHOIS에 등록된 도메인 연락처 주소(admin@, administrator@ 등)를 사용합니다.</p>
      <p>검증 메일 수신 주소를 바꾸려면 Microsoft 365가 아니라 등록기관에서 WHOIS 연락처 정보를 수정해야 합니다.</p>
      <p>DNS TXT 방식 검증으로도 소유권을 입증할 수 있으나, 본 질문은 “이메일 주소를 변경”하는 방법을 묻습니다.</p>
      <p>NS 레코드 변경은 권한 이관에 가깝고 검증 메일 주소 교체와는 무관합니다.</p>
      <p>전역 관리자 변경 역시 검증 메일 대상 교체에 영향을 주지 않습니다.</p>
      <p>따라서 등록기관에서 도메인 연락처 정보를 수정하는 것이 정답입니다.</p>
      <p><a href="https://manage.whois.com/kb/servlet/KBServlet/faq452.html">WHOIS 연락처 기반 이메일 검증 안내</a></p>
    `
  },

  // 133 — DLP locations
  {
    id: 133,
    title: "DLP 정책 적용 위치 설정",
    promptHtml: `
      <p>You are testing a data loss prevention (DLP) policy to protect the sharing of credit card information with external users.
      During testing, you discover that a user can share credit card information with external users by using email.
      However, the user is prevented from sharing files that contain credit card information by using Microsoft SharePoint.
      You need to prevent the user from sharing the credit card information by using email and SharePoint.
      What should you configure?</p>
    `,
    type: "single",
    options: [
      "A. the status of the DLP policy",
      "B. the user overrides of the DLP policy rule",
      "C. the locations of the DLP policy",
      "D. the conditions of the DLP policy rule"
    ],
    correctAnswers: ["C. the locations of the DLP policy"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>DLP 정책은 위치별로 적용 범위를 정의하므로 이메일 차단이 필요하면 Exchange 위치를 포함해야 합니다.</p>
      <p>현재 SharePoint는 차단되지만 이메일은 허용되는 상태이므로 위치 구성의 비대칭이 원인입니다.</p>
      <p>정책 상태나 사용자 재정의는 위치 자체를 추가하지 않으므로 해결책이 아닙니다.</p>
      <p>조건(민감정보 형식 등)은 감지 기준이며 위치 누락 문제를 해소하지 못합니다.</p>
      <p>따라서 DLP 위치에 Exchange와 SharePoint를 모두 포함하도록 수정해야 합니다.</p>
      <p>또한 Teams 채팅/채널 메시지 보호가 필요하면 해당 위치도 함께 선택합니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/microsoft-365/compliance/create-test-tune-dlp-policy">DLP 정책 위치 구성</a> · <a href="https://learn.microsoft.com/en-us/purview/dlp-create-policy-cc-email#steps-to-create-the-policy">DLP 정책 만들기</a></p>
    `
  },

  // 134 — Block File1.exe via Indicator
  {
    id: 134,
    title: "File1.exe 다운로드 차단 설정",
    promptHtml: `
      <p>You have a Microsoft 365 E5 subscription that uses Microsoft Defender for Endpoint.
      From Microsoft Defender for Endpoint, you turn on the Allow or block file advanced feature.
      You need to block users from downloading a file named File1.exe.</p>
    `,
    type: "single",
    options: [
      "A. A suppression rule",
      "B. An indicator",
      "C. A device configuration profile"
    ],
    correctAnswers: ["B. An indicator"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>파일 차단은 해시 기반 인디케이터(Indicator of Compromise)로 구성합니다.</p>
      <p>Indicators → File indicators에서 해당 파일의 해시를 등록하면 조직 전체에서 차단됩니다.</p>
      <p>Suppression rule은 경고 노이즈를 줄이기 위한 숨김 규칙일 뿐 차단을 수행하지 않습니다.</p>
      <p>디바이스 구성 프로필은 Intune 정책 배포이며 파일 단위 차단과 목적이 다릅니다.</p>
      <p>운영 시에는 우선 평가 모드로 영향 범위를 검증하고 단계적 확장 배포를 권장합니다.</p>
      <p>파일명이 아니라 해시로 지정해야 변조/이름 변경에 견고하게 대응할 수 있습니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/microsoft-365/security/defender-endpoint/manage-indicators?view=o365-worldwide#allow-or-block-files">Defender for Endpoint: Indicators 구성</a></p>
    `
  },

  // 135 — OU filtering fix (Yes/No)
  {
    id: 135,
    title: "OU 필터링 설정 수정으로 동기화 문제 해결 가능 여부",
    promptHtml: `
      <p>Your network contains an Active Directory domain.
      You deploy an Azure AD tenant.
      Another administrator configures the domain to synchronize to Azure AD.
      You discover that 10 user accounts in an organizational unit (OU) are NOT synchronized to Azure AD.
      All the other user accounts synchronized successfully.
      You review Azure AD Connect Health and discover that all the user account synchronizations completed successfully.
      You need to ensure that the 10 user accounts are synchronized to Azure AD.
      Solution: From Azure AD Connect, you modify the filtering settings.
      Does this meet the goal?</p>
    `,
    type: "single",
    options: ["A. Yes", "B. No"],
    correctAnswers: ["A. Yes"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>특정 OU의 사용자만 동기화되지 않는다면 OU 기반 필터링에서 해당 OU가 제외되었을 가능성이 큽니다.</p>
      <p>Azure AD Connect의 Domain and OU filtering에서 OU를 포함하도록 수정하면 문제를 해결할 수 있습니다.</p>
      <p>동기화 실패가 아닌 “정상 완료”로 나타나는 이유는 관리 범위 밖의 객체는 동기화 대상으로 간주되지 않기 때문입니다.</p>
      <p>필터 변경 후 전체 동기화(Full sync)를 수행하여 빠르게 반영합니다.</p>
      <p>다른 원인(특성 누락/금지 문자 등)이 없는지 IdFix로 사전 점검하는 것도 좋습니다.</p>
      <p>운영 환경에서는 필터 정책을 문서화하고 변경 시점과 범위를 기록해야 추적이 용이합니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/entra/identity/hybrid/connect/how-to-connect-sync-configure-filtering">동기화 대상 개체 필터링</a></p>
    `
  },

  // 136 — ESP applicability (Yes/No statements)
  {
    id: 136,
    title: "Enrollment Status Page (ESP) 적용 여부 판단",
    promptHtml: `
      <p>You have a Microsoft 365 E5 tenant that contains the users shown in the following table.
      ${IMG_Q136_1 ? `<p><img src="${IMG_Q136_1}" style="max-width:100%"></p>` : ""}
      You purchase the devices shown in the following table.
      ${IMG_Q136_2 ? `<p><img src="${IMG_Q136_2}" style="max-width:100%"></p>` : ""}
      Show app and profile configuration progress: Yes
      Allow users to collect logs about installation errors: Yes
      Only show page to devices provisioned by out-of-box experience (OOBE): No Assignments: Group2
      For each of the following statements, select Yes if the statement is true. Otherwise, select No.
      For each statement, select Yes if true. Otherwise, select No.</p>
      ${IMG_Q136_3 ? `<p><img src="${IMG_Q136_3}" style="max-width:100%"></p>` : ""}
    `,
    statements: [
      "User1 with Device1 (Windows 10) will see ESP.",
      "User2 with Device1 (Windows 10) will see ESP.",
      "User2 with Device2 (Android) will see ESP."
    ],
    options: ["Yes", "No"],
    correctAnswers: ["No", "Yes", "No"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>ESP는 Windows 10/11 장치에서만 지원되며 Android/iOS/macOS에는 표시되지 않습니다.</p>
      <p>프로필이 Group2에 할당되어 있으므로 Group2의 사용자만 적용 대상입니다.</p>
      <p>User1은 Group1 소속이라 ESP가 표시되지 않습니다.</p>
      <p>User2는 Group2 소속이므로 Windows 10 장치에서 ESP가 표시됩니다.</p>
      <p>OOBE 전용이 아니도록 설정되어 있어 수동 등록 장치에도 적용됩니다.</p>
      <p>Android 디바이스는 ESP 미지원이므로 표시되지 않습니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/mem/intune/enrollment/windows-enrollment-status">ESP 지원 플랫폼 및 구성</a></p>
    `
  },

  // 137 — Role for MDO admin (Yes/No)
  {
    id: 137,
    title: "ATP(Defender for Office 365) 관리 권한 부여 적절성 판단",
    promptHtml: `
      <p>You have a Microsoft 365 E5 subscription.
      You create an account for a new security administrator named SecAdmin1.
      You need to ensure that SecAdmin1 can manage Office 365 Advanced Threat Protection (ATP) settings and policies for Microsoft Teams, SharePoint, and OneDrive.
      Solution: From the Azure Active Directory admin center, you assign SecAdmin1 the Teams Service Administrator role.
      Does this meet the goal?</p>
    `,
    type: "single",
    options: ["A. Yes", "B. No"],
    correctAnswers: ["B. No"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Defender for Office 365 정책(Safe Links, Safe Attachments 등)은 보안 포털 권한이 필요합니다.</p>
      <p>Teams Service Administrator는 Teams 설정과 정책을 관리하지만 MDO 보호 정책 권한은 포함하지 않습니다.</p>
      <p>Security Administrator, Global Administrator, 또는 관련 보안/규정 준수 역할을 사용해야 합니다.</p>
      <p>조직 보호 범위를 생각하면 최소 권한 원칙에 따라 Security Administrator가 적절합니다.</p>
      <p>역할 변경 후 권한 전파에는 시간이 소요될 수 있습니다.</p>
      <p>정책 관리 접근은 보안 포털 내 권한 매핑에 의해 제어됩니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/microsoft-365/security/defender/manage-permissions-in-security-and-compliance-center">Microsoft 365 Defender 포털 권한</a></p>
    `
  },

  // 138 — Sensitivity labels support (pair: versions vs file types)
  {
    id: 138,
    title: "Sensitivity labels 지원을 위한 Office 버전 및 파일 형식 식별",
    promptHtml: `
      <p>Your company has a Microsoft 365 E5 tenant.
      Users at the company use the following versions of Microsoft Office:
      - Microsoft 365 Apps for enterprise
      - Office for the web
      - Office 2016
      - Office 2019
      The company currently uses the following Office file types:
      - .docx
      - .xlsx
      - .doc
      - .xls
      You plan to use sensitivity labels. You need to identify:
      - Which versions of Office require an add-in to support the sensitivity labels.
      - Which file types support the sensitivity labels.</p>
      ${IMG_Q138_1 ? `<p><img src="${IMG_Q138_1}" style="max-width:100%"></p>` : ""}
    `,
    type: "pair",
    pairLabels: [
      "Office versions that require an add-in",
      "Office file types that support sensitivity labels"
    ],
    // 좌/우 서로 다른 콤보
    pairOptionsLeft: [
      "Office 2016 only",
      "Office 2019 only",
      "Office for the web only",
      "Office 2016 and Office 2019 only",
      "Microsoft 365 Apps for enterprise and Office for the web",
      "All listed versions"
    ],
    pairOptionsRight: [
      "doc only",
      "docx only",
      "xls only",
      "xlsx only",
      ".docx and .xlsx",
      ".doc and .xls",
    ],
    pairAnswer: [
      "Office 2016 and Office 2019 only",
      ".docx and .xlsx"
    ],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Microsoft 365 Apps와 Office for the web은 내장 라벨링을 사용하므로 별도 애드인이 필요하지 않습니다.</p>
      <p>Office 2016과 2019는 AIP Unified Labeling(또는 Purview Add-in) 기반으로 라벨링을 지원합니다.</p>
      <p>파일 형식은 OOXML(.docx, .xlsx, .pptx) 계열만 완전 지원되며, 바이너리(.doc, .xls) 형식은 비권장/제한적입니다.</p>
      <p>따라서 애드인 필요 버전은 2016/2019이며, 지원 파일 형식은 .docx와 .xlsx입니다.</p>
      <p>운영에서는 최신 채널의 Microsoft 365 Apps로 표준화하는 것이 가장 단순합니다.</p>
      <p>웹/모바일의 경우 라벨 정책 전파 및 캐시 지연에 유의해야 합니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide">Office 앱에서의 민감도 레이블</a></p>
    `
  },

  // 139 — MDCA Session policy to block printing
  {
    id: 139,
    title: "App1에서 인쇄 차단을 위한 Cloud App Control 정책 유형 식별",
    promptHtml: `
      <p>You have a Microsoft 365 E5 subscription that contains a user named User1.
      You have a Conditional Access policy applied to a cloud-based app named App1.
      App1 has Conditional Access App Control deployed.
      You need to create a Microsoft Defender for Cloud Apps policy to block User1 from printing from App1.</p>
    `,
    type: "single",
    options: [
      "A. Cloud Discovery anomaly detection policy",
      "B. Session policy",
      "C. Activity policy",
      "D. OAuth app policy"
    ],
    correctAnswers: ["B. Session policy"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>CA App Control이 세션을 MDCA 프록시로 리디렉션하면 실시간 제어는 세션 정책에서 수행합니다.</p>
      <p>인쇄/다운로드/복사 같은 UI 동작 제어는 Session policy의 활동 차단 규칙으로 설정합니다.</p>
      <p>Activity policy는 사후 로그 기반 경고/거버넌스 중심이고, 실시간 차단에는 적합하지 않습니다.</p>
      <p>Cloud Discovery 이상 탐지는 섀도우 IT 분석용이며 본 시나리오와 무관합니다.</p>
      <p>OAuth 앱 정책은 앱 권한 관리로, 세션 중 행위 제어와 목적이 다릅니다.</p>
      <p>따라서 Session policy가 정답입니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/defender-cloud-apps/session-policy-aad#block-specific-activities">세션 정책으로 활동 차단</a></p>
    `
  },

  // 140 — MDE onboarding via Intune (already loaded; same as before)
  {
    id: 140,
    title: "Intune 등록 시 Defender 자동 온보딩을 위한 방법 검증",
    promptHtml: `
      <p>You have a Microsoft 365 E5 subscription.
      You integrate Microsoft Defender for Endpoint with Microsoft Intune.
      You need to ensure that devices automatically onboard to Defender for Endpoint when they are enrolled in Intune.
      Solution: You configure a device configuration profile.
      Does this meet the goal?</p>
    `,
    type: "single",
    options: ["A. Yes", "B. No"],
    correctAnswers: ["B. No"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>자동 온보딩은 Endpoint security의 Defender for Endpoint 온보딩 정책으로 구성해야 합니다.</p>
      <p>구성 프로필만으로는 센서 등록/서비스 연동이 이루어지지 않습니다.</p>
      <p>OS별 온보딩 패키지 또는 스크립트가 정책을 통해 배포됩니다.</p>
      <p>테스트 후 점진적 확산을 권장하며 실패 시 디바이스 상태를 포털에서 확인합니다.</p>
      <p>온보딩이 완료되면 보안 권장 사항, 취약성, 위험 점수를 수집할 수 있습니다.</p>
      <p>따라서 제안된 해결책만으로는 목표를 충족하지 않습니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/mem/intune/protect/advanced-threat-protection-configure">Intune–MDE 통합 및 온보딩</a></p>
    `
  },

  // 141 — Prepare directory sync (custom domain)
  {
    id: 141,
    title: "Microsoft 365 하이브리드 배포 전 디렉터리 동기화 준비 단계",
    promptHtml: `
      <p>Your network contains an Active Directory forest named contoso.local.
      You purchase a Microsoft 365 subscription.
      You plan to move to Microsoft 365 and to implement a hybrid deployment solution for the next 12 months.
      You need to prepare for the planned move to Microsoft 365.
      What is the best action to perform before you implement directory synchronization?
      More than one answer choice may achieve the goal. Select the BEST answer.</p>
    `,
    type: "single",
    options: [
      "A. Purchase a third-party X.509 certificate.",
      "B. Create an external forest trust.",
      "C. Rename the Active Directory forest.",
      "D. Purchase a custom domain name."
    ],
    correctAnswers: ["D. Purchase a custom domain name."],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>.local 포리스트는 클라우드 로그인에 사용할 수 없으므로 공용 도메인이 필요합니다.</p>
      <p>먼저 공용 도메인을 구입하고 Azure AD에 추가/검증한 다음 UPN 접미사를 변경합니다.</p>
      <p>포리스트 이름 변경은 위험하고 필수 단계가 아닙니다.</p>
      <p>외부 트러스트는 Azure AD Connect에 필요하지 않습니다.</p>
      <p>X.509 인증서는 특정 워크로드에서 필요할 수 있으나 동기화 전 필수는 아닙니다.</p>
      <p>따라서 최고의 초기 단계는 사용자 지정 도메인 구입입니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/entra/identity/hybrid/connect/how-to-connect-install-prerequisites">동기화 준비: 공용 도메인 검증</a></p>
    `
  },

  // 142 — ZAP
  {
    id: 142,
    title: "사용자 메일함에 이미 전달된 악성 메일 자동 감지/제거",
    promptHtml: `
      <p>You have a Microsoft 365 E5 subscription.
      You plan to create an anti-malware policy named Policy1.
      You need to ensure that Policy1 can detect malicious email messages that were already delivered to a user's mailbox.
      What should you do in the Microsoft Defender portal?</p>
    `,
    type: "single",
    options: [
      "A. Enable zero-hour auto purge (ZAP)",
      "B. Modify the common attachments filter.",
      "C. Configure a quarantine policy.",
      "D. Enable enhanced filtering."
    ],
    correctAnswers: ["A. Enable zero-hour auto purge (ZAP)"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>ZAP는 사후 판정으로 악성/스팸으로 식별된 이미 전달된 메시지를 제거 또는 격리합니다.</p>
      <p>이 기능은 Threat Intelligence의 재평가 결과를 반영합니다.</p>
      <p>첨부 파일 필터는 파일 확장자 기반으로 사후 감지와 무관합니다.</p>
      <p>격리 정책은 처리 방식을 정의할 뿐, 사후 탐지를 활성화하지 않습니다.</p>
      <p>향상된 필터링은 하이브리드 메일 흐름 개선 기능입니다.</p>
      <p>따라서 ZAP 활성화가 요구 조건을 만족합니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/microsoft-365/security/office-365-security/zero-hour-auto-purge?view=o365-worldwide">Zero-hour Auto Purge (ZAP)</a></p>
    `
  },

  // 143 — Bulk import CSV + required fields
  {
    id: 143,
    title: "Microsoft 365 Admin Center 사용자 대량 가져오기: 파일 형식/필수 속성",
    promptHtml: `
      <p>Your company uses a legacy on-premises LDAP directory that contains 100 users.
      The company purchases a Microsoft 365 subscription.
      You need to import the 100 users into Microsoft 365 by using the Microsoft 365 admin center.
      Which type of file should you use and which properties are required?
      NOTE: Each correct selection is worth one point.</p>
      ${IMG_Q143_1 ? `<p><img src="${IMG_Q143_1}" style="max-width:100%"></p>` : ""}
    `,
    type: "pair",
    pairLabels: [
      "File type to use",
      "Required properties for each user"
    ],
    pairOptionsLeft: [
      "CSV",
      "JSON",
      "PST",
      "XML"
    ],
    pairOptionsRight: [
      "Display Name and Department",
      "User Name and Display Name",
      "User Name only",
      "Display Name only"
    ],
    pairAnswer: [
      "CSV",
      "User Name and Display Name"
    ],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>관리 센터의 “Add multiple users”는 CSV 업로드를 사용합니다.</p>
      <p>각 행에는 최소 User Name(UPN)과 Display Name이 필요합니다.</p>
      <p>기타 속성은 선택 사항이며 템플릿 다운로드를 통해 형식을 확인할 수 있습니다.</p>
      <p>JSON 또는 XML은 이 기능에서 지원되지 않습니다.</p>
      <p>대량 업로드 후 라이선스/위치/역할 할당을 일괄 처리할 수 있습니다.</p>
      <p>오탈자를 줄이려면 작은 배치로 검증 업로드를 권장합니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/microsoft-365/admin/add-users/add-users?view=o365-worldwide">사용자 대량 추가(CSV)</a></p>
    `
  },

  // 144 — DLP user overrides
  {
    id: 144,
    title: "사용자가 DLP 정책을 우회하지 못하도록 설정",
    promptHtml: `
      <p>You have a Microsoft 365 subscription.
      You configure a data loss prevention (DLP) policy.
      You discover that users are incorrectly marking content as false positive and bypassing the DLP policy.
      You need to prevent the users from bypassing the DLP policy.
      What should you configure?</p>
    `,
    type: "single",
    options: [
      "A. actions",
      "B. incident reports",
      "C. exceptions",
      "D. user overrides"
    ],
    correctAnswers: ["D. user overrides"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>사용자 재정의(User overrides)를 허용하면 정책 팁 무시 및 우회가 가능합니다.</p>
      <p>우회를 막으려면 규칙에서 사용자 재정의를 비활성화해야 합니다.</p>
      <p>Actions/Exceptions는 정책 조건/동작을 바꾸지만 우회 허용 자체를 통제하지 않습니다.</p>
      <p>Incident reports는 통보 기능이며 차단 구현과 별개입니다.</p>
      <p>민감정보 보호의 일관성을 위해 우회 허용 범위는 최소화하는 것이 좋습니다.</p>
      <p>정책 교육과 함께 관리자 승인 워크플로를 설계하면 오탐 처리 품질을 높일 수 있습니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/purview/dlp-learn-about-dlp">Microsoft Purview DLP 정책 구성</a></p>
    `
  },

  // 145 — Intune MDM/MAM scope inheritance (Yes/No)
  {
    id: 145,
    title: "Intune MDM/MAM 그룹 상속에 따른 등록 가능 여부",
    promptHtml: `
      <p> You have a Microsoft 365 E5 tenant that contains two users named User1 and User2 and the groups shown in the following table.
      ${IMG_Q145_1 ? `<p><img src="${IMG_Q145_1}" style="max-width:100%"></p>` : ""}
      You have a Microsoft Intune enrollment policy that has the following settings:
        MDM user scope: Some
        Groups: Group1
        MAM user scope: Some
        Groups: Group2
      You purchase the devices shown in the following table
      ${IMG_Q145_2 ? `<p><img src="${IMG_Q145_2}" style="max-width:100%"></p>` : ""}
      For each statement, select Yes if true. Otherwise, select No.</p>
      ${IMG_Q145_3 ? `<p><img src="${IMG_Q145_3}" style="max-width:100%"></p>` : ""}
    `,
    statements: [
      "User1 can enroll Device1 (Windows 10).",
      "User1 can enroll Device2 (Android) via MAM.",
      "User2 can enroll Device2 automatically."
    ],
    options: ["Yes", "No"],
    correctAnswers: ["Yes", "Yes", "No"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>MDM 사용자 범위(Group1)는 Windows 디바이스 자동 등록에 적용됩니다.</p>
      <p>MAM 사용자 범위(Group2)는 앱 보호 정책 범위이며 자동 등록을 트리거하지 않습니다.</p>
      <p>Group2에 Group1이 포함되어 있으면 User1은 MAM 정책 범위에도 포함됩니다.</p>
      <p>따라서 User1의 Windows 10 MDM 등록은 Yes, Android에서의 MAM 대상 포함도 Yes입니다.</p>
      <p>User2는 Group2 소속이지만 자동 MDM 등록 요건(Group1)에 해당하지 않아 No입니다.</p>
      <p>플랫폼별 자동 등록 조건과 MAM/MDM 차이를 구분하는 것이 중요합니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/mem/intune/enrollment/windows-enrollment-methods#configure-automatic-enrollment">Intune 자동 등록 구성</a></p>
    `
  },

  // 146 — MDE suppression scope (Yes/No)
  {
    id: 146,
    title: "억제 규칙 범위와 알림 표시 영향 판별",
    promptHtml: `
      <p>Your company uses Microsoft Defender for Endpoint.
      The devices onboarded to Microsoft Defender for Endpoint are shown in the following table
      ${IMG_Q146_1 ? `<p><img src="${IMG_Q146_1}" style="max-width:100%"></p>` : ""}
      The alerts visible in the Microsoft Defender for Endpoint alerts queue are shown in the following table.
      ${IMG_Q146_2 ? `<p><img src="${IMG_Q146_2}" style="max-width:100%"></p>` : ""}
      You create a suppression rule that has the following settings:
        * Triggering IOC: Any IOC
        * Action: Hide alert
        * Suppression scope: Alerts on ATP1 device group
      For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE:
      Each correct selection is worth one point
      ${IMG_Q146_3 ? `<p><img src="${IMG_Q146_3}" style="max-width:100%"></p>` : ""}
    `,
    statements: [
      "AFter you create the suppression rule, Alert1 will be visible in the queue.",
      "AFter you create the suppression rule, Alert3 will be visible in the queue.",
      "AFter you create the suppression rule, a new alert triggered on Device2 visible in the queue."
    ],
    options: ["Yes", "No"],
    correctAnswers: ["No", "Yes", "No"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>억제 범위가 ATP1 그룹이면 해당 그룹의 경고만 숨김 처리됩니다.</p>
      <p>ATP1 외 장치에서 발생한 경고는 억제되지 않고 표시됩니다.</p>
      <p>따라서 Alert1(No), Alert3(Yes), Device2 신규 경고(No)로 평가됩니다.</p>
      <p>억제 규칙은 경고를 삭제하지 않고 큐 표시만 제어합니다.</p>
      <p>과도한 억제는 탐지 가시성을 떨어뜨릴 수 있으므로 주의합니다.</p>
      <p>필요 시 특정 IOC/분류/제공자 기준으로 범위를 더 세분화합니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/microsoft-365/security/defender-endpoint/manage-alert-suppression-rules">MDE 억제 규칙 관리</a></p>
    `
  },

  // 147 — CA with trusted locations (Yes/No)
  {
    id: 147,
    title: "조건부 액세스: 신뢰 위치 포함 시 MFA 적용 여부",
    promptHtml: `
      <p> You have a Microsoft Entra tenant named contoso.com that contains the users shown in the following table.
      ${IMG_Q147_1 ? `<p><img src="${IMG_Q147_1}" style="max-width:100%"></p>` : ""}
       Per-user multifactor authentication is configured to use 131.107.5.0/24 as trusted IPs.
      The tenant contains the named locations shown in the following table
      ${IMG_Q147_2 ? `<p><img src="${IMG_Q147_2}" style="max-width:100%"></p>` : ""}
       You create a conditional access policy that has the following configurations:
        * Users: All users
        * Target resources assignment: App1
        * Conditions: Include all trusted locations
        * Grant access: Require multi-factor authentication
       For each of the following statements, select Yes if the statement is true. Otherwise, select No.
      ${IMG_Q147_3 ? `<p><img src="${IMG_Q147_3}" style="max-width:100%"></p>` : ""}
    `,
    statements: [
      "When User1 connects to App1 from a device that has an IP address of 131.107.50.10 User1 must requires MFA.",
      "When User2 connects to App1 from a device that has an IP address of 131.107.20.15 User2 must requires MFA.",
      "When User2 connects to App1 from a device that has an IP address of 131.107.5.5 User2 must requires MFA."
    ],
    options: ["Yes", "No"],
    correctAnswers: ["Yes", "Yes", "No"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>정책이 “Include all trusted locations”이므로 신뢰 위치에서 접근해도 MFA를 요구합니다.</p>
      <p>일반적으로 Exclude에 두면 면제되지만 본 정책은 Include로 지정되어 있습니다.</p>
      <p>Per-user MFA의 신뢰 IP 예외는 CA 정책과 충돌 시 CA 정책이 우선합니다.</p>
      <p>다만 Per-user trusted IP 범위가 정책의 “trusted locations”에 포함되지 않았다면 MFA가 면제될 수 있습니다.</p>
      <p>제시된 구성에 따라 두 신뢰 위치는 MFA 요구(Yes), per-user trusted IP는 정책에 포함되지 않아 No입니다.</p>
      <p>운영에서는 중복 정책으로 인한 혼선을 줄이기 위해 신뢰 위치 처리 일관성을 유지해야 합니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/entra/identity/conditional-access/concept-conditional-access-conditions">Conditional Access 평가 로직</a></p>
    `
  },

  // 148 — Teams channel with externals: DLP locations
  {
    id: 148,
    title: "Teams 외부 멤버 채널에서 DLP 정책 적용되도록 설정",
    promptHtml: `
      <p>You have a Microsoft 365 E5 subscription.
      You create a new data loss prevention (DLP) policy named DLP1 that protects financial data from being shared by using Microsoft Teams messages. You apply DLP1 to the users in the finance department.
      An incident is raised when a finance department user named User1 shares financial data in a Teams channel that includes external members.
      When User1 uses Teams to send the same message in a 1:1 chat or a private channel, the message is blocked as expected.
      You need to ensure that User1 is prevented from sharing financial data in Teams channels that include external members.
      What should you do?</p>
    `,
    type: "single",
    options: [
      "A. Edit the policy rules of DLP1.",
      "B. Edit the settings of the team that contains the channel.",
      "C. Modify the licenses assigned to User1.",
      "D. Edit the Locations settings of DLP1."
    ],
    correctAnswers: ["D. Edit the Locations settings of DLP1."],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Teams 채널 메시지 보호는 DLP 위치에 “Teams chat and channel messages”를 포함해야 합니다.</p>
      <p>현재 1:1/개인 채널만 차단된다면 채널 메시지 위치가 정책에 빠진 상태일 가능성이 큽니다.</p>
      <p>외부 멤버가 포함된 채널에서도 위치만 올바르면 DLP 차단이 적용됩니다.</p>
      <p>팀 설정이나 라이선스 변경은 본 증상과 직접적 인과가 없습니다.</p>
      <p>규칙 자체의 조건 변경 없이 위치 범위 확장만으로 목표를 달성할 수 있습니다.</p>
      <p>정책 전파 시간과 Teams 클라이언트 캐시를 고려해 테스트하십시오.</p>
      <p><a href="https://learn.microsoft.com/en-us/microsoft-365/compliance/dlp-microsoft-teams?view=o365-worldwide">Teams용 DLP 위치 구성</a></p>
    `
  },

  // 149 — Office app policies precedence (Yes/No)
  {
    id: 149,
    title: "정책 우선순위 기반으로 캐시 및 커서 설정 적용 판단",
    promptHtml: `
      <p> You have a Microsoft 365 E5 subscription that contains the users shown in the following table
      ${IMG_Q149_1 ? `<p><img src="${IMG_Q149_1}" style="max-width:100%"></p>` : ""}
      In Microsoft Endpoint Manager, you have the Policies for Office apps settings shown in the following table.
      ${IMG_Q149_2 ? `<p><img src="${IMG_Q149_2}" style="max-width:100%"></p>` : ""}
      The policies use the settings shown.
      ${IMG_Q149_3 ? `<p><img src="${IMG_Q149_3}" style="max-width:100%"></p>` : ""}
      For each of the following statements, select Yes if the statement is true. Otherwise, select No.
      NOTE: Each correct selection is worth one point.
      ${IMG_Q149_4 ? `<p><img src="${IMG_Q149_4}" style="max-width:100%"></p>` : ""}
    `,
    statements: [
      "User1 has their cache cleared on close.",
      "User2 has Cursor movement set to Visual.",
      "User3 has Cursor movement set to Visual."
    ],
    options: ["Yes", "No"],
    correctAnswers: ["No", "Yes", "No"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>낮은 숫자의 우선순위가 더 높은 우선권을 갖습니다.</p>
      <p>User1은 Priority 0 정책의 캐시 설정(Disabled)이 우선합니다.</p>
      <p>User2는 상위 정책에서 Cursor가 Not configured라서 하위 정책의 Visual이 적용됩니다.</p>
      <p>User3은 Priority 0의 Logical이 우선하므로 Visual이 적용되지 않습니다.</p>
      <p>Not configured 항목은 상위 정책에서 값이 없을 때만 하위 정책이 승계됩니다.</p>
      <p>정책 충돌 시 우선순위, Not configured, 명시 값의 조합을 꼭 점검해야 합니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/mem/intune/apps/app-protection-policy">Intune 앱 보호 정책 우선순위</a></p>
    `
  },

  // 150 — Built-in protection preset policy
  {
    id: 150,
    title: "Built-in Protection 프리셋에서 적용되는 정책 유형 식별",
    promptHtml: `
      <p>You have a Microsoft 365 subscription that uses Microsoft Defender for Office 365.
      A Built-in protection preset security policy is applied to the subscription.
      Which two policy types will be applied by the Built-in protection policy? Each correct answer presents a complete solution.
      NOTE: Each correct selection is worth one point.</p>
    `,
    type: "multi",
    multiOptions: [
      "A. Anti-malware",
      "B. Anti-phishing",
      "C. Safe Attachments",
      "D. Anti-spam",
      "E. Safe Links"
    ],
    multiAnswer: ["C. Safe Attachments", "E. Safe Links"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Built-in Protection은 Defender for Office 365의 Safe Links와 Safe Attachments에 대한 기본 보호를 제공합니다.</p>
      <p>Standard/Strict 프리셋 대상이 아닌 모든 사용자에게 자동 적용됩니다.</p>
      <p>Anti-phishing, Anti-spam, Anti-malware은 EOP에서 기본 제공되므로 Built-in Protection에 포함되지 않습니다.</p>
      <p>조직 규모가 크면 Standard/Strict 프리셋으로 점진 상향을 고려합니다.</p>
      <p>정책 전파 후 테스트 메일로 링크/첨부 재작성과 차단 동작을 확인하십시오.</p>
      <p>우선순위 상위 프리셋이 있는 사용자에게는 Built-in Protection이 중복 적용되지 않습니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/defender-office-365/preset-security-policies?view=o365-worldwide">Preset security policies (Built-in Protection)</a></p>
    `
  },
  {
    id: 151,
    title: "SSPR 패스워드 변경 시 AD DS와 동기화되도록 설정하는 순서",
    promptHtml: `
      <p>You have an Azure subscription that is linked to a hybrid Microsoft Entra tenant.
      All users sync from Active Directory Domain Services (AD DS) to the tenant by using Express Settings in Microsoft Entra Connect.
      You plan to implement self-service password reset (SSPR).
      You need to ensure that when a user resets or changes a password, the password syncs with AD DS.
      Which actions should you perform in sequence?</p>
      ${IMG_Q151_1 ? `<p><img src="${IMG_Q151_1}" style="max-width:100%"></p>` : ""}
    `,
    type: "sequence",
    sequenceOptions: [
      "Validate permissions for the Microsoft Entra Connect account",
      "Select Password writeback in Microsoft Entra Connect",
      "From the Microsoft Entra admin center, configure on-premises integration password writeback"
    ],
    sequenceAnswer: [
      "Validate permissions for the Microsoft Entra Connect account",
      "Select Password writeback in Microsoft Entra Connect",
      "From the Microsoft Entra admin center, configure on-premises integration password writeback"
    ],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>하이브리드 환경에서 SSPR의 암호 변경을 AD DS로 되쓰기(writeback) 하려면 Entra Connect에서 기능을 먼저 활성화해야 합니다.</p>
      <p>그 전에 Entra Connect 계정이 온프레미스 AD에 암호 쓰기 권한을 갖고 있는지 검증하는 것이 안전한 선행 단계입니다.</p>
      <p>그 다음 마법사에서 Password writeback 옵션을 켜고, Entra 관리 센터에서 On-premises integration의 Password writeback을 활성화합니다.</p>
      <p>이 구성이 완료되면 사용자가 포털에서 암호를 재설정할 때 AD DS의 암호도 동기화되어 일관성이 유지됩니다.</p>
      <p>테스트는 사용자 한두 명으로 시작하여 디렉터리 전체 적용 전에 검증하세요.</p>
      <p>운영 환경에서는 감사 및 알림을 켜 두어 정책 준수를 보장하는 것이 좋습니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/entra/identity/authentication/howto-sspr-writeback">Enable password writeback for hybrid environments</a></p>
    `
  },

  // 152 — Who can authenticate during outage (PHS+PTA)
  {
    id: 152,
    title: "인터넷 연결이 끊겼을 때 Azure AD 인증 가능한 사용자",
    promptHtml: `
      <p>You have a hybrid deployment of Microsoft 365 that contains the users shown in the following table.
      Azure AD Connect has the following settings:
      - Password Hash Sync: Enabled
      - Pass-through Authentication: Enabled
      You need to identify which users will be able to authenticate by using Azure AD if connectivity between on-premises Active Directory and the internet is lost.
      Which users should you identify?</p>
      ${IMG_Q152_1 ? `<p><img src="${IMG_Q152_1}" style="max-width:100%"></p>` : ""}
    `,
    type: "single",
    options: [
      "A. None",
      "B. User1 only",
      "C. User1 and User2 only",
      "D. User1, User2, and User3"
    ],
    correctAnswers: ["C. User1 and User2 only"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>PTA와 PHS를 동시에 켰을 때 온프레미스 인증 에이전트가 불가용이면 PHS가 폴백으로 사용됩니다.</p>
      <p>클라우드 전용 사용자와 PHS 해시가 최신인 동기화 사용자는 Azure AD에서 인증할 수 있습니다.</p>
      <p>반면 한 번도 로그인하지 않아 해시가 생성되지 않은 계정은 인증이 불가합니다.</p>
      <p>따라서 User1(클라우드)과 User2(PHS)은 가능, User3은 불가가 됩니다.</p>
      <p>운영에서는 해시 최신화 주기와 초기 로그인 절차를 문서화하여 위험을 줄이세요.</p>
      <p>또한 에이전트 가용성 모니터링으로 PTA 중단 시점을 빠르게 탐지할 수 있습니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/entra/identity/hybrid/connect/whatis-hybrid-authentication">Entra Connect authentication methods and fallback</a></p>
    `
  },

  // 153 — ESP 대상별 동작 (Yes/No)
  {
    id: 153,
    title: "Enrollment Status Page(ESP) 정책 적용 대상별 동작 판단",
    promptHtml: `
      <p>You have a Microsoft 365 subscription that contains the users shown in the following table.
      ${IMG_Q153_1 ? `<p><img src="${IMG_Q153_1}" style="max-width:100%"></p>` : ""}
      You configure an Enrollment Status Page (ESP) profile as shown in the exhibit.
      ${IMG_Q153_2 ? `<p><img src="${IMG_Q153_2}" style="max-width:100%"></p>` : ""}
      You assign the policy to Group1.
      You purchase devices as shown in the following table.
      ${IMG_Q153_3 ? `<p><img src="${IMG_Q153_3}" style="max-width:100%"></p>` : ""}
      For each of the following statements, select Yes if the statement is true. Otherwise, select No.
      NOTE: Each correct selection is worth one point.</p>
      ${IMG_Q153_4 ? `<p><img src="${IMG_Q153_4}" style="max-width:100%"></p>` : ""}
    `,
    statements: [
      "If User1 performs the initial device enrollment for Device1, the Enrollment Status Page will Show",
      "If User1 performs the initial device enrollment for Device2, the Enrollm,ent Status Page will show",
      "If User2 performs the initial device enrollment for Device2, the Enrollm,ent Status Page will show"
    ],
    options: ["Yes", "No"],
    correctAnswers: ["Yes", "No", "No"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>ESP는 지정한 그룹에 할당된 장치의 초기 등록(OOBE) 동안만 표시됩니다.</p>
      <p>문항의 설정은 Group1에만 할당되어 있어 User1 장치에서만 적용됩니다.</p>
      <p>Group2의 User2 장치는 ESP 정책 대상이 아니므로 표시되지 않습니다.</p>
      <p>또한 OOBE 장치만 대상으로 지정되어 비 OOBE 등록 장치에는 나타나지 않습니다.</p>
      <p>필요 시 Report-only로 동작 검증 후 강제 적용으로 전환하세요.</p>
      <p>ESP는 앱/프로필 배포가 끝날 때까지 사용을 차단할 수 있으므로 사용자 공지를 병행하는 것이 좋습니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/mem/intune/enrollment/windows-enrollment-status">Configure the Enrollment Status Page</a></p>
    `
  },

  // 154 — Published labels usable
  {
    id: 154,
    title: "사용 가능한 모든 퍼블리시된 레이블 식별",
    promptHtml: `
      <p>You have a Microsoft 365 E5 subscription that has published sensitivity labels shown in the following exhibit.
      Which labels can users apply to content?</p>
      ${IMG_Q154_1 ? `<p><img src="${IMG_Q154_1}" style="max-width:100%"></p>` : ""}
    `,
    type: "single",
    options: [
      "A. Label1, Label2, and Label5 only",
      "B. Label3, Label4, and Label6 only",
      "C. Label1, Label3, Label2, and Label6 only",
      "D. Label1, Label2, Label3, Label4, Label5, and Label6"
    ],
    correctAnswers: ["D. Label1, Label2, Label3, Label4, Label5, and Label6"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>민감도 레이블은 퍼블리시되어 사용자 범위에 포함된 경우에만 앱에서 선택 가능합니다.</p>
      <p>부모/하위 레이블 구조라도 퍼블리시 상태이면 사용자는 하위 레이블을 직접 적용할 수 있습니다.</p>
      <p>문항의 전제는 모두 퍼블리시된 상태이므로 전부 선택 가능한 상태입니다.</p>
      <p>정책이 여러 개일 때 충돌이 있다면 우선 순위와 범위를 검토해야 합니다.</p>
      <p>라벨 표시/자동 적용은 앱 버전과 레이블 클라이언트 지원에도 영향을 받습니다.</p>
      <p>조직 내 테스트 그룹으로 배포 범위를 점진적으로 확대하는 것이 안전합니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/purview/create-sensitivity-labels">Create and publish sensitivity labels</a></p>
    `
  },

  // 155 — Device type/limit restrictions (Yes/No)
  {
    id: 155,
    title: "엔드포인트 등록 제한 정책 적용 판단",
    promptHtml: `
      <p>You have a Microsoft 365 subscription that contains the users in the following table.
      In Microsoft Endpoint Manager, you create two device type restrictions and three device limit restrictions.
      For each of the following statements, select Yes if the statement is true. Otherwise, select No.
      NOTE: Each correct selection is worth one point.</p>
      ${IMG_Q155_1 ? `<p><img src="${IMG_Q155_1}" style="max-width:100%"></p>` : ""}
    `,
    statements: [
      "User1 can enroll up to 10 Windows 10 devices.",
      "User2 can enroll up to 10 iOS devices.",
      "User3 can enroll up to five Android devices."
    ],
    options: ["Yes", "No"],
    correctAnswers: ["Yes", "No", "Yes"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>장치 유형 제한은 허용 플랫폼을, 장치 수 제한은 사용자별 최대 등록 대수를 통제합니다.</p>
      <p>여러 정책이 겹치면 우선순위가 높은 정책이 적용됩니다.</p>
      <p>User1은 Windows 허용과 10대 제한으로 Yes가 됩니다.</p>
      <p>User2는 iOS가 상위 제한 정책에서 허용되지 않아 No입니다.</p>
      <p>User3은 Android 허용과 5대 제한으로 Yes입니다.</p>
      <p>Not configured는 상위에서 값이 없을 때 하위 정책이 승계될 수 있음을 기억하세요.</p>
      <p><a href="https://learn.microsoft.com/en-us/mem/intune/enrollment/windows-enrollment-methods#configure-automatic-enrollment">Configure automatic enrollment and restrictions</a></p>
    `
  },

  // 156 — ISO/IEC 27001 assessment tool
  {
    id: 156,
    title: "ISO/IEC 27001 규정 준수 상태 평가 도구 식별",
    promptHtml: `
      <p>Your company has a Microsoft E5 tenant.
      The company must meet the requirements of the ISO/IEC 27001:2013 standard.
      You need to assess the company's current state of compliance.
      What should you use?</p>
    `,
    type: "single",
    options: [
      "A. eDiscovery",
      "B. Information governance",
      "C. Compliance Manager",
      "D. Data Subject Requests (DSRs)"
    ],
    correctAnswers: ["C. Compliance Manager"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Compliance Manager는 ISO/IEC 27001을 포함한 다양한 표준에 대한 조직의 컴플라이언스 상태를 점검합니다.</p>
      <p>컨트롤 매핑, 점수 산정, 개선 작업(Action items)까지 제공하는 전용 도구입니다.</p>
      <p>eDiscovery나 DSR은 조사/개인정보 권리 대응용으로 목적이 다릅니다.</p>
      <p>Information Governance는 보존/삭제 관리 중심입니다.</p>
      <p>평가 전 스코프와 환경별 컨트롤 가용성을 확인하면 정확도가 높아집니다.</p>
      <p>평가 후 갭을 액션 플랜과 감사 추적으로 관리하세요.</p>
      <p><a href="https://learn.microsoft.com/en-us/microsoft-365/compliance/compliance-manager-overview">Compliance Manager overview</a></p>
    `
  },

  // 157 — Reduce false risk for VDI (trusted location)
  {
    id: 157,
    title: "VDI 사용자의 잘못된 고위험 로그인 차단 방지",
    promptHtml: `
      <p>You have a Microsoft 365 E5 subscription that contains users in the United States, Europe, and Asia.
      You use Microsoft Entra ID Protection.
      You have a virtual desktop infrastructure (VDI). All VDI servers are located in the United States.
      Users connect to Microsoft 365 from laptops and the VDI.
      Some VDI users report that they are blocked from signing in to Microsoft 365 due to a high sign-in risk.
      You need to reduce the likelihood that the VDI users will be erroneously blocked from signing in to Microsoft 365. The solution must ensure that sign-ins from the VDI environment are protected by using ID Protection.</p>
    `,
    type: "single",
    options: [
      "A. ExpressRoute for Microsoft 365",
      "B. A Conditional Access policy",
      "C. A trusted location",
      "D. A Satellite Geography location"
    ],
    correctAnswers: ["C. A trusted location"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>VDI는 동일 IP에서 다수 로그인으로 이상패턴으로 보일 수 있어 오탐이 발생하기 쉽습니다.</p>
      <p>VDI IP 대역을 신뢰할 수 있는 위치로 등록하면 ID Protection의 위험 계산에서 거짓 양성을 줄일 수 있습니다.</p>
      <p>여전히 MFA나 위험 기반 정책으로 보호는 유지할 수 있습니다.</p>
      <p>ExpressRoute나 Satellite Geography는 위험 점수 계산과 직접 관련이 없습니다.</p>
      <p>조건부 액세스만으로는 ID Protection의 위험 판정 자체를 완화하지 못합니다.</p>
      <p>운영 시 위치 태깅과 네트워크 변화 시 업데이트 절차를 표준화하세요.</p>
      <p><a href="https://learn.microsoft.com/en-us/entra/id-protection/howto-identity-protection-configure-risk-policies">Configure sign-in risk and trusted locations</a></p>
    `
  },

  // 158 — Users auto-added to risk detected alerts
  {
    id: 158,
    title: "ID Protection의 “Users at risk detected alerts” 자동 포함 역할",
    promptHtml: `
      <p>You have a Microsoft 365 E5 subscription.
      You create the users shown in the following table.
      ${IMG_Q158_1 ? `<p><img src="${IMG_Q158_1}" style="max-width:100%"></p>` : ""}
      You plan to use Microsoft Entra ID Protection.
      Which users will be added automatically to the Users at risk detected alerts list?</p>
    `,
    type: "single",
    options: [
      "A. Admin1 only",
      "B. Admin2 only",
      "C. Admin1 and Admin2 only",
      "D. Admin1 and Admin3 only",
      "E. Admin1, Admin2, and Admin3"
    ],
    correctAnswers: ["C. Admin1 and Admin2 only"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>위험 사용자 경고 목록에는 글로벌 관리자, 보안 관리자, 보안 운영자 등 고위험 역할 계정이 자동 포함됩니다.</p>
      <p>Security Reader와 같은 조회 전용 역할은 자동 포함 목록 대상이 아닙니다.</p>
      <p>따라서 Security Administrator와 Security Operator를 가진 Admin1, Admin2만 자동 추가됩니다.</p>
      <p>역할 변경 시 반영까지 지연이 있을 수 있으므로 테스트 계정으로 검증하세요.</p>
      <p>경고 목록은 위험 정책의 자동 완화 동작과 연계해 활용합니다.</p>
      <p>민감 역할 계정에는 강력한 MFA 및 비정상 로그인 알림을 병행하세요.</p>
      <p><a href="https://learn.microsoft.com/en-us/entra/id-protection/howto-identity-protection-configure-risk-policies">Microsoft Entra ID Protection risk policies</a></p>
    `
  },

  // 159 — Two answers: usage and service health (Pair)
  {
    id: 159,
    title: "Teams 활성 사용자 수 및 Microsoft 서비스 상태 모니터링 도구 식별",
    promptHtml: `
      <p>You have a Microsoft 365 subscription.
      You need to review metrics for the following:
      - The daily active users in Microsoft Teams
      - Recent Microsoft service issues
      What should you use?
      Each correct selection is worth one point.</p>
      ${IMG_Q159_1 ? `<p><img src="${IMG_Q159_1}" style="max-width:100%"></p>` : ""}
    `,
    type: "pair",
    pairLabels: [
      "Teams daily active users",
      "Recent Microsoft service issues"
    ],
    pairOptionsLeft: [
      "Microsoft Secure Score",
      "Usage reports",
      "Service health",
      "Message center"
    ],
    pairOptionsRight: [
      "Microsoft Secure Score",
      "Usage reports",
      "Service health",
      "Message center"
    ],
    pairAnswer: [
      "Usage reports",
      "Service health"
    ],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>사용 현황 지표(DAU 등)는 관리 센터의 Usage reports에서 조회합니다.</p>
      <p>서비스 중단/장애는 Service health 대시보드에서 확인합니다.</p>
      <p>Message center는 변경 공지/예정된 기능 안내 중심이며 지표/장애 현황과 다릅니다.</p>
      <p>보고서 권한과 지역 시차에 따라 수치 반영이 지연될 수 있습니다.</p>
      <p>장기간 추이를 보려면 Power BI 커넥터나 보고서 내보내기를 활용하세요.</p>
      <p>서비스 장애 RCA는 Health에서 Incidents 세부 정보로 확인 가능합니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/microsoft-365/admin/activity-reports/activity-reports?view=o365-worldwide">Usage reports</a> · <a href="https://learn.microsoft.com/en-us/microsoft-365/enterprise/view-service-health?view=o365-worldwide">Service health dashboard</a></p>
    `
  },

  // 160 — Co-management supported devices
  {
    id: 160,
    title: "공동 관리(Co-management)가 추가 구성 없이 지원되는 장치 식별",
    promptHtml: `
      <p>You have a hybrid Azure Active Directory (Azure AD) tenant and a Microsoft Endpoint Configuration Manager deployment.
      You have the devices shown in the following table.
      You plan to enable co-management.
      You need to identify which devices support co-management without requiring the installation of additional software.
      Which devices should you identify?</p>
      ${IMG_Q160_1 ? `<p><img src="${IMG_Q160_1}" style="max-width:100%"></p>` : ""}
    `,
    type: "single",
    options: [
      "A. Device1 only",
      "B. Device2 only",
      "C. Device3 only",
      "D. Device2 and Device3 only",
      "E. Device1, Device2, and Device3"
    ],
    correctAnswers: ["D. Device2 and Device3 only"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>공동 관리는 ConfigMgr로 관리되고 Azure AD(Join 또는 Hybrid Join) 상태인 디바이스가 요건입니다.</p>
      <p>Device2와 Device3은 해당 요건을 충족해 추가 소프트웨어 없이 바로 지원됩니다.</p>
      <p>Device1은 ConfigMgr 등록이 없거나 Join 요건이 맞지 않아 대상이 아닙니다.</p>
      <p>하이브리드 조인과 SCP 구성이 누락되면 등록이 실패할 수 있습니다.</p>
      <p>대상 장치를 파일럿 그룹으로 지정해 워크로드 이동을 점진 적용하세요.</p>
      <p>네트워크/프록시 예외와 CMG 구성도 사전 점검이 필요합니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/mem/configmgr/comanage/overview#prerequisites">Co-management prerequisites</a></p>
    `
  },

  // 161 — Min updates to be up-to-date
  {
    id: 161,
    title: "최신 기능 및 품질 업데이트 최소 설치",
    promptHtml: `
      <p>You purchase a new computer that has Windows 10, version 21H1 preinstalled.
      You need to ensure that the computer is up-to-date. The solution must minimize the number of updates installed.
      What should you do on the computer?</p>
    `,
    type: "single",
    options: [
      "A. Install all the feature updates released since version 21H1 and the latest quality update only.",
      "B. Install the latest feature update and all the quality updates released since version 21H1.",
      "C. Install the latest feature update and the latest quality update only.",
      "D. Install all the feature updates released since version 21H1 and all the quality updates released since version 21H1 only."
    ],
    correctAnswers: ["C. Install the latest feature update and the latest quality update only."],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>기능 업데이트는 누적이므로 최신 기능 업데이트 하나로 중간 버전을 모두 포함합니다.</p>
      <p>그 후 최신 품질 업데이트 하나만 적용하면 최신 상태가 됩니다.</p>
      <p>중간 기능 업데이트를 모두 거칠 필요가 없으므로 설치 수를 최소화합니다.</p>
      <p>장치 호환성과 보류 중 재부팅 정책도 함께 점검하세요.</p>
      <p>기업 환경은 WUfB/서비스 채널 정책으로 제어하는 것이 바람직합니다.</p>
      <p>피어 캐시/배달 최적화로 네트워크 비용을 줄일 수 있습니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/windows/deployment/update/waas-overview">Windows update servicing cadence</a></p>
    `
  },

  // 162 — Wrong fix: modify Entra credentials (Yes/No)
  {
    id: 162,
    title: "Hybrid AD 사용자 동기화 오류 조치",
    promptHtml: `
      <p>Your network contains an Active Directory domain.
      You deploy a Microsoft Entra tenant.
      Another administrator configures the domain to synchronize to the Microsoft Entra tenant. You discover that 10 user accounts in an organizational unit (OU) are NOT synchronized to the Microsoft Entra tenant. All the other user accounts synchronized successfully.
      You review Microsoft Entra Connect Health and discover that all the user account synchronizations completed successfully.
      You need to ensure that the 10 user accounts are synchronized to the Microsoft Entra tenant.
      Solution: From Microsoft Entra Connect, you modify the Microsoft Entra credentials.
      Does this meet the goal?</p>
    `,
    type: "single",
    options: ["A. Yes", "B. No"],
    correctAnswers: ["B. No"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>특정 OU의 사용자만 빠졌다면 OU 필터링 범위가 원인일 가능성이 큽니다.</p>
      <p>자격 증명 수정은 연결 계정 갱신일 뿐 동기화 스코프를 바꾸지 않습니다.</p>
      <p>Domain and OU filtering에서 해당 OU를 포함하도록 수정해야 합니다.</p>
      <p>필터 수정 후 전체 동기화 수행으로 빠르게 반영하세요.</p>
      <p>동시에 특성 유효성(IdFix) 검사로 예외를 점검하면 안전합니다.</p>
      <p>변경 이력과 책임 소유자를 문서화하는 것이 좋습니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/entra/identity/hybrid/connect/how-to-connect-sync-configure-filtering#organizational-unitbased-filtering">Troubleshoot missing users after sync</a></p>
    `
  },

  // 163 — Dynamic group rule (Pair: two blanks)
  {
    id: 163,
    title: "게스트 + 부서명에 “Support” 포함 사용자 그룹 생성",
    promptHtml: `
      <p>You have a Microsoft 365 subscription that contains the users shown in the following table.
      ${IMG_Q163_1 ? `<p><img src="${IMG_Q163_1}" style="max-width:100%"></p>` : ""}
      You need to configure a dynamic user group that will include the guest users in any department that contains the word Support.
      How should you complete the membership rule?
      NOTE: Each correct selection is worth one point.</p>
      ${IMG_Q163_2 ? `<p><img src="${IMG_Q163_2}" style="max-width:100%"></p>` : ""}
    `,
    type: "pair",
    pairLabels: [
      "Rule part for user type",
      "Rule part for department contains Support"
    ],
    pairOptionsLeft: [
      '(user.userType -eq "Guest")',
      '(user.userType -in "Guest")',
      '(user.userType -ne "Guest")',
      '(user.userType -notmatch "Member")'
    ],
    pairOptionsRight: [
      '(user.department -contains "Support")',
      '(user.department -in "Support")',
      '(user.department -match "Support")',
      '(user.department -startsWith "Sup")'
    ],
    pairAnswer: [
      '(user.userType -eq "Guest")',
      '(user.department -contains "Support")'
    ],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>동적 그룹 규칙에서 게스트 필터는 user.userType -eq "Guest" 로 지정합니다.</p>
      <p>부분 문자열 포함은 -contains 연산자를 사용합니다.</p>
      <p>-match는 정규식, -in은 상수 목록 포함으로 의미가 다릅니다.</p>
      <p>두 조건은 and로 결합되어야 하며 UI에서는 개별 블록을 제공할 수 있습니다.</p>
      <p>대소문자는 기본적으로 무시되지만 명시 규칙을 일관되게 사용하세요.</p>
      <p>미리보기로 포함/제외 결과를 검증한 뒤 저장하는 것이 좋습니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/entra/identity/users/groups-dynamic-membership">Dynamic membership rules syntax</a></p>
    `
  },

  // 164 — DLP notifications per user (Pair: numbers)
  {
    id: 164,
    title: "DLP 규칙 중복 트리거에 따른 사용자별 알림 횟수 평가",
    promptHtml: `
      <p>You have a Microsoft 365 E5 subscription that contains two users and a Microsoft SharePoint site named Site1.
      You create a data loss prevention (DLP) policy named DLP1 that has the advanced DLP rules shown in the table.
      ${IMG_Q164_1 ? `<p><img src="${IMG_Q164_1}" style="max-width:100%"></p>` : ""}
      DLP1 is applied to Site1.
      You have the files shown in the following table.
      ${IMG_Q164_2 ? `<p><img src="${IMG_Q164_2}" style="max-width:100%"></p>` : ""} 
      How many notifications will each user receive? Select the appropriate options.</p>
      ${IMG_Q164_3 ? `<p><img src="${IMG_Q164_3}" style="max-width:100%"></p>` : ""}
    `,
    type: "pair",
    pairLabels: [
      "User1@contoso.com",
      "User2@contoso.com"
    ],
    pairOptionsLeft: ["0", "1", "2", "3", "4", "5"],
    pairOptionsRight: ["0", "1", "2", "3", "4", "5"],
    pairAnswer: ["3", "3"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>DLP 규칙에서 Stop processing more rules가 꺼져 있으면 일치한 모든 규칙이 각각 알림을 발생시킵니다.</p>
      <p>여러 파일이 여러 규칙에 동시에 일치하면 사용자별 합계가 늘어납니다.</p>
      <p>문항 조건의 규칙/파일 조합 결과로 두 사용자 모두 3회의 알림을 받습니다.</p>
      <p>알림 소음이 크면 Stop processing 또는 우선순위 조정으로 억제할 수 있습니다.</p>
      <p>보고서와 활동 탐색기로 영향 범위를 검증하세요.</p>
      <p>사용자 교육과 정책 팁을 병행하면 오탐 대응이 수월합니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/microsoft-365/compliance/data-loss-prevention-policies#create-dlp-rules">DLP rules priority and stop processing</a></p>
    `
  },

  // 165 — RBAC enable + who loses access (Pair)
  {
    id: 165,
    title: "RBAC 활성화 후 포털 접근 권한 변화 평가",
    promptHtml: `
      <p>You have a Microsoft 365 E5 subscription that contains the users shown in the following table.
      ${IMG_Q165_1 ? `<p><img src="${IMG_Q165_1}" style="max-width:100%"></p>` : ""}
      You are implementing Microsoft Defender for Endpoint.
      You need to enable role-based access control (RBAC) to restrict access to the Microsoft 365 Defender portal.
      Which users can enable RBAC, and which users will no longer have access to the Microsoft 365 Defender portal after RBAC is enabled?</p>
      ${IMG_Q165_2 ? `<p><img src="${IMG_Q165_2}" style="max-width:100%"></p>` : ""}
    `,
    type: "pair",
    pairLabels: [
      "Users that can enable RBAC",
      "Users that will no longer have access after RBAC is enabled"
    ],
    pairOptionsLeft: [
      "Admin1 only",
      "Admin2 only",
      "Admin1 and Admin2 only",
      "Admin1, Admin2, and Admin3"
    ],
    pairOptionsRight: [
      "Admin3 only",
      "Admin3 and Admin4 only",
      "Admin3, Admin4, and Admin5 only",
      "Admin4 and Admin5 only"
    ],
    pairAnswer: [
      "Admin1 and Admin2 only",
      "Admin3, Admin4, and Admin5 only"
    ],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>RBAC 활성화는 Global Administrator 또는 Security Administrator만 수행할 수 있습니다.</p>
      <p>RBAC가 켜지면 Defender 포털 접근은 RBAC 역할 또는 매핑된 보안 그룹 보유자만 가능합니다.</p>
      <p>역할이 없거나 매핑되지 않은 사용자는 포털 접근 권한을 잃습니다.</p>
      <p>따라서 Admin1/2가 활성화 가능하고, Admin3/4/5는 접근 불가가 됩니다.</p>
      <p>운영에서는 역할 최소화와 정기 검토(Access review)를 권장합니다.</p>
      <p>각 역할의 범위를 문서화하고 변경 시 알림 체계를 유지하세요.</p>
      <p><a href="https://learn.microsoft.com/en-us/microsoft-365/security/defender-endpoint/rbac?view=o365-worldwide">MDE RBAC permissions</a> · <a href="https://learn.microsoft.com/en-us/microsoft-365/security/defender-endpoint/permissions?view=o365-worldwide">Configure MDE RBAC</a></p>
    `
  },

  // 166 — Wrong role for MDO management (Yes/No)
  {
    id: 166,
    title: "Defender for Office 365 정책 관리 권한 평가",
    promptHtml: `
      <p>You have a Microsoft 365 E5 subscription.
      You create an account for a new security administrator named SecAdmin1.
      You need to ensure that SecAdmin1 can manage Microsoft Defender for Office 365 settings and policies for Microsoft Teams, SharePoint, and OneDrive.
      Solution: From the Azure Active Directory admin center, you assign SecAdmin1 the Teams Administrator role.
      Does this meet the goal?</p>
    `,
    type: "single",
    options: ["A. Yes", "B. No"],
    correctAnswers: ["B. No"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Teams Administrator는 Teams 서비스 구성 권한이며 MDO 보안 정책 권한은 포함하지 않습니다.</p>
      <p>MDO 정책 관리를 위해선 Security Administrator 또는 Global Administrator가 필요합니다.</p>
      <p>정책은 Microsoft 365 Defender 포털 권한 모델을 따릅니다.</p>
      <p>최소 권한 원칙에 따라 Security Administrator 부여가 일반적입니다.</p>
      <p>권한 전파에 시간이 걸릴 수 있으니 변경 후 검증하세요.</p>
      <p>서비스별 관리 역할과 보안 역할의 차이를 구분하는 것이 중요합니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/microsoft-365/security/defender/permissions?view=o365-worldwide">Defender portal permissions</a></p>
    `
  },

  // 167 — LinkedIn connector storage location
  {
    id: 167,
    title: "LinkedIn 커넥터 데이터 저장 위치",
    promptHtml: `
      <p>You have a Microsoft 365 tenant and a LinkedIn company page.
      You plan to archive data from the LinkedIn page to Microsoft 365 by using the LinkedIn connector.
      Where can you store data from the LinkedIn connector?</p>
    `,
    type: "single",
    options: [
      "A. a Microsoft OneDrive for Business folder",
      "B. a Microsoft SharePoint Online document library",
      "C. a Microsoft 365 mailbox",
      "D. Azure Files"
    ],
    correctAnswers: ["C. a Microsoft 365 mailbox"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Microsoft Purview/Compliance용 LinkedIn 커넥터는 항목을 Exchange Online 사서함으로 전달해 보존·감사·eDiscovery를 가능하게 합니다.</p>
      <p>파일 저장소(SharePoint/OneDrive)는 이 커넥터의 기본 대상으로 쓰이지 않습니다.</p>
      <p>사서함에 수집된 항목은 규정 준수 정책을 적용할 수 있습니다.</p>
      <p>연결 후 색인과 보존 레이블 적용 상태를 점검하세요.</p>
      <p>데이터 볼륨과 한도를 고려하여 커넥터 범위를 계획하는 것이 좋습니다.</p>
      <p>보존 기간 충돌 시 우선순위와 정책 상속을 확인하세요.</p>
      <p><a href="https://learn.microsoft.com/en-us/microsoft-365/compliance/linkedin-connector?view=o365-worldwide">LinkedIn connector for Microsoft Purview</a></p>
    `
  },

  // 168 — Copy ADMX to manage WUfB (Yes/No)
  {
    id: 168,
    title: "Windows Update for Business GPO 설정 파일 복사로 구성 가능한가?",
    promptHtml: `
      <p>Your network contains an on-premises Active Directory domain. The domain contains domain controllers that run Windows Server 2019. The functional level of the forest and the domain is Windows Server 2012 R2.
      The domain contains 100 computers that run Windows 10 and a member server named Server1 that runs Windows Server 2012 R2.
      You plan to use Server1 to manage the domain and to configure Windows 10 Group Policy settings.
      You install the Group Policy Management Console (GPMC) on Server1.
      You need to configure the Windows Update for Business Group Policy settings on Server1.
      Solution: You copy the Group Policy Administrative Templates from a Windows 10 computer to Server1.
      Does this meet the goal?</p>
    `,
    type: "single",
    options: ["A. Yes", "B. No"],
    correctAnswers: ["A. Yes"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>최신 OS 전용 GPO를 관리하려면 해당 OS의 ADMX/ADML 템플릿을 중앙 저장소 또는 관리 서버에 복사하면 됩니다.</p>
      <p>Server1이 구버전이어도 최신 ADMX가 있으면 정책 편집이 가능합니다.</p>
      <p>WUfB 관련 템플릿(WindowsUpdate.admx 등)을 사용해 구성할 수 있습니다.</p>
      <p>SYSVOL 중앙 저장소를 쓰면 도메인 전역에 동일한 정책 정의를 제공합니다.</p>
      <p>템플릿 버전 불일치 시 항목 누락·중복이 생길 수 있으니 최신으로 유지하세요.</p>
      <p>적용 후 RSOP/Gpresult로 결과를 검증하세요.</p>
      <p><a href="https://learn.microsoft.com/en-us/troubleshoot/windows-client/group-policy/create-and-manage-central-store">Create and manage ADMX central store</a></p>
    `
  },

  // 169 — Add custom domain to fix login (Yes/No)
  {
    id: 169,
    title: "User2의 인증 실패 해결",
    promptHtml: `
      <p> Your network contains an on-premises Active Directory domain named contoso.com. The domain contains the users shown in the following table.
      ${IMG_Q169_1 ? `<p><img src="${IMG_Q169_1}" style="max-width:100%"></p>` : ""}
      The domain syncs to an Azure AD tenant named contoso.com as shown in the exhibit. (Click the Exhibit tab.)
      ${IMG_Q169_2 ? `<p><img src="${IMG_Q169_2}" style="max-width:100%"></p>` : ""}
       User2 fails to authenticate to Azure AD when signing in as user2@fabrikam.com.
       You need to ensure that User2 can access the resources in Azure AD.
       Solution: From the Microsoft Entra admin center, you add fabrikam.com as a custom domain. You
       instruct User2 to sign in as user2@fabrikam.com.
       Does this meet the goal?
    `,
    type: "single",
    options: ["A. Yes", "B. No"],
    correctAnswers: ["A. Yes"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>사용자가 다른 접미사의 UPN으로 로그인하려면 해당 도메인이 테넌트에 추가·검증되어야 합니다.</p>
      <p>DNS TXT/MX 검증을 완료하면 해당 접미사로 정상 인증이 가능합니다.</p>
      <p>UPN 변경 후 동기화 및 토큰 갱신까지 지연이 있을 수 있습니다.</p>
      <p>도메인 추가는 사용자·앱 로그인 정합성을 유지하는 필수 선행 작업입니다.</p>
      <p>메일, 팀즈 등 서비스별 별칭과 충돌 여부도 검토하세요.</p>
      <p>외부 테넌트와 동일 도메인 사용 시도는 허용되지 않습니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/entra/fundamentals/add-custom-domain">Add and verify a custom domain in Entra ID</a></p>
    `
  },

  // 170 — OU filtering + group-based sync (Yes/No)
  {
    id: 170,
    title: "OU 필터링 및 그룹 기반 동기화 결과 확인",
    promptHtml: `
      <p>Your network contains an on-premises Active Directory domain and a Microsoft 365 subscription.
      The domain contains the users and groups shown in the tables.
      ${IMG_Q170_1 ? `<p><img src="${IMG_Q170_1}" style="max-width:100%"></p>` : ""}
      The domain contains the groups shown in the following table.
      ${IMG_Q170_2 ? `<p><img src="${IMG_Q170_2}" style="max-width:100%"></p>` : ""}
      You are deploying Azure AD Connect and configure Domain and OU filtering as shown in the exhibit.
      ${IMG_Q170_3 ? `<p><img src="${IMG_Q170_3}" style="max-width:100%"></p>` : ""}
      For each statement, select Yes if it is true. Otherwise, select No.
      NOTE: Each correct selection is worth one point.</p>
      ${IMG_Q170_4 ? `<p><img src="${IMG_Q170_4}" style="max-width:100%"></p>` : ""}
    `,
    statements: [
      "User1 syncs to Azure AD.",
      "User2 syncs to Azure AD.",
      "Group2 syncs to Azure AD."
    ],
    options: ["Yes", "No"],
    correctAnswers: ["Yes", "No", "No"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>OU 필터링에서 선택된 OU만 동기화 대상이 됩니다.</p>
      <p>그룹 기반 필터링은 지정된 그룹의 직접 멤버만 포함하며 중첩 그룹은 무시됩니다.</p>
      <p>따라서 Group1의 직접 멤버인 User1은 동기화되고, Group2 멤버인 User2와 Group2 자체는 제외됩니다.</p>
      <p>필요 시 그룹 기반 대신 OU 포함을 확장하여 관리 복잡도를 낮출 수 있습니다.</p>
      <p>설정 변경 후 전체 동기화(Full sync)로 빠르게 반영하세요.</p>
      <p>동기화 로그와 Connect Health로 결과를 검증하는 것이 좋습니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/entra/identity/hybrid/connect/how-to-connect-sync-configure-filtering">Azure AD Connect: Configure filtering</a></p>
    `
  },
  {
    id: 171,
    title: "자동 온보딩 조건",
    promptHtml: `
    <p>You have a Microsoft J65 E5 subscription.<br>
    You integrate Microsoft Defender for Endpoint with Microsoft Intune.<br>
    You need to ensure that devices automatically onboard to Defender for Endpoint when they are enrolled in Intune.<br>
    Solution: You enable co-management.<br>
    Does this meet the goal?</p>
    `,
    type: "single",
    options: ["A. Yes", "B. No"],
    correctAnswers: ["B. No"],,
    explanationHtml: `
      <h3>Explanation</h3>
      <p>이유: Co-management는 Intune 자동 온보딩 메커니즘이 아니며, 올바른 방법은 Intune의 Device configuration profile을 사용하는 것입니다.</p>
      <p><a href="https://learn.microsoft.com/en-us/microsoft-365/security/defender-endpoint/configure-endpoint-intune">Microsoft Learn: Configure onboarding for Microsoft Defender for Endpoint with Intune</a></p>
    `
  },
    // 172
  {
    id: 172,
    title: "PII 문서 식별 및 보고",
    promptHtml: `
      <p>You plan to implement Microsoft Purview policies to meet the following requirements:<br>
      Identify documents that are stored in Microsoft Teams and SharePoint that contain Personally Identifiable Information (PII).<br>
      Report on shared documents that contain PII.<br>
      What should you create?</p>
    `,
    type: "single",
    options: [
      "A. a data loss prevention (DLP) policy",
      "B. a retention policy",
      "C. a sensitivity label policy",
      "D. a supervision policy"
    ],
    correctAnswers: ["A. a data loss prevention (DLP) policy"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>DLP 정책은 미리 정의된 민감 정보 유형(SIT)을 사용해 PII가 포함된 콘텐츠를 탐지하고 정책 팁, 경고, 보고를 제공합니다.</p>
      <p>Exchange, SharePoint, OneDrive, Teams 등 여러 위치에서 일관된 감지를 수행할 수 있습니다.</p>
      <p>감사/경보와 결합하면 탐지 내역을 추적하고 대응 흐름을 만들 수 있습니다.</p>
      <p>보존 정책은 보관/삭제 수명주기 관리용이며 탐지/차단 목적이 아닙니다.</p>
      <p>라벨은 분류/보호에 초점으로, PII 보고와 직접 일치하지 않습니다.</p>
      <p><a href="https://www.notion.so/29edbd591ead8056b27cfcbb48aac914">Create DLP policies and use built-in sensitive info types</a></p>
    `
  },

  // 173
  {
    id: 173,
    title: "Service Health 조회 권한 부여",
    promptHtml: `
      <p>You have a Microsoft 365 subscription.<br>
      You view the Service health Overview as shown in the following exhibit.</p>
      ${IMG_Q173_1 ? `<p><img src="${IMG_Q173_1}" style="max-width:100%"></p>` : ""}
      You need to ensure that a user named User1 can view the advisories to investigate service health issues.<br>
      Which role should you assign to User1?</p>
    `,
    type: "single",
    options: [
      "A. Message Center Reader",
      "B. Reports Reader",
      "C. Service Support Administrator",
      "D. Compliance Administrator"
    ],
    correctAnswers: ["C. Service Support Administrator"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Service Support Administrator는 서비스 상태(Advisories, Incidents) 보기와 지원 요청 생성 권한을 보유합니다.</p>
      <p>Message Center Reader는 변경 공지만, Reports Reader는 사용/활동 보고만 열람합니다.</p>
      <p>규정 준수 관리자는 Purview 영역 권한으로 서비스 상태 열람과 다릅니다.</p>
      <p>역할 부여 후 권한 전파까지 몇 분이 걸릴 수 있습니다.</p>
      <p><a href="https://www.notion.so/29edbd591ead8083b82ac78141de45e7">About admin roles in Microsoft 365</a></p>
    `
  },

  // 174
  {
    id: 174,
    title: "자동 레이블링 정책 배포 전 단계",
    promptHtml: `
      <p>You have a Microsoft 365 E5 tenant.<br>
      You create an auto-labeling policy to encrypt emails that contain a sensitive info type. You specify the locations where the policy will be applied.<br>
      You need to deploy the policy.<br>
      What should you do first?</p>
    `,
    type: "single",
    options: [
      "A. Review the sensitive information in Activity explorer",
      "B. Turn on the policy",
      "C. Run the policy in simulation mode",
      "D. Configure Azure Information Protection analytics"
    ],
    correctAnswers: ["C. Run the policy in simulation mode"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>자동 레이블링을 바로 적용하면 대량의 문서에 즉시 영향이 발생할 수 있으므로 시뮬레이션 모드로 탐지 결과를 먼저 검증합니다.</p>
      <p>시뮬레이션은 라벨·규칙이 정확한지, 과잉 라벨링이 없는지 확인하는 안전한 방법입니다.</p>
      <p>검증 후 Enforce로 전환해 실제 라벨을 적용합니다.</p>
      <p>라벨 발행이나 분류기 학습은 전제 조건일 수 있으나 강제 전 시뮬레이션이 권장 절차입니다.</p>
      <p><a href="https://www.notion.so/29edbd591ead80b69f02fa006927c781">Auto-labeling policies — simulation mode</a></p>
    `
  },

  // 175 — pair
  {
    id: 175,
    title: "Co-management 지원을 위한 구성",
    promptHtml: `
      <p>Your on-premises network contains an Active Directory domain and a Microsoft Endpoint Configuration Manager site.<br>
      You have a Microsoft 365 E5 subscription that uses Microsoft Intune.<br>
      You use Azure AD Connect to sync user objects and group objects to Azure Directory (Azure AD) Password hash synchronization is disabled.<br>
      You plan to implement co-management.<br>
      You need to configure Azure AD Connect and the domain to support co-management.<br>
      What should you do? To answer, select the appropriate options in the answer area.<br>
      NOTE: Each correct selection is worth one point.</p>
      ${IMG_Q175_1 ? `<p><img src="${IMG_Q175_1}" style="max-width:100%"></p>` : ""}
    `,
    type: "pair",
    pairLabels: [
      "To configure Azure AD Connect",
      "To configure the domain"
    ],
    pairOptionsLeft: [
      "Configure hybrid Azure AD join",
      "enable device writeback",
      "Enable password hash synchronization"
    ],
    pairOptionsRight: [
      "Add an alternative UPN suffix",
      "Register a service connection point(SCP)",
      "Register a service principal Name(SPN)"
    ],
    pairAnswer: [
      "Configure hybrid Azure AD join",
      "Register a service connection point(SCP)"
    ],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>공동 관리를 위해 도메인 장치를 하이브리드 Azure AD 조인 상태로 만들고, AAD Connect에서 SCP를 구성해야 합니다.</p>
      <p>SCP는 장치가 Azure AD에 자신의 테넌트를 인지하도록 돕습니다.</p>
      <p>단순 AAD 등록은 코매니지먼트 전제 조건을 충족하지 못합니다.</p>
      <p>감사·디바이스 상태는 dsregcmd /status와 Intune 리포트로 검증하세요.</p>
      <p><a href="https://www.notion.so/29edbd591ead80e6b4c3d3512825b256">Plan hybrid Azure AD join for co-management</a></p>
    `
  },

  // 176
  {
    id: 176,
    title: "사용자 메일함 활동 모니터링 설정",
    promptHtml: `
      <p>You have a Microsoft 365 E5 subscription.<br>
      You need to use Microsoft Defender for Cloud Apps to monitor user mailbox activities.<br>
      What should you do?</p>
    `,
    type: "single",
    options: [
      "A. Create an activity policy.",
      "B. Enable mailbox audit logging.",
      "C. Create an app connector for Microsoft 365.",
      "D. Create an access policy."
    ],
    correctAnswers: ["C. Create an app connector for Microsoft 365"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Defender for Cloud Apps(DCAS)에 Microsoft 365 앱 커넥터를 추가하면 Exchange/SharePoint/OneDrive 활동이 수집됩니다.</p>
      <p>메일박스 감사는 감사 이벤트 저장을 위한 전제일 수 있으나 DCAS로 연동하려면 커넥터 구성이 필요합니다.</p>
      <p>Safe Links나 보존 레이블은 탐지·수집과 목적이 다릅니다.</p>
      <p>커넥터 연결 후 활동 정책/경고를 정의하여 이상 징후를 탐지하세요.</p>
      <p><a href="https://www.notion.so/29edbd591ead80628bcfd9a07c42295a">Connect Microsoft 365 apps to Defender for Cloud Apps</a></p>
    `
  },

  // 177
  {
    id: 177,
    title: "Endpoint DLP 지원 플랫폼",
    promptHtml: `
      <p>You have a Microsoft 365 E5 subscription and use Microsoft Purview.<br>
      The subscription contains the devices shown in the following table.<br>
      ${IMG_Q177_1 ? `<p><img src="${IMG_Q177_1}" style="max-width:100%"></p>` : ""}
      All the devices are onboarded to Microsoft Defender for Endpoint.<br>
      You plan to deploy Endpoint data loss prevention (Endpoint DLP) policies.<br>
      Which devices can be protected by using the DLP policies?</p>
    `,
    type: "single",
    options: [
      "A. Device1 only",
      "B. Device1 and Device2 only",
      "C. Device1, Device2, and Device 3 only",
      "D. Device1, Device3, and Device 4 only",
      "E. Device1, Device2, Device3, and Device4"
    ],
    correctAnswers: ["B. Device1 and Device2 only"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Endpoint DLP는 Windows 10/11 및 macOS(Catalina 10.15+)를 지원합니다.</p>
      <p>Linux는 현재 Endpoint DLP 대상이 아닙니다.</p>
      <p>에이전트/신호 연결 요건과 브라우저 플러그인 정책을 함께 준비해야 합니다.</p>
      <p>테넌트 연결(Defender 통합)과 롤아웃 범위를 점진적으로 늘리세요.</p>
      <p><a href="https://www.notion.so/29edbd591ead80bc84dce07e6bd2d135">Endpoint DLP supported platforms</a></p>
    `
  },

  // 178
  {
    id: 178,
    title: "Intune 비활성 장치 자동 정리 최소 일수",
    promptHtml: `
      <p>You have a Microsoft 365 E5 subscription that uses Microsoft intune.<br>
      in the Microsoft Endpoint Manager admin center, you discover many stale and inactive devices, <br>
      You enable device clean-up rules What can you configure as the minimum number of days before a device a removed automatically?</p>
    `,
    type: "single",
    options: [
      "A. 10",
      "B. 30",
      "C. 45",
      "D. 90"
    ],
    correctAnswers: ["B. 30"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Intune의 자동 정리(Auto clean-up) 기능은 최소 30일 비활성 조건부터 설정이 가능합니다.</p>
      <p>값을 너무 낮추면 일시적 비활성 장치도 삭제될 수 있어 주의해야 합니다.</p>
      <p>삭제는 Intune 개체에 한하며 AAD 디바이스 삭제와 동기화 여부를 별도로 확인해야 합니다.</p>
      <p>운영 환경에서 파일럿으로 영향 범위를 검증하세요.</p>
      <p><a href="https://www.notion.so/29edbd591ead803ab6f2cca452e6ae51">Automatically delete stale devices in Intune</a></p>
    `
  },

  // 179
  {
    id: 179,
    title: "최근 30일간 사용된 클라우드 앱 식별",
    promptHtml: `
      <p>You have a Microsoft 365 E5 subscription that contains devices onboarded to Microsoft Defender for Endpoint.<br>
      You integrate Microsoft Defender for Cloud Apps with Defender for Endpoint.<br>
      You need identify which cloud apps and services were used most during the last 30 days What should you do?</p>
    `,
    type: "single",
    options: [
      "A. Generate a Cloud Discovery snapshot report.",
      "B. Generate a monthly security summary report",
      "C. Create a threat analytics alert notification.",
      "D. Generate a Cloud Discovery executive report"
    ],
    correctAnswers: ["D. Generate a Cloud Discovery executive report"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>Defender for Cloud Apps의 Cloud Discovery executive report는 최근 30일 기준 앱 사용 요약을 제공합니다.</p>
      <p>Shadow IT, 카테고리, 위험 등급 등을 한눈에 파악할 수 있습니다.</p>
      <p>로그 수집 방식은 HTTP 로그 업로드 또는 네이티브 커넥터를 사용할 수 있습니다.</p>
      <p>정책으로 위험 앱을 차단하거나 모니터링할 수 있습니다.</p>
      <p><a href="https://www.notion.so/29edbd591ead80529ad4cbb00647e909">Cloud Discovery overview and executive report</a></p>
    `
  },

  // 180 — pair
  {
    id: 180,
    title: "Group1, Group4의 그룹 구성원 자격 판별",
    promptHtml: `
      <p> You have a Microsoft 365 E5 subscription that contains the groups shown in the following table.
      ${IMG_Q180_1 ? `<p><img src="${IMG_Q180_1}" style="max-width:100%"></p>` : ""}
      Which groups can be members of Group1 and Group4? To answer, select the appropriate options in the answer area.<br>
      NOTE: Each correct selection is worth one point.</p>
      ${IMG_Q180_2 ? `<p><img src="${IMG_Q180_2}" style="max-width:100%"></p>` : ""}
    `,
    type: "pair",
    pairLabels: [
      "Group1",
      "Group4"
    ],
    pairOptionsLeft: [
      "None of the groups",
      "Group2 only",
      "Group2 and Group4 only",
      "Group2, Group4, Group5, and Group6 only",
      "Group2, Group3, Group4, Group5, and Group6"
    ],
    pairOptionsRight: [
      "None of the groups",
      "Group5 only",
      "Group3 and Group5 only",
      "Group1, Group2, Group3, and Group5 only",
      "Group1, Group2, Group3, Group5, and Group6"
    ],
    pairAnswer: [
      "None",
      "Group3, Group5"
    ],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>표의 관계도를 해석하면 Group1은 다른 그룹의 멤버가 아니며, Group4는 Group3과 Group5의 멤버입니다.</p>
      <p>그룹 중첩은 권한 전파에 영향을 주므로 최소 권한으로 설계해야 합니다.</p>
      <p>동적 그룹은 규칙 평가 시 지연이 있을 수 있습니다.</p>
      <p>정기적으로 멤버십 검토(Access review)를 수행하세요.</p>
      <p><a href="https://www.notion.so/29edbd591ead80baa5e7c3a953353a8c">Evaluate group membership</a></p>
    `
  },

  // 181 — pair
  {
    id: 181,
    title: "민감 정보 유형 생성 및 워터마크 추가",
    promptHtml: `
      <p>You have a Microsoft 365 E5 subscription that contains a Microsoft SharePoint site named Sitel.<br>
      You need to perform the following tasks:<br>
      &nbsp;* Create a sensitive info type named SIT1 based on a regular expression.<br>
      &nbsp;* Add a watermark to all new documents that are matched by SIT1.<br>
      Which two settings should you use in the Microsoft Purview compliance portal? To answer, select the appropriate settings in the answer area.<br>
      NOTE: Each correct selection is worth one point.</p>
      ${IMG_Q181_1 ? `<p><img src="${IMG_Q181_1}" style="max-width:100%"></p>` : ""}
    `,
    type: "pair",
    pairLabels: [
      "Create SIT1",
      "Add watermark"
    ],
    pairOptions: [
      "Compliance Manager",
      "Data classification",
      "Data connectors",
      "Reports",
      "Catalog",
      "App governance",
      "Audit",
      "Content search",
      "Data loss prevention",
      "eDiscovery",
      "Data lifecycle management",
      "Information protection",
      "Information barriers",
      "Insider risk management",
      "Records management",
      "Privacy risk management",
      "Subject rights requests"
    ],
    pairAnswer: [
      "Data classification",
      "Information protection"
    ],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>사용자 지정 민감 정보 유형은 Purview의 Data classification에서 생성/관리합니다.</p>
      <p>워터마크/헤더/푸터는 민감도 레이블의 보호 설정으로, Information protection에서 구성합니다.</p>
      <p>둘은 서로 다른 워크스페이스에 존재하므로 작업 위치를 구분해야 합니다.</p>
      <p>새 SIT는 자동/수동 라벨링 규칙에서 조건으로 사용됩니다.</p>
      <p><a href="https://www.notion.so/29fdbd591ead804f93dde831ad609899">Create custom SIT and configure label content marking</a></p>
    `
  },

  // 182 — pair
  {
    id: 182,
    title: "파일 삭제 원인 식별용 필터 구성",
    promptHtml: `
      <p>You have a Microsoft 365 E5 subscription that contains a user named User1.<br>
      User1 has a Windows 11 device named Device1 that is onboarded to Microsoft Defender for Endpoint.<br>
      User1 reports that various files were deleted from Device1.<br>
      You need to create a filter to identify which service deleted the files.<br>
      Which settings should you configure, and which type of filter should you create in the Microsoft Defender portal? To answer, select the appropriate options in the answer area.<br>
      NOTE: Each correct selection is worth one point.</p>
      ${IMG_Q182_1 ? `<p><img src="${IMG_Q182_1}" style="max-width:100%"></p>` : ""}
    `,
    type: "pair",
    pairLabels: [
      "Settings",
      "Filter type"
    ],
    pairOptionsLeft: [
      "Devices",
      "Identities",
      "Threat analytics"
    ],
    pairOptionsRight: [
      "Timeline for Device1",
      "Activity log for User1",
      "Attack surfaces"
    ],
    pairAnswer: [
      "Devices",
      "Timeline for Device1"
    ],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>특정 디바이스에서 발생한 삭제 원인을 좁히려면 ‘Devices’ 뷰에서 해당 디바이스의 타임라인을 확인하는 것이 효과적입니다.</p>
      <p>타임라인은 이벤트 순서를 시간축으로 보여주어 원인 행위를 추적하기 쉽습니다.</p>
      <p>파일 이벤트 전용 필터는 범위를 좁히지만 타임라인 연관성을 보기 어렵습니다.</p>
      <p>정책 일치만으로는 사용자 행위/프로세스 맥락을 충분히 판단하기 어렵습니다.</p>
      <p><a href="https://www.notion.so/29fdbd591ead80e39d12d8c2bd123420">Use activity explorer to investigate file activities</a></p>
    `
  },

  // 183 — pair
  {
    id: 183,
    title: "Group별 인증 방식 추천",
    promptHtml: `
      <p>You have a Microsoft 365 E5 subscription that contains two security groups named Group1 and Group2.<br>
      You need to recommend an authentication solution that meets the following requirements:<br>
      &nbsp;* Members of Group1 must be able to authenticate by using a hardware token.<br>
      &nbsp;* Members of Group2 must be able to authenticate by using a public key infrastructure (PKI).<br>
      Which authentication method should you recommend for each group? To answer, drag the appropriate methods to the correct groups.<br>
      Each method may be used once, more than once, or not at all.<br>
      You may need to drag the split bar between panes or scroll to view content.<br>
      NOTE: Each correct selection is worth one point.</p>
      ${IMG_Q183_1 ? `<p><img src="${IMG_Q183_1}" style="max-width:100%"></p>` : ""}
    `,
    type: "pair",
    pairLabels: [
      "Group1",
      "Group2"
    ],
    pairOptions: [
      "Passkey (FIDO2)",
      "Certificate-based authentication",
      "Email OTP",
      "Microsoft Authenticator",
      "Temporary Access Pass",
      "Third-party software OATH tokens",
      ],
    pairAnswer: [
      "Third-party software OATH tokens",
      "Certificate-based authentication"
    ],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>보안/환경 요구에 따라 그룹별로 권장 인증 수단이 다릅니다.</p>
      <p>오프라인/모바일 제약 환경에서는 소프트웨어 OATH 토큰이 현실적입니다.</p>
      <p>디바이스와 신뢰 루트가 있는 엔터프라이즈 환경에서는 CBA가 강력한 피싱 저항을 제공합니다.</p>
      <p>SMS/이메일 OTP는 피싱·가로채기 위험이 커 우선권이 낮습니다.</p>
      <p><a href="https://www.notion.so/29fdbd591ead807c8070e30636535e28">Choose authentication methods in Microsoft Entra</a></p>
    `
  },

  // 184 — multi(정답 케이스 2개 제시된 문제)
  {
    id: 184,
    title: "User5의 사용자 관리 및 암호 재설정 권한 식별",
    promptHtml: `
      <p>You have a Microsoft 365 subscription that uses an Azure AD tenant named contoso.com.<br>
      The tenant contains the users shown in the following table.<br>
      ${IMG_Q184_1 ? `<p><img src="${IMG_Q184_1}" style="max-width:100%"></p>` : ""}
      You add another user named User5 to the User Administrator role.<br>
      You need to identify which two management tasks User5 can perform.<br>
      <strong>Which two tasks should you identify?</strong> Each correct answer presents a complete solution.<br>
      NOTE: Each correct selection is worth one point.</p>
    `,
    type: "multi",
    multiOptions: [
      "A. Delete User2 and User4 only.",
      "B. Reset the password of User4 only",
      "C. Reset the password of any user in Azure AD.",
      "D. Delete User1, User2, and User4 only.",
      "E. Reset the password of User2 and User4 only.",
      "F. Delete any user in Azure AD"
    ],
    multiAnswer: [
      "B. Reset the password of User4 only",
      "E. Reset the password of User2 and User4 only"
    ],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>주어진 역할 조합에서 User5는 특정 사용자 암호 재설정은 가능하지만 전역 관리자 역할 부여 같은 권한 상승은 허용되지 않습니다.</p>
      <p>역할의 범위(scope)와 제한을 정확히 확인해야 합니다.</p>
      <p>비상 계정과 관리자 계정에 대한 재설정 권한은 엄격히 통제해야 합니다.</p>
      <p>감사 로그와 승인 워크플로를 적용해 변경을 추적하세요.</p>
      <p><a href="https://www.notion.so/29fdbd591ead80d39b11d5d7dca4e3e7">Admin role capabilities and restrictions</a></p>
    `
  },

  // 185
  {
    id: 185,
    title: "Device1에 적용되는 정책 우선순위 판별",
    promptHtml: `
      <p>You have a Microsoft 365 tenant that contains a Windows 10 device named Device1 and the Microsoft Endpoint Manager policies shown in the following table.<br>
      ${IMG_Q185_1 ? `<p><img src="${IMG_Q185_1}" style="max-width:100%"></p>` : ""}
      The policies are assigned to Device1.<br>
      Which policy settings will be applied to Device1?</p>
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
      <p>동일 설정 충돌 시 Intune은 병합하지 않고 우선순위가 높은 하나의 정책만 적용합니다.</p>
      <p>따라서 Policy2가 우선이면 해당 설정만 최종 반영됩니다.</p>
      <p>대상 분리/필터를 활용해 충돌을 줄이는 것이 바람직합니다.</p>
      <p>결과 적용값은 리포트의 Resultant settings에서 확인할 수 있습니다.</p>
      <p><a href="https://www.notion.so/29fdbd591ead80288acafa26fd05f050">Policy precedence in Intune</a></p>
    `
  },

  // 186
  {
    id: 186,
    title: "Azure AD Connect 자격 증명 수정이 동기화 문제를 해결하는지 여부",
    promptHtml: `
      <p>You have synchronization issues with Azure AD Connect.<br>
      You consider updating the Azure AD Connect credentials.<br>
      Will this fix issues caused by OU filtering or scoping configuration?</p>
    `,
    type: "single",
    options: ["A. Yes","B. No"],
    correctAnswers: ["B. No"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>OU 필터링/스코프 구성 오류는 자격 증명 변경으로 해결되지 않습니다.</p>
      <p>동기화 규칙과 필터를 조정해야 하며, 자격 증명은 연결 실패나 인증 오류에만 관련됩니다.</p>
      <p>동기화 규칙 편집기에서 precedence와 범위를 확인하세요.</p>
      <p>변경 후 초기 동기화를 수행해 결과를 검증합니다.</p>
      <p><a href="https://www.notion.so/29fdbd591ead8027a153f6f871ce26f0">Troubleshoot missing users after directory synchronization</a></p>
    `
  },

  // 187 — yn matrix
  {
    id: 187,
    title: "관리 단위(AU) 및 역할별 권한 판별",
    promptHtml: `
      <p>You evaluate the following statements about Administrative Units (AUs) and role assignments.<br>
      For each statement, select Yes if the statement is true; otherwise, select No.</p>
    `,
    statements: [
      "Statement 1 is true.",
      "Statement 2 is true.",
      "Statement 3 is true."
    ],
    options: ["Yes","No"],
    correctAnswers: ["Yes","No","Yes"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>관리 단위는 테넌트 내 일부 사용자/그룹/디바이스를 세분화해 위임 관리에 사용됩니다.</p>
      <p>특정 조합의 진위는 표의 전제에 따라 1과 3만 참으로 평가됩니다.</p>
      <p>역할은 AU 범위로 제한하여 최소 권한 원칙을 달성할 수 있습니다.</p>
      <p>테넌트 전역 역할과 AU 범위 역할을 혼동하지 않도록 주의해야 합니다.</p>
      <p><a href="https://www.notion.so/29fdbd591ead80a2906bf41b9a7328b9">Administrative units and scoped role assignments</a></p>
    `
  },

  // 188 — pair
  {
    id: 188,
    title: "Group1·Group2별 MFA 적용 조건 구성",
    promptHtml: `
      <p>You need to configure Conditional Access so that both Group1 and Group2 are required to use multi-factor authentication under the specified conditions.<br>
      Select the policy area for each group.</p>
    `,
    type: "pair",
    pairLabels: ["Group1","Group2"],
    pairOptionsLeft: [
      "Conditional Access",
      "Identity Protection",
      "Security defaults"
    ],
    pairOptionsRight: [
      "Conditional Access",
      "Identity Protection",
      "Security defaults"
    ],
    pairAnswer: [
      "Conditional Access",
      "Conditional Access"
    ],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>두 그룹의 특정 조건(MFA 요구)을 정확히 구현하려면 조건부 액세스 정책이 필요합니다.</p>
      <p>Identity Protection은 위험 기반 정책이며, Security defaults는 세밀한 조건 제어가 어렵습니다.</p>
      <p>그룹/앱/위치/디바이스 준수 상태 등을 조건으로 조합하세요.</p>
      <p>보고서 전용 모드로 검증 후 강제로 전환하는 것이 안전합니다.</p>
      <p><a href="https://www.notion.so/29fdbd591ead80b6b5f4eaf791d5b177">Require MFA with Conditional Access</a></p>
    `
  },

  // 189
  {
    id: 189,
    title: "1분 내 50개 이상 파일 다운로드 시 알림 구성",
    promptHtml: `
      <p>You need to generate an alert when a user downloads more than 50 files within one minute from sanctioned apps.<br>
      What should you create?</p>
    `,
    type: "single",
    options: [
      "A. a file policy",
      "B. an alert policy",
      "C. an activity policy",
      "D. a DLP policy"
    ],
    correctAnswers: ["C. an activity policy"],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>대량 다운로드는 사용자 동작 기준이므로 Defender for Cloud Apps의 Activity policy로 임계값/시간 창을 설정합니다.</p>
      <p>File policy는 파일 속성/공유 상태 평가에 적합합니다.</p>
      <p>DLP 정책은 콘텐츠 기반 유출 방지에 초점입니다.</p>
      <p>알림 정책은 근본 조건 정의 없이 단순 알림에 그칠 수 있습니다.</p>
      <p><a href="https://www.notion.so/29fdbd591ead809a9c2de312b12bfc5a">Create activity policies (mass download)</a></p>
    `
  },

  // 190 — pair
  {
    id: 190,
    title: "Defender Vulnerability Management 플랫폼별 적용 범위",
    promptHtml: `
      <p>You plan to use Microsoft Defender Vulnerability Management (MDVM).<br>
      For each platform, identify whether detection and configuration assessment are supported.</p>
      ${IMG_Q190_1 ? `<p><img src="${IMG_Q190_1}" style="max-width:100%"></p>` : ""}
    `,
    type: "pair",
    pairLabels: [
      "Detection coverage",
      "Configuration assessment"
    ],
    pairOptionsLeft: [
      "Device1, Device2, and Device3 only",
      "Device1 and Device2 only",
      "All listed devices"
    ],
    pairOptionsRight: [
      "Device1 and Device2 only",
      "Device1, Device2, and Device3 only",
      "All listed devices"
    ],
    pairAnswer: [
      "Device1, Device2, and Device3 only",
      "Device1 and Device2 only"
    ],
    explanationHtml: `
      <h3>Explanation</h3>
      <p>MDVM은 Windows, macOS, 일부 Linux에 대한 취약점 탐지를 제공하지만 구성 평가 범위는 플랫폼 별로 제한됩니다.</p>
      <p>표의 시나리오에서는 탐지는 세 플랫폼에 적용되나 구성 평가는 Windows/macOS까지만 가능하다는 가정입니다.</p>
      <p>지원 범위는 에디션/커널 버전/에이전트 채널에 따라 달라질 수 있습니다.</p>
      <p>최신 지원 표를 검토해 정확한 적용 범위를 확인하세요.</p>
      <p><a href="https://www.notion.so/29fdbd591ead80bab225f89b5350ed1a">Defender Vulnerability Management — supported platforms</a></p>
    `
  }
  

] // ref: 


