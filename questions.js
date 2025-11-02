// ./questions.js
// 주의: src에는 순수 URL만. 대괄호/괄호(마크다운 문법) 넣지 마세요.
const IMG_SRC_39 = "https://i.imgur.com/wDHuHAe.png";
const IMG_SRC_49 = "https://i.imgur.com/64E6Eg7.png";

window.questions = [
  {
    id: 39,
    title: "Private Store 접근 권한 평가",
    promptHtml: `
      <p>You have a Microsoft 365 E5 tenant that contains the users shown in the following table.</p>
      <p>
        <img src="${IMG_SRC_39}"
             alt="Users and groups table for App1 availability"
             referrerpolicy="no-referrer"
             crossorigin="anonymous"
             style="max-width:100%;height:auto;border:1px solid #e5e7eb;border-radius:8px;">
      </p>
      <p>You perform the following actions:</p>
      <ul>
        <li>Provision the private store in Microsoft Store for Business.</li>
        <li>Add an app named App1 to the private store.</li>
        <li>Set Private store availability for App1 to <strong>Specific groups</strong>, and then select <strong>Group3</strong>.</li>
      </ul>
      <p>For each of the following statements, select <strong>Yes</strong> if the statement is true. Otherwise, select <strong>No</strong>.<br>
      NOTE: Each correct selection is worth one point.</p>
    `,
    statements: [
      "User1 can install App1 from the private store.",
      "User2 can install App1 from the private store.",
      "User3 can install App1 from the private store."
    ],
    correctAnswers: ["No", "No", "Yes"],
    options: ["Yes", "No"]
  },
  {
    id: 49,
    title: "그룹에 할당해야 하는 역할",
    promptHtml: `
      <p>You have a Microsoft 365 E5 subscription that contains two groups named <strong>Group1</strong> and <strong>Group2</strong>.</p>
      <p>You need to ensure that each group can perform the tasks shown in the following table.</p>
      <p>
        <img src="${IMG_SRC_49}"
             alt="Tasks and choices for Group1 and Group2"
             referrerpolicy="no-referrer"
             crossorigin="anonymous"
             style="max-width:100%;height:auto;border:1px solid #e5e7eb;border-radius:8px;">
      </p>
      <p>The solution must use the <strong>principle of least privilege</strong>.<br>
      Which role should you assign to each group?<br>
      NOTE: Each correct selection is worth one point.</p>
    `,
    pairLabels: ["Group1 role", "Group2 role"],
    pairOptions: [
      "Billing Administrator",
      "User Administrator",
      "Global Administrator",
      "Service Support Administrator",
      "Reports Reader"
    ],
    pairAnswer: ["Billing Administrator", "User Administrator"]
  }
];