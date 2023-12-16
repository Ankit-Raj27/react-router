import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import { githubInfoLoader } from "./GithubInfoLoader";

const Github = () => {
    const [data, setData] = useState(0);
    useEffect(() => {
      fetch("https://api.github.com/users/Ankit-Raj27")
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        });
    }, []);
//   const data = useLoaderData();
  return (
    <div className="bg-gray-600 text-3xl m-4 text-white text-center p-4 ">
      Github Followers : {data.followers}
      <img src={data.avatar_url} alt="pic" width={400} height={400} />
    </div>
  );
};

export default Github;


