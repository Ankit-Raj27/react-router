export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Ankit-Raj27");
  return response.json;
};
