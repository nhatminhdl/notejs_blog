import newsRouters from "./news.js";
import siteRouter from "./site.js";

function route(app) {
    //router
    app.use("/", siteRouter);
    app.use("/news", newsRouters);
}

export default route;
