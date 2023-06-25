import { log } from 'console';
import course from '../model/course.js';

class SiteController {
    //[GET] /

    async index(req, res) {
        const data = await course.find({});
        res.json(data);
    }

    search(req, res) {
        res.render('search');
    }
}

export default new SiteController();
