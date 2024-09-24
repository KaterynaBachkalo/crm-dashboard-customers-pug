document.addEventListener("DOMContentLoaded", function () {
  const pages = document.querySelectorAll(".pagination-page");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  let currentPage = 1;
  const totalPages = 40;

  function updatePagination() {
    pages.forEach((page) => {
      const pageNum = parseInt(page.getAttribute("data-page"));
      if (pageNum === currentPage) {
        page.classList.add("active");
      } else {
        page.classList.remove("active");
      }
    });
  }

  prevBtn.addEventListener("click", function () {
    if (currentPage > 1) {
      currentPage--;
      updatePagination();
    }
  });

  nextBtn.addEventListener("click", function () {
    if (currentPage < totalPages) {
      currentPage++;
      updatePagination();
    }
  });

  pages.forEach((page) => {
    page.addEventListener("click", function () {
      currentPage = parseInt(this.getAttribute("data-page"));
      updatePagination();
    });
  });

  updatePagination();
});
