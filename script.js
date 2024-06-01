let counter = 1;

function addPost() {
    let input = document.getElementById("inputPost").value;
    if (input !== "") {
        let postDiv = document.createElement("div");
        postDiv.className = "post";
        let body = document.querySelector("body");
        body.appendChild(postDiv);
        let p = document.createElement("p");
        p.innerHTML = input;
        postDiv.appendChild(p);
        let likeButton = document.createElement("button");
        likeButton.innerHTML = "Like";
        postDiv.appendChild(likeButton);
        let commentButton = document.createElement("button");
        commentButton.innerHTML = "Comment";
        postDiv.appendChild(commentButton);
        let input1 = document.getElementById("inputPost");
        input1.value = "";
        counter++;
        let span = document.getElementById("count");
        span.innerHTML = counter;
    }
}

function remove(){
    let notificationDiv = document.getElementById("notification");
    document.getElementById("body").removeChild(notificationDiv);

}