interval = null
amount = null

function StartTimer(){
     time = document.getElementById("time").value
     if(/^\d+$/.test(time) == false){
          alert("Only Numbers Please")
     }
     seconds = Number(time) * 1000
     amount = Number(time)
     interval = setInterval(lowerValue,1000)
     setTimeout(finished,seconds + 5)
     document.getElementById("Timer").innerHTML = amount
}

async function lowerValue(){
     amount -= 1
     document.getElementById("Timer").innerHTML = amount
}

function finished(){
     clearInterval(interval)
     alert("Done")
}