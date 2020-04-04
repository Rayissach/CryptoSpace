// $(document).ready(function(){
$(".create-submit").click(function(){
	var newPost = {
		title: $("#post-title").val().trim(),
		body: $("#post-body").val().trim(),
		category: $("#post-category").val()
	}

	$.ajax("/api/post", {
		type: "POST",
		data: newPost
	}).then( function() {
		console.log("created new post");
		window.location.href="/1html1"
		// location.reload();
	})

	$("#comments").on("submit", function(){
		var user = $(this).data("user");
		
		var newComment = {
			body: $("#post-body").val()
		}
		

		$.ajax("/api/comments/" + id, {
			type: "PUT",
			data: newComment
		  }).then(
			function() {
			  console.log("changed sleep to", newComment);
			  // Reload the page to get the updated list
			  location.reload();
			}
		  );
		});
	})


	// $.post("/api/create/post", newPost, function () {
    //             console.log('newPost: ', newPost)
    //         })
})



// })