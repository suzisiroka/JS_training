let i = 1
let y = 0


while(i < 21) {
    // document.write(i)
    // document.write('<br>') //br znaší break - zalomení na další řádek, tedy to čísla nevypíše za sebe, ale pod sebe
    
    y++
    if (y===8){
        y=0
    } else {
        document.write(i)
        document.write('<br>')
    }
    i++
}

