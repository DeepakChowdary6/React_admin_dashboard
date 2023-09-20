import {faBell} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faThumbsUp,faTags,faUsers,faDollarSign} from "@fortawesome/free-solid-svg-icons";

import {Card,Space,Statistic} from "antd";
export default function Header(){
    return (
        <div className="hdr">

         <div className="header">

            <div className="left__content">{"Dashboard"}</div>

            <div className="right__content">
                <input type="search" placeholder="Search..."/>
                <button type="submit">Search</button>

                <FontAwesomeIcon icon={faBell} />
              <img src=''/>
            </div>

         </div>

            <div className="card_container">

                  <div className="card" >
                      <div>
                          <div style={{width:40,height:40,backgroundColor:"green", borderRadius:"50%",float:"left"}}>
                              <FontAwesomeIcon icon={faTags} style={{
                              margin:10  ,fontSize: 20}}/>
                          </div>
                          <h>{"Transactions"}</h>
                      </div>
                      <div>
                          {"2304"}
                      </div>
                  </div>

                <div className="card">
                    <div>
                    <div style={{width:40,height:40,backgroundColor:"orange", borderRadius:"50%",float:"left"}}>
                    <FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: 20, margin: 10}}/>
                    </div>
                    <h>{"Likes"}</h>
                </div>
                <div>
                    {"304"}
                </div>
                </div>

                <div className="card">
                    <div>
                    <div style={{width:50,height:40,backgroundColor:"blue", borderRadius:"50%",float:"left"}}>

                    <FontAwesomeIcon icon={faUsers} style={{fontSize: 20, margin: 10}} />
                        </div>
                    <h>{"Users"}</h>
                </div>
                    <div>
                        {"544"}
                    </div>

                </div>

                <div className="card">
                    <div>
                    <div style={{width:35,height:40,backgroundColor:"red", borderRadius:"50%",float:"left"}}>
                    <FontAwesomeIcon icon={faDollarSign} style={{ fontSize: 20, margin: 10}}/>
                    </div>
                    <h>{"Money"}</h>
                </div>
                    <div>
                        {"34,45,980"}
                    </div>
                </div>

            </div>


        </div>
    )
}