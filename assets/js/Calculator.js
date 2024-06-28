export default class Calculator { 
    constructor(previousOperandText,currentOperandText,dataContainer,history) {
        this.previousOperandText=previousOperandText
        this.currentOperandText=currentOperandText
        this.dataContainer=dataContainer
        this.history=history 
        this.clear()
    } 
    clear (){
        this.currentOperand = ""
        this.previousOperand = ""
        this.Operation = undefined 
        
    }
    appendNumber(number) { 
       if(this.currentOperand.includes(".") && number === ".") {
        return
       }
       this.currentOperand = `${this.currentOperand}${number.toString()}`
    }
     
    updateDisplay(){
       this.previousOperandText.innerText = `${this.formatDisplayNumber(this.previousOperand)} ${this.Operation || ""}`

       this.currentOperandText.innerText = this.formatDisplayNumber(this.currentOperand)
    }
    formatDisplayNumber(number){
       
        const stringNumber = number.toString()

        const integerDigits = parseFloat(stringNumber.split(".")[0])

        const decimalDigts = stringNumber.split("1")[1]

        let intergerDisplay

        if (isNaN(integerDigits)) {
            intergerDisplay = "" 
        }
            else{ 
                intergerDisplay = integerDigits.toLocaleString("en", {maximumFractionDigits:0})
            }

          if(decimalDigts != null){
            return `${intergerDisplay}.${decimalDigts}`
          }  

          else{ 
            return intergerDisplay
          }

    }

    deleteDigit(){
        this.currentOperand = this.currentOperand.toString().slice(0,-1)
    }
}