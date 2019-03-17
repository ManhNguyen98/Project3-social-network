// Display and hide recovery password form
$('#forgotPass').click(function () {
    $('#loginForm').hide();
    $('#recoveryForm').show();
});
$('#forgotPassBackBtn').click(function () {
    $('#loginForm').show();
    $('#recoveryForm').hide();
});
//////////////////////////////////////////
//Display and hide sign up form
$('#createAcc').click(function () {
    $('#loginForm').hide();
    $('#signUpForm').show();
});
$('#signUpBackButton').click(function () {
    $('#loginForm').show();
    $('#signUpForm').hide();
});
///////////////////////////////////////////
$('[data-toggle="tooltip"]').tooltip();

window.onscroll = function () {
    stickyHeader();
}

var headerPage = document.getElementById('headerPage');
var sticky = headerPage.offsetTop;
function stickyHeader() {
    if (window.pageYOffset > sticky) {
        headerPage.classList.add('sticky');
    }
    else {
        headerPage.classList.remove('sticky');
    }
}