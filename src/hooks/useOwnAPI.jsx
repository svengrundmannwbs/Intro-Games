import axios from "axios";

const useOwnAPI = () => {
  const getImages = async () => {
    axios
      .get("http://localhost:8000/image")
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  return { getImages };
};

export default useOwnAPI;
