// Define the OrderStatusInfo object type
const OrderStatusInfo = {
    label: "",
    value: "",
    progressValue: 0,
  };
  
  // Define the ORDER_STATUS array
  const ORDER_STATUS = [
    { label: "Placed", value: "placed", progressValue: 0 },
    { label: "Awaiting Restaurant Confirmation", value: "paid", progressValue: 25 },
    { label: "In Progress", value: "inProgress", progressValue: 50 },
    { label: "Out for Delivery", value: "outForDelivery", progressValue: 75 },
    { label: "Delivered", value: "delivered", progressValue: 100 },
  ];
  
  // Export the OrderStatusInfo object
  module.exports.OrderStatusInfo = OrderStatusInfo;
  
  // Export the ORDER_STATUS array
  module.exports.ORDER_STATUS = ORDER_STATUS;
  
  