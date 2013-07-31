jQuery(function($) {
  var enable_menu = function(){
    $('.doc_toggle').hide();
    $(".doc_toggle[idx='0']").show();
    $('.btn_toggle').click(function() {
      var t_idx = $(this).attr("idx");
      if ($(".doc_toggle[idx='" + t_idx + "']").is(':hidden')) {
        $('.doc_toggle').hide();
        $(".doc_toggle[idx='" + t_idx + "']").show();
      }
      else {
        $('.doc_toggle').hide();
        $(".doc_toggle[idx='" + t_idx + "']").show();
      }
    });

    $('.doc_slide').hide();
    $('.btn_slide').click(function() {
      var s_idx = $(this).attr("idx");
      if (s_idx == "all") {
        if ($("[class^='doc_slide']").is(':hidden')) {
          $("[class^='doc_slide']").slideDown(500);
        } else {
          $("[class^='doc_slide']").slideUp(500);
        }
      } else {
        if ($(".doc_slide[idx='" + s_idx + "']").is(':hidden')) {
          $(".doc_slide[idx='" + s_idx + "']").slideDown(500);
        }
        else {
          $(".doc_slide[idx='" + s_idx + "']").slideUp(500);
        }
      }
    });

    $('.menu_info').hide();
    $('.doc_menu').hide();
    $(".doc_menu[idx='on']").show();
    $('.btn_menu').click(function() {
      var m_idx = $(this).attr("idx");
      if ($(".doc_menu[idx='" + m_idx + "']").is(':hidden')) {
        if ($(".menu_info").is(':hidden')) {
          $(".menu_info").fadeIn(300);
        }
        $("[class^='doc_menu']").hide();
        $(".doc_menu[idx='off']").show();
        $(".doc_menu[idx='" + m_idx + "']").slideDown(500);
      } else {
        $("[class^='doc_menu']").hide();
        $(".info").css('height', "auto");
        $(".menu_info").fadeOut(300);
        $(".doc_menu[idx='on']").show();
      }
    });

    var idx = 0;
    var story_idx = 0;
    $('.doc_story').hide();
    $(".doc_story[idx='0']").show();
    $('.btn_story').click(function() {
      idx = $(this).attr("idx");
      max = $(this).attr("max");
      if (idx == 'rand') {
        story_idx = Math.floor(Math.random() * max);
      }
      if (idx == 'prev' && story_idx > 0) {
        story_idx -= 1;
      }
      if (idx == 'next' && story_idx < (max-1)) {
        story_idx += 1;
      }
      $('.doc_story').hide();
      $(".doc_story[idx='" + story_idx + "']").show();
    });
  }
  $(document).ready(enable_menu);
  $(document).on('page:load', enable_menu);
});
