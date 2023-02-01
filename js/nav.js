"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);


/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();                                // show main navrbar links (my stories, favorites, ...)
  $navLogin.hide();                                           // hide "login" from navbar
  $navLogOut.show();                                          // hide "logout" from navbar
  $navUserProfile.text(`${currentUser.username}`).show();     // Show current user's username on navbar
}
////////////////////




// Funtion to Show story submit by clicking on "submit" in navbar 

function navSubmitStoryClick(evt) {
  console.debug("navSubmitStoryClick", evt);
  hidePageComponents();
  $allStoriesList.show();
  $submitForm.show();
}
$navSubmitStory.on("click", navSubmitStoryClick);


// function to show user's stories by clicking on "my stories" in navbar
function navMyStories(evt) {
  console.debug("navMyStories", evt);
                      // hide favorited stories posts
  hidePageComponents();                       // hide rests of page components
  putUserStoriesOnPage();                     // put user's posted stories on page
  $ownStories.show();                         // show posted stories on page
  
}

$body.on("click", "#nav-my-stories", navMyStories);

// showing favorites on navbar click on "favorites" 
function navFavoritesClick(evt) {
  console.debug("navFavoritesClick", evt);
  
  hidePageComponents();                       //hide page components
  putFavoritesListOnPage();                   // put favorited posts on page
}

$body.on("click", "#nav-favorites", navFavoritesClick);


function navProfileClick(evt) {
  console.debug("navProfileClick", evt);
  hidePageComponents();
  $userProfile.show();
}

$navUserProfile.on("click", navProfileClick);