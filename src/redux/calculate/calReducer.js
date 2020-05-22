import React from 'react'
import { BTN_CLICK } from './calTypes'

const initialState={
    result:0,
    equ:''
}

const calReducer=(state=initialState,action)=> {
   switch(action.type){
       case BTN_CLICK:{
           let equ=state.equ
           let btn=event.target.name

           if(btn==="="){
               try{

                let evalResult=eval(equ)
                let result=Number.isInteger(evalResult)?evalResult:evalResult.toFixed(2)
                state.result=result
                return{
                    ...state,
                    result:state.result
                
                }


                

               }catch (error) {
                alert('Invalid Mathematical Equation');
              }
            
           }else{
               equ=equ+btn

               return{
                   e:state.equ=equ
               }
               
           }
           

       }

       default:return "on im here"

   }
}

export default calReducer
