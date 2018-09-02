const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let answer = 0;

const question1 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Who is the Harry Potter\'s love interest in the fifth book? ', (answer) => {
            console.log(`Your answer is: ${answer}`);
            resolve(answer);
        });
    })
}

const question2 = () => {
    return new Promise((resolve, reject) => {
        rl.question('How many years do you need to study at Hogwarts before graduating? ', (answer) => {
            console.log(`Your answer is: ${answer}`);
            resolve(answer);
        });
    })
}

const main = async () => {
    const a1 = await question1();
    const a2 = await question2();
    if (a1 == 'Cho Chang') {
        console.log('Correct Answer');
        answer++;
    } else {
        console.log('Wrong answer for question 1');
    }

    if (a2 == "Seven") {
        console.log("Correct Answer");
        answer++;
    } else {
        console.log("Wrong answer for question 2");
    }

    console.log(`You answered ${answer} questions correctly! Hurray!`);
    
    rl.close();
}

main()