$(document).ready(function () {
  // 手機版選單icon 出現和隱藏 ＋ 展開收合 
  $('.showmenu').click(function (e) {
    e.preventDefault();
    console.log('showmenu 被點了'); // ← 加這行確認是否有觸發
    $('body').toggleClass('menu-show');
    $('.showmenu').addClass('hidden');
    $('.hidemenu').removeClass('hidden');
  });

  $('.hidemenu').click(function (e) {
    e.preventDefault();
    $('body').toggleClass('menu-show');
    $('.hidemenu').addClass('hidden');
    $('.showmenu').removeClass('hidden');
  });

  // 捲動事件判斷是否顯示按鈕
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('.gotop').fadeIn(); 
    } else {
      $('.gotop').fadeOut(); 
    }
  });
    // 點擊按鈕回到頂部
    $('.gotop a').click(function (e) {
      e.preventDefault();
      $('html, body').stop().animate({ scrollTop: 0 }, 800);
    });
});