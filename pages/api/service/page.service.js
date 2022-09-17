import axios from "axios";

class PageService {
  constructor() {
    this.api = axios.create({
      baseURL: `http://localhost:8000/api`,
    });
  }

  getPages = () => {
    return this.api.get("/page");
  };

  newPageById = (pageId) => {
    return this.api.get(`/page/onepage?id=${pageId}`);
  };

  newPage = (page) => {
    return this.api.post("/page", page);
  };
}

const pageService = new PageService();

export default pageService;
