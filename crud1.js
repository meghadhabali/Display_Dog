async function foo() {
    try {
        let resp = await fetch("https://dog.ceo/api/breeds/image/random");
        let data1 = await resp.json();
        let url = data1.message;
        console.log(url);
        if(url) {
            let object =  document.createElement("object");
            object.data = url;
            document.body.append(object);
        }
        else { 
            document.body.appendChild("No Data");
        }
        
    }
    catch (error ){
        console.log(error);
    }
}

foo();