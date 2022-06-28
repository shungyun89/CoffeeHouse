import React from "react"



const MenuAside = (props) => {

    const hoverCss = {borderleft:'1px solid #E4D2A3', color: '#E4D2A3'}
    const {favpathname, todaypathname, icepathname, hotpathname, indexpathname} = props
    const pathname = [favpathname, todaypathname, icepathname, hotpathname, indexpathname]
    let pathname1 = null
    for(let i = 0; i<6; i++){
        if(Boolean(pathname[i]) === true ){
            pathname1 = pathname[i]
        }
    }
    console.log(pathname1);
    return(
        <div className="asideMenu main1">
            <aside className="webmenuaside">
                <div className="onlion">
                    <span>線上訂餐</span>
                </div>
                <ul>
                    <a href="/onlinemenu">
                        <li style={(pathname1==='/onlinemenu')?hoverCss:{}}>全部</li>
                    </a>
                    <a href="/MenuTypeToday">
                        <li style={(pathname1==='/MenuTypeToday')?hoverCss:{}}>每日精選咖啡</li>
                        </a>
                    <a href="/MenuTypeIce">
                        <li style={(pathname1==='/MenuTypeIce')?hoverCss:{}}>冰飲咖啡</li>
                        </a>
                    <a href="/MenuTypeHot">
                        <li style={(pathname1==='/MenuTypeHot')?hoverCss:{}}>熱飲咖啡</li>
                        </a>
                    <a href="/favorite">
                        <li style={(pathname1==='/favorite')?hoverCss:{}}>我的最愛</li>
                    </a>
                </ul>
            </aside>
            <aside className="mobileMenuAside">
                <div className="onlionMob">
                    <span>線上訂餐</span>
                </div>
                <ul>
                    <a href="/onlinemenu">
                        <li style={(pathname1==='/onlinemenu')?hoverCss:{}}>全部</li>
                    </a>
                    <a href="/MenuTypeToday">
                        <li style={(pathname1==='/MenuTypeToday')?hoverCss:{}}>每日精選咖啡</li>
                        </a>
                    <a href="/MenuTypeIce">
                        <li style={(pathname1==='/MenuTypeIce')?hoverCss:{}}>冰飲咖啡</li>
                        </a>
                    <a href="/MenuTypeHot">
                        <li style={(pathname1==='/MenuTypeHot')?hoverCss:{}}>熱飲咖啡</li>
                        </a>
                    <a href="/favorite">
                        <li style={(pathname1==='/favorite')?hoverCss:{}}>我的最愛</li>
                    </a>
                </ul>
            </aside>
        </div>
    )

}

export default MenuAside