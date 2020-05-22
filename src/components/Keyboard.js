import React,{Component} from 'react'
import randomcolor from 'randomcolor'
import {onbtnClick} from '../redux'
import { connect } from 'react-redux'



 class Keyboard extends Component{
    constructor(){
        super()
        this.state={
            result:0,
            equ:""
        }
    }

    handleOnclick=(event)=>{

        let equ=this.state.equ
        const btn=event.target.name

      

            if(btn=== "="){

                try {
                    const evalResult = eval(equ);
                    const result = Number.isInteger(evalResult)? evalResult : evalResult.toFixed(2);
                    this.setState({result:result});
                  } catch (error) {
                    alert('Invalid Mathematical Equation');
                  }
                
    
    
    
    
            }else if(btn=="C"){
                this.setState({
                    equ:"",
                    result:0
                })              

            }else{
                equ=equ+btn

    
        this.setState({
            equ:equ
        })

        }

        


       



            

       

        
    }
    render(){
       
        var key=["7","8","9"," / ","4","5","6"," + ","1","2","3"," - ","0",".","="," * "]
        .map(val=><button style={{backgroundColor:randomcolor()}} name={val} key={val} onClick={this.handleOnclick}>{val}</button>)
        return(
            <div>
                <div className="numDisplay">
                <h2> {this.state.result}</h2>
                <h2> {this.state.equ}</h2>

            


                </div>

                <div  className="keyBox">

                    {key}
              
                </div>
                <div className="keyBox2">
                        <button name={"C"} onClick={this.handleOnclick}>C</button>
                    </div>


            </div>
        )
    }
}

const mapStateToProps=state=>{
    return{
        equ:state.equ,
        result:state.result
    }



}

const mapDispatchToProps=dispath=>{
    return{
        onbtnClick:()=>dispath(onbtnClick())
    }
}

export default connect(mapStateToProps,
    mapDispatchToProps)
    (Keyboard)





