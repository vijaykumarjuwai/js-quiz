console.log("Before");
// loadUser(1)
//     .then(user => getRepos(user.gitHubUserName))
//     .then(repos => getCommits(repos[0]))
//     .then(commits => console.log(commits))
//     .catch(err => console.log("error"));

async function getAllCommits() {
    try {
        const user = await loadUser(1);
        const repos = await getRepos(user.gitHubUserName);
        const commits = await getCommits(repos[0]);
        console.log("Commits", commits);
    } catch(err) {
        console.log(err);
    }
}

getAllCommits();

console.log("After");

//Making a promise pattern
function loadUser(id) {
    // Async work
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Loading from database...");
            resolve({ userId: id, gitHubUserName: "Vijaykumar" });
        }, 2000);
    });
}

//Making a promise pattern function
function getRepos(gitHubUserName) {
    // Async work
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Loading from user...");
            resolve(['repo1', 'repo2', 'repo3']);
            // reject(new Error("Something went wrong"));
        }, 2000);
    });
}

//Making a promise pattern function
function getCommits(repo) {
    // Async work
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Loading from repo...");
            resolve(["commit1", "commit2"]);
        }, 2000);
    });
}
