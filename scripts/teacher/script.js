import { Buttons } from "../classes/button.js";
import {  } from "./html.js"

class Operations {
    constructor() {
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
                $(".main").html();
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

class LogInButton extends Buttons {
    constructor() {
        super();
        this.operation = new Operations()
        this.id = "logIn";
        this.logIn = this.logIn.bind(this);
        this.configurateButton();
        $(`#${this.id}`).on("click", this.logIn);
    }

    logIn() {
        $(".result")
            .html("")
            .removeClass("falseResult")
            .removeClass("trueResult");
        const username = $("#username").val();
        const password = $("#password").val();
        setTimeout(() => {
            if (this.operation.checkInputs([username, password])) {
                $.ajax({
                    type: "post",
                    url: "http://localhost/projects/project/php/admin/logIn.php",
                    data: `username=${username}&password=${password}`,
                    success: (data) => {
                        if (data.indexOf("success") !== -1) {
                            $(".result")
                                .addClass("trueResult")
                                .html("You log in successfuly :)");
                            this.operation.showRequestTable();
                        } else {
                            $(".result")
                                .addClass("falseResult")
                                .html(`Error: ${data}`);
                        }
                    },
                    error: () => {
                        $(".result")
                            .addClass("falseResult")
                            .html(
                                `There is an error xmlHtppRequest has failed :/`
                            );
                    },
                });
            } else {
                $(".result")
                    .addClass("falseResult")
                    .html(`Fill the inputs fields !`);
            }
        }, 1300);
    }
}

class createAccountButton extends Buttons {
    constructor() {
        super();
        this.operation = new Operations();
        this.id = "createAccount";
        this.createAccount = this.createAccount.bind(this);
        this.configurateButton();
        $(`#${this.id}`).on("click", this.createAccount);
    }

    createAccount() {
        $(".result")
            .html("")
            .removeClass("falseResult")
            .removeClass("trueResult");
        const firstName = $("#firstName").val();
        const lastName = $("#lastName").val();
        const username = $("#username").val();
        const password = $("#password").val();
        setTimeout(() => {
            if (this.operation.checkInputs([firstName, lastName, username, password])) {
                $.ajax({
                    type: "post",
                    url: "http://localhost/projects/project/php/admin/createAccount.php",
                    data: `firstname=${firstName}&lastname=${lastName}&username=${username}&password=${password}`,
                    success: (data) => {
                        if (data.indexOf("success") !== -1) {
                            $(".result")
                                .addClass("trueResult")
                                .html("You log in successfuly :)");
                            this.operation.showRequestTable();
                        } else {
                            $(".result")
                                .addClass("falseResult")
                                .html(`Error: ${data}`);
                        }
                    },
                    error: () => {
                        $(".result")
                            .addClass("falseResult")
                            .html(
                                `The Request has failed :/`
                            );
                    },
                });
            } else {
                $(".result")
                    .addClass("falseResult")
                    .html(`Fill the inputs fields !`);
            }
        }, 1100);
    }
}

class changeModeButtons {
    constructor(id, html) {
        this.id = id;
        this.html = html;
        this.setButton(this.id, this.html);
        this.operation = new Operations();
    }
    setButton(Class, html) {
        $(".result")
            .html("")
            .removeClass("falseResult")
            .removeClass("trueResult");
        $(`.${Class}`).on("click", () => {
            $(".inputs-container").html(html);
            if (Class === "youWannaCreateAccount") {
                this.operation.checkResolution(1500);
                $(window).on("resize", () => {
                    this.operation.checkResolution(1500);
                });
                $(".areNew").html(
                    `If you already have an acount go to <a class="youWannaLogIn">Log In</a>`
                );
                const wannaLogIn = new changeModeButtons(
                    "youWannaLogIn",
                    ""
                );
                const createAccount = new createAccountButton();
            } else {
                this.operation.checkResolution(815);
                $(window).on("resize", () => {
                    this.operation.checkResolution(815);
                });

                $(".areNew").html(
                    `If you are new you can <a class="youWannaCreateAccount">Create Acount</a>`
                );
                const wannaCreateAccount = new changeModeButtons(
                    "youWannaCreateAccount",
                    ""
                );
                const logIn = new LogInButton();
            }
        });
    }
}

const operation = new Operations();
operation.checkResolution(815);
$(window).on("resize", () => {
    operation.checkResolution(815);
});

const wannaLogIn = new changeModeButtons(
    "youWannaCreateAccount",
    ""
);

const logIn = new LogInButton();
