import express from 'express'
const app=express()

const items=[
  {
    id:1,
    type:'fruits',
    details: 'mango',
  },
  {
    id:2,
    type:'vegetables',
    details:'brinjal',
  },
  {
    id:3,
    type:'knvibfv',
    details:'dettailjkijv',
  },
  {
    id:4,
    type:'drink',
    details:'sugarcane',
  }

]

const port=process.env.PORT || 3000
app.get('/',(req,res)=>{
  res.send('welcome to our server')


});

//creatr proxy in package.json




 
  app.get('/api/items',(req,res)=>{
    res.send(items)
  })


app.listen(port,()=>{
  console.log(`Listening on port ${port}`);
});