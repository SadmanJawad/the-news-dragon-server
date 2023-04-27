const express = require('express');
const app = express();
const cors = require('cors')
const  port = process.env.PORT || 5000;

const categories = require('./Data/categories.json');
const news = require('./Data/news.json');


app.use(cors())

app.get('/', (req, res) => {
    res.send('Dragon is running')
})

app.get('/categories', (req, res) => {
    // console.log(categories)
    res.send(categories)
})

//TODO  client side left side
// get all news in localhost:5000/news
app.get('/news',(req, res) => {
    res.send(news)
})
// get specific news in localhost:5000/news/:id
app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    // console.log(id);
    const selectedNews = news.find(singleNews => singleNews._id === id)
    res.send(selectedNews)
})
// category wise news in localhost:5000/
app.get('/categories/:id', (req, res)=> {
    const id = parseInt(req.params.id);
    // console.log(id)
    if(id === 0) {
        res.send(news)
    }
    else{

        const categoryNews = news.filter(singleNews => parseInt(singleNews.category_id) === id);
        res.send(categoryNews)
    }

})


app.listen(port, ()=> {
    console.log(`Dragon API is running on port : ${port}`)
})