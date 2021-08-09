

    
    /*tạo đối tượng item giỏ hàng*/
    function Taodoituongitemgiohang(idSanPham,name,count){
        var itemgiohang=new Object()
            itemgiohang.idSanPham=idSanPham;
            itemgiohang.name=name
            itemgiohang.count=count;
            return itemgiohang;
    }
    //console.log(Taodoituongitemgiohang(123,'thinh','',300,2))
    /*Lấy ra toàn bộ item giỏ hàng được lưu trữ trong item
    intput: ''
    out: toàn bộ danh sách item giỏ hàng*/
    function laydanhsachitemgiohang(){
        var danhSachItemGioHang=new Array();
        /*B1: lấy chuỗi json lưu trữ trong local */
        var jsondanhsachitemgiohang=localStorage.getItem('danhSachItemGioHang')
        /*B2:chuyển sang danh sách item giỏ hàng*/
        if (jsondanhsachitemgiohang !=null){
            danhSachItemGioHang=JSON.parse(jsondanhsachitemgiohang);
        }
        return danhSachItemGioHang ;
    }
    laydanhsachitemgiohang()
    


    /*lưu danh sách giỏ hàng
    input:danh sách item giỏ hàng*/
    
    function luudanhsachitemgiohangvaolocal(danhSachItemGioHang){
        var jsondanhsachitemgiohang=JSON.stringify(danhSachItemGioHang);

        localStorage.setItem('danhSachItemGioHang',jsondanhsachitemgiohang)
    }
    // tính tổng tiền
    function totalCart(){
        var totalCart=0;
        var danhsachsanpham=laysanphamtheoid()
        for (var i in danhsachsanpham){
            totalCart+=danhsachsanpham[i].price * danhsachsanpham[i].count;
        } 
        return Number(totalCart.toFixed(0));
    }
    totalCart();
    function totalCount(){
        var totalCount=0;
        var danhsachsanpham=laysanphamtheoid();
        for (var i in danhsachsanpham){   
            price=danhsachsanpham[i].price ;
            cong=danhsachsanpham[i].count ;    
            totalCount=price*cong;
    
    }   
    return totalCount;
    }
    totalCount()
    
    // hàm lấy ra toàn bộ thuộc tính của sản phẩm dựa trên id sản phẩm trong giỏ hàng
    function laysanphamtheoid(){
        var totalCount=0;
        
        var sanpham=new Array();
            var danhsachsanpham= laydanhsachsanphamduoilocal();
            var danhsachgiohangduoilocal=laydanhsachitemgiohang();
            // duyệt qua từng  object trong giỏ hàng
            
            for (var i in danhsachgiohangduoilocal){
                var idsanphamitemgiohang=danhsachgiohangduoilocal[i];
                //  lấy ra số lượng sản phẩm rồi gán vào 1 Object với tên là count        
                var coutdanhsachitemgiohang={count:danhsachgiohangduoilocal[i].count};
                // dựa vào id sản phẩm mua để lấy ra sản phẩm đầy đủ thuộc tính
                for (var i=0;i<danhsachsanpham.length;i++){
                    if (danhsachsanpham[i].id==idsanphamitemgiohang.idSanPham){     
                        //nối object,nối số lượng vào sản phẩm để sản phẩm có thuộc tính count
                        var danhsachsanphamcoCount=Object.assign({},danhsachsanpham[i],coutdanhsachitemgiohang); 
                        // tính tiền tổng số sản phẩm rồi gán vào 1 Object với tên là total
                        var totalCount={total:danhsachsanphamcoCount.price * danhsachsanphamcoCount.count}
                        // nối Object để có tổng giá tiền
                        var danhsachsanphamdaydu=Object.assign({},danhsachsanphamcoCount,totalCount);                        
                        sanpham.push(danhsachsanphamdaydu)                                 
                    }
                }  
            }
              
        return sanpham
    }
    laysanphamtheoid();

    
    
    

    //hàm đẩy danh sách sản phẩm có đầy đủ đối tượng vào local
    function save(){
        localStorage.setItem('sanpham',JSON.stringify(laysanphamtheoid()));
    }
    save()

    // lấy toàn bộ danh sách sản phẩm dưới local 
    function laydanhsachsanphamduoilocal(){
            var jsondanhsachsanpham=localStorage.getItem('listProduct')
            if (jsondanhsachsanpham != null){
            var danhsachsanpham=JSON.parse(jsondanhsachsanpham)}  
        return danhsachsanpham;
    }
    laydanhsachsanphamduoilocal()
   

  

 