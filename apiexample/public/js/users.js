/**
 * Created by ayates on 4/18/18.
 */
$(document).ready(function () {
    $.ajax({
        url: "/api/users", success: function (result) {

            $('title').html(result.info.title);
            $('#title').html(result.info.title);
            $('#description').html('Welcome to ' + result.info.title);

            result.info.users.forEach(function (user) {
                $("#users").append('<li>' + user.lastName + ', ' + user.firstName + '</li>');
            });
        }
    });
});