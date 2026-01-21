// S1_IF_01 - Shipping cost
// weight-based pricing with member discount

function shippingCost(weightKg, isMember) {
  let cost;

  if (weightKg < 1) {
    cost = 10;
  } else if (weightKg <= 5) {
    cost = 20;
  } else {
    cost = 30;
  }

  // members get 20% off
  if (isMember) {
    cost = cost * 0.8;
  }

  return cost;
}

// tests
console.log("shippingCost(0.5, false):", shippingCost(0.5, false));  // 10
console.log("shippingCost(0.5, true):", shippingCost(0.5, true));    // 8
console.log("shippingCost(3, false):", shippingCost(3, false));      // 20
console.log("shippingCost(3, true):", shippingCost(3, true));        // 16
console.log("shippingCost(10, false):", shippingCost(10, false));    // 30
console.log("shippingCost(10, true):", shippingCost(10, true));      // 24
