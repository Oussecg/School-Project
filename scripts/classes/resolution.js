export class Resolution {
    checkResolution(widthValue) {
        if (window.innerWidth < widthValue) {
            $(".inputs-container").addClass("inputs-container-Exception");
            $(".input-container").addClass("input-container-Exception");
            $(".inputs").addClass("inputs-Exception");
        } else {
            $(".inputs-container").removeClass("inputs-container-Exception");
            $(".input-container").removeClass("input-container-Exception");
            $(".inputs").removeClass("inputs-Exception");
        }
    }

    checkResolutionResize(widthValue) {
        $(window).off("resize");
        $(window).on("resize", () => {
            this.checkResolution(widthValue);
        });

    }
}
