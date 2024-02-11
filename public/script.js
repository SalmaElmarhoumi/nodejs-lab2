const getCarsButton = document.getElementById('getCars');
const addCarButton = document.getElementById('addCar');
const deleteCarButton = document.getElementById('deleteCar');
const outputDiv = document.getElementById('output');

getCarsButton.addEventListener('click', getCars);
addCarButton.addEventListener('click', addCar);
deleteCarButton.addEventListener('click', deleteCar);

function getCars() {
    fetch('/cars')
        .then(response => response.json())
        .then(cars => {
            outputDiv.innerHTML = JSON.stringify(cars);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function addCar() {
    const newCar = { model: 'Nissan Altima', licenseNumber: 'DEF456' };

    fetch('/cars', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCar)
    })
    .then(response => response.json())
    .then(car => {
        outputDiv.innerHTML = `New car added: ${JSON.stringify(car)}`;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function deleteCar() {
    const carId = 1; 

    fetch(`/cars/${carId}`, {
        method: 'DELETE'
    })
    .then(() => {
        outputDiv.innerHTML = 'Car deleted successfully';
    })
    .catch(error => {
        console.error('Error:', error);
    });
}