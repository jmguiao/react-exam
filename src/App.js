// import logo from './logo.svg';
// // import './App.css';

// function getFetch() {
//   fetch('https://api.spacexdata.com/v3/launches')
//   .then(response => response.json())
//   .then(data => console.log(data));
  
// }

// function App() {
//   return (
//     <div onClick={()=>getFetch()} className="App">
//       <header className="App-header">
//         Tao exam
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props);

      // RecW.setWatcher(this, "TRANS");
    this.state = {
   
        transTab: 0,
        data: null,
        dataBySearch: null,
        skipBy: 0

      
 
    };
   this.onSearch = this.onSearch.bind(this);




  }

  onSearchFunc(input){
    const prodData = this.state.data
    // console.log(prodData);
    console.log(prodData);
    
 
        const keyword = input.toLowerCase();
       let data =  prodData.filter((prod)=>{
            prod= prod.mission_name.toLowerCase();
       
            
              return prod.indexOf(keyword) > -1; 
            
        })
        this.setState({dataBySearch:data})
        
    
    
     
    
}

handleScroll = (e) => {
       
  console.log("on scrol");
  
  const bottom = Math.round(e.target.scrollHeight - e.target.scrollTop) == e.target.clientHeight;
// alert(e.target.scrollHeight)
 
  // let setSkipBy = this.state.skipBy
  // setSkipBy++

 console.log(bottom);



  if (bottom){
console.log("on scroll bottom");


      //  RecW.getRData(setSkipBy,this.state.showTrans);
      //  this.setState({skipBy:setSkipBy})


 
  }
}

  onSearch(event) {
    const input = event.target.value
    console.log(input);
this.onSearchFunc(input)
    // this.setState({ searchInput: event.target.value });
    
  //  const getSearch = AppW.onSearch(event.target.value )
   
    // this.setState({activeDDown: "ALL CATEGORIES",dataBySearch: getSearch})
  }

  getRData =async(setSkipBy,showTrans)=>{

    // const rData = async()=>{
    //     const userId = localStorage.getItem("Meteor.userId");


    //     return new Promise((resolve, reject) => {
    //         this.callFunction("getReceiptData", userId,setSkipBy*10, showTrans,(err, res)=> {
    //             if (err) {
                   
    //                 reject("Something went wrong");
    //             }
    //             resolve(res);
                


    //         });
    //     });
    };

  componentDidMount() {
  fetch('https://api.spacexdata.com/v3/launches')
  .then(response => response.json())
  .then(data => this.setState({data: data}) );
  window.onscroll=function(){
  // const sidebar = document.getElementById('transList');
  // const e = document.getElementById('transList');


  //need to log on sroll bottom 
    // console.log(e.scrollHeight);
    // console.log(e.scrollTop);
    // console.log(e.clientHeight);
    // const bottom  = e.scrollHeight - e.scrollTop === e.clientHeight
      // const bottom = Math.round(e.target.scrollHeight - e.target.scrollTop) === e.target.clientHeight;
      // console.log(bottom);
     
 }

 
}
  render() {
    let { dataBySearch, data} = this.state;
    const style = {
      width: '1000px',
      height: '500px',
      overflowY: 'auto'
    }
    // console.log(data);
    
    return (
      
      <div    
      // style={{background: "red",height: "100"}}
      
      
      >
   
            
      
              <div>search by mission name</div>
              <input
                  autoFocus
                  onChange={this.onSearch}
                  
                  // className="bg-transparent text-white p-2.5 z-20 text-md  outline-0  "
                

                  />
                     {dataBySearch
                    ? dataBySearch.map((data, key) => (
          
                  <div key={key} >
                 
                      <span>{data.mission_name}</span>
                           
                </div>
         
                    
                
                
              )) : null}


              {/* lazy loading */}

              <div id='transList'
              style={style}
                                  // style={{background: "red", "margin-bottom": "100px"}}

                                          onScroll={this.handleScroll}>
              {data
                                        ? data.map((data, key) => (
                                          
                                          <div 
                                           key={key}>
                                                    {key <= 18 &&
                                                          <div key={key} >
                      
                                                          <h1>{data.mission_name}</h1>
                                                                
                                                    </div>
                                                    }
                                                    
                                                
                                          </div>
                                         
                    
                    )) 
                    
                  :null
                    
                 
                    } 
      </div>
      </div>
    )
  }
}

export default App