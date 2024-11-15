let ism = prompt("Ismingizni kiriting");

if (ism){
    let son1 = prompt(
        `Salom ${ism}, siz ismingizni katta yoki kichik qilasizmi?
         1)Katta
         2)Kichik`
    );
    
    if (son1 === '1') {
        alert(ism.toUpperCase());
    } else if (son1 === '2') {
        alert(ism.toLowerCase());
    } else {
        alert("Noto'g'ri raqam kiritildi!");
    }
    
    if (ism && confirm(`"${ism}" ismingizda nechta harf ekanligini bilishni hoxlaysizmi?`)) {
        alert(`Sizning ismingizda ${ism.length} ta harf bor.`);
    } else {
        alert("Rahmat!");
    }
    
} else {
    alert("Ismingizni kiriting")
}; 

