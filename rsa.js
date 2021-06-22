function checkForm($this)
{
    var str=$this.value;
    while(str.match(/\D/))
    {
        str=str.replace(/\D/,"");
    }
    $this.value=str;
}

document.getElementById("sakusei").addEventListener("click",function (){
    let p,q;
    p = document.getElementById("Pn1").value;
    q = document.getElementById("Pn2").value;
    const n = p*q;


    for (let i=2; i<p; i++){
        if(p%i === 0){
            alert(p+"は"+i+"で割れるので素数ではありません");
            return 0;
        }
    }

    for (let i=2; i<q; i++){
        if(q%i === 0){
            alert(q+"は"+i+"で割れるので素数ではありません");
            return 0;
        }
    }
    p -= 1; q -= 1;
    i=1,j=1;

    while(p*i !== q*j){
        if(p*i<q*j){
            i++
        }else{
            j++
        }
    }
    document.getElementById("lcm").value +=(p*i);

    document.getElementById("nkoukai").value +=(n);
});

document.getElementById("koukaib").addEventListener("click",function (){
    let big,r;
    let e = document.getElementById("e").value;
    const e2 = e;
    let p = document.getElementById("Pn1").value;
    let q = document.getElementById("Pn2").value;
    let L = document.getElementById("lcm").value;
    if(p<q){
        big =Number(q);
    }else{
        big =Number(p);
    }
    if(big>e){
        alert("eがMax{p,q}より小さいです");
        return 0;
    }

    while((r=L%e) !== 0){
        L=e;
        e=r;
    }
    if(e !== 1){
        alert("互いに素ではありません")
        return 0;
    }
    document.getElementById("ekoukai").value +=(e2);
});

document.getElementById("d").addEventListener("click",function (){
    let pn1,pn2,L;
    pn1 = document.getElementById("Pn1").value;
    pn2 = document.getElementById("Pn2").value;
    const n = document.getElementById("nkoukai").value;

    let i=1,j=1;
    pn1 -= 1; pn2 -= 1;
    while(pn1*i !== pn2*j){
        if(pn1*i<pn2*j){
            i++
        }else{
            j++
        }
    }

    let a,b,q,r=1
    let ans = [],fans = [];;
    const q2=[];

    a = document.getElementById("e").value;
    b = pn1*i; L = pn1*i;
    i=0; j=0;
    while(r!==0){
        q = a/b;
        q2.push(parseInt(q,10));
        r = a%b;
        a = b;
        b = r;
        i += 1;
    }

    let i2 = i-1;

    while(i2 !== -1){
        q2[i2] *=-1;
        i2--;
    }

    i -= 1;
    q2[i] = 1;

    let z,w;
    if(i<2){
        z = r[0];
        w = q2[0];
    }else{
        z = q2[i-1];
        w = q2[i]+q2[i-1]*q2[i-2];
    
        let y;
        
        while (i !== 2){
            y = z;
            z = w;
            w = y;
            w = w+z*q2[i-3];
            i--;
        }
    }

    if(z<0){
        z += L;
    }

    document.getElementById("hukugoukey").value += (z) + "\n";

});

document.getElementById("hukugou").addEventListener("click",function (){

    let a1 = document.getElementById("fukugou").value;
    let d = document.getElementById("hukugoukey").value
    const n = document.getElementById("nkoukai").value;
    let a2,i=0,C=0,j;
    let length = a1.length;
    const N = 94;
    length -= 1;
    while(length>=0){
        a2 = a1.charCodeAt(i)-33;
        C += a2*(Math.pow(N,length));
        length--;
        i++;
    }

    let bin = [];
    for(i=0;d>0;i++){
        bin[i] = d%2;
        d = d/2;
        d = parseInt(d,10);
    }

    let C2,double=0;
    C2 = C;
    C2 %= n;
    double += C2;
    j = 1;
    while(j<=i){
        C2 = (C2*C2)%n;
        if(bin[j] === 1){
            double *= C2;
            double %= n;
        }
        j++;
    }
    
    i=0;
    let ans=[],fans=[];

    for(i=0;double>0;i++){
        ans[i] = (double%N);
        double = double/N;
        double = parseInt(double,10);
    }

    i -= 1;
    j = 0;
    while(i>=0){
        fans[j] = String.fromCharCode(ans[i]+33); 
        j++;
        i--;
    }

    document.getElementById("last").value +=(fans.join(""))+"\n";

});