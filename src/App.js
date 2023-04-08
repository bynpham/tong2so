import React, { useState } from 'react';

export default function App() {
  const [so1, setSo1] = useState();
  const [so2, setSo2] = useState();
  const [tong, setTong] = useState();
  const [hieu, setHieu] = useState();
  const [tich, setTich] = useState();
  const [thuong, setThuong] = useState();

  const handleClick = () =>{
    setTong(Number(so1) + Number(so2));
    setHieu(Number(so1) - Number(so2));
    setTich(Number(so1) * Number(so2));
    setThuong(Number(so1) / Number(so2));

  }

 const updateValue1 = e =>{
    setSo1(e.target.value);
 }
  return (
      <>
          <div className="container">
              <div className="form-group">
                  Số A: <input type="number" name='number' className="form-control" onChange={updateValue1} />
              </div>

              <div className="form-group">
                  Số B: <input type="number" name='number' className="form-control" onChange={(e) =>
                  {
                    setSo2(e.target.value);
                  }} />
              </div>
              <div className="form-group">
              </div>
              <div className="form-group">
                 Tổng <input type='number' name='number' className='form-control' value={tong}/>
                 Hiệu <input type='number' name='number' className='form-control' value={hieu}/>
                 Tích <input type='number' name='number' className='form-control' value={tich}/>
                 Thương <input type='number' name='number' className='form-control' value={thuong}/>
                  <button className="btn btn-primary" onClick={(handleClick)}>Tính</button>
              </div>
          </div>
      </>
  );
                }
