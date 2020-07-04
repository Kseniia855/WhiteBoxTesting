let math = {};

math.checkSum = (a,b) => {
    let result = a+b;
    if(result>10){
        result = result - 10;
        };
    if(result<5){
        result = result + 10;
    };
    result = result * 2;
    return result;
};

math.qEquation = (a,b,c) =>{
    //1,4,4
    //2,4,5
    //0,1,1
    let d = b**2 - 4*a*c;

    if(a===0){
        return 'its not a quadratic equation'
    }

    if (d<0){
        return 'real roots do not exist'
    }

    else{
        let arr = [];
        arr.push((-1*b+Math.sqrt(d))/2*a);
        arr.push((-1*b-Math.sqrt(d))/2*a);
        return arr;
    }
}

module.exports = math;