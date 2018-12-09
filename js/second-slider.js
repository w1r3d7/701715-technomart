function active(elem) {
    var a = document.getElementsByTagName('button')
    for (i = 0; i < a.length; i++) {
        a[i].classList.remove('active-button')
    }
    elem.classList.add('active-button');

    var delivery = document.getElementById('del');
    var deliveryItem = document.getElementById('delivery-item');
    var guarantee = document.getElementById('gua');
    var guaranteItem = document.getElementById('guarantee-item');
    var credit = document.getElementById('cre');
    var creditItem = document.getElementById('credit-item');

    if(delivery.classList.contains('active-button')) {
        deliveryItem.style.display = "block";
    } else {
        deliveryItem.style.display = "none";
    }

    if(guarantee.classList.contains('active-button')) {
        guaranteItem.style.display = "block";
    } else {
        guaranteItem.style.display = "none";
    }
    
    if(credit.classList.contains('active-button')) {
        creditItem.style.display = "block";
    } else {
        creditItem.style.display = "none";
    }

}

