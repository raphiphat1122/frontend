import Image from "next/image"

export default function Card(){
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                    <Image src="/assets/img/card-1.png" layout="responsive" className="card-img-top" width={100} height={100} alt="..." />
                    <div className="card-body">
                    <h5 className="card-title">ทำความรู้จัก 3D Printing พร้อมตัวอย่างการออกแบบจาก CPAC Green Solution</h5>
                        <a href="https://youtu.be/Vcjmlyiie8g" target="_blank" className="btn btn-primary">ไปที่วีดีโอ</a>
                    </div>
                    </div>
                </div>

            <div className="col-md-4">
                    <div className="card">
                    <Image src="/assets/img/card-2.png" layout="responsive" className="card-img-top" width={100} height={100} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">5 วิธีการออกแบบห้องให้ดูกว้างขึ้น แม้มีพื้นที่จำกัด ด้วยสินค้าจาก Hafele</h5>
                        <a href="https://youtu.be/cVnRzSoIS4M" target="_blank" className="btn btn-primary">ไปที่วีดีโอ</a>
                    </div>
                    </div>
                </div>
                
            <div className="col-md-4">
                    <div className="card">
                    <Image src="/assets/img/card-3.png" layout="responsive" className="card-img-top" width={100} height={100} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Hidden Kitchen วิธีออกเเบบบานกั้นโดยใช้ ผลิตภัณฑ์ Hawa จาก Hafele</h5>
                        <a href="https://youtu.be/uPmWN-6t6jw" target="_blank" className="btn btn-primary">ไปที่วีดีโอ</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
