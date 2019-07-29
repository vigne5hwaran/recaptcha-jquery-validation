function recaptchaCallback() {
  var response = grecaptcha.getResponse();
  jQuery("#grecaptcha").val(response);
  console.log(jQuery("#sky-form1").valid());
}
function recaptchaExpired() {
  jQuery("#grecaptcha").val("");
}

var Validation = (function() {
  return {
    //Validation
    initValidation: function() {
      $("#sky-form1").validate({
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
            required: "This field is required"
          },
          email: {
            required: "Please enter your email address",
            email: "Please enter a Valid email address"
          },
          country: {
            required: "This field is required"
          },
          url: {
            required: "Please enter your URL"
          },
          date: {
            required: "Please enter some date"
          },
          min: {
            required: "Please enter some text"
          },
          max: {
            required: "Please enter some text"
          },
          range: {
            required: "Please enter some text"
          },
          digits: {
            required: "Please enter some digits"
          },
          number: {
            required: "Please enter some number"
          },
          minVal: {
            required: "Please enter some value"
          },
          maxVal: {
            required: "Please enter some value"
          },
          rangeVal: {
            required: "Please enter some value"
          }
        },

        // Do not change code below
        errorPlacement: function(error, element) {
          error.insertAfter(element.parent());
        }
      });
    }
  };
})();
