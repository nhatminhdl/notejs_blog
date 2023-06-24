
class NewsController{
    //[GET] /news
    index(req,res){
       res.render("news");
       
    }

    // [GET] /news/:slug
    show(req,res){
      // res.render("home");
       res.send("hello");
      //  console.log("ruuning");
    }
}

export default new NewsController;
