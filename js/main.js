function updateCounter(){
    fetch('https://c32dpyaj0l.execute-api.us-east-1.amazonaws.com/dev',{
        // updates and gets count from dynamodb DB - POST sends data to server
        method: 'POST',
        headers: {
            'Origin': 'https://amazonaws.com'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
    })
    .then(response => {
    if (
        // check if response's status is 200
        response.ok
    ) {
        return response.json()
    } else {
        throw new Error('something went wrong');
    }
    })
    .then(data => document.getElementById("hits").innerText = data)
    //.then((data) => console.log(data));
}

$(function() {
    updateCounter();
})