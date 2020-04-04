$(document).ready(function() {

    var bodyInput = $("#post-body");
    var titleInput = $("#post-title");
    var cmsForm = $(".post-container"); 
    var categorySelector = $("#post-category");
    
    $(cmsForm).on("submit", handleFormSubmit);

    var url = window.location.search;
    var postId;
    var authorId;
    
    var updating = false;
  
 
    if (url.indexOf("?post_id=") !== -1) {
      postId = url.split("=")[1];
      getPostData(postId, "post");
    }
   
    else if (url.indexOf("?author_id=") !== -1) {
      authorId = url.split("=")[1];
    }
  
    
    getAuthors();
  
    
    function handleFormSubmit(event) {
      event.preventDefault();
      
      if (!titleInput.val().trim() || !bodyInput.val().trim() || !categorySelector.val()) {
        return;
      }
      
      var newPost = {
        title: titleInput
          .val()
          .trim(),
        body: bodyInput
          .val()
          .trim(),
        // AuthorId: categorySelector.val()
      };
  
     
      if (updating) {
        newPost.id = postId;
        updatePost(newPost);
      }
      else {
        submitPost(newPost);
      }
    }
  
    
    function submitPost(post) {
      $.post("/api/post", post, function() {
        window.location.href = "/1html1";
      });
    }
  
    
    function getPostData(id, type) {
      var queryUrl;
      switch (type) {
      case "post":
        queryUrl = "/api/posts/" + id;
        break;
    //   case "author":
    //     queryUrl = "/api/authors/" + id;
    //     break;
      default:
        return;
      }
      $.get(queryUrl, function(data) {
        if (data) {
          console.log( data.id);
          
          titleInput.val(data.title);
          bodyInput.val(data.body);
        //   authorId = data.AuthorId || data.id;

          updating = true;
        }
      });
    }
  
    
    // function getAuthors() {
    //   $.get("/api/authors", renderAuthorList);
    // }

    // function renderAuthorList(data) {
    //   if (!data.length) {
    //     window.location.href = "/authors";
    //   }
    //   $(".hidden").removeClass("hidden");
    //   var rowsToAdd = [];
    //   for (var i = 0; i < data.length; i++) {
    //     rowsToAdd.push(createAuthorRow(data[i]));
    //   }
    //   categorySelector.empty();
    //   console.log(rowsToAdd);
    //   console.log(categorySelector);
    //   categorySelector.append(rowsToAdd);
    //   categorySelector.val(authorId);
    // }
  
   
    // function createAuthorRow(author) {
    //   var listOption = $("<option>");
    //   listOption.attr("value", author.id);
    // //   listOption.text(author.name);
    //   return listOption;
    // }
  
  
    function updatePost(post) {
      $.ajax({
        method: "PUT",
        url: "/api/post",
        data: post
      })
        .then(function() {
          window.location.href = "/1html";
        });
    }
  });
  