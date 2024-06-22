$(document).ready(function () {
  $(".datepicker").datepicker({
    format: "dd-mm-yyyy",
    i18n: {
      cancel: "إلغاء",
      clear: "مسح",
      done: "تم",
    },
  });
  $(".sidenav").sidenav();

  // توليد الرمز Captcha
  function generateCaptcha() {
    let captcha = Math.random().toString(36).substring(2, 7);
    $("#captcha").text(captcha);
  }

  generateCaptcha();

  // التحقق من المدخلات
  $("#submitBtn").click(function (event) {
    event.preventDefault();

    let name = $("#name").val();
    let nationalId = $("#nationalId").val();
    let dob = $("#dob").val();
    let mobile = $("#mobile").val();
    let email = $("#email").val();
    let captchaInput = $("#captchaInput").val();
    let captcha = $("#captcha").text();

    // التحقق من الاسم
    if (!/^[\u0600-\u06FF\s]+$/.test(name)) {
      M.toast({ html: "يرجى إدخال الاسم باللغة العربية فقط" });
      return;
    }

    // التحقق من الرقم الوطني
    if (!/^\d{11}$/.test(nationalId)) {
      M.toast({ html: "يرجى إدخال الرقم الوطني المؤلف من 11 خانة رقمية" });
      return;
    }

    // التحقق من رقم الموبايل
    if (!/^(09[3-8]\d{7})$/.test(mobile)) {
      M.toast({ html: "يرجى إدخال رقم موبايل صحيح" });
      return;
    }

    // التحقق من الكابتشا
    if (captchaInput !== captcha) {
      M.toast({ html: "الرمز المدخل غير صحيح" });
      generateCaptcha();
      return;
    }

    M.toast({ html: "تم إرسال المعلومات بنجاح" });
  });

  // إظهار تفاصيل أكثر للعقار
  $(".details-btn").click(function () {
    $(this).closest("tr").next(".details-row").toggle();
  });

  // اختيار العقار
  $(".select-btn").click(function () {
    $("#selected-property-form").show();
  });
});
