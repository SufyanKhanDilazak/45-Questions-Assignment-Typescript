const currentUsers = ["alice", "bob", "charlie", "david"];
const newUsers = ["eve", "bob", "frank", "alice"];
function checkUsernameAvailability(current: string[], newUsers: string[]): void {
  for (const newUser of newUsers) {
    const usernameLower = newUser.toLowerCase();
    if (current.some(user => user.toLowerCase() === usernameLower)) {
      console.log(`${newUser} will need to enter a new username.`);
    } else {
      console.log(`${newUser} is available.`);
    }
  }
}

checkUsernameAvailability(currentUsers, newUsers);
