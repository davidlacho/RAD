"use strict";

const express = require('express');

const router = express.Router();

module.exports = (smoothieHelpers) => {

  // Home page
  router.get("/", (req, res) => {
      res.render("index");
    });
  

  //user goes to menu
  router.get("/smoothies/", (req, res) => {
    
    //grab smoothies data and pass to anon callback
    smoothieHelpers.getSmoothies( (err, result) => {
      //on result, store smoothie data in template vars as smoothies
      const templateVars = {
        smoothies: result
      }

      //catchs errors and passes as object in templateVars
      if (err) {
        templateVars.error.message = err;
      }

      //render smoothies and pass in template vars
      res.render("smoothies", templateVars)
    })
  });
  
  //user goes to shopping cart
  router.get("/orders/new/", (req, res) => {
    //cart form is populated from cookie
    const cart = 'cookie'//grab cart data from cookie

    //placeholder for retrieving data from cookie
    const placeHolderCart = [{id: 1, qty: 2}, {id: 2, qty: 1}]
    const templateVars = {
      placeHolderCart
    }

    //render cart and pass in template vars
    res.render("cart", templateVars);
  });
  
  //user submits thier order
  router.post("/orders/", (req, res) => {

    //form retrieval goes here
    //

    //placeholder for retrieved data from the form //req.body.params
    const placeHolderCart = [{id: 1, qty: 2}, {id: 2, qty: 1}]

    //sends order to db
    //grabs order id
    //destroy cookie
    //redirects to /orders/:id
  });
  
  //user cancels an order
  router.delete("/orders/:id/", (req, res) => {
    //sets order status to canceled in db
  });

  return router;
};
