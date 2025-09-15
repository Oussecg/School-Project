export class CheckSession {
    constructor(CLASS) {
        this.func = CLASS.showRequestTable;
        this.checkSession = this.checkSession.bind(this);
    }

    checkSession() {
        $.ajax({
            type: "post",
            url: "http://localhost/projects/project/php/admin/checkSession.php",
            success: (data) => {
                if (data.indexOf("success") !== -1) {
                    this.func(0);
                }
            },
            error: () => {
                alert(
                    "Check Session has failed there and error in your xmlHttpRequest"
                );
            },
        });
    }
}
