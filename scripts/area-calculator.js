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

    // calculation
    const area = 0.5 * base * hight;
    console.log(area);

    // show triangle area
    const areaSpan = document.getElementById('triagnle-area');
    areaSpan.innerText = area;
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

}

// reusable function
function calculateParallelogramArea() {
    const base = getInputValue('parallelogram-base');
    // console.log(typeof base);


    const hight = getInputValue('parallelogram-hight');
    // console.log(hight)

    const area = base * hight;

    setElementInnerText('parallelogram-area', area)
}

function calculateellipseArea() {
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');
    const area = 3.1416 * majorRadius * minorRadius;
    setElementInnerText('ellipse-area',area);
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