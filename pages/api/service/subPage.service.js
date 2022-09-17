import axios from "axios";

class SubPageService {
  constructor() {
    this.api = axios.create({
      baseURL: `http://localhost:8000/api`,
    });
  }

  getPages = () => {
    return this.api.get("/subpages");
  };

  getSubpagesByPageId = (pageId) => {
    return this.api.get(`/subpages/subpages?id=${pageId}`);
  };

  newPageById = (pageId) => {
    return this.api.get(`/subpages/onepage?id=${pageId}`);
  };

  newPage = (page) => {
    return this.api.post("/subpages", page);
  };
}

const subPageService = new SubPageService();

export default subPageService;
