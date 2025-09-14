export class Buttons {
    constructor() {
        this.class = "buttons";
        // Bind methods to ensure 'this' refers to the class instance
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onClick = this.onClick.bind(this);
        this.configureButton = this.configureButton.bind(this)
    }

    configureButton() {
        $(`.${this.class}`)
            .on("click", this.onClick)
            .on("mouseenter", this.onMouseEnter)
            .on("mouseleave", this.onMouseLeave);
    }

    onMouseEnter(event) {
        $(event.currentTarget).addClass("isHovered");
    }

    onMouseLeave(event) {
        $(event.currentTarget).removeClass("isHovered");
    }

    onClick(event) {
        $(event.currentTarget)
            .off("mouseenter", this.onMouseEnter)
            .off("mouseleave", this.onMouseLeave)
            .addClass("isHovered")
            .addClass("isClicked");

        setTimeout(() => {
            $(event.currentTarget)
                .removeClass("isHovered")
                .removeClass("isClicked");
            this.configureButton();
        }, 1300);
    }
}
