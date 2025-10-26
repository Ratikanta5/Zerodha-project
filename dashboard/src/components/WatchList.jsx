import {Tooltip, Grow} from "@mui/material";
import { useState } from "react";
import { watchlist } from "../data/data";
import {BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz, Spa} from "@mui/icons-material";

 
export default function WatchList()  {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock , index)=>{
         return(
           <WatchlistItem stock = {stock} key = {index} />
         )
        })}
      </ul>
    </div>
  );
};



export  function WatchlistItem({stock}) {
    const [showWatchListActions, setShowWatchListActions] = useState(false);

    const handleMouseEnter = (e) =>{
      setShowWatchListActions(true);
    }


    const handleMouseExit = (e) =>{
      setShowWatchListActions(false);
    }


    return (
      <li onMouseEnter={handleMouseEnter} onMouseLeave = {handleMouseExit}>
        <div className="item">
            <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
            <div className="itemInfo">
              <span className="percent">{stock.percent}</span>
              {stock.isDown ? (<KeyboardArrowDown className="down"/>) : (<KeyboardArrowUp className="down"/>)}
              <span className="price">{stock.price}</span>
            </div>
        </div>

        {showWatchListActions && <WatchListActions uid={stock.name}/>}

      </li>
    )
}



export function WatchListActions({uid}){
  return <span className="actions">
      <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
        <button className="buy">Buy</button>
      </Tooltip> &nbsp;&nbsp;


      <Tooltip title="Sell (B)" placement="top" arrow TransitionComponent={Grow}>
        <button className="sell">Sell</button>
      </Tooltip> &nbsp;&nbsp;



      <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
        <button className="action"><BarChartOutlined className="icon"/></button>
      </Tooltip> &nbsp;&nbsp;



            <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
         <button className="action"><MoreHoriz className="icon"/></button>
      </Tooltip>


    </span>

}