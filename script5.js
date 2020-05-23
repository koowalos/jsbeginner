function User() {
    var username, password;

    function doLogin(user, pw) {
        username = user;
        password = pw;
    }

    var publicAPI = {
        login: doLogin
    };

    return publicAPI;

}

var fred = User();

fred.login("fred", "12Battery34!");