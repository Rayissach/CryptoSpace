$(document).ready(function(){
////////////////FOR BLOG CREATE//////////////////////
    var titleInput = $("#title");
    var bodyInput = $("#body");
    var categorySelector = $("#category");
    var cmsForm = $("#cms");

    $(cmsForm).on("submit", handleFormSubmit);


    function handleFormSubmit(event) {
        event.preventDefault();

        if(!titleInput.val().trim() || !bodyInput.val().trim() || !categorySelector.val()) {
            return;
        }
        var newPost = {
            title: titleInput
            .val()
            .trim(),
            body: bodyInput
            .val()
            .trim(),
            category: categorySelector.val()
        }
        if (updating) {
            newPost.id = postId;
            updatePost(newPost);
          }
          else {
            submitPost(newPost);
          }
        }

        function submitPost(post) {
            $.post("/api/posts", post, function() {
              window.location.href = "/blog";
            });
          }

          function getPostData(id, type) {
            var queryUrl;
            switch (type) {
            case "post":
              queryUrl = "/api/posts/" + id;
              break;
            case "author":
              queryUrl = "/api/authors/" + id;
              break;
            default:
              return;
            }
            $.get(queryUrl, function(data) {
              if (data) {
                console.log(data.id);
                // If this post exists, prefill our cms forms with its data
                titleInput.val(data.title);
                bodyInput.val(data.body);
                authorId = data.AuthorId || data.id;
                // If we have a post with this id, set a flag for us to know to update the post
                // when we hit submit
                updating = true;
              }
            });
          }
          function updatePost(post) {
            $.ajax({
              method: "PUT",
              url: "/api/posts",
              data: post
            })
              .then(function() {
                window.location.href = "/blog";
              });
          }

    // $("#post").on("click", function(){

    // })


    // $("#comment").on("click", function(){

    // })
// $("#cms").on("submit", function(event) {
//     event.preventDefault();

//     var title = $("#title").val().trim();

//     $.post('/cms', title, function () {
//         console.log('title: ', title)
//     })

// })
    






})

