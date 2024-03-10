const bcrypt = require('bcrypt');

// const hashPassword = async(pw) => {
//     const salt = await bcrypt.genSalt(12);
//     const hash = await bcrypt.hash(pw, salt);
//     console.log(salt);
//     console.log(hash);
// };

const hashPassword = async(pw) => {
    const hash = await bcrypt.hash(pw, 12);
    console.log(hash);
};

const login = async(pw, hashPw) => {
    const result = await bcrypt.compare(pw, hashPw);
    if(result) {
        console.log('ログイン成功');
    } else {
        console.log('ログイン失敗');
    }
}

// hashPassword('123456');
login('123456','$2b$12$16gsCWeWKE.lGm1zcTNqFu/17EgNm.2FgVdbIgEekZMs25e7crD.O');