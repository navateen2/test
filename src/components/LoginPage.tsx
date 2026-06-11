import { useState } from "react"
// import Input from "./Input.tsx"
import "./kv.css"

import { Link, useNavigate } from "react-router"
import { useLoginMutation } from "../api-service/auth/login.api";
import { Navigate } from "react-router";



// const productNames: string[] = [
//   "Wireless Mouse",
//   "Mechanical Keyboard",
//   "USB-C Hub",
//   "Laptop Stand",
//   "Bluetooth Speaker",
//   "Noise Cancelling Headphones",
//   "Smart Watch",
//   "Fitness Tracker",
//   "Portable Charger",
//   "Wireless Earbuds",

//   "Gaming Mouse Pad",
//   "4K Monitor",
//   "Webcam HD",
//   "Microphone Pro",
//   "External SSD",
//   "Flash Drive 128GB",
//   "Router AX3000",
//   "Network Switch",
//   "HDMI Cable",
//   "USB-C Cable",

//   "Office Chair",
//   "Standing Desk",
//   "Desk Lamp",
//   "Bookshelf",
//   "Filing Cabinet",
//   "Whiteboard",
//   "Monitor Arm",
//   "Foot Rest",
//   "Ergonomic Cushion",
//   "Storage Drawer",

//   "Water Bottle",
//   "Coffee Mug",
//   "Travel Tumbler",
//   "Lunch Box",
//   "Food Container Set",
//   "Electric Kettle",
//   "Blender Max",
//   "Air Fryer",
//   "Rice Cooker",
//   "Toaster Oven",

//   "Vacuum Cleaner",
//   "Steam Iron",
//   "Air Purifier",
//   "Humidifier",
//   "Ceiling Fan",
//   "Table Fan",
//   "LED Bulb Pack",
//   "Smart Plug",
//   "Extension Cord",
//   "Power Strip",

//   "Running Shoes",
//   "Hiking Boots",
//   "Sports Socks",
//   "Yoga Mat",
//   "Resistance Bands",
//   "Dumbbell Set",
//   "Exercise Bike",
//   "Jump Rope",
//   "Gym Gloves",
//   "Water Resistant Backpack",

//   "Men's T-Shirt",
//   "Women's Hoodie",
//   "Denim Jacket",
//   "Formal Shirt",
//   "Casual Pants",
//   "Running Shorts",
//   "Winter Coat",
//   "Baseball Cap",
//   "Leather Belt",
//   "Cotton Scarf",

//   "Notebook A5",
//   "Gel Pen Set",
//   "Pencil Box",
//   "Highlighter Pack",
//   "Sticky Notes",
//   "Desk Organizer",
//   "Calculator Scientific",
//   "Planner 2026",
//   "Sketch Book",
//   "Marker Set",

//   "Smartphone X1",
//   "Tablet Pro",
//   "Laptop Ultra",
//   "Desktop Mini",
//   "Smart TV 55 Inch",
//   "Projector HD",
//   "Streaming Stick",
//   "E-Reader Plus",
//   "Drone Explorer",
//   "Action Camera",

//   "Car Phone Mount",
//   "Dash Camera",
//   "Tire Inflator",
//   "Car Vacuum",
//   "Bike Helmet",
//   "Camping Tent",
//   "Sleeping Bag",
//   "Travel Backpack",
//   "Flashlight LED",
//   "Multi Tool Kit"
// ];
function loginPage() {
    const navigate = useNavigate()
	const [login] = useLoginMutation();
    const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
    
const onLogin = async () => {
    const params =new  URLSearchParams({
        username: username,
        password: password
    });

    const response = await login(params);
    localStorage.setItem("token", response.data.access_token);

    navigate("/employee");

    };
 

    return<>
    <div className="container">
        <div className="left"><img src="/src/assets/Mask group.png" /></div>
        <div className="right">
            <div className="vbox">
                <div>
                    <img src="/src/assets/kv logo.png" alt="" />
                    <form className="vbox">
                         <input className="login-input" type="text" placeholder="Username" onChange={(e)=>setUsername(e.target.value)} data-testid="username-field" />
                         <span style={{ color: "red" }}>
                         {(username.includes('@') || username.length==0)?null:<>Email must contain @<br/></>}
                         {(username.length>=8 || username.length==0)?null:<>Email should have more than 8 characters</>}
                         </span>
                         <input className="login-input" type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} data-testid="password-field"/>   
                         
                         <input type="button" value="Login" className="button login-input" onClick={onLogin} data-testid="submit-button"/>                  
                         
                     </form>
                </div>
                
            </div>
        </div>
    </div>
    </>
    
    }
export default loginPage

/*
<input type="text"  onChange={(e) => {setWord(e.target.value); setResult(filt(e.target.value))}}/>
                    <>{result}</>
     let [word,setWord]=useState("")
    let [result,setResult]=useState<string[]>([])

    function filt(word:string){
        return productNames.filter((item)=>item.includes(word))

    }
*/

