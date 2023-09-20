import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import Chart from "@/components/barchart"
import Footer from "@/components/footer";
import {Link} from "react-router-dom";
export default  function Dashboard(){

    return (
        <div class="container">
            <Sidebar></Sidebar>
             <Header></Header>
            <Chart/>
            <Footer/>

        </div> );

}