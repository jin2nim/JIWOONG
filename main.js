// 디데이 카운터 / 기준일시 10월 25일 오후 12시(한국시간)
const targetDate = new Date("2025-10-25T12:00:00+09:00");

                function updateTimer() {
                    const now = new Date();
                    const timeDiff = targetDate - now;

                    if (timeDiff <= 0) {
                        document.getElementById("dday-day").innerText = "00";
                        document.getElementById("dday-hour").innerText = "00";
                        document.getElementById("dday-min").innerText = "00";
                        document.getElementById("dday-left").innerText = "0";
                        clearInterval(timer);
                        return;
                    }

                    // 디데이 카운터 (시간까지 계산)
                    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
                    const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);

                    document.getElementById("dday-day").innerText = String(days).padStart(2, '0');
                    document.getElementById("dday-hour").innerText = String(hours).padStart(2, '0');
                    document.getElementById("dday-min").innerText = String(minutes).padStart(2, '0');

                    // 디데이 카운터 (날짜만 계산 - 아래 써머리)
                    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
                    document.getElementById("dday-left").innerText = daysLeft;
                }

                const timer = setInterval(updateTimer, 1000);
                updateTimer();

// 갤러리 정렬 masonry.js
document.addEventListener("DOMContentLoaded", function () {
                const grid = document.querySelector(".gallery_grid");

                imagesLoaded(grid, function () {
                new Masonry(grid, {
                    itemSelector: "a",
                    columnWidth: ".grid-sizer",
                    gutter: 16,
                    percentPosition: true,
                });
                });
            });