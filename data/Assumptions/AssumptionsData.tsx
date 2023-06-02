import { AssumptionCostData } from "./AssumptionCostData";
import { AssumptionExpensesData } from "./AssumptionExpensesData";
import { AssumptionIncomeData } from "./AssumptionIncomeData";

const topics: any[] = [];

// งบกระแสเงินสด :  statement
topics.push({
    name: `รายได้`,
    items: AssumptionIncomeData,
});

topics.push({
    name: `ค่าใช้จ่าย`,
    items: AssumptionExpensesData,
});

topics.push({
    name: `ต้นทุน`,
    items: AssumptionCostData,
});


export const AssumptionData = topics;