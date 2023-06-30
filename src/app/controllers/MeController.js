import course from '../model/course.js';
import { multipleMongooseObject } from '../../until/mongoose.js';

class MeController {
    //[GET] /me/stored/courses

    storedCourses(req, res, next) {
        course
            .find({})
            .then((course) =>
                res.render('me/stored-courses', {
                    courses: multipleMongooseObject(course),
                }),
            )
            .catch(next);
    }
}

export default new MeController();
