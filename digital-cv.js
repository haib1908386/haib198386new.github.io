// Dữ liệu dự án
const projects = {
  // Thông tin cho dự án 'CV Cá Nhân'
  "CV Cá Nhân": {
    goals: [
      "📗 Xây dựng một trang web CV cá nhân để hiển thị thông tin cá nhân, kỹ năng, và kinh nghiệm.",
      "📗 Tăng khả năng cá nhân hóa CV của người dùng.",
      "📗 Cải thiện trải nghiệm khi nộp hồ sơ online.",
    ],
    scopes: [
      "Người dùng cá nhân cần tạo CV online.",
      "Nhà tuyển dụng sử dụng CV để tìm kiếm thông tin ứng viên.",
      "Đội ngũ thiết kế và phát triển.",
    ],
    team: [
      "👨Thành viên 1: Frontend Developer",
      "👨Thành viên 2: UI/UX Designer",
      "👨Thành viên 3: Project Manager",
    ],
    primary: [
      "Thiết kế giao diện thân thiện, dễ sử dụng.",
      "Hiển thị thông tin cá nhân, kỹ năng, kinh nghiệm làm việc rõ ràng.",
      "Đảm bảo trang web hoạt động tốt trên cả máy tính và di động.",
    ],
    timeline: [
      "📅Tháng 1/2021: Lên ý tưởng và thiết kế giao diện.",
      "📅Tháng 2/2021: Phát triển giao diện chính.",
      "📅Tháng 3/2021: Tối ưu và xử lý lỗi.",
    ],
  },
  // Thông tin cho dự án 'Trang Web Quản Lý Thú Cưng'
  "Trang Web Quản Lý Thú Cưng": {
    goals: [
      "📗 Phát triển một ứng dụng quản lý thú cưng, lưu trữ thông tin như giống, cân nặng, tiêm chủng.",
      "📗 Hỗ trợ chủ nuôi theo dõi tình trạng sức khỏe của thú cưng.",
    ],
    scopes: [
      "Chủ nuôi thú cưng.",
      "Bác sĩ thú y.",
      "Đội ngũ phát triển phần mềm.",
    ],
    team: [
      "👨Thành viên 1: Frontend Developers",
      "👨Thành viên 2: Backend Developer",
      "👨Thành viên 3: Project Manager",
    ],
    primary: [
      "Quản lý thông tin thú cưng hiệu quả.",
      "Giao diện thân thiện cho người dùng.",
      "Đảm bảo lưu trữ dữ liệu an toàn.",
    ],
    timeline: [
      "📅Tháng 3/2021: Nghiên cứu yêu cầu và thiết kế cơ sở dữ liệu.",
      "📅Tháng 4/2021: Phát triển giao diện chính.",
      "📅Tháng 5/2021: Tích hợp chức năng quản lý thông tin.",
    ],
  },
  // Thông tin cho dự án 'Trang Web Xem Tin Tức'
  "Trang Web Xem Tin Tức": {
    goals: [
      "📗 Tạo nền tảng tổng hợp và hiển thị tin tức từ nhiều nguồn khác nhau.",
      "📗 Giúp người dùng tìm kiếm và xem tin tức nhanh chóng.",
    ],
    scopes: [
      "Người dùng cần đọc tin tức.",
      "Đội ngũ biên tập nội dung.",
      "Đội ngũ phát triển phần mềm.",
    ],
    team: [
      "👨Thành viên 1: Frontend Developers",
      "👨Thành viên 2: Backend Developer",
      "👨Thành viên 3: UI/UX Designer",
      "👨Thành viên 4: Project Manager",
    ],
    primary: [
      "Tích hợp API từ các nguồn tin tức khác nhau.",
      "Tạo giao diện tìm kiếm và hiển thị tin tức.",
      "Đảm bảo tốc độ tải nhanh và mượt mà.",
    ],
    timeline: [
      "📅Tháng 6/2021: Nghiên cứu tích hợp API và thiết kế giao diện.",
      "📅Tháng 7/2021: Phát triển chức năng tìm kiếm.",
      "📅Tháng 8/2021: Tối ưu hóa giao diện và hoàn thiện.",
    ],
  },
};

// Hàm điền thông tin dự án
function loadProject(projectName) {
  // Lưu thông tin dự án vào localStorage để hiển thị ở trang khác
  localStorage.setItem("selectedProject", projectName);

  // Chuyển hướng đến trang chi tiết
  window.location.href =
    "digital-cv.html"; /* Điều hướng người dùng tới trang chi tiết dự án */
}
