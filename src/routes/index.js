import newsRouters from './news.js';
import siteRouter from './site.js';
import coursesRouter from './courses.js';

function route(app) {
    //routers
    app.use('/', siteRouter);
    app.use('/news', newsRouters);
    app.use('/courses', coursesRouter);
}

export default route;
