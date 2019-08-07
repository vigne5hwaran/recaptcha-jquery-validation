
        function val() {
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var mobile = document.getElementById('mobile').value;
            var subject = document.getElementById('subject').value;
            var message = document.getElementById('message').value;
            var alphaExp = /^[a-z A-Z]+$/;

            //Name
            if (name != "") {

                if (!name.match(alphaExp)) {

                    alert("Please Enter Letters Only !");
                    document.getElementById('name').focus();
                    return false;
                }

            }

            if (name == "") {
                alert("Please Enter Name");
                document.getElementById('name').focus();
                return false;
            }


            //user_email
            if (email == "") {
                alert("Please Enter Your E-mail");
                document.getElementById('email').focus();
                return false;
            }

            if (email != "") {
                if (document.getElementById('email').value.length > 0) {
                    i = document.getElementById('email').value.indexOf("@");
                    j = document.getElementById('email').value.indexOf(".", i);
                    k = document.getElementById('email').value.indexOf(",");
                    kk = document.getElementById('email').value.indexOf(" ");
                    jj = document.getElementById('email').value.lastIndexOf(".");
                    len = document.getElementById('email').value.length;
                    if ((i > 0) && (j > (1 + 1)) && (k == -1) && (kk == -1) && (len - jj >= 2))
                    //&&(len-jj<=3))
                    {
                        //document.cform.ConfirmEmail.focus();//
                    } else {
                        alert("Please enter an exact email address.\n" + document.getElementById('email').value +
                            " is invalid.");
                        document.getElementById('email').focus();
                        return false;
                    }
                }
            }


            //mobile	 
            if (mobile == "") {
                alert("Please Enter Your Mobile Number");
                document.getElementById('mobile').focus();
                return false;
            }


            if (mobile != "") {
                if (!isNaN(mobile)) {
                    if (mobile.charAt(0) != "9" && mobile.charAt(0) != "8" && mobile.charAt(0) != "7") {
                        alert("Please start mobile number with 7 to 9 !");
                        document.getElementById('mobile').focus();
                        return false;
                    }

                    if (mobile.length < 10 || mobile.length > 10) {
                        alert("Please enter valid mobile number ! ");
                        document.getElementById('mobile').focus();
                        return false;
                    }
                } else {
                    alert("Please enter valid mobile number !");
                    document.getElementById('mobile').focus();
                    return false;
                }
            }


            //subject
            if (subject == "") {
                alert("Please Enter subject");
                document.getElementById('subject').focus();
                return false;
            }

            //Message
            if (message == "") {
                alert("Please Enter Message");
                document.getElementById('message').focus();
                return false;
            }

        }