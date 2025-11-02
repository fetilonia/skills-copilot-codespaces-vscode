// ./questions.js
// 예: Cloudinary/Imgur/jsDelivr 등 외부 CDN의 정적 이미지 URL
const IMG_SRC = "https://your-cdn.example.com/path/to/q39.png";
// 예시들:
// const IMG_SRC = "https://i.imgur.com/yourImageId.png";
// const IMG_SRC = "https://cdn.jsdelivr.net/gh/<user>/<repo>@main/assets/q39.png";

window.questions = [
  {
    id: 39,
    title: "Private Store 접근 권한 평가",
    promptHtml: `
      <p>You have a Microsoft 365 E5 tenant that contains the users shown in the following table.</p>
      <p><img src="${IMG_SRC}" alt="Users and groups table for App1 availability" style="max-width:100%;height:auto;border:1px solid #e5e7eb;border-radius:8px;"></p>
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
  }
];