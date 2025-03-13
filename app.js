 let lists = document.querySelectorAll(".list");
 let leftBox = document.getElementById("left");
 let rightBox = document.getElementById("right");

 lists.forEach(list => {
    list.addEventListener("dragstart", function(e){
        let selected = e.target;
        console.log("selected" + selected);

        rightBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });

        rightBox.addEventListener("drop", function(e){
            rightBox.appendChild(selected);
            selected = null;
        });

        leftBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });

        leftBox.addEventListener("drop", function(e){
            leftBox.appendChild(selected);
            selected = null;
        });
    })
 });