"use strict";

/*
  Assign IDs to elements in the page for later use by jQuery
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

/**
 * Hide all photos except for one from each project
 */
function hideProjectPhotos() {
  $(".project-photo").not(".project-photo.current").hide();
}

/**
 * Handle switching between photos in the photo slideshows for projects in the
 * portfolio
 */
function handlePhotoTransitions() {
  /**
   * Returns true if the currently-displayed photo is the last photo in its
   * project photo slideshow
   */
  function onLastPhoto(projectID) {
    const currentProject =
      $(`section.project[data-project-id="${projectID}"]`);
    const currentPhoto =
      currentProject.find(`.project-photo.current`);

    const nextPhoto = currentPhoto.next(".project-photo");
    if(nextPhoto.length === 0) { //i.e. there aren't any next photos
      return true;
    }
    else {
      return false;
    }
  }

  /**
   * Returns true if the currently-displayed photo is the first photo in its
   * project photo slideshow
   */
  function onFirstPhoto(projectID) {
    const currentProject =
      $(`section.project[data-project-id="${projectID}"]`);
    const currentPhoto = currentProject
      .find(`.project-photo.current`);

    const prevPhoto = currentPhoto.prev(".project-photo");
    if(prevPhoto.length === 0) { //i.e. there aren't any previous photos
      return true;
    }
    else {
      return false;
    }
  }

  /**
   * Hides from the page the currently displayed photo, in the project with
   * the provided projectID
   */
  function hideCurrentProjectPhoto(projectID) {
    const currentProject =
      $(`section.project[data-project-id="${projectID}"]`);
    const currentPhoto =
      currentProject.find(`.project-photo.current`);

    currentPhoto.removeClass("current");
    currentPhoto.hide();
  }

  /**
   * Shows on the page the project photo with the provided photo ID, in the
   * project with the provided projectID
   */
  function showProjectPhoto(projectID, photoID) {
    const project = $(`section.project[data-project-id="${projectID}"]`);
    const photoToShow = project
      .find(`.project-photo[data-photo-id="${photoID}"]`);

    /*
      Checks if there are photos with that ID to show
    */
    if(photoToShow.length > 0) {
      photoToShow.addClass("current");

      photoToShow.show();
    }
  }

  /**
   * Shows/Hides the arrow buttons based on which photo in the slideshow is
   * currently being displayed
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

  /**
   * Handle switching to another photo when the slideshow button is clicked
   */
  function handleArrowButtonClick() {
    $(".slideshow-button").click((event) => {
      const projectID = $(event.currentTarget).parents("section.project")
        .data("project-id");
      const currentPhoto = $(event.currentTarget)
        .parents(".project-slideshow")
        .find(".project-photo.current");

      hideCurrentProjectPhoto(projectID);

      let photoIDToChangeTo;
      if ($(event.currentTarget).hasClass("right-arrow-button")) {
        // Change to the next photo
        photoIDToChangeTo = currentPhoto.next(".project-photo")
          .data("photo-id");
      } else if ($(event.currentTarget).hasClass("left-arrow-button")) {
        // Change to the previous photo
        photoIDToChangeTo = currentPhoto.prev(".project-photo")
          .data("photo-id");
      }

      showProjectPhoto(projectID, photoIDToChangeTo);

      updateButtonsDisplayed(projectID);
    });
  }

  handleArrowButtonClick();
}

/**
 * Handle expanding and collapsing the menu in the nav bar on mobile devices
 */
function handleMenuChanges() {
  $("button.menu").click(event => {
    $(".navbar").toggleClass("extended");
    $(".menu-links").toggleClass("hidden");
    $("main").toggleClass("extended");
  });
}

/**
 * Handle switching between layouts
 */
function handleLayoutChanges() {
  /**
   * Replace the main content of the page with the provided layout
   */
  function loadLayout(layout) {
    const desiredLayout = $(`section.${layout}`);
    const layouts = desiredLayout.siblings("section");
    layouts.addClass("hidden");
    desiredLayout.removeClass("hidden");
  }

  /**
   * Handle switching to the homepage layout
   */
  function handleSwitchToHomepageLayout() {
    $(".home-button").click(event => {
      event.preventDefault();
      loadLayout("homepage");
    });
  }

  /*
    Handle switching to the portfolio layout
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
  hideProjectPhotos();
  handlePhotoTransitions();
  handleMenuChanges();
  handleLayoutChanges();
});