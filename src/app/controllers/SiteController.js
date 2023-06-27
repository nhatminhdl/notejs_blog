import course from '../model/course.js';
import { multipleMongooseObject } from '../../until/mongoose.js';

class SiteController {
    //[GET] /

    async index(req, res, next) {
        // const data = await course.find({});
        // res.json(data);

        course
            .find({})
            .then((course) => {
                course = multipleMongooseObject(course);
                res.render('home', { course });
            })
            .catch(next);
    }

    search(req, res) {
        res.render('search');
    }
}

export default new SiteController();
