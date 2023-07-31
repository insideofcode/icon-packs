
fetch('https://raw.githubusercontent.com/insideofcode/icons-pack/main/icons.map.json').then(res => res.json()).then(res => {

    let html = '';

    for (let group of res) {

        let iconItems = '';

        for (let icon of group.items) {

            iconItems += `
            <div class="col-md-2 col-sm-3 col-lg-1">
                <div class="text-center border p-3 rounded-4 shadow-sm">
                    <svg width="50" class="this-is-icon" height="50" style="color: #FCD435">
                        <use xlink:href="${icon.path}" />
                    </svg>

                    <span class="d-block mt-2">${icon.name}</span>
                </div>
            </div>
            `;

        }


        html += `
            <h2>${group.name}</h2>
            <p>${group.description}</p>

            <div class="row g-2">${iconItems}</div>
        `;
    }


    document.getElementById('icons-section').innerHTML = html;
})


const colorInput = document.getElementById('color');

// Event listener for modern browsers (input event)
colorInput.addEventListener('input', function () {
    // Access the selected color using 'value' property
    const selectedColor = colorInput.value;
    changeColorSVG(selectedColor);
    console.log('Selected color (input event):', selectedColor);
});

// Event listener for older browsers (change event)
colorInput.addEventListener('change', function () {
    // Access the selected color using 'value' property
    const selectedColor = colorInput.value;
    changeColorSVG(selectedColor);
    console.log('Selected color (change event):', selectedColor);
});

function changeColorSVG(color) {
    document.querySelectorAll('.this-is-icon').forEach(el => {
        el.setAttribute('style', `color: ${color}`)
    })
}
