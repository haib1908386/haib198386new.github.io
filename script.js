"use strict";
function handleSubmit() {
  // Lấy giá trị của input email và chuyển sang chữ thường
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();

  // Lấy element của thẻ p hiện có để hiển thị lỗi
  const errorEmail = document.getElementById("error-email");

  // Biểu thức kiểm tra định dạng email hợp lệ
  const checkEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  // Dùng match để kiểm tra email nhập vào có khớp với định dạng hay không
  const check = emailValue.match(checkEmail);
  console.log("email", check);

  // Lấy phần tử chứa thông tin user
  const sectionContent = document.querySelector("#info .section-content");
  console.log("check section", sectionContent);

  // Lấy element để kiểm soát việc hiển thị nút submit
  const submitControl = document.querySelector(".submit-email");

  if (check) {
    // Nếu email hợp lệ, hiển thị phần thông tin user
    sectionContent.style.display = "block";

    // Ẩn nút submit
    submitControl.style.display = "none";

    // Xóa thông báo lỗi
    errorEmail.innerHTML = "";
  } else {
    // Nếu email không hợp lệ, hiển thị thông báo lỗi
    errorEmail.innerHTML = "❗Vui lòng nhập đúng định dạng email";
  }
}

function handleOnMouseOver(element) {
  // Lấy phần tử hiển thị nút "View More"
  const viewMore = element.querySelector(".control-view");

  // Hiển thị nút "View More" khi rê chuột vào
  viewMore.style.display = "inline-block";
}

function handleOnMouseOut(element) {
  // Lấy phần tử hiển thị nút "View More"
  const viewMore = element.querySelector(".control-view");

  // Ẩn nút "View More" khi rê chuột ra khỏi
  viewMore.style.display = "none";

  // Nếu nút không có class "less-more", đảm bảo nút được ẩn
  if (!viewMore.classList.value.includes("less-more")) {
    viewMore.style.display = "none";
  }
}

function handleViewMore(element) {
  // Tìm phần tử cha gần nhất của nút "View More"
  const parentElement = element.closest(".parent");

  // Lấy phần tử nút "View More" trong phần tử cha
  const viewMore = parentElement.querySelector(".control-view");

  // Lấy tất cả các phần tử có class "section-content" trong phần tử cha
  const sectionContent = parentElement.querySelectorAll(".section-content");

  if (viewMore.classList.contains("view-more")) {
    // Nếu nút có class "view-more", hiển thị tất cả nội dung
    sectionContent.forEach((el) => {
      el.style.display = "block"; // Hiển thị nội dung
    });

    // Cập nhật class và văn bản nút thành "less-more"
    viewMore.classList.remove("view-more");
    viewMore.classList.add("less-more");
    viewMore.innerHTML = "Less More"; // Đổi văn bản thành "Thu gọn"
  } else {
    // Nếu nút có class "less-more", ẩn tất cả nội dung
    sectionContent.forEach((el) => {
      el.style.display = "none"; // Ẩn nội dung
    });

    // Cập nhật class và văn bản nút thành "view-more"
    viewMore.classList.remove("less-more");
    viewMore.classList.add("view-more");
    viewMore.innerHTML = "View More"; // Đổi văn bản thành "Xem thêm"
  }
}
