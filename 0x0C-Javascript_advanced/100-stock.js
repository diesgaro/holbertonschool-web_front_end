let stock = {
    macbook: 2,
    iphone: 4
}

const processPayment = (itemName) => {
    if (itemName == "macbook")
        stock.macbook -= 1;
    else if (itemName == 'iphone')
        stock.iphone -= 1;
    console.log(`Payment is being processed for item ${itemName}`)
}

const processError = (itemName) => {
    console.log(`No more ${itemName} in stock`);
    console.log('Payment is not being processed');
}

const processOrder = (itemName, callbackPayment, callbackError) => {
    console.log(`Verifying the stock of ${itemName}`);
    if (itemName.toLowerCase() == "macbook") {
        if (stock.macbook != 0)
            callbackPayment(itemName.toLowerCase());
        else
            callbackError(itemName.toLowerCase());
    }
    else if (itemName.toLowerCase() == 'iphone') {
        if (stock.iphone != 0)
            callbackPayment(itemName.toLowerCase());
        else
            callbackError(itemName.toLowerCase());
    }
    else {
        console.log(`${itemName} no exists`);
    }
}

while(true){
    let item = prompt("Please enter the item you would like to purchase (Macbook, iPhone)");
    processOrder(item, processPayment, processError);
    //console.log(stock);
}