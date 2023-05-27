//Navbar-hamburger menu
const hamburger = document.querySelector(".hamburger");
const navItems = document.querySelector(".nav-items");
const searchWrapper = document.querySelector(".search-wrapper");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navItems.classList.toggle("active");
  searchWrapper.classList.toggle("active");
});

//view 1: fetch API

//My Profile
fetch("https://api.github.com/users/haneen-taher")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    document.getElementById("username").innerHTML = `${data.login}`;
    document.getElementById("profile-img").src = data.avatar_url;
    document.getElementById("followers").innerHTML = `${data.followers}`;
    document.getElementById("following").innerHTML = `${data.following}`;
  });

//Repo

fetch("https://api.github.com/users/haneen-taher/repos")
  .then((res) => res.json())
  .then((result) => {
    console.log(result);

    result.forEach((obj, index) => {
      const name = obj.name;
      const visibility = obj.visibility;
      const language = obj.language;

      const repoNames = document.getElementsByClassName("repo-name");
      repoNames[index].innerHTML = name;
      repoNames[index].style.color = "#0969da";
      repoNames[index].style.fontSize = "14px";
      repoNames[index].addEventListener("mouseover", function () {
        this.style.textDecoration = "underline";
      });
      repoNames[index].addEventListener("mouseout", function () {
        this.style.textDecoration = "none";
      });

      const repoVisibility = document.getElementsByClassName("label");
      repoVisibility[index].innerHTML = visibility;

      const repoLanguages = document.getElementsByClassName("tech-used");
      repoLanguages[index].innerHTML = language;
      repoLanguages[index].classList.add("new-tech");

      const repoList = document.getElementsByClassName("repo");
      for (let i = 0; i < repoList.length; i++) {
        if (i >= result.length) {
          repoList[i].remove();
        }
      }
    });
  });

//Find users
/*const searchContainer = document.querySelector("search-container");
//Search for any user
search.addEventListener("change", function () {
  var searchUser = document.getElementById("search").value;

  var originalName = searchUser.split(" ").join("");

  fetch("https://api.github.com/users/" + searchUser)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      document.getElementById("username").innerHTML = `${data.login}`;
      document.getElementById("profile-img").src = data.avatar_url;
      document.getElementById("followers").innerHTML = `${data.followers}`;
      document.getElementById("following").innerHTML = `${data.following}`;
    });
});

fetch(`https://api.github.com/users/${username}/repos`)
  .then((res) => res.json())
  .then((result) => {
    console.log(result);

    result.forEach((obj, index) => {
      const name = obj.name;
      const visibility = obj.visibility;
      const language = obj.language;

      const repoNames = document.getElementsByClassName("repo-name");
      repoNames[index].innerHTML = name;
      repoNames[index].style.color = "#0969da";
      repoNames[index].style.fontSize = "14px";
      repoNames[index].addEventListener("mouseover", function () {
        this.style.textDecoration = "underline";
      });
      repoNames[index].addEventListener("mouseout", function () {
        this.style.textDecoration = "none";
      });

      const repoVisibility = document.getElementsByClassName("label");
      repoVisibility[index].innerHTML = visibility;

      const repoLanguages = document.getElementsByClassName("tech-used");
      repoLanguages[index].innerHTML = language;
      repoLanguages[index].classList.add("new-tech");

      const repoList = document.getElementsByClassName("repo");
      for (let i = 0; i < repoList.length; i++) {
        if (i >= result.length) {
          repoList[i].remove();
        }
      }
    });
  });*/
