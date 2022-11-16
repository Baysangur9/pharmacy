const Client = require('../models/client.model')
const Drug = require('../models/drug.model')

module.exports = clientController =({
   
    addUser: (req,res) => {
        Client.create({
            name: req.body.name,
            cash: req.body.cash,
            recept: req.body.recept,
            basket: req.body.basket
        }).then((a) => {res.json(a)} )
    },
    deleteUser: (req,res) => {
       Client.findByIdAndDelete(req.params.id).then(()=>{ res.json('Client deleted succesfully')})
    },
    getUser: (req,res) => {
        Client.findById(req.params.id).populate('basket').then((a)=> res.json(a))
    },
    putToBasket: async (req,res) => {
         const client = await Client.findById(req.params.id)
         const drug = await drug.findById(req.body.drug)

         if(!drug.nameRecept){
           if(!client.recept){
               return res.json('You have recert this drug')
           }
         }
         await Client.findByIdAndUpdate(req.params.id, {$addToSet: {basket: req.body.drug}})
         res.json('Drug in basket')
    },
    payForBasket: async (req,res) => {
        const client = await Client.findById(req.params.id).populate('basket')
        const finalSum = client.basket.reduce((sum,drug)=> {
               return sum + drug.totalPrice
        }, 0)

        if(client.money < finalSum) {
           return res.json('Money but you hold on')
        }
        const cash = client.money -finalSum

        await Client.findByIdAndUpdate(req.params.id, {$set: {basket:[],money: cash}})
        res.json('Basket paid')
    },
    clearBasket: async (req,res) => {
        await Client.findByIdAndUpdate(req.params.id,{$set:{basket:[]}})
        res.json('Basket cleared')
    },
    removeDrugFromBasket: async (req,pes) => {
        await Client.findByIdAndUpdate(req.params.id,{$set:{basket:[],money:cash}})
        res.json('Drug removed from basket')
    },
    upBalance: async (req,res) => {
        const client = await Client.findById(req.params.id)
        const newBalance = client.money + req.body.sum
        await Client.findByIdAndUpdate(req.params.id,{money:newBalance})
        res.json('you topped up the basket')
    }
})