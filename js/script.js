// let nameInput = document.getElementById('nama')
// document.getElementById('submit').addEventListener("click", function(){
//     const nama= nameInput.value
//     if (nama==""){
//         document.getElementById("error-name").innerHTML="Form tidak boleh kosong boss!!!"
// } else {
//     document.getElementById('name').innerHTML= nama
// }
// })
function validateForm(){
    const nama= document.forms['message-form']['nama'].value
    if (nama == ''){
        document.getElementById("error-name").innerHTML="Form tidak boleh Kosongg bosss!!!!!"
        return false
    }
    document.getElementById("name").innerHTML= nama;
    document.getElementById("error-name").innerHTML="" ;
    return false;
}

setInterval(function() {
    document.querySelector('#carouselExample').dispatchEvent(new Event('slide.bs.carousel', { bubbles: true }));
}, 3000); // Ubah angka 5000 sesuai dengan interval yang Anda inginkan (dalam milidetik)