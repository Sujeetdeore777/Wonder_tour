import axios from "axios";

var baseURL;
// if (
//     process.env.REACT_APP_ENVIRONMENT &&
//     process.env.REACT_APP_ENVIRONMENT === "PRODUCTION"
//  ) {
//     baseURL = process.env.REACT_APP_API_BASE_URL;
// } else {
//     baseURL = "http://127.0.0.1:8000";
// }
baseURL = "http://127.0.0.1:8000/";

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default class API {
  getPlaces = async (search, category) => {
    let url = "/places/";
    let query = new URLSearchParams();
    if (search) {
      query.append("search", search);
    }
    if (category) {
      query.append("category", category);
    }

    if (query.toString() != "") {
      url += "?" + query.toString();
    }

    const places = await api
      .get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return places;
  };

  getCategories = async () => {
    const categories = await api
      .get("/categories/")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return categories;
  };
}
