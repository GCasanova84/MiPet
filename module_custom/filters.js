export const formatMoney = (value) => {
  const formatter = new Intl.NumberFormat('cl',
    {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0
    })
  return formatter.format(parseInt(value))
}

export const formatNumber = (value) => {
  const formatter = new Intl.NumberFormat('cl')
  return formatter.format(parseInt(value))
}
