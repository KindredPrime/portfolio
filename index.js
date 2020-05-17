/*
    Assigns IDs to elements in the page for later use by jQuery
*/
function assignIDs() {
    /*
        Assigns a unique ID to each project on the page
    */
    function assignProjectIDs() {
        let projects = $("section.project");
        for(project of projects) {
            $(project).attr("data-project-id", cuid());
        }
    }

    /*
        Assigns a unique ID to each project photo on the page
    */
    function assignProjectPhotoIDs() {
        let photos = $(".project-photo");
        for(photo of photos) {
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
        let currentProject = 
            $(`section.project[data-project-id="${projectID}"]`);
        let currentPhoto = 
            currentProject.find(`.project-photo.js-current-photo`);

        let nextPhoto = currentPhoto.next(".project-photo");
        if(nextPhoto.length === 0) { //i.e. there aren't any next photos
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
        let currentProject = 
            $(`section.project[data-project-id="${projectID}"]`);
        let currentPhoto = 
            currentProject.find(`.project-photo.js-current-photo`);

        currentPhoto.removeClass("js-current-photo");
        currentPhoto.hide();
    }

    /*
        Shows on the page the project photo with the provided photo ID, in the 
        project with the provided projectID
    */
    function showProjectPhoto(projectID, photoID) {
        let project = $(`section.project[data-project-id="${projectID}"]`);
        let photoToShow = project
            .find(`.project-photo[data-photo-id="${photoID}"]`);

        /* 
            Checks if there are photos with that ID to show
        */
        if(photoToShow.length > 0) {
            photoToShow.addClass("js-current-photo");
            photoToShow.show("fade", "linear", 600);
        }
    }

    /*
        Handles switching to the next photo when the right arrow button is 
        clicked
    */
    function handleNextPhoto() {
        $(".right-arrow-button").click(event => {
            let projectID = $(event.currentTarget).parents("section.project")
                .data("project-id");
            let currentPhoto = $(event.currentTarget)
                .parents(".project-slideshow")
                .find(".project-photo.js-current-photo");

            let notOnLastPhoto = !onLastPhoto(projectID);
            if(notOnLastPhoto) {
                hideCurrentProjectPhoto(projectID);

                let nextPhotoID = currentPhoto.next(".project-photo")
                    .data("photo-id");
                showProjectPhoto(projectID, nextPhotoID);
            }
        });
    }

    /*
        Returns true if the currently-displayed photo is the first photo in 
        its project photo slideshow
    */
    function onFirstPhoto(projectID) {
        let currentProject = 
            $(`section.project[data-project-id="${projectID}"]`);
        let currentPhoto = currentProject
            .find(`.project-photo.js-current-photo`);

        let prevPhoto = currentPhoto.prev(".project-photo");
        if(prevPhoto.length === 0) { //i.e. there aren't any previous photos
            return true;
        }
        else {
            return false;
        }
    }

    /*
        Handles switching to the previous photo when the left arrow button is
        clicked
    */
    function handlePrevPhoto() {
        $(".left-arrow-button").click(event => {
            let projectID = $(event.currentTarget).parents("section.project")
                .data("project-id");
            let currentPhoto = $(event.currentTarget)
                .parents(".project-slideshow")
                .find(".project-photo.js-current-photo");

            let notOnFirstPhoto = !onFirstPhoto(projectID);
            if(notOnFirstPhoto) {
                hideCurrentProjectPhoto(projectID);

                let prevPhotoID = currentPhoto.prev(".project-photo")
                    .data("photo-id");
                showProjectPhoto(projectID, prevPhotoID);
            }
        });
    }
    
    handleNextPhoto();
    handlePrevPhoto();
}

/*
    Handles expanding and collapsing the menu in the nav bar on mobile devices
*/
function handleMenuChanges() {
    $(".burger").click(event => {
        $(".navbar").toggleClass("extended");
        $(".menu-links").toggleClass("hidden-mobile");
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
        let desiredLayout = $(`section.${layout}`);
        let layouts = desiredLayout.siblings("section");
        layouts.addClass("hidden");
        desiredLayout.removeClass("hidden");
    }

    /*
        Handles switching to the homepage layout
    */
    function handleSwitchToHomepageLayout() {
        $(".home-link").click(event => {
            event.preventDefault();
            loadLayout("homepage");
        });
    }

    /*
        Handles switching to the portfolio layout
    */
    function handleSwitchToPortfolioLayout() {
        $(".portfolio-link").click(event => {
            event.preventDefault();
            loadLayout("portfolio");
        });

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