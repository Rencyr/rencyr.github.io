function submitForm() {
    var email = document.getElementById("email").value;
    var form = document.getElementById("myForm");
        if (email !== "") {
            alert("Pesan anda telah dikirim!");
            form.reset();
        } else {
            alert("Mohon lengkapi field email!");
        }    
    
}
