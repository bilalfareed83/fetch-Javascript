const getData = async () => {
  try {
    const users = await fetch('https://jsonplaceholder.typicode.com/users');
    const usersData = await users.json();
    // console.log(usersData);

    const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
    const postsData = await posts.json();
    console.log(postsData);

    const result = await usersData.map(obj => {
      return {
        id: obj.id,
        username: obj.username,
        post: postsData.filter(item => obj.id === item.userId)
      };
    });
    console.log(result);
  } catch (err) {
    console.log('Error');
  }
};

getData();
