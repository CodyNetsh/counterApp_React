import React, { Component } from 'react';
// import Background from '../images/background_image.png';
import styles from '../components/mystyle.module.css';

var sectionStyle = {
    width: "100%",
    height: "400px",
    // backgroundImage: "url(" + { Background } + ")"
    backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };

class Counter extends Component {
    state = { 
        count:0,
        // address:{
        //     street:''
        // }
        //tags:['tag1','tag2','tag3'] non empty tags
        tags:[],
     }

     styles ={
          fontSize:'15px' ,
          fontWeight: 'bold',
          
    }
  
    constructor(){
        super();
        console.log("Constructor",this);
        //USE bind method
        this.handleIncrement =  this.handleIncrement.bind(this);
    }

renderTags(){
    if(this.state.tags.length === 0) 
    return <p>  There are no tags</p>
    return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
}
reset = product => {
    console.log(product);
    this.setState({count: 0});
  };
//array functions dont bind they inherit it
//===================================================================

handleIncrement = product => {
    console.log(product);
   this.setState({count: this.state.count + 1});
};
handleSubtract = product => {
    console.log(product);
   this.setState({count: this.state.count - 1});
//    if (this.state.count === 0 ? 'Zero' : this.state.count)
//    {
//        this.setState({count: 0 });
//    }
}
handleIncrement2 = product => {
    console.log(product);
   this.setState({count: this.state.count + 2});
};
handleSubtract2 = product => {
    console.log(product);
   this.setState({count: this.state.count - 2});
};
handleIncrement3 = product => {
    console.log(product);
   this.setState({count: this.state.count + 3});
};
handleSubtract3 = product => {
    console.log(product);
   this.setState({count: this.state.count - 3});
};
handleIncrement4 = product => {
    console.log(product);
   this.setState({count: this.state.count + 4});
};
handleSubtract4 = product => {
    console.log(product);
   this.setState({count: this.state.count - 4});
};
handleIncrement5 = product => {
    console.log(product);
   this.setState({count: this.state.count + 5});
};
handleSubtract5 = product => {
    console.log(product);
   this.setState({count: this.state.count - 5});
};
//====================================================================
doHandleIncrement = () => {
    this.handleIncrement({ id:1})
}

    render() { 
        // React.createElement('div')


        
// let classes = "badge m-2 badge-";
// classes += this.state.count === 0 ? "warning" : "primary";
//highlight the two on top ,then right click then click refactors
        // let classes = this.getBadgeClasses();

        return (
        <div>
             {/* <section style={ sectionStyle }> */}
            <br></br>
            {/* <span style={{fontSize: 20}} className="badge badge-primary m-2">{this.formatCounter()}</span>  */}
            {/*  you can add styling inside the curly braces like the above */}

           {/* <span style={this.styles} className="badge badge-primary m-2">{this.formatCounter()}</span> */}
           {/*next rendering by a render method 
         */}
         
    {/* =======================================================================================      */}
    {/* render a list dynamically */}
    <span  style={{fontSize: 20}} className={this.getBadgeClasses()}>{this.formatCounter()}</span>
  <br/>
           <button onClick={() => this.handleSubtract()} className="btn btn-Secondary btn-sm">- 1</button>
           <a style={{color:'black'}}>.          .</a>   
     <button onClick={() => this.handleIncrement()} className="btn btn-Secondary btn-sm">+1</button>
{/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
  <br/>
           <button onClick={() => this.handleSubtract2()} className="btn btn-Secondary btn-sm">- 2</button>
           <a style={{color:'black'}}>.          .</a>   
     <button onClick={() => this.handleIncrement2()} className="btn btn-Secondary btn-sm">+2</button>
{/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
  <br/>
           <button onClick={() => this.handleSubtract3()} className="btn btn-Secondary btn-sm">- 3</button>
           <a style={{color:'black'}}>.          .</a>   
     <button onClick={() => this.handleIncrement3()} className="btn btn-Secondary btn-sm">+3</button>
{/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
  <br/>
           <button onClick={() => this.handleSubtract4()} className="btn btn-Secondary btn-sm">- 4</button>
           <a style={{color:'black'}}>.          .</a>   
     <button onClick={() => this.handleIncrement4()} className="btn btn-Secondary btn-sm">+4</button>
{/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
  <br/>
           <button onClick={() => this.handleSubtract5()} className="btn btn-Secondary btn-sm">- 5</button>
           <a style={{color:'black'}}>.          .</a>   
     <button onClick={() => this.handleIncrement5()} className="btn btn-Secondary btn-sm">+5</button>
    {/* ===================================================================================== */}
    <br></br>
    <br></br>
    <a style={{color:'black'}}>.   </a><button onClick={() => this.reset()} className="btn btn-warning btn-wm">Reset</button>

     {/* <ul>
         <li>
{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
         </li>
     </ul> */}
     {/* </section> */}
        {/* {this.state.tags.legnth === 0 && "please create a new tag!"}
         {this.renderTags()} */}
         
       </div>
        
       );
       //or build a method for Tags then return it
    //    return <div>{this.renderTags()}</div>
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCounter(){
        const {count} = this.state;
 
        return  this.state.count === 0 ? 'Zero' : this.state.count ;
  }
}
 
export default Counter;