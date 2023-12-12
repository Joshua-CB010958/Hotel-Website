let size;
let cost;
let roomCost;
let extraNum = 0; // Initialize extraNum

const loadNum = 0.00;
const extra = 8000.00
const txtCost = document.getElementById("cost");
const nameInput = document.getElementById('nameInput');
const phoneInput = document.getElementById('numInput');
const emailInput = document.getElementById('emailInput');
const dateInput = document.getElementById('dateInput');
const dateInput2 = document.getElementById('dateInput2');
const roomInput = document.getElementById('size');
const adultInput = document.getElementById('adultInput');
const childInput = document.getElementById('childInput');
const extraInput1 = document.getElementById('extraInput');
const extraInput2 = document.getElementById('extraInput2');
const extraInput3 = document.getElementById('extraInput3');
const extraInput4 = document.getElementById('extraInput4');
const bookNowBtn = document.getElementById('bookNowBtn');
const bookNowConfirmation = document.getElementById('bookNowConfirmation');
const checkbox = document.querySelectorAll('.checkbox');
const promo = document.getElementById('promoCode');
const advDateInput = document.getElementById('advDateInput');
const advDateInput2 = document.getElementById('advDateInput2');
const advPackage = document.getElementById('package');
const advName = document.getElementById('advName');
const advNumber = document.getElementById('advNumInput');
const advEmail = document.getElementById('advEmailInput');


const output1 = document.getElementById('output1');
const output2 = document.getElementById('output2');
const output3 = document.getElementById('output3');
const output4 = document.getElementById('output4');
const output5 = document.getElementById('output5');
const output6 = document.getElementById('output6');
const output7 = document.getElementById('output7');
const output8 = document.getElementById('output8');
const output9 = document.getElementById('output9');
const output11 = document.getElementById('output11');
const output12 = document.getElementById('output12');
const output13 = document.getElementById('output13');
const output14 = document.getElementById('output14');
const output15 = document.getElementById('output15');
const output16 = document.getElementById('output16');
const output17 = document.getElementById('output17');
const output18 = document.getElementById('output18');
const output19 = document.getElementById('output19');
const output20 = document.getElementById('output20');
const totalCost = document.getElementById('totalCost');

// Adding listeners for Real-time Booking details updates
nameInput.addEventListener('input', updateOutput);
phoneInput.addEventListener('input', updateOutput);
emailInput.addEventListener('input', updateOutput);
dateInput.addEventListener('input', updateOutput);
dateInput2.addEventListener('input', updateOutput);
advName.addEventListener('input', updateOutput);
advNumber.addEventListener('input', updateOutput);
advEmail.addEventListener('input', updateOutput);
roomInput.addEventListener('input', updateOutput);
adultInput.addEventListener('input', updateOutput);
childInput.addEventListener('input', updateOutput);
advDateInput.addEventListener('input', updateOutput);
advDateInput2.addEventListener('input', updateOutput);
advPackage.addEventListener('input', updateOutput);
promo.addEventListener('input', updateOutput);

txtCost.innerText = `Rs ${loadNum.toFixed(2)}`;
totalCost.innerText = `Rs ${loadNum.toFixed(2)}`;

// Auto updating fields code
function updateOutput() {
  const name = nameInput.value;
  const Phone = phoneInput.value;
  const email = emailInput.value;
  const Name = advName.value;
  const Phonenumber = advNumber.value;
  const Email = advEmail.value;
  const checkInDate = dateInput.value;
  const checkOutDate = dateInput2.value;
  const room = roomInput.value;
  const package = advPackage.value;
  const adult = adultInput.value;
  const child = childInput.value;
  const checkIn = `${dateInput.value}`;
  const checkOut = `${dateInput2.value}`;
  const promoCode = `${promo.value}`;
  const roomFee = roomSize(room);
  const AdventurePackage = package;
  const extrafee = extraNum;
  const kidCharge = child * 5000.00;
  const numberOfNights = calculateNightsBetweenDates(checkIn, checkOut);
  output1.textContent = `${name}`;
  output2.textContent = `${Phone}`;
  output3.textContent = `${email}`;
  output4.textContent = `${checkInDate}`;
  output5.textContent = `${checkOutDate}`;
  output6.textContent = `${room}`;
  output7.textContent = `${adult}`;
  output8.textContent = `${child}`;
  txtCost.innerText = `Rs ${roomFee.toFixed(2)}`;
  //Adventure details
  const advCheckInDate = advDateInput.value;
  const advCheckOutDate = advDateInput2.value;
  output11.textContent = `${Name}`;
  output12.textContent = `${Phonenumber}`; 
  output13.textContent = `${Email}`;
  output14.textContent = `${advCheckInDate}`;
  output15.textContent = `${advCheckOutDate}`; 
  output16.textContent = `${AdventurePackage}`;
  //Total booking cost
  // To check if user has entered the promo code and auto update price accordingly
  total = extrafee * extra;
  if (promoCode === 'Promo123') {
    // Apply 5% discount
    OC = roomFee * numberOfNights + total + kidCharge;
    totOc = OC * 0.95;
    totalCost.innerHTML = `Rs ${totOc.toFixed(2)} --- %5 Deducted`;
  }
  else{
    totOc =  roomFee * numberOfNights + total + kidCharge;
    totalCost.innerHTML = `Rs ${totOc.toFixed(2)}`;
  }
  if (isNaN(checkIn) || isNaN(checkOut)) {
    const numberOfNights = calculateNightsBetweenDates(checkIn, checkOut);
    output9.textContent = `${numberOfNights}`;
  } else {
    const numberOfNights = calculateNightsBetweenDates(checkIn, checkOut);
    output9.textContent = numberOfNights > 0 ? `${numberOfNights}` : 'Invalid date range';
  }
}

// Function for calculating the nights of guest stay
function calculateNightsBetweenDates(checkInDate, checkOutDate) {
  const oneDay = 24 * 60 * 60 * 1000;
  const startDate = new Date(checkInDate);
  const endDate = new Date(checkOutDate);

  const differenceMs = Math.abs(endDate - startDate);

  const nights = Math.round(differenceMs / oneDay);

  return nights;
}



// Code for getting multiple checkbox values
function getCheckboxValues() {
  const checkboxes = document.querySelectorAll('.checkbox');
  const selectedValues = [];
  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      selectedValues.push(checkbox.value);
    }
});

  // Display selected checkbox values
  const output = document.getElementById('output10');

  if (selectedValues.length > 0) {
    output.textContent = selectedValues.join(', ');
    extraNum = selectedValues.length;
  } else {
    output.textContent = '';
    extraNum = 0;
  }

  updateOutput();
  return selectedValues;
}

// Adding event listeners to checkboxes
const checkboxes = document.querySelectorAll('.checkbox');
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', getCheckboxValues);
});

// Room fees calculation
function roomSize(element) {
  if (element == '') {
    roomCost = 0.00;
    size = '';
  } else if (element == 'Single Room') {
    roomCost = 25000.00;
    size = 'Single Room';
  } else if (element == 'Double Room') {
    roomCost = 35000.00;
    size = 'Double Room';
  } else {
    roomCost = 40000.00;
    size = 'Triple Room';
  }
  const cost = roomCost;
  return cost;
}

// Room fees calculation
function AdventurePackage(element) {
  if (element == '') {
    adventureCost = 0.00;
    choice = '';
  } else if (element == 'The Art of Tokyo Art') {
    adventureCost = 10000.00;
    choice = 'The Art of Tokyo Art';
  } else if (element == 'Treak to Mount Fuji') {
    adventureCost = 15000.00;
    choice = 'Treak to Mount Fuji';
  } else {
    adventureCost = 20000.00;
    choice = 'Rediscover Tokyo';
  }
  const advChoice = adventureCost;
  return advChoice;
}

document.addEventListener('DOMContentLoaded', function() {
  const bookNowBtn = document.getElementById('bookNowBtn');

  bookNowBtn.addEventListener('click', function() {
    const name = nameInput.value;
    const email = emailInput.value;
    const checkIn = dateInput.value;
    const checkOut = dateInput2.value;
    const room = roomInput.value;
    const adults = adultInput.value;
    const children = childInput.value;

    alert(`Your Reservation is confirmed!\n
      Name: ${name}\n
      Email: ${email}\n
      Check-in Date: ${checkIn}\n
      Check-out Date: ${checkOut}\n
      Room Type: ${room}\n
      Adults: ${adults}\n
      Children: ${children}\n
      Overall Room Booking Cost: Rs${totOc.toFixed(2)}`);
  });
});



// Function for calculate Adventure Cost.
function calculateAdventureCost() {
  const localAdultsCost = 5000;
  const localKidsCost = 2000;
  const foreignAdultsCost = 10000;
  const foreignKidsCost = 5000;
  const package = advPackage.value;
  const advTotalCost = AdventurePackage(package);

  const localAdults = parseInt(document.getElementById('localAdults').value) || 0;
  const perHour = parseInt(document.getElementById('perHour').value) || 0;
  const localKids = parseInt(document.getElementById('localKids').value) || 0;
  const foreignAdults = parseInt(document.getElementById('foreignAdults').value) || 0;
  const foreignKids = parseInt(document.getElementById('foreignKids').value) || 0;

  const advCost = (localAdults * perHour * localAdultsCost) + (localKids * localKidsCost) +
                  (foreignAdults * foreignAdultsCost) + (foreignKids * foreignKidsCost);

  const totalCost = advTotalCost + advCost;

  const totalCostDisplay = document.getElementById('totalAdventureCost');
  totalCostDisplay.textContent = `Rs ${totalCost}`;
  //Adventure details
  output17.textContent = `${localAdults}`;
  output18.textContent = `${localKids}`;
  output19.textContent = `${foreignAdults}`;
  output20.textContent = `${foreignKids}`;
}

const inputs = document.querySelectorAll('input[type="number"]');
inputs.forEach(input => {
  input.addEventListener('input', calculateAdventureCost);
});

// Buttons

// Confirmation button for adventure booking

const bookAdventureConfirmation = document.getElementById('bookAdventureConfirmation');

document.addEventListener('DOMContentLoaded', function() {
  const bookAdventureBtn = document.getElementById('bookAdventureBtn');

  bookAdventureBtn.addEventListener('click', function() {
    const name = advName.value;
    const email = advEmail.value;
    const checkIn = advDateInput.value;
    const checkOut = advDateInput2.value;
    const package = advPackage.value;
    alert(`Your Reservation is confirmed!\n
      Name: ${name}\n
      Email: ${email}\n
      Check-in Date: ${checkIn}\n
      Check-out Date: ${checkOut}\n
      Room Type: ${package}`);
  });
});

// Function to save order as a favorite in local storage
function addToFavorites(event) {
  event.preventDefault();
  const orderDetails = {
    name: nameInput.value,
    phone: phoneInput.value,
    email: emailInput.value,
    checkInDate: dateInput.value,
    checkOutDate: dateInput2.value,
    roomType: roomInput.value,
    numberOfAdults: adultInput.value,
    numberOfChildren: childInput.value, 
    totalBookingCost: totOc.toFixed(2),
    // Add other order details here
  };

  // Save order details to local storage as a favorite
  localStorage.setItem('favoriteOrder', JSON.stringify(orderDetails));
  alert('Order added to favorites!');
}

// Function to retrieve favorite order from local storage
function getFavoriteOrder() {
  const storedOrder = localStorage.getItem('favoriteOrder');
  return storedOrder ? JSON.parse(storedOrder) : null;
}

// Function to calculate and display loyalty points
function checkLoyalty(event) {
  event.preventDefault();
  const storedOrder = getFavoriteOrder();
  let loyaltyPoints = 0;

  if (storedOrder) {
    const numberOfNights = calculateNightsBetweenDates(storedOrder.checkInDate, storedOrder.checkOutDate);

    if (numberOfNights > 3) {
      loyaltyPoints = numberOfNights * 20;
      storedOrder.loyaltyPoints = loyaltyPoints; // Add loyalty points to the stored order
      localStorage.setItem('favoriteOrder', JSON.stringify(storedOrder)); // Update stored order in local storage
    }
  }

  // Display loyalty points to the user
  alert(`You have ${loyaltyPoints} loyalty points.`);
}

function displayFavoriteOrder(event) {
  event.preventDefault();
  const storedOrder = getFavoriteOrder();
  if (storedOrder) {
    let orderDetails = 'Your Favorite Order Details are: \n';
    for (const key in storedOrder) {
      if (Object.prototype.hasOwnProperty.call(storedOrder, key)) {
        orderDetails += `${key}: ${storedOrder[key]}\n`;
      }
    }

    alert(orderDetails);
  } else {
    alert('No favorite order found!');
  }
}


// Button to display favorite order
const displayFavoriteBtn = document.getElementById('printLocal');
displayFavoriteBtn.addEventListener('click', displayFavoriteOrder);


// Button to add the order to favorites
const addToFavoritesBtn = document.getElementById('addToFavoritesBtn');
addToFavoritesBtn.addEventListener('click', addToFavorites);

// Button to check loyalty points
const checkLoyaltyBtn = document.getElementById('checkLoyaltyBtn');
checkLoyaltyBtn.addEventListener('click', checkLoyalty);



