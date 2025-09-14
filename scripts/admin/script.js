import { Buttons } from "../classes/button.js";
import { createAcounthtml, logInhtml, tableRequestConfirmHtml } from "./html.js"
import { Operations } from "../classes/operation.js"


class LogInButton extends Buttons {
    constructor() {
        super();
        this.operation = new Operations(tableRequestConfirmHtml)
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

class createAcountButton extends Buttons {
    constructor() {
        super();
        this.operation = new Operations(tableRequestConfirmHtml);
        this.id = "createAcount";
        this.createAcount = this.createAcount.bind(this);
        this.configurateButton();
        $(`#${this.id}`).on("click", this.createAcount);
    }

    createAcount() {
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
                    url: "http://localhost/projects/project/php/admin/createAcount.php",
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
                                `There is an error xmlHtppRequest has failed :/`
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
        this.operation = new Operations(tableRequestConfirmHtml);
    }
    setButton(Class, html) {
        $(".result")
            .html("")
            .removeClass("falseResult")
            .removeClass("trueResult");
        $(`.${Class}`).on("click", () => {
            $(".inputs-container").html(html);
            if (Class === "youWannaCreateAcount") {
                this.operation.checkResolution(1500);
                $(window).on("resize", () => {
                    this.operation.checkResolution(1500);
                });
                $(".areNew").html(
                    `If you already have an acount go to <a class="youWannaLogIn">Log In</a>`
                );
                const wannaLogIn = new changeModeButtons(
                    "youWannaLogIn",
                    logInhtml
                );
                const createAcount = new createAcountButton();
            } else {
                this.operation.checkResolution(815);
                $(window).on("resize", () => {
                    this.operation.checkResolution(815);
                });

                $(".areNew").html(
                    `If you are new you can <a class="youWannaCreateAcount">Create Acount</a>`
                );
                const wannaCreateAcount = new changeModeButtons(
                    "youWannaCreateAcount",
                    createAcounthtml
                );
                const logIn = new LogInButton();
            }
        });
    }
}

const operation = new Operations(tableRequestConfirmHtml);
operation.checkResolution(815);
$(window).on("resize", () => {
    operation.checkResolution(815);
});

const wannaLogIn = new changeModeButtons(
    "youWannaCreateAcount",
    createAcounthtml
);

const logIn = new LogInButton();
