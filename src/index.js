import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Cards";
import "./index.css";
import Mdata from './Mdata';

console.log(Mdata[1].mname);

ReactDOM.render( 
<>
{/* calling card component/function */}
<h1 className="heading_style">My Fav Netflix Series</h1>

{/* <Card 
imgsrc={Mdata[0].imgscr}
title={Mdata[0].title}
mname={Mdata[0].mname}
link={Mdata[0].links}
/> */}

{/* <Card
imgsrc={Mdata[1].imgscr}
title={Mdata[1].title}
mname={Mdata[1].mname}
link={Mdata[1].links}
/>

<Card 
imgsrc={Mdata[2].imgscr}
title={Mdata[2].title}
mname={Mdata[2].mname}
link={Mdata[2].links}
/>

<Card 
imgsrc={Mdata[3].imgscr}
title={Mdata[3].title}
mname={Mdata[3].mname}
link={Mdata[3].links}
/>

<Card 
imgsrc={Mdata[4].imgscr}
title={Mdata[4].title}
mname={Mdata[4].mname}
link={Mdata[4].links}
/> */}

{Mdata.map((val)=>{
 return( <Card 
imgsrc={val.imgscr}
title={val.title}
mname={val.mname}
link={val.links}
/>);
})}

</>,
  document.getElementById('root')
);




// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
