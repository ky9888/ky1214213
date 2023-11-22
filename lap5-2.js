class tinhHCN{
    constructor(chieudai,chieurong){
      this.chieudai=chieudai;
      this.chieurong=chieurong;
    }
    tinhchuvi() {
      let chuvi=(this.chieudai+this.chieurong)*2;
      
     return chuvi;
     
  
  }
  tinhdientich() {
      let dientich=this.chieudai*this.chieurong;
      return dientich;
  }
          }
  
  
  let tinhHCNn=new tinhHCN(10,5);
    let chuvi=tinhHCNn.tinhchuvi();
    let dientich=tinhHCNn.tinhdientich();
  
    console.log("chu vi hình chữ nhật là:"+" "+ chuvi);
    console.log("diện tích hình chữ nhật là:"+" "+ dientich);
     
  
  