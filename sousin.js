function checkForm($this)
{
    var str=$this.value;
    while(str.match(/\D/))
    {
        str=str.replace(/\D/,"");
    }
    $this.value=str;
}

document.getElementById("angou").addEventListener("click",function (){
    let a1 = document.getElementById("normal").value;
    let a2,i=0,j,P=0,double=0,P2;
    const N = 94;
    let length = a1.length;
    length -= 1;
    while(length>=0){
        a2 = a1.charCodeAt(i)-33;
        P += a2*(Math.pow(N,length));
        i++;
        length--;
    }


    let bin = [];
    let e = document.getElementById("e2").value;
    let n = document.getElementById("n2").value;
    for(i=0;e>0;i++){
        bin[i] = e%2;
        e = e/2;
        e = parseInt(e,10);
    }

    P2 = P;
    double += P2;
    j = 1;
    while(j<i){
        P2 = (P2*P2)%n;
        if(bin[j] === 1){
            double *= P2;
            double %=n;
        }
        j++;
    }


    let anb =[],fanb = [];
    i = 0;
    while(double !== 0){
        anb[i] = double % N;
        double = parseInt(double/N,10);
        i++;
    }

    i -= 1;
    j = 0;

    while(i>=0){
        fanb[j] = String.fromCharCode(anb[i]+33);
        i--;
        j++;
    }

    document.getElementById("fangou").value +=(fanb.join(""));

});
