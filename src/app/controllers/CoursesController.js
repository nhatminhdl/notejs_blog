import { mongooseToObject } from '../../until/mongoose.js';
import courses from '../model/course.js';

class CoursesController {
    //[GET] /coures/:slug
    show(req, res, next) {
        // res.send('COURSE DETAIL - ' + `${req.params.slug}`);
        courses
            .findOne({ slug: req.params.slug })
            .then((course) =>
                res.render('courses/show', {
                    courses: mongooseToObject(course),
                }),
            )
            .catch(next);
    }

    //[GET] /coures/create
    create(req, res, next) {
        res.render('courses/create');
    }
    //[POST] /coures/store

    //YilPrQiKOfE
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/hq720.jpg`;
        const course = new courses(formData);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch((error) => {});
    }

    //[GET] /coures/:id/edit
    edit(req, res, next) {
        courses
            .findById(req.params.id)
            .then((course) =>
                res.render('courses/edit', {
                    course: mongooseToObject(course),
                }),
            )
            .catch(next);
    }

    //[PUT] /coures/:id
    update(req, res, next) {
        courses
            .updateOne({ _id: req.params.id }, req.body)
            .then((course) => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    //[DELETE] /coures/:id
    destroy(req, res, next) {
        courses
            .deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

export default new CoursesController();
