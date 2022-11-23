
export const handleError = (error) => {
    const message = error?.message ?? '';
  
    if (error.response) {
      if (error.response.data) {
        return error.response.data;
      }
    }
  
    return message;
  };

  export const handlerFunction = (val,callBack) => {
    callBack(!val);
  };

  export const checkboxFunc=(val,bool,setFunc)=>{
    const arr=[];
    arr.push(val)
    setFunc((prev)=>{
        if(bool){
      return [...prev,...arr];
    }else{
      const ar = [...prev];
      ar.splice(ar.indexOf(val), 1);
      return ar;
    }})
  }
  // const handleIsModalOn = (val,callBack) => {
  //   setIsModalOn(!val);
  // };
  // const handleisDelete = (val) => {
  //   setIsDelete(!val);
  // };

  // const handleisEdit = (val) => {
  //   setIsEdit(!val);
  // };

  export const currencyFormatter=(val:string)=>{
    const number=Number(val);
  return  new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(number);

  }