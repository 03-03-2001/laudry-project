

emailjs




 let totalAmount = 0;

  function addItem(serviceName, price) {
    const serviceItem = event.target.closest(".service-item");

    const addBtn = serviceItem.querySelector(".add");
    const removeBtn = serviceItem.querySelector(".remove");

    addBtn.style.display = "none";
    removeBtn.style.display = "inline-block";

    totalAmount += price;
    document.getElementById("total").innerText = totalAmount;

    console.log(serviceName + " added");
  }

  function removeItem(serviceName, price) {
    const serviceItem = event.target.closest(".service-item");

    const addBtn = serviceItem.querySelector(".add");
    const removeBtn = serviceItem.querySelector(".remove");

    removeBtn.style.display = "none";
    addBtn.style.display = "inline-block";

    totalAmount -= price;
    document.getElementById("total").innerText = totalAmount;

    console.log(serviceName + " removed");
  }





const scrollToServices = () => {
  document.getElementById("services").scrollIntoView({
    behavior: "smooth"
  });
};















 

function sendMail (){
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone:document.getElementById("phone").value,
  }
   const serviceID = "service_yrc4fq2"
  const templateID = "template_9b137vc" 

  emailjs.send(serviceID,templateID,params)

  .then((response) => {
     document.getElementById("name").value ="";
     document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
     console.log('res');
    alert("Thank you for booking! We will get back to you soon." ,response.status, response.text);
  })
  .catch(err => {
     console.error("EmailJS error:", err);
  });



}

  






 












