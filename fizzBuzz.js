// print all the numbers from 1 to n but,
// for multiples of 3 -> print FIZZ
// for multiples of 5 -> print BUZZ
// for 3, 5 multiples -> print FIZZBUZZ

const n = 16

for (let i = 1; i < n; i++){
    let word = ""
    if(i %3 == 0){
word += "FIZZ"
    }
    if(i % 5 == 0){
        word += "BUZZ"
    }
    console.log(word || i)
}