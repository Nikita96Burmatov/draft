import  Router  from "express";


const routes = Router();

routes.get('/', async (req, res) => {

    res.render('index', {
        title: 'Normocard',
        isIndex: true,
    })
});

routes.get('/doctor', async(req, res)=>{

    res.render('doctor', {
        title: 'Врачи Normocard Clinic',
        isDoctor: true
    })
})


routes.get('/about-doctor', async(req, res)=>{

    res.render('about-doctor', {
        title: 'О враче Normocard Clinic',
        isAboutDoctor: true
    })
})

routes.get('/home', async(req, res)=>{

    res.render('home', {
        title: 'Главная',
        isDoctor: true
    })
})

routes.get('/services', async(req, res)=>{

    res.render('services', {
        title: 'Услуги Normocard Clinic',
        isDoctor: true
    })
})

routes.get('/contact', async(req, res) =>{

    res.render('contact', {
        title: 'Контакты Normocard Clinic',
        isContact: true
    })
})

routes.get('/about', async(req, res) =>{

    res.render('about', {
        title: 'О Normocard Clinic',
        isAbout: true
    })
})


export default routes