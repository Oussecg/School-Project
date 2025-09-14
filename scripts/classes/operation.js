export class Operations {
    constructor(success_html) {
        this.showRequestTable = this.showRequestTable.bind(this);
        this.tableRequestHtml = success_html;
        this.checkSession = this.checkSession.bind(this);
    }

    checkSession() {
        $.ajax({
            type: "post",
            url: "http://localhost/projects/project/php/admin/checkSession.php",
            success: (data) => {
                if (data.indexOf("success") !== -1) {
                    this.showRequestTable(10);
                }
            },
            error: () => {
                alert(
                    "Check Session has failed there and error in your xmlHttpRequest"
                );
            },
        });
    }

    showRequestTable(value = null) {
        if (value === null) {
            value = 2000;
        }
        setTimeout(() => {
            $(".inputs-container").hide(1500);
            $(".areNew").hide(1500);
            $(".result")
                .html(
                    `<img src="http://localhost/projects/project/images/hourglass.gif" alt="Wait a second" class="wait-gif">`
                )
                .removeClass("falseResult")
                .removeClass("trueResult");
            setTimeout(() => {
                $(".main").html(this.tableRequestHtml);
                $.ajax({
                    type: "post",
                    url: "http://localhost/projects/project/php/admin/request.php",
                    success: (data) => {
                        if (data.indexOf("failure") !== -1) {
                            $(".result")
                                .addClass("falseResult")
                                .html("There is an error :/");
                        } else {
                            $(".requestTable tbody").html(data);
                        }
                    },
                });
            }, value);
        }, value);
    }

    checkInputs(inputsList) {
        return !inputsList.some((value) => value === "");
    }

    checkResolution(widthValue) {
        if (window.innerWidth < widthValue) {
            $(".inputs-container").addClass("inputs-container-Exeption");
            $(".input-container").addClass("input-container-Exeption");
            $(".inputs").addClass("inputs-Exeption");
        } else {
            $(".inputs-container").removeClass("inputs-container-Exeption");
            $(".input-container").removeClass("input-container-Exeption");
            $(".inputs").removeClass("inputs-Exeption");
        }
    }
}
