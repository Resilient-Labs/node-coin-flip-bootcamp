const express = require('express')
const app = express()
app.listen(3000, () => {
    console.log('Connected')
})
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))
let result = {answer: '', score: 0}
app.get('/', (req,res) => {
    res.render('index.ejs', {data : result} )
})



app.post('/heads',(req,res)=> {
    let random = Math.floor(Math.random() * 2) === 1 ? 'heads' : 'tails'

    if (random == 'heads'){
        result['answer'] = `The Bot Chose: ${random}`
        result['score']++
    } else{
        result['answer'] = `The Bot Chose: ${random}`
        result['score']--

    }
    console.log(result)
    res.redirect('/')
})

app.post('/tails',(req,res)=> {
    let random = Math.floor(Math.random() * 2) === 1 ? 'heads' : 'tails'

    if (random == 'tails'){
        result['answer'] = `The Bot Chose: ${random}`
        result['score']++
    } else{
        result['answer'] = `The Bot Chose: ${random}`
        result['score']--

    }
    console.log(result)
    res.redirect('/')
})