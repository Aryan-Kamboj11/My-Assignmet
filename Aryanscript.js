
// // Arrow icons Javascript

let arrowDown=document.querySelector('#fa1');
let arrowDown1=document.querySelector('#fa2');
let arrowDown2=document.querySelector('#fa3');
arrowDown.addEventListener('click',()=>{
    const firstYear=document.getElementById('firstYear')
    const secondYear=document.getElementById('secondYear')
    firstYear.style.visibility="visible";
    secondYear.style.visibility="visible"
})
arrowDown1.addEventListener('click',()=>{
    const firstYear=document.getElementById('firstyearSubs')
    firstYear.style.visibility="visible";
})
arrowDown2.addEventListener('click',()=>{
    const secondYear=document.getElementById('secondyearsubs')
    secondYear.style.visibility="visible"
})

const getCode1=document.getElementById('para-1')
const getCode2=document.getElementById('para-2')
const getCode3=document.getElementById('para-3')
const getCode4=document.getElementById('para-4')
const getCode5=document.getElementById('para-5')
const getCode6=document.getElementById('para-6')
const getCode7=document.getElementById('para-7')
const getCode8=document.getElementById('para-8')
const getCode9=document.getElementById('para-9')
const getCode10=document.getElementById('para-10')
const getCode11=document.getElementById('para-11')
const getCode12=document.getElementById('para-12')
const getCode13=document.getElementById('para-13')
const getCode14=document.getElementById('para-14')
const getCode15=document.getElementById('para-15')
const getCode16=document.getElementById('para-16')
const visible=()=>{
    getCode1.style.visibility="visible"
}
const visible1=()=>{

    getCode2.style.visibility="visible"
}
const visible2=()=>{
    getCode3.style.visibility="visible"
    
}
const visible3=()=>{
    getCode4.style.visibility="visible"
    
}
const visible4=()=>{
    getCode5.style.visibility="visible"
    
}
const visible5=()=>{
    getCode6.style.visibility="visible"

}
const visible6=()=>{
    getCode7.style.visibility="visible"

}
const visible7=()=>{

    getCode8.style.visibility="visible"
}
const visible8=()=>{
    getCode9.style.visibility="visible"

}
const visible9=()=>{
    getCode10.style.visibility="visible"

}
const visible10=()=>{
    getCode11.style.visibility="visible"

}
const visible11=()=>{
    getCode12.style.visibility="visible"

}
const visible12=()=>{
    getCode13.style.visibility="visible"
    
}
const visible13=()=>{
    getCode14.style.visibility="visible"

}
const visible14=()=>{

    getCode15.style.visibility="visible"
}
const visible15=()=>{
    getCode16.style.visibility="visible"

}
    





///fun with string form javascript.


const getInput1=document.getElementById('string-1');
const getResult=document.getElementById('result');
const submitButton=document.getElementById('submit-1');
const getInput2=document.getElementById('string-2');
const clearButton=document.getElementById('submit-2');
const okButton=document.getElementById('submit');



okButton.addEventListener('click',()=>{
    const getOptions=document.getElementById('options').value;
    const getLabel=document.getElementById('label1');
    if(getOptions=="Compare two Strings"){
        getInput2.style.visibility="visible";
        getLabel.style.visibility="visible";
    }else{
        getInput2.style.visibility="hidden";
        getLabel.style.visibility="hidden";
    }
})


submitButton.addEventListener('click',()=>{
    const valueOne=getInput1.value;
    const valueTwo=getInput2.value;
    const getOptions=document.getElementById('options').value;
    if((valueOne=="" && valueTwo=="")){
        alert('Please enter valid input')
    }
    if(getOptions=="Compare two Strings"){
        if(getInput2.style.visibility=="visible"&&(valueOne!=""&&valueTwo!="")){
            if(valueOne==valueTwo){
                getResult.innerHTML='Both Are Same'
            }else{
                getResult.innerHTML='Both Are Different'
            }
        }
    }else{
        var reverse=""
        for(var i=valueOne.length-1;i>=0;i--){
            reverse+=valueOne[i]
        }
        getResult.innerHTML=`${reverse}`
     }       
});


clearButton.addEventListener('click',()=>{
   document.getElementById('form').reset();
   getResult.innerHTML=''
})




// // Fun with number form javscript.

const getZodiacform=document.getElementById('zodiac-btn')

const checkZodiacSign=document.getElementById('zodiac-check')
const showResult=document.getElementById('zodiac-result')
const clearZodiac=document.getElementById('zodiac-clear')

const getInputform=document.getElementById('zodiac-form')
showResult.style.fontSize="2.3rem"
getZodiacform.addEventListener('click',()=>{
    getInputform.style.visibility="visible"
})

checkZodiacSign.addEventListener('click',()=>{
    const getInputName=document.getElementById('name').value
    const getInputDate=document.getElementById('day').value
    const getInputMonth=document.getElementById('month').value
    var signs=['', 
    'Capricorn',
    'Aquarius',
    'Pisces', 
    'Aries',
   'Taurus',
   'Gemini',
    'Cancer',
    'Leo', 
    'Virgo',
   'Libra',
   'Scorpio', 
   'Sagittarius',
   'Capricorn'
    ]
    var End=[
        "",
        19,
        18,
        20,
        19,
        20,
        20,
        22,
        22,
        22,
        22,
        21,
        21,
        19,
    ]
    if(getInputName==""){
        alert('Enter Your Name')
    }else if(getInputDate>signs[getInputMonth]){
        showResult.innerHTML=`${signs[getInputMonth+1]}`
    }else{
        showResult.innerHTML=`${signs[getInputMonth]}`
    }

})

clearZodiac.addEventListener('click',()=>{
    showResult.innerHTML=""
    document.getElementById('zodiac-form').reset();
})

