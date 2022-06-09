import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
// <----------pay1----------->
import './pay1.css';
import PInfo from './component/PInfo';
import Steps1 from './component/Steps1';
import Coupon from './component/Coupon';
import Point from './component/Point';
// <----------pay2----------->
import './pay2.css';
import Steps2 from './component/Steps2';



function Pay1(props){
    if(localStorage.getItem('sCarts')==null){
        localStorage.setItem('sCarts',JSON.stringify([]))
        
    }
    const thismemberid=localStorage.getItem(true)

    const {auth}=props
    

    //回去繼續購物
    const keepshopping = ()=>{
        window.location.assign("http://localhost:3000/shop")
         }  

    //按下一步跳pay2
       const nextStep = ()=>{
        if(JSON.parse(localStorage.getItem('sCarts'))==false){
            alert("購物車沒有商品")
       }else if(!auth){
           console.log(auth)
            alert("請登入會員")
           }else{
        document.querySelector('.payTwo').style.display="block"
        document.querySelector('.payOne').style.display="none"
        window.scroll(0,0)
    }
         }  
    
     //回上一步
    const preStep = ()=>{
        document.querySelector('.payTwo').style.display="none"
        document.querySelector('.payOne').style.display="block"
        window.scroll(0,0)
         } 
         
    //按下一步跳pay3
    const complete = ()=>{
        const a=document.querySelector('.sameAddress').checked
        if(a==true){
            setRName(name)
            setRPhone(phone)
            setREmail(email)
            setRAddress(address)
            if (nameMessage=="" ){
           
            window.location.replace("http://localhost:3000/shoppingCart/pay3")
           }else{
                 document.querySelector(".errorname").style.color="red";
                 document.querySelector(".errorphone").style.color="red";
                 document.querySelector(".erroremail").style.color="red";
                 document.querySelector(".erroraddress").style.color="red";
                 document.querySelector(".errorRname").style.color="red";
                 document.querySelector(".errorRphone").style.color="red";
                 document.querySelector(".errorRemail").style.color="red";
                 document.querySelector(".errorRaddress").style.color="red";
        }
        }else{
            if (nameMessage=="" ){    
            window.location.replace("http://localhost:3000/shoppingCart/pay3")          
               }else{
                 document.querySelector(".errorname").style.color="red";
                 document.querySelector(".errorphone").style.color="red";
                 document.querySelector(".erroremail").style.color="red";
                 document.querySelector(".erroraddress").style.color="red";
                 document.querySelector(".errorRname").style.color="red";
                 document.querySelector(".errorRphone").style.color="red";
                 document.querySelector(".errorRemail").style.color="red";
                 document.querySelector(".errorRaddress").style.color="red";
            }
        }

        }
        

// <----------pay1----------->

const [ ptotal, setPtotal ]= useState(0)
console.log(ptotal)
const [totalp ,settotalp]= useState()
const[ ctotal , setCtotal] = useState(0)
// <----------point----------->
const [mpoint,setMpoint]=useState()
const[pointla, setPointla]=useState(0)   
const[ pointt , setPointt] = useState(0)


    // <----------pay2----------->
    const [name,setName]=useState()
    const [phone,setPhone]=useState()
    const [email,setEmail]=useState()
    const [address,setAddress]=useState()
    const [Rname,setRName]=useState()
    const [Rphone,setRPhone]=useState()
    const [Remail,setREmail]=useState()
    const [Raddress,setRAddress]=useState()
 
    //顯示錯誤訊息
  
    const [nameMessage,setNameMessage]=useState("請輸入姓名")
    const [phoneMessage,setPhoneMessage]=useState("請輸入手機")
    const [emailMessage,setEmailMessage]=useState("請輸入信箱")
    const [addressMessage,setAddressMessage]=useState("請輸入地址")
 
    const [RnameMessage,setRNameMessage]=useState("請輸入姓名")
    const [RphoneMessage,setRPhoneMessage]=useState("請輸入手機")
    const [RemailMessage,setREmailMessage]=useState("請輸入信箱")
    const [RaddressMessage,setRAddressMessage]=useState("請輸入地址")
 
 
    const Iname=(e)=>{
     setName(e.target.value);
      }
    const Iphone=(e)=>{
     setPhone(e.target.value);
      }
    const Iemail=(e)=>{
     setEmail(e.target.value);
      }
    const Iaddress=(e)=>{
     setAddress(e.target.value);
      }
     const RIname=(e)=>{
     setRName(e.target.value);
     }
     const RIphone=(e)=>{
     setRPhone(e.target.value);
      }
     const RIemail=(e)=>{
     setREmail(e.target.value);
     }
     const RIaddress=(e)=>{
     setRAddress(e.target.value);
     }   
     // console.log(name)
       
         //驗證
      
         const Wrongname=()=>{
             if(!name ){
                 setNameMessage("請輸入姓名")
                 document.querySelector(".errorname").style.color="red";
             }else{
                 setNameMessage("")
             }
         }   
           //^手機驗證格式^
         const phone_num = /^09[0-9]{8}$/;
         const Wrongphone=()=>{
             if(!phone_num.test(phone)){
                 setPhoneMessage("請輸入手機")
                 document.querySelector(".errorphone").style.color="red";
                }else{
                 setPhoneMessage("")
             }
         } 
         const mail_text = /[\w-]+@([\w-]+\.)+[\w-]+/;;  
         const Wrongemail=()=>{
             if(!mail_text.test(email)){
                 setEmailMessage("請輸入信箱")
                 document.querySelector(".erroremail").style.color="red";
                }else{
                 setEmailMessage("")
             }
         }
         const Wrongaddress=()=>{
             if(!address){
                 setAddressMessage("請輸入地址")
                 document.querySelector(".erroraddress").style.color="red";
                }else{
                 setAddressMessage("")
             }
         }
         const WrongRname=()=>{
             if(!Rname){
                 setRNameMessage("請輸入姓名")
                 document.querySelector(".errorRname").style.color="red";
                }else{
                 setRNameMessage("")
             }
         }   
         const WrongRphone=()=>{
             if(!phone_num.test(Rphone)){
                 setRPhoneMessage("請輸入手機")
                 document.querySelector(".errorRphone").style.color="red";
                }else{
                 setRPhoneMessage("")
             }
         }  
         
    
         const WrongRemail=()=>{
             if(!mail_text.test(Remail)){
                 setREmailMessage("請輸入信箱")
                 document.querySelector(".errorRemail").style.color="red";
                }else{
                 setREmailMessage("")
             }
         }
         const WrongRaddress=()=>{
             if(!Raddress){
                 setRAddressMessage("請輸入地址")
                 document.querySelector(".errorRaddress").style.color="red";
                }else{
                 setRAddressMessage("")
             }
         }
     
 
        //相同運送地址 
        const shipSame = ()=>{
          const a=document.querySelector('.sameAddress').checked
         
          console.log(a)
          if(a==true){
          document.querySelector('.receiverInfo').style.display="none"
          setRName(name)
          setRPhone(phone)
          setREmail(email)
          setRAddress(address)
          
          setRNameMessage("")
          setRPhoneMessage("")
          setREmailMessage("")
          setRAddressMessage("")

          }else{
          document.querySelector('.receiverInfo').style.display="block"
          setRName("")
          setRPhone("")
          setREmail("")
          setRAddress("")
         }
          }
     
          //運費選擇
           const [shipgopay,setShipgopay]=useState("請選擇運送方式");
           const shipprice = ()=>{
               const a = ptotal
               console.log(a)
            const b = document.querySelector('.postoffice').checked
            console.log(b)
            if(b==true){
                  if(a>1500){
                    setShipgopay(0)
                  }else{
               setShipgopay(80)
              }}
            else{
                if(a>1500){
                    setShipgopay(0)
                  }else{           
               setShipgopay(100)
               }
               }  
            }
              
             
    //pay1重後端抓資料
    // let[pricetotal1, setpricetotal1] = useState('')
    const [datas, setDatas ] = useState([])
    const fetchData = async()=>{    
     const response = await fetch('http://localhost:3001/shop'); 
     const results = await response.json();
                     setDatas(results);
        const point = await fetch(`http://localhost:3001/shoporder/point?member_id=${thismemberid}`);
        const repoint = await point.json();
        setMpoint(repoint.member_point);
        console.log(repoint.member_point);
     }
    useEffect(()=>{
        fetchData();
         },[])


  return(
      <>
       {/* <----------pay1-----------> */}
      <div className="payOne">
               <div class="container main">
                   <Steps1 />
                   <hr></hr>
                   <PInfo setPtotal={setPtotal} ptotal={ptotal} 
                    settotalp={settotalp} datas={datas}
                   />
                    {/* <!-- 折扣結帳區 --> */}
                    <div class="dInput">
                        <div>
                            <div>
                                <div class="dText">
                                    <p>優惠碼使用</p>
                                </div>
                                <div>
                                    <Coupon ptotal={ptotal} ctotal={ctotal}
                                    setCtotal={setCtotal} />
                                </div>
                            </div>
                            <div>
                                   <Point pointt={pointt} setPointt={setPointt} mpoint={mpoint} ptotal={ptotal} ctotal={ctotal} setPointla={setPointla} pointla={pointla} />
                                
                            </div>
                            <hr></hr>
                            <div class="countTotal">
                                <div>
                                    <h4>商品小計</h4>
                                    <h4>優惠券</h4>
                                    <h4>紅利折扣</h4>
                                </div>
                                <div class="money">
                                    <h4>${ptotal}</h4>
                                
                                    <h4>${ctotal}</h4>
                                    <h4>${pointla}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr></hr>        

                    <div class="check">
                        <div type="button" class="addCartBtn" id="subtract" onClick={keepshopping} ><p className="btnWords">繼續購物</p>
                            </div>
                        <div type="button" class="addCartBtn" id="subtract" onClick={nextStep}><p className="btnWords">下一步</p>
                        </div>
                    </div>
             </div>
        </div>
        
        
        {/* <----------pay2-----------> */}
        <div className="payTwo">
        <div className="container main">
       <Steps2 />
          <form
        //    onSubmit={handleSubmit}
        //    onInvalid={handleInvalid}
        //    onChange={handleFormChange}
        >
              <div className="payInfoStart detail">
                  <div className="payInfoFill">
                      <div className="questInfo">
                          <div>付款方式</div>
                          <div className="radioS pppay">
                              <div className="form-check checkPart">
                                  <input className="form-check-input " type="radio"      name="paymethod" id="cash" required
                                      value="cash" />
                                  <label label className="form-check-label" for="cash">匯款</label>
                              </div>
                              <div className="form-check  checkPart">
                                  <input className="form-check-input" type="radio"  name="paymethod" id="card"
                                      value="card" required/>
                                  <label className="form-check-label" for="card">信用卡</label>
                              </div>
                          </div>
                         
                      </div>
                      <div className="questInfo">
                          <div>取貨方式</div>
                          <div>※消費滿1500即可免運</div>
                          <div className="radioS ssship">
                              <div className="form-check  checkPart ">
                                  <input className="form-check-input postoffice" type="radio"       name="pickupmethod" id="post"
                                      value="postoffice" required  onClick={shipprice}  
                                      />
                                  <label className="form-check-label" for="post">郵局 + 80</label>
                              </div>
                              <div className="form-check  checkPart1">
                                  <input className="form-check-input" type="radio"       name="pickupmethod" id="home"
                                      value="blackcat"  required onClick={shipprice}
                                      />
                                  <label className="form-check-label" for="home" >黑貓 + 100</label>
                              </div>
                          </div>
                          
                          
                      </div>
                      <div className="buyerInfo">
                          <p>購買人資料</p>
                          <input type="text" 
                          placeholder="姓名"
                          name= "name"
                          value={name}
                          onChange={Iname}
                          onBlur={Wrongname}
                          required
                          />
                          <div className="error errorname">{nameMessage}</div>
                         

                          <input type="text" 
                          placeholder="手機"
                          name= "phone"
                          value={phone}
                          onChange={Iphone}
                          required
                          minLength="10"
                          maxLength="10"
                          onBlur={Wrongphone}
                          />
                          <div className="error errorphone">{phoneMessage}</div>
                    
                          <input type="text" 
                          placeholder="信箱"
                          name="email"
                          value={email}
                          onChange={Iemail}
                        required
                          onBlur={Wrongemail}
                          />
                          <div className="error erroremail">{emailMessage}</div>
                         
                          <input type="text" 
                          placeholder="地址"
                          name= "address"
                          value={address}
                          onChange={Iaddress}
                        required
                          onBlur={Wrongaddress}
                          />
                          <div className="error erroraddress">{addressMessage}</div>
                      </div>
                 
                      <div className="pickup"  >
                           <div className="shiptohome">
                                <div className="form-check">
                                    <input className="form-check-input sameAddress" type="checkbox"      value=""id="flexCheckChecked" onClick={shipSame} />
                                    <label className="form-check-label" for="flexCheckChecked">
                                        收件人資料與顧客資料相同
                                    </label>
                                </div>
                                <div className="receiverInfo">
                
                                    <p>收件人資料</p>
                                    <input type="text" 
                                     placeholder="姓名"
                                     name= "Rname"
                                     value={Rname}
                                     onChange={RIname}
                                     required
                                     onBlur={WrongRname}
                                     />
                                   <div className="error errorRname">{RnameMessage}</div>
                                     
                                     
                                     
                                     <input type="tel" 
                                      placeholder="手機"
                                      name= "Rphone"
                                      value={Rphone}
                                      onChange={RIphone}
                                      required
                                      minLength={10}
                                      maxLength={10}
                                      onBlur={WrongRphone}
                                      />
                                    <div className="error errorRphone">{RphoneMessage}</div>
                                      
                                      
                                     <input type="email" 
                                     placeholder="信箱"
                                     name="Remail"
                                     value={Remail}
                                     onChange={RIemail}
                                     required
                                      onBlur={WrongRemail}
                                     />
                                   <div className="error errorRemail">{RemailMessage}</div>
                                    
                                     <input type="text" 
                                      placeholder="地址"
                                      name= "Raddress"
                                      value={Raddress}
                                      onChange={RIaddress}
                                      required
                                      onBlur={WrongRaddress}
                                      />
                                    <div className="error errorRaddress">{RaddressMessage}</div>

                                   
                                </div>
                            </div>
                           
                      </div>
                      <div className="noteInfo">
                          <p>備註</p>
                          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                      </div>
                  </div>
      
                  <div className="payTotalCheck">
                      <div className="box">
                          <div className="totalInfo1">
                              <div>
                                  <p>商品小計</p>
                                  <p>運費</p>
                                  <p>優惠折扣</p>
                                  <p>紅利折扣</p>
                              </div>
                              <div className="money">
                                  <p>${ptotal}</p>
                                  <p className="sprice">${shipgopay}</p>
                                  <p>${ctotal}</p>
                                  <p>${pointla}</p>
                              </div>
                          </div>
                          <div className="line"></div>
                          <div className="totalInfo3">
                              <div>
                                  <h3>結帳金額</h3>
                              </div>
                              <div className="money">
                                  <h3>${ptotal + (Number(shipgopay)) - (Number(ctotal))- (Number(pointla))}</h3>
                              </div>
                          </div>
                             
                              <div className="nextBtn" 
                              >
                               <button  className="btn btn-primary btn-lg btn-block pbtn " onClick={preStep}
                              >上一步 </button>
                              <button type="button" className="btn btn-primary btn-lg btn-block pbtn " onClick={complete}
                              >結帳 </button>
                              </div>
      
                      </div>
                  </div>
                 
                  {/* <!-- 手機版小計 --> */}
                  <div className="mText">
                      <hr></hr>
                      <br></br>
                      <h3>金額總計</h3>
                  </div>
                  <div className="mPayTotalCheck">
      
                      <div className="box">
                          <div className="totalInfo1">
                              <div>
                                  <p>商品小計</p>
                                  <p>運費</p>
                                  <p>優惠折扣</p>
                                  <p>紅利折扣</p>
      
                              </div>
                              <div className="money">
                                  <p>${ptotal}</p>
                                  <p>自取</p>
                                  <p>$100</p>
                                  <p>$100</p>
      
      
                              </div>
                          </div>
                          <div className="line"></div>
                          <div className="totalInfo1">
                              <div>
                                  <h3>結帳金額</h3>
                              </div>
                              <div>
                                  <h3>$898</h3>
                              </div>
                          </div>
                          <div className="nextBtn" 
                              >
                               <button  className="btn btn-primary btn-lg btn-block pbtn" onClick={preStep}
                              >上一步 </button>
                              <button type="button" className="btn btn-primary btn-lg btn-block pbtn" onClick={complete}
                              >結帳 </button>
                            </div>
      
      
                      </div>
                  </div>
      
              </div>
           </form>
        </div>

        </div>

     </>
  );
}

export default Pay1