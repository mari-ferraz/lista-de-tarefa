module.exports = (app)=>{ 
    let rota = 'tipos'
    app.get(`/consultar/${rota}/:id?`, async (req,sres) => { 
        //implementar obter dados com o sequelize 
        res.send(`get ${rota}`) 
    }) 
    app.post(`/cadrastrar/${rota}/:id?`, async (req,sres) => { 
        //implementar obter dados com o sequelize 
        res.send(`post ${rota}`)
    }) 
    app.put(`/atualizar/${rota}/:id?`, async (req,sres) => { 
        //implementar obter dados com o sequelize 
        res.send(`post ${rota}`)
    }) 
    app.delete(`/excluir/${rota}/:id?`, async (req,sres) => { 
        //implementar obter dados com o sequelize 
        res.send(`post ${rota}`)
    }) 
} 