export const requairedField = value =>{
    if(value){
        return undefined;
    }
    return "Поле не должно быть пустым";
}

export const maxLenghtCreator = (maxLenght) => value =>{
    if(value && value.length >maxLenght){
        return `max lenght is  ${maxLenght} symbols`;
    }
    return undefined;
}