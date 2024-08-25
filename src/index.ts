function main(): Promise<string> {
    return new Promise((resolve, reject) => {
        resolve('Hello World!');
    });
}

main().then((result) => {
    console.log(result);
}).catch((error) => {
    console.error(error);
});
