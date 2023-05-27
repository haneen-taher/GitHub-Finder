const search = document.getElementById("submit-btn");
//user 1
search.addEventListener("click", function () {
  var searchUser = document.getElementById("user-input").value;
  var originalName = searchUser.split(" ").join("");
  fetch("https://api.github.com/users/" + searchUser)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById("user-name1").innerHTML = `${data.login}`;
      document.getElementById("repo1").innerHTML = `${data.public_repos}`;
      document.getElementById("follower1").innerHTML = `${data.followers}`;

      localStorage.setItem("user1-repos", data.public_repos);
      localStorage.setItem("user1-followers", data.followers);
    });
});

//user2
const search2 = document.getElementById("submit-btn2");
search2.addEventListener("click", function () {
  var searchUser = document.getElementById("user-input").value;
  var originalName = searchUser.split(" ").join("");
  fetch("https://api.github.com/users/" + searchUser)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById("user-name2").innerHTML = `${data.login}`;
      document.getElementById("repo2").innerHTML = `${data.public_repos}`;
      document.getElementById("follower2").innerHTML = `${data.followers}`;

      localStorage.setItem("user2-repos", data.public_repos);
      localStorage.setItem("user2-followers", data.followers);
    });
});

//compare

document.getElementById("submit-btn-1").addEventListener("click", compareUsers);

function compareUsers() {
  const user1Repos = parseInt(localStorage.getItem("user1-repos"));
  const user2Repos = parseInt(localStorage.getItem("user2-repos"));
  const user1Followers = parseInt(localStorage.getItem("user1-followers"));
  const user2Followers = parseInt(localStorage.getItem("user2-followers"));

  if (
    Number.isInteger(user1Repos) &&
    Number.isInteger(user2Repos) &&
    user1Repos >= 0 &&
    user2Repos >= 0
  ) {
    if (user1Repos > user2Repos) {
      alert("User 1 has more repositories than User 2.");
    } else if (user1Repos < user2Repos) {
      alert("User 2 has more repositories than User 1.");
    } else {
      if (user1Followers > user2Followers) {
        alert("User 1 has more followers than User 2.");
      } else if (user1Followers < user2Followers) {
        alert("User 2 has more followers than User 1.");
      } else {
        alert("Both users have the same number of repositories and followers.");
      }
    }
  }
}
