/**
 * Created by Sasan on 4/24/2018.
 */
export default function (x,y,operator){
    switch (operator) {
        case '+':
            return x + y;
            break;

        case '-':
            return x - y;
            break;

        case '*':
            return x * y;
            break;

        case '/':
            return x / y;
            break;
    }

}