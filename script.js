document.addEventListener("DOMContentLoaded", function () {
  var today = new Date();
  var date = today.getDate();
  var month = today.getMonth() + 1;

  if (date === 20 && month === 10) {
    document.getElementById("greeting").textContent =
      "Chúc mừng ngày 20/10, Ngày Phụ nữ Việt Nam!";
  }
});
