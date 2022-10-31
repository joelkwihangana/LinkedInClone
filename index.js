const profileMenu = document.getElementById("profileMenu");

const showOrHideProfile = () => {
  profileMenu.classList.toggle("open-menu");
};

const sideActivity = document.getElementById("sidebarActivity");
const showMoreLink = document.getElementById("showMoreLink");

const toggleActivity = () => {
  sideActivity.classList.toggle("open-activity");
  if (sideActivity.classList.contains("open-activity")) {
    showMoreLink.innerHTML = "Show less <b>-</b>";
  } else {
    showMoreLink.innerHTML = "Show more <b>+</b>";
  }
};
