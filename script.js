// Tambahkan kode JavaScript kalian di file ini
function handleGetFormData(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const city = document.getElementById("city").value;
    const zipCode = document.getElementById("zip-code").value;
    const status = document.getElementById("status").checked;
    const object = {
        name: name,
        email: email,
        city: city,
        zipCode: zipCode, 
        status: status
    };
    return object;
};

function isNumber(zipCode){
    if (isNaN(zipCode)){
        return false
    }else{
        return true
    }
}

function checkboxIsChecked(){
    const status = document.getElementById("status").checked;
    if (status){
        return true
    }else{
        return false
    }
}

function validateFormData(object){
    if(object!=null&&isNumber(object.zipCode)&&checkboxIsChecked()){
        return true
    }else{
        return false
    }
}

function submit(){
    // const
    if (validateFormData(handleGetFormData())==false){
        document.getElementById("warning").innerText="Periksa form anda sekali lagi"
    }else{
        document.getElementById("warning").innerText=""
    }
}