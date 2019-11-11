import React, { Component } from 'react';
import Counter from './counter';
import styles from '../components/mystyle.module.css';

class Counted extends Component {
    state = { 
        counted:[
            {id:1, value:0},
            {id:2, value:0},
            // {id:3, value:0},
            // {id:4, value:0},
            // {id:5, value:0},

        ],  
            //   imageUrl:'https://picsum.photos/200',
            imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXPmCN4bUwIfl10AaCnYsc3GBgQoBB3DvBDnK__CRaLaTX2_-k&s'

     }
    render() { 
        return ( 
            <div >
   
                          
                                
                             <section className={styles.styleImg}>
                             {/* <img  src={this.state.imageUrl} >
</img> */}
<h2> <a style={{color:'red',textAlign:'top'}}>Team A       </a>
<a style={{color:'blue'}}>Team  B</a>  </h2> 

<section className={styles.sectionStyle}>

              {/* {this.state.counted.map(counter => <Counter/>)} */}
             
             <Counter/> 
          
             <a style={{color:'blue'}}>.          .</a>   
              <Counter/>
               </section>
               </section> 
            </div>
         );
    }
}
 
export default Counted;