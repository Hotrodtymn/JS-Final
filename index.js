// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"

async function main() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  const usersdata = await users.json();

  const userlistel = document.querySelector(".user-list");

  window.showuserPosts = function (id) {
    localStorage.setItem("id", id);
    window.location.href = `${window.location.origin}/user.html`;
    console.log(id);
  };

  userlistel.innerHTML = usersdata
    .map(function (user) {
      return `
        <div class="user">
          <div class="user-card" onclick="showuserPosts(${user.id})">
            <div class="user-card__container">
              <h3>${user.name}</h3>
              <p><b>Email:</b> ${user.email}</p>
              <p><b>Phone:</b> ${user.phone}</p>
              <p>
                <b>Website:</b>
                <a href="https://${user.website}" target="_blank">
                  ${user.website}
                </a>
              </p>
            </div>
          </div>
        </div>
      `;
    })
    .join("");
}

main();