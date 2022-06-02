function buat_login(){
    var hapus = document.getElementById("X");
    hapus.parentElement.removeChild(hapus);
    var p = document.createElement("p");
    p.className ="tulisan_login";
    p.innerHTML= "Silahkan Mendaftar";
    var element = document.getElementsByTagName("div")[0];
    element.appendChild(p);
    var form = document.createElement("FORM");
    element.appendChild(form);

    var label = document.createElement("label");
    label.innerHTML = "Nama User";
    form.appendChild(label);
    var input1 = document.createElement("input");
    input1.type = "text";
    input1.name = "username";
    input1.placeholder = "Nama User.."
    input1.className = "form_login";
    form.appendChild(input1);

    var label2 = document.createElement("label");
    label2.innerHTML = "Nomor Handphone";
    form.appendChild(label2);
    var input2 = document.createElement("input");
    input2.type = "tel";
    input2.name = "Nomor Telepon";
    input2.placeholder = "Nomor Handphone.."
    input2.className = "form_login";
    form.appendChild(input2);
    
    var label3 = document.createElement("label");
    label3.innerHTML = "Username";
    form.appendChild(label3);
    var input3 = document.createElement("input");
    input3.type = "text";
    input3.name = "Username";
    input3.placeholder = "Username atau email.."
    input3.className = "form_login";
    form.appendChild(input3);

    var label4 = document.createElement("label");
    label4.innerHTML = "Password";
    form.appendChild(label2);
    var input4 = document.createElement("input");
    input4.type = "Password";
    input4.name = "Password";
    input4.placeholder = "password.."
    input4.className = "form_login";
    form.appendChild(input4);

    var tombol = document.createElement("input");
    tombol.type = "submit";
    tombol.name = "tombol login";
    tombol.className = "tombol_login";
    form.appendChild(tombol);
}