import React, { Fragment, useState } from 'react';
import {Collapse ,Checkbox} from 'antd';
const { Panel } = Collapse;


const CheckBoxComponent = (props)=>{

    const [Checked,setChekced] = useState([]);

    const handleToggle =(value)=>{
        //누른 것의 인덱스 구하기
        const currentIndex = Checked.indexOf(value);
        const newChecked = [...Checked];
        //전체 체크된 스테이트에서 현재 누른 체크박스가 있는지 확인
        if (currentIndex===-1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex,1);
        }
        setChekced([...newChecked]);
        props.handleFilters(newChecked);
    }
    const renderCheckBox = ()=>props.list && props.list.map((item,index)=>(
        <Checkbox key={index} checked={Checked.indexOf(item._id) === -1 ? false : true} onChange={()=>handleToggle(item._id)}>
            <span>{item.name}</span>
        </Checkbox>
    ))
    return (
        <div>
            <Collapse>
                <Panel header='떠나고 싶은 지역'>
                    {renderCheckBox()}
                </Panel>
            </Collapse >
        </div>
    )
}


export default CheckBoxComponent;