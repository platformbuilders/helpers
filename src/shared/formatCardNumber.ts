export const formatCardNumber = (value: string): string => {
  const card = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
  const matches = card.match(/\d{4,16}/g);
  const match = (matches && matches[0]) || '';
  const parts = [];

  for (let i = 0; i < match.length; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  if (parts.length) {
    return parts.join(' ');
  }
  return value;
};
