import newsRouters from './news.js';
import siteRouter from './site.js';
import coursesRouter from './courses.js';
import meRouter from './me.js';

function route(app) {
    //routers
    app.use('/', siteRouter);
    app.use('/news', newsRouters);
    app.use('/courses', coursesRouter);
    app.use('/me', meRouter);
}

export default route;
