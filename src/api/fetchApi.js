import commonApi from "./commonApi"

export const userRegister=(data)=>{
    return commonApi("http://127.0.0.1:8000/register/","POST",data,"")
}

export const userLogin=(data)=>{
    return commonApi("http://127.0.0.1:8000/token","POST",data,"")
}

export const listProducts=()=>{
    return commonApi("http://127.0.0.1:8000/product/","GET","","")
}