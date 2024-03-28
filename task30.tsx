const usernames = ["admin", "eric", "john", "maria", "michael"];
function greetUsers1(users: string[]): void {
  for (const user of users) {
    if (user === "admin") {
      console.log(`Hello admin, would you like to see a status report?`);
    } else {
      console.log(`Hello ${user}, thank you for logging in again.`);
    }
  }
}
greetUsers1(usernames);
