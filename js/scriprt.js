function printer(){
    let html = ""
    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){

            if (i === 8 || i === 0){
                html += `<div class="btn btn-primary p-3 m-3"></div>`
                document.getElementById('dashboard').innerHTML = html
            } else if (j === 0 || j === 8){
                html += `<div class="btn btn-primary p-3 m-3"></div>`
                document.getElementById('dashboard').innerHTML = html 
            } else {
                html += `<div class="btn bg-success p-3 m-3"></div>`
                document.getElementById('dashboard').innerHTML = html
            }
        }
    }
}