function recaptchaCallback() {
  var response = grecaptcha.getResponse();
  jQuery("#grecaptcha").val(response);
  console.log(jQuery("#sky-form").valid());
}
function recaptchaExpired() {
  jQuery("#grecaptcha").val("");
}

$("#sky-form").validate({
  // Rules for form validation
  rules: {
    name: {
      required: true
    },
    email: {
      required: true,
      email: true
    },
    country: {
      required: true
    },
    phone: {
      required: true,
      number: true,
      maxlength: 10,
      minlength: 8
    },
    message: {
      required: true,
      minlength: 10
    },
    hospital: {
      required: true
    },
    grecaptcha: {
      required: true,
      minlength: 255
    },
    url: {
      required: true,
      url: true
    },
    date: {
      required: true,
      date: true
    },
    min: {
      required: true,
      minlength: 5
    },
    max: {
      required: true,
      maxlength: 5
    },
    range: {
      required: true,
      rangelength: [5, 10]
    },
    digits: {
      required: true,
      digits: true
    },
    number: {
      required: true,
      number: true
    },
    minVal: {
      required: true,
      min: 5
    },
    maxVal: {
      required: true,
      max: 100
    },
    rangeVal: {
      required: true,
      range: [5, 100]
    }
  },

  // Messages for form validation
  messages: {
    name: {
      required: "Please enter your name"
    },
    email: {
      required: "Please enter your email address"
    },
    subject: {
      required: "Please enter subject"
    },
    phone: {
      required: "Please enter your Phone number"
    },
    message: {
      required: "Please say something"
    },
    grecaptcha: {
      required: "Please check the recaptcha"
    }
  }
});
