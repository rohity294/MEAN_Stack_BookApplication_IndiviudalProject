//var express = require('express');
var request = require('request');
var apiOptions = {
     server : "http://localhost:3000"
};

const _renderCreatePage = function(req,res) {

    res.render('create-new-book',{
        title : "create new book"
    });
};

const addNewBook = function(req,res){
    _renderCreatePage(req,res);
}
//addNewFood doAddNewFood
const doAddNewBook = function(req,res){
    const path = '/api/books';
    const postdata = {
         name : req.body.name,
         type : req.body.type,
         type : req.body.author,
         type : req.body.isbn_code
    };

    const requestOptions = {
       url : apiOptions.server+ path,
       method : 'POST',
       json : postdata
    };

    request(
        requestOptions,
        (err,response,body)=>{
            if(response.statusCode===201){
                res.redirect('/');
            }
        }
    );
};


/* const favouriteFood = (req,res) =>{
        res.render('index',{title:'My favourite food'});
        };    */ 

/* const foodlist = (req,res) =>{
            res.render('index',{title:'Food list'});
            }; */

 /*var foodArray = [  {name: "Oatmeal", type:"Breakfast"}  , {name:"burger", type:"Lunch"}, {name:"Chowmein", type:"Dinner"}];

 const myFavFood = "pizza";          
        
  const foodlist = (req,res) => {
         res.render('foodlist',{foods:foodArray});
  };          


  const favouriteFood = (req,res) =>{
    res.render('index',{title: myFavFood});
    };*/


const _renderHomePage = function(req,res,responseBody){
    res.render('booklist',{
        books: responseBody

    });
};

const homelist = function(req,res){

        const path = '/api/books';
        const requestOptions = {
            url : apiOptions.server + path,
            method : 'GET',
            json : {}
        };

        request(
            requestOptions,
            (err, response, body) => {
                _renderHomePage(req,res,body);
            }
        );

}; 


const _renderDetailPage = function(req,res,responseBody){
res.render('book-info',{
    currentBook:responseBody

});
};

const bookInfo = function(req,res){

 const path = `/api/books/${req.params.bookid}`;
 const requestOptions = {

    url: apiOptions.server + path,
    method : 'GET',
    json : {}
};
request(
    requestOptions,
    (err, response, body) => {
        _renderDetailPage(req,res,body);
    }
);

};


module.exports = {
    //favouriteFood, foodlist
    homelist, bookInfo, addNewBook, doAddNewBook
};


