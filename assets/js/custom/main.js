// START:: LOADER
(function ($) {
  "use strict";
  //Preloader
  window.addEventListener("load", function () {
    var preloadpage = document.getElementById("page_loader");
    preloadpage.style.display = "none";
  });
})(jQuery);
// END:: LOADER

// START:: SIDE MENU
$(".btn_menu").click(function () {
  $(".side_menu_mobile").addClass("showSideMenu");
  $(".OverLaySideMenu").addClass("OverLaySideMenuShow");
  $("body").css("overflow", "hidden");
});
$(".OverLaySideMenu").click(function () {
  $(this).removeClass("OverLaySideMenuShow");
  $(".side_menu_mobile").removeClass("showSideMenu");

  $("body").css("overflow-y", "scroll");
});

// START:: HEADER FIXED
$(function () {
  var pageScroll = 300;
  $(window).scroll(function () {
    var scroll = getCurrentScroll();
    if (scroll >= pageScroll) {
      $("header").addClass("header-scroll-effect");
      $(".side_bar_wrapper").addClass("side_bar_wrapper_sticky");
    } else {
      $("header").removeClass("header-scroll-effect");
      $(".side_bar_wrapper").removeClass("side_bar_wrapper_sticky");
    }
  });

  function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }
});
// END:: HEADER FIXED

// START:: SHOW AND HIDE PASSWORD
function password_show_hide() {
  var x = document.getElementById("password");
  var show_eye = document.getElementById("show_eye");
  var hide_eye = document.getElementById("hide_eye");
  hide_eye.classList.remove("d-none");
  if (x.type === "password") {
    x.type = "text";
    show_eye.style.display = "none";
    hide_eye.style.display = "block";
  } else {
    x.type = "password";
    show_eye.style.display = "block";
    hide_eye.style.display = "none";
  }
}
function password_confirm_show_hide() {
  var x = document.getElementById("password_confirm");
  var show_eye = document.getElementById("show_eye1");
  var hide_eye = document.getElementById("hide_eye1");
  hide_eye.classList.remove("d-none");
  if (x.type === "password") {
    x.type = "text";
    show_eye.style.display = "none";
    hide_eye.style.display = "block";
  } else {
    x.type = "password";
    show_eye.style.display = "block";
    hide_eye.style.display = "none";
  }
}
// END:: SHOW AND HIDE PASSWORD

// START:: SLIDERS
$("#heroSectionSlider").owlCarousel({
  animateOut: "fadeOut",
  animateIn: "fadeIn",
  lazyLoad: true,
  autoplay: true,
  autoplayTimeout: 8000,
  loop: true,
  margin: 15,
  ltr: true,
  items: 1,
  dots: true,
  nav: false,
});



// START:: SELECT BOOTSTRAP

// form repeater Initialization
$(".repeater-default").repeater({
  show: function () {
    $(this).slideDown();
  },
  hide: function (deleteElement) {
    // if (confirm("Are you sure you want to delete this element?")) {
    // }
    $(this).slideUp(deleteElement);
  },
});

// START:: VERIFICATION CODE

const inputElements = [...document.querySelectorAll("input.code-input")];

inputElements.forEach((ele, index) => {
  ele.addEventListener("keydown", (e) => {
    if (e.keyCode === 8 && e.target.value === "")
      inputElements[Math.max(0, index - 1)].focus();
  });
  ele.addEventListener("input", (e) => {
    const [first, ...rest] = e.target.value;
    e.target.value = first ?? "";
    const lastInputBox = index === inputElements.length - 1;
    const insertedContent = first !== undefined;
    if (insertedContent && !lastInputBox) {
      inputElements[index + 1].focus();
      inputElements[index + 1].value = rest.join("");
      inputElements[index + 1].dispatchEvent(new Event("input"));
    }
  });
});

// START:: VIDEOS
function getLinkVideo() {
  var i = 1;
  var indexVideos = i++;
  var link = document.getElementById(`link_${indexVideos}`);
  var cover = document.getElementById(`cover_${indexVideos}`);
  var video = document.getElementById("video");
  console.log(cover);
  video.src = link.value;
  video.poster = cover.value;
}
$(".videos_container .videos_list .title_list button").click(function () {
  $(".videos_list").toggleClass("videos_list_show");
  $(".videos_container .video_view").toggleClass("video_view_show");
});

$(".head_page_single_course .more button").click(function () {
  $(".videos_container").addClass("videos_container_show");
});
$("#close_button").click(function () {
  $(".videos_container").removeClass("videos_container_show");
  var video = document.getElementById("video");
  video.pause();
});
// START:: UPLOAD FILE
// function courseImage() {
//     frame.src = URL.createObjectURL(event.target.files[0]);
// }
// function clearCourseImage() {
//     document.getElementById('formFile').value = null;
//     frame.src = "";
// }

$(document).on("change", ".file-upload", function () {
  var i = $(this).prev("label").clone();
  var file = this.files[0].name;
  $(this).prev("label").text(file);
});

// START:: ADD COURSE VIDEO

var videoUpload = document.getElementById("upload-video"),
  videoPreview = document.getElementById("video-preview"),
  videoUploadForm = document.getElementById("form-upload"),
  totalFiles,
  previewTitle,
  previewTitleText,
  video;

videoUpload.addEventListener("change", previewvideos, true);

function previewvideos(event) {
  totalFiles = videoUpload.files.length;

  if (!!totalFiles) {
    videoPreview.classList.remove("img-thumbs-hidden");
  }

  for (var i = 0; i < totalFiles; i++) {
    wrapper = document.createElement("div");
    wrapper.classList.add("single_video_prev");
    removeBtn = document.createElement("span");
    nodeRemove = document.createTextNode("x");
    removeBtn.classList.add("remove_video");
    removeBtn.appendChild(nodeRemove);
    video = document.createElement("video");
    video.setAttribute("controls", "");
    video.src = URL.createObjectURL(event.target.files[i]);
    video.classList.add("img-preview-thumb");
    wrapper.appendChild(video);
    wrapper.appendChild(removeBtn);
    videoPreview.appendChild(wrapper);

    $(".remove_video").click(function () {
      $(this).parent(".single_video_prev").remove();
    });
  }
}

var imgUpload = document.getElementById("upload-img"),
  imgPreview = document.getElementById("img-preview"),
  imgUploadForm = document.getElementById("form-upload"),
  totalFiles,
  previewTitle,
  previewTitleText,
  img;

imgUpload.addEventListener("change", previewImgs, true);

function previewImgs(event) {
  totalFiles = imgUpload.files.length;

  if (!!totalFiles) {
    imgPreview.classList.remove("img-thumbs-hidden");
  }

  for (var i = 0; i < totalFiles; i++) {
    wrapper = document.createElement("div");
    wrapper.classList.add("single_image_prev");
    removeBtn = document.createElement("span");
    nodeRemove = document.createTextNode("x");
    removeBtn.classList.add("remove_video");
    removeBtn.appendChild(nodeRemove);
    img = document.createElement("img");
    img.src = URL.createObjectURL(event.target.files[i]);
    img.classList.add("img-preview-thumb");
    wrapper.appendChild(img);
    wrapper.appendChild(removeBtn);
    imgPreview.appendChild(wrapper);

    $(".remove_video").click(function () {
      $(this).parent(".single_image_prev").remove();
    });
  }
}

var playButton = document.getElementById("play_button");
var video = document.getElementById("video");
// Event listener for the play/pause button
playButton.addEventListener("click", function () {
  if (video.paused == true) {
    video.play();
    playButton.innerHTML = `<i class='fas fa-pause'></i>`;
  } else {
    video.pause();
    playButton.innerHTML = `<i class="fas fa-play"></i>`;
  }
});

// END:: VIDEOS

// START:: SOCIAL SHARE
// Init Social Share Kit
// var titleElement = document.getElementsByTagName("title")[0];
// SocialShareKit.init({
//     // url: 'http://socialsharekit.com',
//     url: `${window.location.href}`,
//     twitter: {
//         title: `${titleElement.innerHTML}`,
//         via: 'GadoEgStore'
//     },

// });
// END:: SOCIAL SHARE

// START::
/* ---- particles.js config ---- */

// END::

// START:: WOW ANIMATION
// new WOW().init();
// END:: WOW ANIMATION

document.getElementById("videoUpload").onchange = function (event) {
  let file = event.target.files[0];
  let blobURL = URL.createObjectURL(file);
  document.querySelector("video").src = blobURL;
};
