let numbers = [11,7,8,232,88];
// for (let i = 0; i < numbers.length-1; i++) {
//     console.log(numbers[i]); }
//     {
    
//     if (numbers [i]%2 === 0) 
//         console.log(numbers[i] );
//     }  


// for (let mum of numbers) {
//     if (mum % 2 == 0) 
//         console.log(mum);
//     }
let sum=0;
for (let i=0; i<= numbers.length-1; i++) {
    if (numbers[i] % 2 == 0) {
        sum = sum + numbers[i]; 
    }
    console.log(sum);
}