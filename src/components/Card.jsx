import React from 'react'

function Card({children, id, draggable,className}) {
    const dragStart = e=>{
        const target = e.target;
        e.dataTransfer.setData('card_id',target.id);
        setTimeout(()=>{
            target.style.display = "none";
        },0)
    }
    const dragOver = e =>{
        e.stopPropagation();
    }
  return (
    <div
    className ={className}
    id={id}
    draggable={draggable}
    onDragStart = {dragStart}
    onDragOver = {dragOver}

    >{children}</div>
  )
}

export default Card