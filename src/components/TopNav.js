import React from "react";

const TopNav = ({selected,callback,ChangeCompany})=>{
    return (
        <>
        <div className="select_option_mobile">
        <select onChange={(e)=>ChangeCompany(e.value)}>
            <option value="RELIANCE">Reliance</option>
            <option value="HDFCBANK">HDFC Bank</option>
            <option value="SBIN">SBI Bank</option>
            <option value="TATAMOTORS">Tata Motors</option>
        </select>
    </div>
        <div className="tab_parent">
            <div className="tab" aria-selected={selected==='1D'} onClick={()=>callback('1D')}>1D</div>
            <div className="tab" aria-selected={selected==='5D'} onClick={()=>callback('5D')}>5D</div>
            <div className="tab" aria-selected={selected==='1M'} onClick={()=>callback('1M')}>1M</div>
            <div className="tab" aria-selected={selected==='6M'} onClick={()=>callback('6M')}>6M</div>
            <div className="tab" aria-selected={selected==='1Y'} onClick={()=>callback('1Y')}>1Y</div>
            <div className="tab" aria-selected={selected==='5Y'} onClick={()=>callback('5Y')}>5Y</div>
            <div className="select_option">
                <select onChange={(e)=>ChangeCompany(e.value)}>
                    <option value="RELIANCE">Reliance</option>
                    <option value="HDFCBANK">HDFC Bank</option>
                    <option value="SBIN">SBI Bank</option>
                    <option value="TATAMOTORS">Tata Motors</option>
                </select>
            </div>
        </div>
        </>
    )
}

export default TopNav;
