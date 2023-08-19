function calculateTriangleArea() {
    // getting triangle base
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    console.log(base);

    // getting triangle hight
    const hightField = document.getElementById('triagnle-hight');
    const hightValueText = hightField.value;
    const hight = parseFloat(hightValueText);
    console.log(hight);

    if(isNaN(base)|| isNaN(hight))
    {
        alert('not a number');
        return;
    }

    // calculation
    const area = 0.5 * base * hight;
    console.log(area);

    // show triangle area
    const areaSpan = document.getElementById('triagnle-area');
    areaSpan.innerText = area;
    addToCalculationEntry('Triangle',area)
}

function calculateRectangleArea() {
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);


    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    console.log(length);

    // calculation
    const area = width * length;

    // show rectangle area

    const areaSpan = document.getElementById('rectangle-area');
    areaSpan.innerText = area;
    addToCalculationEntry('Rectangle',area)
    

}

// reusable function
function calculateParallelogramArea() {
    const base = getInputValue('parallelogram-base');
    // console.log(typeof base);


    const hight = getInputValue('parallelogram-hight');
    // console.log(hight)

    const area = base * hight;

    setElementInnerText('parallelogram-area', area);
    
    // add to calculation entry
    addToCalculationEntry('parallelogram',area)
}

function calculateellipseArea() {
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');
    const area = Math.PI * majorRadius * minorRadius;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText('ellipse-area',areaTwoDecimal);
    addToCalculationEntry('ellipse',areaTwoDecimal);
}


// reusable input value
function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;

}

// reusable set span
function setElementInnerText(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;

}

// add to calculation entry
function addToCalculationEntry(areaType,area){
    console.log(areaType+' '+area);
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;
    const p = document.createElement('p');

    p.classList.add('mt-4')
    p.innerHTML = `${count+1}. ${areaType} ${area} cm <sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`;

    calculationEntry.appendChild(p);

}