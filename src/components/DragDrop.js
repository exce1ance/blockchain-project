import React, { useState } from "react";
import Picture from "./Picture"
import { useDrop } from 'react-dnd'

const PictureList = [{
    id: 1,
    url: "https://gateway.pinata.cloud/ipfs/QmZUpMDtg9t6FMe1RQs3xH2r1ZoVzJM3btyaUXwqusYPCo/1.png"
},
{
    id: 2,
    url: "https://gateway.pinata.cloud/ipfs/QmZUpMDtg9t6FMe1RQs3xH2r1ZoVzJM3btyaUXwqusYPCo/2.png"
},
{
    id: 3,
    url: "https://gateway.pinata.cloud/ipfs/QmZUpMDtg9t6FMe1RQs3xH2r1ZoVzJM3btyaUXwqusYPCo/3.png"
}]

function DragDrop() {

    const [board, setBoard] = useState([
        {
            id: 3,
            url: "https://gateway.pinata.cloud/ipfs/QmZUpMDtg9t6FMe1RQs3xH2r1ZoVzJM3btyaUXwqusYPCo/3.png"
        },
        {
            id: 2,
            url: "https://gateway.pinata.cloud/ipfs/QmZUpMDtg9t6FMe1RQs3xH2r1ZoVzJM3btyaUXwqusYPCo/2.png"
        }
    ]);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const addImageToBoard = (id) => {
        const pictureList = PictureList.filter((picture) => id === picture.id);
        setBoard((board) => [...board, pictureList[0]]);
    }
    return (
        <>
            <div className="Pictures">
                {PictureList.map((picture) => {
                    return <Picture url={picture.url} id={picture.id} />;
                })}
            </div>
            <div className="Board" ref={drop} >
                {board.map((picture) => {
                    return <Picture url={picture.url} id={picture.id} />;
                })}
            </div>
        </>
    )
}

export default DragDrop