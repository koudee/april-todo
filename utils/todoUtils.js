const todoDataValidation = ({ todoText })=>{
    return new Promise((resolve,reject)=>{
        if(!todoText) reject("missing todo text");

        if(typeof todoText != "string") reject("Todo is not a text");

        if(todoText.length < 3 || todoText.length > 100) reject("length should be between 3-100");

        resolve();
    });
};

module.exports = { todoDataValidation }