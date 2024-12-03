function isTriangle(a,b,c)
{
    if(a>0 && b>0 && c>0 && a+b>c && a+c>b && b && b+c>a){
        return true
    }
    else{
        return false;
    }
   
}

function createArrayOfTiers(num)
{
  let list = []
  for (let i=0; i<num.lengh;i++){
    list.push(num[i])
  }
    
}
function timeConvert(num) { 
    return num > 0 ? `${(Math.floor(num / 60) + "").padStart(2, "0")}:${(num % 60 + "").padStart(2, "0")}` : "00:00";
  }
  

    function maskify(cc) {
        return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
    }