//complete the solve function below
function solve(meal_cost, tip_percent, tax_percent) {
    let totalCost = meal_cost * (1 + (tip_percent / 100) + (tax_percent / 100));

    console.log(Math.round(totalCost));
}