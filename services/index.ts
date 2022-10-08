import eventsApis from "./apis/events";
import postsApis from "./apis/posts";
import tagsApis from "./apis/tags";
import usersApis from "./apis/users";

const Api = {
  users: usersApis,
  events: eventsApis,
  tags: tagsApis,
  posts: postsApis,
};

export default Api;
