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
        
    
      //    if(data.length == 0){
      //        data =  prodData.filter((prod)=>{
      //           prod= prod.code
          
                
      //             return prod.indexOf(keyword) > -1; 
                
      //       })
      //    }

         
      //    const reversed = data.reverse();
      //  console.log(data);
       
      //    return reversed;
     
    
}

  onSearch(event) {
    const input = event.target.value
    console.log(input);
this.onSearchFunc(input)
    // this.setState({ searchInput: event.target.value });
    
  //  const getSearch = AppW.onSearch(event.target.value )
   
    // this.setState({activeDDown: "ALL CATEGORIES",dataBySearch: getSearch})
  }


  componentDidMount() {
  fetch('https://api.spacexdata.com/v3/launches')
  .then(response => response.json())
  .then(data => this.setState({data: data}) );
  
}
  render() {
    let { dataBySearch, data} = this.state;

    // console.log(data);
    
    return (
      
      <div>
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
      </div>
    )
  }
}

export default App