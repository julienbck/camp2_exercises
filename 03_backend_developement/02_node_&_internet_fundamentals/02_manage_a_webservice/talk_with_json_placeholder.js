const request = require ('request');

function myCallbackFunction (result){
  console.log(result);
}

function fetchPosts (callback){
  request(
    {
      url : 'http://jsonplaceholder.typicode.com/posts',
      method: 'GET'
    }, function (error, statusCode, result) {
      // console.log("error:", error); // Print the error if one occurred
      // // console.log("statusCode:", response); // Print the response object
      callback(result);
    });
}
function fetchPostByUser (userId, callback){
  request(
    {
      url : `http://jsonplaceholder.typicode.com/posts?userId=${userId}`,
      method: 'GET'
    }, function (error, statusCode, result) {
      // console.log("error:", error); // Print the error if one occurred
      // // console.log("statusCode:", response); // Print the response object
      callback(result);
    });
}

function fetchPost (id, callback){
  request(
    {
      url : `http://jsonplaceholder.typicode.com/posts/${id}`,
      method: 'GET'
    }, function (error, statusCode, result) {
      // console.log("error:", error); // Print the error if one occurred
      // // console.log("statusCode:", response); // Print the response object
      callback(result);
    });
}


function fetchUsers(callback){
  request(
    {
      url : `http://jsonplaceholder.typicode.com/users`,
      method: 'GET'
    }, function (error, statusCode, result) {
      // console.log("error:", error); // Print the error if one occurred
      // // console.log("statusCode:", response); // Print the response object
      callback(result);
    });
}
function fetchUser(userId, callback){
  request(
    {
      url : `http://jsonplaceholder.typicode.com/users/${userId}`,
      method: 'GET'
    }, function (error, statusCode, result) {
      // console.log("error:", error); // Print the error if one occurred
      // // console.log("statusCode:", response); // Print the response object
      callback(result);
    });
}
function fetchComments(callback){
  request(
    {
      url : `http://jsonplaceholder.typicode.com/comments`,
      method: 'GET'
    }, function (error, statusCode, result) {
      // console.log("error:", error); // Print the error if one occurred
      // // console.log("statusCode:", response); // Print the response object
      callback(result);
    });
}
function fetchCommentsByPost(postId, callback){
  request(
    {
      url : `http://jsonplaceholder.typicode.com/comments?postId=${postId}`,
      method: 'GET'
    }, function (error, statusCode, result) {
      // console.log("error:", error); // Print the error if one occurred
      // // console.log("statusCode:", response); // Print the response object
      callback(result);
    });
}
function publishPost(userId, title, body, callback){
  request(
    {
      url : `http://jsonplaceholder.typicode.com/posts`,
      method: 'POST',
      form: {
        title: title,
        body: body,
        userId : userId
      }
    }, function (error, statusCode, result) {
      // console.log("error:", error); // Print the error if one occurred
      // // console.log("statusCode:", response); // Print the response object
      callback(result);
    });
}
function publishComment(postId, name, email, body, callback){
  request(
    {
      url : `http://jsonplaceholder.typicode.com/comments?postId=${postId}`,
      method: 'POST',
      form: {
        name: name,
        email: email,
        body: body,
        postId : postId
      }
    }, function (error, statusCode, result) {
      // console.log("error:", error); // Print the error if one occurred
      // // console.log("statusCode:", response); // Print the response object
      callback(result);
    });
}
function updatePostTitle(postId, newTitle, callback){
  request(
    {
      url : `http://jsonplaceholder.typicode.com/posts/${postId}`,
      method: 'PUT',
      form: {
        title: newTitle,
      }
    }, function (error, statusCode, result) {
      // console.log("error:", error); // Print the error if one occurred
      // // console.log("statusCode:", response); // Print the response object
      callback(result);
    });
}
function updatePostBody(postId, newBody, callback){
  request(
    {
      url : `http://jsonplaceholder.typicode.com/posts/${postId}`,
      method: 'PUT',
      form: {
        body: newBody,
      }
    }, function (error, statusCode, result) {
      // console.log("error:", error); // Print the error if one occurred
      // // console.log("statusCode:", response); // Print the response object
      callback(result);
    });
}
function updatePost(postId, newTitle, newBody, callback){
  request(
    {
      url : `http://jsonplaceholder.typicode.com/posts/${postId}`,
      method: 'PUT',
      form: {
        body: newBody,
        title: newTitle
      }
    }, function (error, statusCode, result) {
      // console.log("error:", error); // Print the error if one occurred
      // // console.log("statusCode:", response); // Print the response object
      callback(result);
    });
}

module.exports = {
  fetchPosts : fetchPosts,
  fetchPostByUser : fetchPostByUser,
  fetchPost : fetchPost,
  fetchUsers : fetchUsers,
  fetchUser : fetchUser,
  fetchComments : fetchComments,
  fetchCommentsByPost : fetchCommentsByPost,
  publishPost : publishPost,
  publishComment : publishComment,
  updatePostTitle : updatePostTitle,
  updatePostBody : updatePostBody,
  updatePost : updatePost
};
