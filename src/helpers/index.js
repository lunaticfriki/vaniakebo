export const checkBudget = (budget, rest) => {
  let color

  if (budget / 4 > rest) {
    color = '--main_pink'
  } else if (budget / 2 > rest) {
    color = '--main_yellow'
  } else {
    color = '--main_green'
  }

  return color
}
