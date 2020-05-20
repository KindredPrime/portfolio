"use strict";

/*
    Assigns IDs to elements in the page for later use by jQuery
*/
function assignIDs() {
    /*
        Assigns a unique ID to each project on the page
    */
    function assignProjectIDs() {
        const projects = $("section.project");
        for(let project of projects) {
            $(project).attr("data-project-id", cuid());
        }
    }

    /*
        Assigns a unique ID to each project photo on the page
    */
    function assignProjectPhotoIDs() {
        const photos = $(".project-photo");
        for(let photo of photos) {
            $(photo).attr("data-photo-id", cuid());
        }
    }

    assignProjectIDs();
    assignProjectPhotoIDs();
}

/*
    Handles switching between photos in the photo slideshows for projects in 
    the portfolio
*/
function handlePhotoTransitions() {
    /*
        Returns true if the currently-displayed photo is the last photo in its 
        project photo slideshow
    */
    function onLastPhoto(projectID) {
        const currentProject = 
            $(`section.project[data-project-id="${projectID}"]`);
        const currentPhoto = 
            currentProject.find(`.project-photo.js-current-photo`);

        const nextPhoto = currentPhoto.next(".project-photo");
        if(nextPhoto.length === 0) { //i.e. there aren't any next photos
            return true;
        }
        else {
            return false;
        }
    }

    /*
        Returns true if the currently-displayed photo is the first photo in 
        its project photo slideshow
    */
    function onFirstPhoto(projectID) {
        const currentProject = 
            $(`section.project[data-project-id="${projectID}"]`);
        const currentPhoto = currentProject
            .find(`.project-photo.js-current-photo`);

        const prevPhoto = currentPhoto.prev(".project-photo");
        if(prevPhoto.length === 0) { //i.e. there aren't any previous photos
            return true;
        }
        else {
            return false;
        }
    }

    /*
        Hides from the page the currently displayed photo, in the project with 
        the provided projectID
    */
    function hideCurrentProjectPhoto(projectID) {
        const currentProject = 
            $(`section.project[data-project-id="${projectID}"]`);
        const currentPhoto = 
            currentProject.find(`.project-photo.js-current-photo`);

        currentPhoto.removeClass("js-current-photo");
        currentPhoto.hide();
    }

    /*
        Shows on the page the project photo with the provided photo ID, in the 
        project with the provided projectID
    */
    function showProjectPhoto(projectID, photoID) {
        const project = $(`section.project[data-project-id="${projectID}"]`);
        const photoToShow = project
            .find(`.project-photo[data-photo-id="${photoID}"]`);

        /* 
            Checks if there are photos with that ID to show
        */
        if(photoToShow.length > 0) {
            photoToShow.addClass("js-current-photo");

            const slideshowButtons = project.find(".slideshow-button");
            // Disable the buttons until after the animation finishes
            slideshowButtons.prop("disabled", true);
            photoToShow.show("fade", "linear", 600, () => {
                slideshowButtons.prop("disabled", false);
            });
        }
    }

    /*
        Shows/Hides the arrow buttons based on which photo in the slideshow is 
        currently being displayed
    */
    function updateButtonsDisplayed(projectID) {
        const currentProject = 
            $(`section.project[data-project-id="${projectID}"]`);
        const leftArrow = currentProject.find(".left-arrow-button");
        const rightArrow = currentProject.find(".right-arrow-button");

        if(onLastPhoto(projectID)) {
            leftArrow.show();
            rightArrow.hide();
        }
        else if(onFirstPhoto(projectID)) {
            leftArrow.hide();
            rightArrow.show();
        }
        else { //On some photo in the middle
            leftArrow.show();
            rightArrow.show();
        }
    }

    /*
        Handles switching to the next photo when the right arrow button is 
        clicked
    */
    function handleNextPhoto() {
        $(".right-arrow-button").click(event => {
            const projectID = $(event.currentTarget).parents("section.project")
                .data("project-id");
            const currentPhoto = $(event.currentTarget)
                .parents(".project-slideshow")
                .find(".project-photo.js-current-photo");

            hideCurrentProjectPhoto(projectID);

            const nextPhotoID = currentPhoto.next(".project-photo")
                .data("photo-id");
            showProjectPhoto(projectID, nextPhotoID);

            updateButtonsDisplayed(projectID);
        });
    }

    /*
        Handles switching to the previous photo when the left arrow button is
        clicked
    */
    function handlePrevPhoto() {
        $(".left-arrow-button").click(event => {
            const projectID = $(event.currentTarget).parents("section.project")
                .data("project-id");
            const currentPhoto = $(event.currentTarget)
                .parents(".project-slideshow")
                .find(".project-photo.js-current-photo");

            hideCurrentProjectPhoto(projectID);

            const prevPhotoID = currentPhoto.prev(".project-photo")
                .data("photo-id");
            showProjectPhoto(projectID, prevPhotoID);

            updateButtonsDisplayed(projectID);
        });
    }
    
    handleNextPhoto();
    handlePrevPhoto();
}

/*
    Handles expanding and collapsing the menu in the nav bar on mobile devices
*/
function handleMenuChanges() {
    $("button.menu").click(event => {
        $(".navbar").toggleClass("extended");
        $(".menu-links").toggleClass("hidden-on-mobile");
        $("main").toggleClass("extended");
    });
}

/*
    Handles switching between layouts
*/
function handleLayoutChanges() {
    /*
        Replaces the main content of the page with the provided layout
    */
    function loadLayout(layout) {
        const desiredLayout = $(`section.${layout}`);
        const layouts = desiredLayout.siblings("section");
        layouts.addClass("hidden");
        desiredLayout.removeClass("hidden");
    }

    /*
        Handles switching to the homepage layout
    */
    function handleSwitchToHomepageLayout() {
        $(".home-button").click(event => {
            event.preventDefault();
            loadLayout("homepage");
        });
    }

    /*
        Handles switching to the portfolio layout
    */
    function handleSwitchToPortfolioLayout() {
        $(".portfolio-button").click(event => {
            event.preventDefault();
            loadLayout("portfolio");
        });
    }

    handleSwitchToHomepageLayout();
    handleSwitchToPortfolioLayout();
}

$(function() {
    assignIDs();
    handlePhotoTransitions();
    handleMenuChanges();
    handleLayoutChanges();
});