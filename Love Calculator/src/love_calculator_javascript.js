let checkLove = document.querySelector("#check-love");

checkLove.addEventListener("click", function () {
            
            let name = document.getElementById('name').value;
            let lname = document.getElementById('lname').value;

             
            if (!name || !lname) {
                alert("Please Enter your name and love name");
            } else if (name.length <= 2 ) {
                alert("Please Enter Minimum three characters");
            } else if ((!isNaN(name)) || (!isNaN (lname))) {
                alert("Number are Not allowed");
            } else if (lname.length <= 2) {
                alert("Please Enter Minimum three characters");
            }else {
                const loveData = Math.random() * 100;
                const main_value = Math.floor(loveData);
                document.getElementById('love_value').value = main_value + "%";
                document.getElementById('name').value = ""
                document.getElementById('lname').value = ""
   
            }



        }
)

