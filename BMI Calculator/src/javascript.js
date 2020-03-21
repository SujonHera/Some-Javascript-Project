  function bmicalculator() {
   var weight=document.getElementById('weight').value;
   var height=document.getElementById('height').value;
   if(!weight || !height){
     alert("Please Fill the Field")
   }else{
     height = height * 12;
     height = height * 0.025;

     var bmiValue = weight / Math.pow(height, 2);
     bmiValue = Math.round(bmiValue)

     document.getElementById('bmiValue').value = bmiValue;
   }
   
  }

