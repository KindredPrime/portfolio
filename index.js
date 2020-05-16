function initializeIds() {
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
        Shows on the page the project photo with the provided photo ID, in the project with the provided projectID
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
            photoToShow.show();
        }
    }

    /*
        Handles switching to the next photo when the right arrow button is 
        clicked
    */
    function handleNextImage() {
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
        Handles switching to the previous image when the left arrow button is
        clicked
    */
    function handlePrevImage() {
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
    
    handleNextImage();
    handlePrevImage();
}

$(function() {
    initializeIds();
    handlePhotoTransitions();
});