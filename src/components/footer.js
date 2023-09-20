
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Button, Modal,Tabs } from 'antd';
import {PlusCircleTwoTone} from "@ant-design/icons";
import {useState} from "react";

ChartJS.register(ArcElement, Tooltip, Legend);


export default function  Footer() {
    const options = {
        plugins: {
            legend: {
                position: 'right', // Display legend labels on the right side
                align: 'start', // Align legend labels to the start
            },
        },
    };
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: 'No of votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'red',
                    'blue',
                    'yellow',
                    'green',
                    'purple',
                    'orange',
                ],

                borderWidth: 1,
            },
        ],
    };
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const items = [
        {
            key: '1',
            label: 'Basic',
            children: <div>

            </div>,
        },
        {
            key: '2',
            label: 'Contact',
            children:<div>

            </div> ,
        },

    ];
    return (
        <div className="footer">
            <div className="doughnut" style={{display:"flex",justifyContent:"center"}}>
                <Doughnut data={data} options={options} />

            </div>
            <div className="profile">
             <Button type={"text"} shape={"circle"} size={"large"} onClick={showModal} icon={<PlusCircleTwoTone />}></Button>
                <div style={{fontFamily:"Calibri"}}>Add Profile</div>
                <Modal title="Add New Profile" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <Tabs defaultActiveKey="1" items={items}  />
                </Modal>
            </div>

        </div>
    )
}