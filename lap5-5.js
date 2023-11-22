class tinhtoan{
    constructor(thamsoA,thamsoB){
        this.thamsoA=thamsoA;
        this.thamsoB=thamsoB;
    }
   
    Hamcong(){
        let tinhTong=this.thamsoA+this.thamsoB;
        return tinhTong;
    }
    Hamtru(){
        let tinhHieu=this.thamsoA-this.thamsoB;
        return tinhHieu
    }
    Hamnhan(){
        let tinhTich=this.thamsoA*this.thamsoB;
        return tinhTich
    }
    Hamchia(){
        let tinhThuong=this.thamsoA/this.thamsoB;
        return tinhThuong;
    }

}

let tinhToan=new tinhtoan(10,5)

let Hamcong=tinhToan.Hamcong();
let Hamtru=tinhToan.Hamtru();
let Hamnhan=tinhToan.Hamnhan();
let Hamchia=tinhToan.Hamchia();

console.log("tổng của tham số a,b là:"+" "+Hamcong);
console.log("hiệu của tham số a,b là:"+" "+Hamtru);
console.log("tích của tham số a,b là:"+" "+Hamnhan);
console.log("thương của tham số a,b là:"+" "+Hamchia);
