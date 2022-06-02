function ImportNavBar(){
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function()
        {
            if (this.readyState == 4)
            {
                if (this.status == 200) {document.getElementById("nav-bar").innerHTML = this.responseText;}
            }
        }

    xhttp.open("GET", "/HTML_Folder/Templates/navbar.html", true);
    xhttp.send();
    console.log("Nav Bar");

    return;
}

function ImportBlogs(blogs)
{
    for (let i = 0; i < blogs.length; i++)
    {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function()
        {
            if (this.readyState == 4)
            {
                if (this.status == 200) {document.getElementById("blog-container").innerHTML += this.responseText;}
            }
        }

        xhttp.open("GET", blogs[i], true);
        xhttp.send();
    }
    return;
}
