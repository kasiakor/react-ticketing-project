// Verify Tax Id correctness
const isValidTaxId = (taxId) => {
  const taxIdArray = taxId.split("").map(Number);
  const lastDigit = taxIdArray.pop();
  let sum = 0;
  for (let i = 1; i <= taxIdArray.length; i++) {
    const digit = taxIdArray[taxIdArray.length - i];
    sum += digit * 2 ** i;
  }

  return sum % 11 === lastDigit % 10;
};

export default isValidTaxId;
