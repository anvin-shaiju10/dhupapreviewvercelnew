
import { CURRENCY } from '../constants';

export const formatPrice = (price: number): string => {
  return `${CURRENCY} ${price.toLocaleString('en-IN')}`;
};

export const generateWhatsAppLink = (phone: string, text: string): string => {
  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${phone}?text=${encodedText}`;
};

export const generateCartMessage = (cartItems: any[], total: number): string => {
  let message = "Namaste Dhupa, I would like to place an order for the following items:\n\n";
  
  cartItems.forEach((item, index) => {
    message += `${index + 1}. ${item.title} (SKU: ${item.sku})\n`;
    message += `   Size: ${item.selectedSize} | Qty: ${item.quantity}\n`;
    message += `   Price: ${formatPrice(item.price)}\n\n`;
  });

  message += `Total Estimated Value: ${formatPrice(total)}\n`;
  message += `\nPlease confirm availability and shipping details.`;
  
  return message;
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
