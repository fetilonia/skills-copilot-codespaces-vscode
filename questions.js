// 외부 CDN "직접 이미지 링크"로 교체하세요.
const IMG_SRC_39 = "https://i.imgur.com/wDHuHAe.png";

// 49번: 표 이미지와 보기 이미지 분리
const IMG_SRC_49_TABLE = "https://i.imgur.com/yourTable.png";
const IMG_SRC_49_CHOICES = "https://i.imgur.com/yourChoices.png";

window.questions = [
    {
        id: 39,
        title: "Private Store 접근 권한 평가",
        promptHtml: `
      <p>You have a Microsoft 365 E5 tenant that contains the users shown in the following table.</p>
      <p>
        <img src="${IMG_SRC_39}"
             alt="Users and groups table"
             referrerpolicy="no-referrer"
             crossorigin="anonymous"
             style="max-width:100%;height:auto;border:1px solid #e5e7eb;border-radius:8px;">
      </p>
      <p>You perform the following actions:</p>
      <ul>
        <li>Provision the private store in Microsoft Store for Business.</li>
        <li>Add an app named App1 to the private store.</li>
        <li>Set availability to <strong>Specific groups</strong> and select <strong>Group3</strong>.</li>
      </ul>
      <p>For each statement, select <strong>Yes</strong> if true. Otherwise, select <strong>No</strong>.</p>
    `,
        statements: [
            "User1 can install App1 from the private store.",
            "User2 can install App1 from the private store.",
            "User3 can install App1 from the private store."
        ],
        correctAnswers: ["No", "No", "Yes"],
        options: ["Yes", "No"],
        explanationHtml: `
      <h3>Explanation</h3>
      <ul>
        <li>Private store를 특정 그룹으로 제한하면 해당 그룹 구성원만 앱을 볼 수 있고 설치 가능.</li>
        <li>User1, User2는 Group3가 아니므로 설치 불가 → No.</li>
        <li>User3는 Group3 구성원 → Yes.</li>
      </ul>
    `
    },
    {
        id: 49,
        title: "그룹에 할당해야 하는 역할",
        promptHtml: `
      <p>You have a Microsoft 365 E5 subscription with <strong>Group1</strong> and <strong>Group2</strong>.</p>
      <p>Each group must perform the tasks in the table:</p>
      <p>
        <img src="${IMG_SRC_49_TABLE}"
             alt="Tasks table"
             referrerpolicy="no-referrer"
             crossorigin="anonymous"
             style="max-width:100%;height:auto;border:1px solid #e5e7eb;border-radius:8px;">
      </p>
      <p>Use the <strong>principle of least privilege</strong>. Which role should you assign to each group?</p>
      <p>
        <img src="${IMG_SRC_49_CHOICES}"
             alt="Role choices"
             referrerpolicy="no-referrer"
             crossorigin="anonymous"
             style="max-width:100%;height:auto;border:1px solid #e5e7eb;border-radius:8px;">
      </p>
    `,
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
      <ul>
        <li><strong>Group1</strong>: 서비스 요청 관리, 구독 관리, 구매 등 → <strong>Billing Administrator</strong>가 최소 권한으로 충족.</li>
        <li><strong>Group2</strong>: 사용자 및 그룹 추가, 라이선스 할당, 비밀번호 정책 → <strong>User Administrator</strong>가 적합.</li>
        <li>Global Administrator는 최소 권한 원칙에 어긋남.</li>
      </ul>
    `
    }
];