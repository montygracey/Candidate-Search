const searchGithub = async () => {
  try {
    const start = Math.floor(Math.random() * 100000000) + 1;
    console.log('Fetching GitHub users...');
    const response = await fetch(
      `https://api.github.com/users?since=${start}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      }
    );
    console.log('Response status:', response.status);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} - ${JSON.stringify(data)}`);
    }

    
    const detailedUsers = await Promise.all(
      data.map(async (user: any) => {
        const userDetails = await fetch(`https://api.github.com/users/${user.login}`, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
          },
        });
        const userDetailsData = await userDetails.json();
        return userDetailsData;
      })
    );

    console.log('Detailed data received:', detailedUsers);
    return detailedUsers;
  } catch (err) {
    console.error('An error occurred:', err);
    return [];
  }
};

export { searchGithub };