function filterUsers(users) {
    const filteredUsers = [];
    
    for (let i = 0; i < users.length; i++) {
      if (users[i].age > 18 && users[i].gender === 'male') {
        filteredUsers.push(users[i]);
      }
    }
    
    return filteredUsers;
  }
  
const users = [
    { name: 'John', age: 20, gender: 'male' },
    { name: 'Alice', age: 22, gender: 'female' },
    { name: 'Bob', age: 17, gender: 'male' },
    { name: 'Mike', age: 19, gender: 'male' }
  ];
  
  const filteredUsers = filterUsers(users);
  console.log(filteredUsers);