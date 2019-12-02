import { stringify } from "querystring";

export function PostData(type,userData){
    var BaseURL ='https://api.mailxengine.com/rest/';

    return new Promise((resolve,reject)=>{


        fetch(BaseURL+type,{
            method:'POST',
            body: JSON.stringify(userData)
        })
        .then((response)=> response.json())
        .then((res)=>{
            resolve(res);
        })
        .catch((error)=>{
            reject(error);
        });
    });
}