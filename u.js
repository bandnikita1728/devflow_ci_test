function calculateDiscount(price, discountPercent) {
  return price - (price * discountPercent / 100);
}

function divide(a, b) {
  return a / b;
}

function getUser(users, id) {
  return users.find(u => u.id == id);
}

module.exports = { calculateDiscount, divide, getUser };
