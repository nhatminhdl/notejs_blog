import newsRouters from './news.js';
import siteRouter from './site.js';

function route(app) {
    //routers
    app.use('/', siteRouter);
    app.use('/news', newsRouters);
}

export default route;
