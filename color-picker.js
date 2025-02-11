const colorPicker = document.getElementById('colorPicker');
const heading = document.getElementById('heading');
const paragraph = document.getElementById('paragraph');

colorPicker.addEventListener('input', (event) => {
    // Get the selected color
    const selectedColor = event.target.value;

    // Apply the color to the heading and paragraph
    heading.style.color = selectedColor;
    paragraph.style.color = selectedColor;
});
