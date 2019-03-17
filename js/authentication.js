const Auth = {
    $formLogin: $('.formLogin'),
    $formRegister: $('.formSignUp'),
    $formRecoveryPass: $('.formRecoveryPass'),

    init: function(){
        this.validate();
    },
    login: function () {
        let data = {
            username: $('#logInUserName').val(),
            password: $('#loginPassword').val(),
        }
        // form.submit();
        // Cookies.set('UserName', $('#logInUserName').val());
        // console.log(Cookies.get());
        // formData.entries();
        $.ajax({
            url: "http://localhost:2007/users/signin",
            method: "POST",
            dataType: "json",
            data: data,
            success: function (data) {
                console.log(data);
            },
            error: function (jq, status, message) {
                console.log(status);
            }
        });
        // $.ajax({
        //     url: "http://localhost:2007/users/login",
        //     method: "POST",
        //     dataType: "json",
        //     contentType: false,
        //     processData: false,
        //     data: formData,
        //     success: function (data) {
        //         console.log(data);
        //     },
        //     error: function(jq, status, message){
        //         console.log(status);
        //     }
        // });
        // $.getJSON("http://localhost:2007/users", function (data) {
        //     console.log(data);
        // });

    },
    validate: function () {
        this.$formLogin.validate({
            onkeyup: function (element) {
                $(element).valid()
            },
            rules: {
                logInUserName: {
                    required: true
                },
                logInPassWord: {
                    required: true,
                },

            },
            highlight: function (element) {
                $(element).addClass("requireError");
            },
            unhighlight: function (element) {
                $(element).removeClass("requireError");
            },
            submitHandler: function (form) {
                let formData = new FormData();
                formData.append('username', $('#logInUserName').val());
                // form.submit();
                // Cookies.set('UserName', $('#logInUserName').val());
                // console.log(Cookies.get());
                console.log(formData);
                $.ajax({
                    url: "http://127.0.0.1:2007/users/login",
                    method: "POST",
                    dataType: "json",
                    contentType: false,
                    processData: false,
                    data: formData,
                    success: function (data) {
                        console.log(data);
                    },
                    error: function (jq, status, message){
                        console.log(status);
                    }
                });
            }
        });
        this.$formRegister.validate({
            onkeyup: function (element) {
                $(element).valid()
            },
            rules: {
                fullName: {
                    required: true,
                },
                signUpEmail: {
                    required: true,
                    email: true,
                    // remote: {
                    //     //Call Api to check email has already taken
                    // }
                },
                signUpUserName: {
                    required: true,
                    // remote: {
                    //     //call Api to check username has already taken
                    // }
                },
                signUpPw: {
                    required: true,
                    maxlength: 25,
                },
                signUpRePw: {
                    required: true,
                    maxlength: 25,
                    equalTo: "#signUpPw",
                },
                signUpBirthday: {
                    date: true,
                },

            },
            highlight: function (element) {
                $(element).addClass("requireError");
            },
            unhighlight: function (element) {
                $(element).removeClass("requireError");
            },
            submitHandler: function (form) {
                form.submit();
            },
        });
        this.$formRecoveryPass.validate({
            onkeyup: function (element) {
                $(element).valid();
            },
            rules: {
                emailRecovery: {
                    required: true,
                    email: true,
                },
            },
            highlight: function (element) {
                $(element).addClass("requireError");
            },
            unhighlight: function (element) {
                $(element).removeClass("requireError");
            },
            submitHandler: function (form) {
                form.submit();
            }
        });
    },
};