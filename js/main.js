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

let headerPage = document.getElementById('headerPage');
if (headerPage) {
    let sticky = headerPage.offsetTop;
    function stickyHeader() {
        if (window.pageYOffset > sticky) {
            headerPage.classList.add('sticky');
        }
        else {
            headerPage.classList.remove('sticky');
        }
    }
}
window.onscroll = function () {
    stickyHeader();
}
/*
***  Open side bar  ***
***********************
*/
$('.js-open-sidebar-1').click(function () {
    $('#sidebar--large-1').addClass('open');
    $('#sidebar--small-1').addClass('close');
    $('#sidebar--large-1').removeClass('close');
    $('#sidebar--small-1').removeClass('open');
});
$('.js-close--sidebar-1').click(function () {
    $('#sidebar--large-1').removeClass('open');
    $('#sidebar--small-1').removeClass('close');
    $('#sidebar--large-1').addClass('close');
    $('#sidebar--small-1').addClass('open');
});
$('.js-open-sidebar-2').click(function () {
    $('#sidebar--large-2').addClass('open');
    $('#sidebar--small-2').addClass('close-1');
    $('#sidebar--large-2').removeClass('close-1');
    $('#sidebar--small-2').removeClass('open');
});
$('.js-close--sidebar-2').click(function () {
    $('#sidebar--large-2').removeClass('open');
    $('#sidebar--small-2').removeClass('close-1');
    $('#sidebar--large-2').addClass('close-1');
    $('#sidebar--small-2').addClass('open');
});