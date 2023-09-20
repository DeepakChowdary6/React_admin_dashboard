import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import {
    GithubOutlined,
    LinkedinOutlined,
    FacebookOutlined,
    TwitterOutlined
} from "@ant-design/icons";
import {useRouter} from "next/router";
import {redirect} from "next/navigation";



export default function LoginPage(){
    const router = useRouter()
    return (<div className="login">
        <div className="line">
            <div className="main">
                   Board.
            </div>
            <div style={{position:"absolute",bottom:"10vh",width:"70vh"}}>
                <div style={{display:"flex",justifyContent:"space-evenly",alignContent:"center",paddingLeft:"4vh"}}>
                    <GithubOutlined id={"icon"} style={{color:"white",fontSize:"6vh"}} />
                        <LinkedinOutlined id={"icon"} style={{color:"white",fontSize:"6vh"}}/>
                        <TwitterOutlined id={"icon"} style={{color:"white",fontSize:"6vh"}}/>
                        <FacebookOutlined id={"icon"} style={{color:"white",fontSize:"6vh"}}/>

                </div>
            </div>
        </div>
        <div  style={{paddingTop:"30vh"}}>
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 600,
            }}
            initialValues={{
                remember: true,
            }}


            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary"  onClick={()=>{
                    router.push("/dashboard")}

                }>
                    Login
                </Button>

            </Form.Item>

        </Form>
    </div>
    </div>);


}