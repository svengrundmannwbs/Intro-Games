import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
  });

  const getContent = async (type, sort) => {
    try {
      const entries = await client.getEntries({
        content_type: type,
        select: "fields",
        order: sort,
      });
      return entries;
    } catch (error) {
      console.log("Error fetching: ", error);
    }
  };

  const searchArchivedGames = async (type) => {
    try {
      const entries = await client.getEntries({
        content_type: type,
        select: "fields.name",
        limit: 1000,
        //"fields.name[match]": search,
      });
      return entries;
    } catch (error) {
      console.log("Error fetching: ", error);
    }
  };

  return { getContent, searchArchivedGames };
};

export default useContentful;
