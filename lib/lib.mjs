import {add} from "./myLib.mjs";

//old school
import assert from 'assert';

console.log("Testing add() function");
try{
    assert.strictEqual(add(10,5),15);
    console.log("Executed successfully")
}catch(err){
    console.log("ERROR : " + err);
}