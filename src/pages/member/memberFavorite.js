import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import MemberAside from './memberAside';
import MemberBack from './memberBack';
import './memberFavorite.css'
import FavoriteCard from './componend/FavoriteCard';
function MemberFavorite(props){
    const{auth,setcarNum}=props;
    const {dataCheck}=props;
    if(!auth){
      window.location.replace("https://house-coffee.vercel.app/member")
    }if(!dataCheck){
      window.location.replace("https://house-coffee.vercel.app/member/NewData");
    }
    return(
        <>
             <MemberBack/>
            <div className="container">
        <div className="row"> 
        <MemberAside/>
        <main className="mMain col">
            <div className=" row justify-content-center">
                <FavoriteCard setcarNum={setcarNum}/>
                
            </div>

        </main>
        </div>
    </div>

        </>
    )
}
export default MemberFavorite;