<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>recaptcha</title>
    <script type="text/javascript" src="assets/plugins/jquery/jquery.min.js"></script>
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
</head>
<body>
    <form action="mail.php" id="sky-form" novalidate="novalidate" method="post">
        <label class="label">Your Name</label>
            <input type="text" name="name" />
    
        <label class="label">Email ID</label>
            <input type="email" name="email" />

        <label class="label">Phone Number (without Country code)</label>
            <input type="text" name="phone" />

        <label class="label">Type your Message Here</label>
            <textarea class="form-control" name="message" ></textarea>

        <label class="label">Check the Captcha</label>
            <div class="g-recaptcha" data-sitekey="site_key" data-callback="recaptchaCallback" data-expired-callback="recaptchaExpired"></div>
            <input id="grecaptcha" name="grecaptcha" type="text" style="opacity: 0; position: absolute; top: 0; left: 0; height: 1px; width: 1px;"/>

    <button name="submit" type="submit" class="btn-u btn-u-default">Submit</button>
    <button type="button" class="btn-u" onclick="window.history.back();">Cancel</button>
    </form>
    <script type="text/javascript" src="assets/js/plugins/validation.js"></script>
</body>
</html>