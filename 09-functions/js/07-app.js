startApp();

function startApp() {
    console.log('Starting app');
    secoundFun();
}

function secoundFun() {
    console.log('Two function');
    userAuth('Pablo');
}

function userAuth(user) {
    console.log(`${ user } auth successful`);
}